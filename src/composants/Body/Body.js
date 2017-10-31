import React from "react";
import Formulaire from "../Formulaire/Formulaire";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="titre">
          <h1>La page des lunettes de soleil</h1>
        </div>

        <div className="img">
          <img
            src="https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg"
            alt="main-pic"
            width="100%"
          />
        </div>

        <Formulaire />
      </div>
    );
  }
}

export default Body;
