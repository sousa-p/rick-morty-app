import Gender from "../enums/Gender";
import Status from "../enums/Status";
import ObjectAPI from "./ObjectAPI";

interface Character {
    id: number,
    name: string,
    status: Status,
    species: string,
    type: string,
    gender: Gender,
    origin: ObjectAPI,
    location: ObjectAPI,
    image: string,
    episode: string[] | ObjectAPI,
    url: string,
    created: string,

};

export default Character;