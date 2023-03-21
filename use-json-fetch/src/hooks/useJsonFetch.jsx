import { useState, useEffect, useRef } from 'react'

export default function UseJsonFetch(url) {
    const [data, setData] = useState('');
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null)
    const timestampRef = useRef();

    useEffect(()=>{
        const fetchData = async()=>{
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            setLoading(true);
            try {const response = await fetch(url);
                if (!response.ok) { 
                    throw new Error(response.statusText); 
                }
                const info = await response.json();
                if (timestampRef.current === timestamp) { 
                    setData(info); 
                }
                setError(null);       
                } catch (e) {
                    setError(e);       
                } finally { 
                    setLoading(false); 
                }
        };
        fetchData();
    },[])

  return [data, loading, error]
}