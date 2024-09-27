import Info from "./Info";

interface Response<T> {
    info: Info,
    result: T[],
};

export default Response;