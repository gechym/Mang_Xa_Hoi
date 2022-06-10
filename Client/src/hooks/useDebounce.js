import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [valueDebonce, setValueDebonce] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setValueDebonce(value), delay);

        return () => clearTimeout(handle);
    }, [value, delay]);

    return valueDebonce;
}

export default useDebounce;
