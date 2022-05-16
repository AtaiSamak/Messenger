import "./button.scss";

const Button = ({ handleClick, children }) => {
    return (
        <div onClick={handleClick} className="button">
            <div className="button__gradient"></div>
            <button className="button__own">{children}</button>
        </div>
    );
};

export default Button;
