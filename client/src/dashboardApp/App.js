
import React, { Component } from 'react';

class DashboardApp extends Component {
  state = {
    renderedResponse: ''
  }

  render() {
    const { renderedResponse } = this.state;

    return (
      <div className="App">
        <h2>Call out to API!</h2>
        <p>{renderedResponse.express}</p>
      </div>
    );
  }
}

export default DashboardApp;
