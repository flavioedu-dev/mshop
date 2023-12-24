import { PurchaseType } from "@/components/Purchases/Purchases";
import { useState, useEffect } from "react";

interface configType extends RequestInit{
    method: string,
    headers?: {
        [key: string]: string
    },
    body?: BodyInit
}

type Response = {
    data?: PurchaseType,
    status?: number
  }
  

export const UseFetch = (url: string) => {
    const [data, setData] = useState<Response>();
    const [config, setConfig] = useState<configType>();
    const [call, setCall] = useState<boolean>(false)
    
    
    function httpConfig<T>(method?: string, body?: T) {
        switch (method) {
            case 'POST':
                setConfig ({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                setCall(true)
                break
            case 'PUT':
                setConfig ({
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                setCall(true)
                break
            case 'DELETE':
                setConfig ({
                    method: 'DELETE',
                })
                setCall(true)
                break
            default:
                setConfig ({
                    method: 'GET',
                })
                setCall(true)
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

    return { httpConfig, data, call }
}
