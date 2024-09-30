import Info from "./Info";

interface ResponseAPI<T> {
    info: Info,
    results: T[],
};

export default ResponseAPI;