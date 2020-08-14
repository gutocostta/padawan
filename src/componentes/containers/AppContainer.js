import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorWrapper from "../shared/ErrorWrapper";
import NavigationNotifier from "../shared/NavigationNotifier";
import PageContainer from "./PageContainer";
import "../../sass/app.scss";

class AppContainer extends Component {

  render() {

    return (
      <div fluid="true" className="app-container">
        <ErrorWrapper>
          <NavigationNotifier>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <PageContainer {...this.props} />}
                />

                <Route
                  path="/pagina-nao-encontrada"
                  render={() => <div>Página de erro</div>}
                />

                <Route
                  render={() => <Redirect to="/pagina-nao-encontrada" />}
                />

                <Redirect to="/" />
              </Switch>
          </NavigationNotifier>
        </ErrorWrapper>
      </div>
    );
  }
}

export default AppContainer;
