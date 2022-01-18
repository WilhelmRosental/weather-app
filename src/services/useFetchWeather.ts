import { useState, useEffect } from 'react';

const useFetchWeather = (initialUrl : string) => {
    // create state variables
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState<string>(initialUrl);

    useEffect(() => {
        if(!url) return;
        // clear old search
        setData(null);
        setError(null);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // error handling for nonexistent data
                if(data.cod >= 400) {
                    setError(data.message);
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [url]);

    return { data, error, setUrl };
};

export default useFetchWeather;