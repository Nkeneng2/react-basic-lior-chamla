import React, {Component} from 'react';

class Form extends Component {

    //clientInput = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        var id = new Date().getTime();
        var nom = this.state.nouveauClient;

        this.props.onclientAdd({id,nom});
        this.setState({nouveauClient : ""})
    };

    state = {
        nouveauClient: ""
    }

    handleChanged = event => {
        const value = event.currentTarget.value;
        this.setState({nouveauClient: value});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanged}
                    value={this.state.nouveauClient}
                    // ref={this.clientInput}
                    type="text"
                    placeholder="ajouter des gens"
                />
                <button> Confirmer</button>
            </form>
        );
    }
}

export default Form;