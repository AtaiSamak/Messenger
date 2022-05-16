import { Component } from "react";
import "./input.scss";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            inputValue: "",
        };
    }

    onFocus = () => {
        this.setState({ isFocus: true });
    };

    onBlur = (el) => {
        if (el.target.value) {
            return;
        }
        this.setState({ isFocus: false });
    };

    render() {
        const focusClass = `input__focus ${
            this.state.isFocus ? "input__focus_active" : ""
        }`;
        const { placeholder, name, type, value, handleInput } = this.props;

        return (
            <div className="input">
                <input
                    className="input__field"
                    type={type}
                    name={name}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={handleInput}
                    value={value}
                />
                <span
                    className={focusClass}
                    data-placeholder={placeholder}
                ></span>
            </div>
        );
    }
}

export default Input;
