import React, { Component } from "react";

export default class ErrorWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-box">
          Ocorreu um erro durante o carregamento desse bloco!
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}
