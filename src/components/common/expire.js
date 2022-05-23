import React, { useEffect, useState } from "react";

const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, props.delay);
    }, [props.delay]);

    return visible ? <>{props.children}</> : null;
};

export default Expire;
