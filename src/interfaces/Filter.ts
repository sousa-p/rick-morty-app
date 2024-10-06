import Gender from "../enums/Gender";
import Status from "../enums/Status";

interface Filter {
    query: string,
    species: string,
    status: Status,
    gender: Gender,
};

export default Filter;