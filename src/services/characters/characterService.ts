import Character from "../../interfaces/Character";
import Filter from "../../interfaces/Filter";
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
    },

    search:  async (filter?: Filter): Promise<ResponseAPI<Character>> => {
        try {
            const params = `name=${filter?.query}&status=${filter?.status}&gender=${filter?.gender}&species=${filter?.species}`;
            const url: string | undefined = `${Service.url}/character/?${params}`;
            return CharacterService.getAll(url);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            throw error;
        }
    },

    getMultiple:  async (charactersId: Array<number>): Promise<Array<Character>> => {
        try {
            const response = await Service.get<Array<Character>>(`${Service.url}/character/${JSON.stringify(charactersId)}`);
            return response;
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
            throw error;
        }
    },
}