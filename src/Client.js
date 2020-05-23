import React, {Component} from "react";

class Client extends Component{
render(){
  return (
    <li>
      {this.props.client.nom}
      <button onClick={() => this.props.onDelete(this.props.client.id)}>x</button>
    </li>
  );
}
}

export default Client;