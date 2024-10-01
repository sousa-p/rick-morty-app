import { Service } from "../service"

export const CharacterService = {
    getAll: () => {
        const url = `${Service.url}/character`;
        Service.get(url)
            .then((value) => {
                console.log(value)
            });
    }
}