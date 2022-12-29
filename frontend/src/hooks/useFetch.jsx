import { useState, useEffect } from "react";
import { Http } from "../pages/api/api";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
    
        const fetchData = async () => {
            try {
            setLoading(true)
            const res = await Http.get(url);
            setData(res.data.data);
            } catch (err) {
            console.log(err)
            setError(true)
            }
            setLoading(false)
        };
        fetchData();
    }, [url]);

    return {data,loading,error}
};

export default useFetch;