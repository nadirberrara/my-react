import React from "react";
import "./Formulaire.css";

class Formulaire extends React.Component {
  newMessage = event => {
    event.preventDefault();
    const pseudo = this.pseudoInput.value;
    const message = this.messageInput.value;
    console.log("pseudo : " + pseudo);
    console.log("message : " + message);
  };

  render() {
    return (
      <div className="formulaire" onSubmit={e => this.newMessage(e)}>
        <form action="submit">
          <label htmlFor="pseudo"> Pseudo :</label>
          <input
            id="pseudo"
            type="text"
            ref={input => (this.pseudoInput = input)}
          />
          <label htmlFor="commentaire"> Commentaire :</label>
          <textarea
            name="commentaire"
            id="commentaire"
            cols="50"
            rows="3"
            ref={input => (this.messageInput = input)}
          />
          <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
}

export default Formulaire;
