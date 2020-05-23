import React, { Component } from "react";
import "./styles.css";
import Client from "./Client";

class App extends React.Component {
  //clientInput = React.createRef();
  state = {
    clients: [
      { id: 1, nom: "steven nkeneng" },
      { id: 2, nom: "steven2 nkeneng" },
      { id: 3, nom: "steven3 nkeneng" }
    ],
    compteur: 1,
    nouveauClient: ""
  };

  handleChanged = event => {
    const value = event.currentTarget.value;

    this.setState({ nouveauClient: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var id = new Date();
    var nom = this.state.nouveauClient;

    var client = { id: id, nom: nom };

    var clients = this.state.clients.slice();

    clients.push(client);

    this.setState({ clients: clients, nouveauClient: "" });
    // console.log(this.clientInput.current.value);
  };

  handleDelete =(id) => {
    // copie de mon state.clients
    const clients = this.state.clients.slice();

    // recherche de l'index dans le tableau de clients
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    // je supprime le client a l'index trouve garce a la methode splice()
    clients.splice(index, 1);

    this.setState({ clients: clients });
  }

  handleClick() {
    // changemenz des valeurs du state ne se fait directement dans le state mais
    // plutot au travers de la methode " Setstate "
    // ici je specifie ke j'aimerais modifier la valeur de compteur qui est un elemet du state
    // et je l'affecte la nouvelle valeur que je veux
    //this.setState({compteur : this.state.compteur+1})
    //console.log(this.state);

    //  Attention la variable clients ici ne represente pas une copie du state
    // au contraire elle est une autre reference au state
    // alors si je moddifie cette variable mon state se retrouvera modifie
    // et on sait ke l'on ne doit en aucun cas nodifier le state en direct
    // const clients = this.state.clients;

    // la solution vient de la methode "slice" qui permet de faire une copie d'un tableau
    // et la ma variable clients contiendra les meme donnees ke mon state tout en etant
    // independant
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "hilary ngondji" });

    // et maintenant je peux faire le setState avec ma nouvelle variable
    this.setState({ clients: clients });
  }

  render() {
    const title = "Liste des clients";

    // on se cree un tableau de li avec tous les elements presnts dans
    // la propriete clients du state

    const elements = this.state.clients.map(client => 
      (<Client client = {client}  onDelete={this.handleDelete} />)
    );

    return (
      <div>
        <h1> {title}</h1>
        {/*  {this.state.compteur} */}
        {/* Le probleme tres connu du this
        sur notre bouton nous avons un eventlistener ki ecoute 
        les clicks sur notre bouton et appele la fonction handleClick en consequence 

        Le probleme du this est que la fonction handleClick elle meme fait appele a un 
objet " This " qui en javascript normal renvoi a l'element qui a declenche le click

or en react ce this nous retourne un " undefined "

il existen 3 methodes pour resoudre ce probleme : 
1 )  binder la fonction attache a l'evenetlistener  ( premiere variante de code )

            {/* <button onClick={this.handleClick.bind(this)}> click me </button>*/}

        {/* 2) utilise une fonction flechee ( elle a l'avantage de ne pas perdre le this dont il est question)

            <button onClick={() => this.handleClick()}> click me </button>
{/*
3)  Ecrire la fonction handleclick comme une fonction flechee 

    {/*  <button onClick={this.handleClick}> click me </button> 

    handleClick = () => {
    console.log(this.state);
  }
    */}
        <ul>{elements}</ul>
        {/* <button onClick={() => this.handleClick()}> click me </button> */}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChanged}
            value={this.state.nouveauClient}
            ref={this.clientInput}
            type="text"
            placeholder="ajouter des gens"
          />
          <button> Confirmer </button>
        </form>
      </div>
    );
  }
}

export default App;
