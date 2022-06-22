import {useState} from "react";

export const useFetching = (callback, arg) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetching = async (arg) => {
        try {
            setIsLoading(true);
            await callback(arg);
        }
        catch (e) {
            setError(true);
        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]

}