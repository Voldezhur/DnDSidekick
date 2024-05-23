import { useEffect, useState } from "react"
import axios from "axios";

const useFetching = (path) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        const getData = async () => {
            try {
                const response = await axios.get(path);
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }
    
        const fetchData = async () => {
            await getData()
            .then (fetchedData => {
                setData(fetchedData);
                setIsLoading(false);
            });
        }

        fetchData();
    }, [path])

    return [data, isLoading];
}

export default useFetching;