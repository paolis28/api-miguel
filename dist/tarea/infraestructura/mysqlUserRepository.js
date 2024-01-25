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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlUserRepository = void 0;
const tarea_1 = require("../dominio/tarea");
const tarea_model_1 = __importDefault(require("./model/tarea.model"));
class mysqlUserRepository {
    addTarea(id, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tareaRegistrada = yield tarea_model_1.default.create({ id, nombre });
                return new tarea_1.Tarea(tareaRegistrada.id, tareaRegistrada.nombre);
            }
            catch (error) {
                console.log("Error en mysqlUser.repository", error);
                return null;
            }
        });
    }
}
exports.mysqlUserRepository = mysqlUserRepository;
