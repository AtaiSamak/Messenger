const Button = ({ children, classes, handleClick }) => {
    return (
        <button onClick={handleClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;
