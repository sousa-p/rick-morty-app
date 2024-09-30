import ResponseAPI from "../../interfaces/ResponseAPI";
import { Service } from "../service"

export const CharacterService = {
    getAll: async (): Promise<ResponseAPI<CharacterData>> => {
        const url = `${Service.url}/character`;
        try {
            const response = await Service.get<ResponseAPI<CharacterData>>(url);
            return response;
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            throw error;
        }
    }
}