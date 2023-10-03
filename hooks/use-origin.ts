import { useEffect, useState } from "react";

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // determino el origen (localhost)
    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

    // y devuelvo el valor de la constante 
    return origin;
}
