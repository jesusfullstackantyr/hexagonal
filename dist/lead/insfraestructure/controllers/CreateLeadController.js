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
exports.CreateLeadController = void 0;
class CreateLeadController {
    constructor(createLeadUseCase) {
        this.createLeadUseCase = createLeadUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, last_name, tutor, phone } = req.body;
                const createdLead = yield this.createLeadUseCase.run(name, last_name, tutor, phone);
                if (createdLead) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            id: createdLead.id,
                            full_name: createdLead.name + " " + createdLead.lastName,
                            name: createdLead.name,
                            last_name: createdLead.lastName,
                            tutor: createdLead.tutor,
                            contact_phone: createdLead.phone
                        },
                        message: "El prospecto ha sido creado exitosamente"
                    });
                }
                res.status(400).send({
                    status: "error",
                    data: [],
                    //TODO: implementar validaciones
                    validations: [],
                    message: "Error al crear un cliente prospecto, intentalo mas tarde"
                });
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateLeadController = CreateLeadController;
