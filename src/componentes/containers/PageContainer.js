import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import { getForce } from "../../services/httpService";
import Loader from "../shared/Loader";
import Home from "../pages/Home";
import DarkSide from "../pages/DarkSide";
import LightSide from "../pages/LightSide";


class PageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      loading: false,
    };
  }

  handleCommand = cmd => {
  
    switch (cmd.op) {

      case "starWars":
        this.getSideForce();
        break;

      case "goBack":
        this.setState({
          page: 'home',
        });
        break;

      default:
        break;
    }

  };

  getSideForce = async () => {

    this.setState({
      loading: true,
      side: null,
      light: null,
      dark: null,
    })

    await getForce(1).then(resp => {
      this.putForce(resp, 'light');
    })

    await getForce(4).then(resp => {
      this.putForce(resp, 'dark');
    })

  }

  putForce = async (data, side) => {

    if (side === 'light') {
      this.setState({
        light: data,
      });
    }

    if (side === 'dark') {
      this.setState({
        dark: data,
      });
    }

    if (this.state.light && this.state.dark && this.state.loading) {

      let lightSide = this.state.light;
      let darkSide = this.state.dark;
      
      let timeA = lightSide.timeResp;
      let timeB = darkSide.timeResp;

      let side = null;
      let page = '';

      if (timeA <= timeB) {
          side = lightSide.data;
          page = 'light';
      } else {
          side = darkSide.data;
          page = 'dark';
      }

      if (side) {
        this.setState({
          side: side,
          page: page,
          loading: false,
        });
      }

    }

  }

  render() {

    if ( this.state.loading )  {
      return (
        <Grid className="app-container loading">
          <div className="loader-container">
            <Loader loading={true} className="loader" />
          </div>
        </Grid>
      );
    }

    return (
      <>
        { this.state.page === 'home' && ( 
          <div className="page">
            <main>
                <Home handleCommand={this.handleCommand} />
            </main>
          </div> 
        )}
        { this.state.page === 'dark' && ( 
          <div className="page">
            <main>
                <DarkSide side={this.state.side} handleCommand={this.handleCommand} />
            </main>
          </div> 
        )}
        { this.state.page === 'light' && ( 
          <div className="page">
            <main>
                <LightSide side={this.state.side} handleCommand={this.handleCommand} />
            </main>
          </div> 
        )}
      </>
    );
  }
}


export default PageContainer