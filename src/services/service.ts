import axios, { AxiosResponse } from "axios"


export const Service = {
    get: async <T>(url: string): Promise<T> => {
        try {
            const response: AxiosResponse<T> = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Ocorreu um erro ao realizar o GET');
        }
    },
};