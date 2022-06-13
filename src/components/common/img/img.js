const Img = ({ width, height, borderRadius = 0, url, style, ...props }) => {
    const styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
    };

    return (
        <div {...props} style={styles}>
            <img className="photo" src={url} alt="img" />
        </div>
    );
};

export default Img;
