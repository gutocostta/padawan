import { Component } from "react";
import { withRouter } from "react-router-dom";

class NavigationNotifier extends Component { 
  
  componentDidMount() {
    const { handleChange } = this.props;

    if (handleChange) {
      handleChange({
        url: window.location.href
      });
    }
  }
  componentDidUpdate(prevProps) {
    const { location, handleChange } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (handleChange) {
        handleChange({
          url: window.location.href
        });
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(NavigationNotifier);
