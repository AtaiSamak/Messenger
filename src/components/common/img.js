const Img = ({ width, height, borderRadius = 0, url, ...props }) => {
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
        <div {...props} style={styles}>
            <img className="photo" src={url} alt="UserPhoto" />
        </div>
    );
};

export default Img;
