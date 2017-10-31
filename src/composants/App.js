import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
