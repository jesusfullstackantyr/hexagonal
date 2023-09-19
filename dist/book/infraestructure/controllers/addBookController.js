"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBookController = void 0;
class AddBookController {
    constructor(addBookUseCase) {
        this.addBookUseCase = addBookUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title } = req.body;
                let createdBook = yield this.addBookUseCase.run(title);
                if (createdBook) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            id: createdBook.id,
                            title: createdBook.title
                        },
                        message: "El libro ha sido creado exitosamente"
                    });
                }
                res.status(400).send({
                    status: "error",
                    data: [],
                    //TODO: implementar validaciones
                    validations: [],
                    message: "Error al crear un libro nuevo, intentalo mas tarde"
                });
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.AddBookController = AddBookController;
