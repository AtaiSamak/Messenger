import { useEffect, useState } from "react";

const useExpire = (active, delay = 500) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setVisible(false);
            }, delay);
        }

        return setVisible(true);
    }, [active, delay]);

    return visible;
};

export default useExpire;
