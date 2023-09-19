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
exports.CreateLeadUseCase = void 0;
class CreateLeadUseCase {
    constructor(leadRepository) {
        this.leadRepository = leadRepository;
    }
    run(name, lastName, tutor, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdLead = yield this.leadRepository.createLead(name, lastName, tutor, phone);
                return createdLead;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateLeadUseCase = CreateLeadUseCase;
