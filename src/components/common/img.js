const Img = (props) => {
    const getStyles = () => {
        const { width, height, borderRadius = 0 } = props;
        return {
            width: width,
            height: height,
            borderRadius: borderRadius,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        };
    };

    return (
        <div className={props.className || ""} style={getStyles()}>
            <img className="photo" src={props.url} alt="UserPhoto" />
        </div>
    );
};

export default Img;
