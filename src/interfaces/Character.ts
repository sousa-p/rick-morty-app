import Gender from "../enums/Gender";
import Status from "../enums/Status";

interface Character {
    id: number,
    name: string,
    status: Status,
    species: string,
    type: string,
    gender: Gender,
    origin: Object,
    location: Object,
    image: string,
    episode: string[],
    url: string,
    created: string,

};

export default Character;