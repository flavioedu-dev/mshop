import { useState, useEffect } from "react";

// type configType<T> = {
//     method: string,
//     headers?: {
//         [key: string]: string
//     },
//     body?: T
// }

export const UseFetch = (url: string) => {
    const [data, setData] = useState();
    const [config, setConfig] = useState<RequestInit>();

    const httpConfig = (method?: string, body?: unknown) => {
        switch (method) {
            case 'POST':
                setConfig ({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                break
            case 'PUT':
                setConfig ({
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                break
            case 'DELETE':
                setConfig ({
                    method: 'DELETE',
                })
                break
            default:
                setConfig ({
                    method: 'GET',
                })
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, config);
            const data = await response.json();
            setData(data);
        }
        
        fetchData();
    }, [config])

    return { httpConfig, data }
}
