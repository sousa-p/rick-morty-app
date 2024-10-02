import Character from "../../interfaces/Character";
import ResponseAPI from "../../interfaces/ResponseAPI";
import { Service } from "../service"

export const CharacterService = {
    getAll: async (url?: string): Promise<ResponseAPI<Character>> => {
        try {
            const response = await Service.get<ResponseAPI<Character>>(url ?? `${Service.url}/character/?page=1`);
            return response;
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            throw error;
        }
    }
}