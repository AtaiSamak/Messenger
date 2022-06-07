import React from "react";
import "./errorBoundary.scss";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2 className="error-boundary__text">
                        Something went wrong
                    </h2>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
