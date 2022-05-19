const Img = (props) => {
    const { width, height, borderRadius = 0 } = props;

    const styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    };

    return (
        <div className={props.className || ""} style={styles}>
            <img className="photo" src={props.url} alt="UserPhoto" />
        </div>
    );
};

export default Img;
