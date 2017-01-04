import React, {Component} from 'react';

import '../assets/css/home.css';

class HomeComponent extends Component {

    handleCLick = e => {

        let text = "";
        const maxSize = 15;

        const possible = "abcdefghijklmnopqrstuvwxyz ";

        const size = Math.floor(Math.random() * maxSize);

        for( let i=0; i < size; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        this.props.updateFakeMessage(text);

    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    Pouur commencer, met à jour le fichier
                    <code> src/components/app.component.js </code>
                    puis sauve et actualise.
                </p>
                <p className="App-intro">
                    Voici une suite de lettre random : <b>{this.props.state.general.fakeMessage}</b>
                </p>
                <p className="App-intro">
                    (Fais nous une capture d'écran si la suite signifie quelque-chose ! :D)
                </p>

                <button onClick={this.handleCLick}>Génerer une suite aléatoire !</button>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    state: React.PropTypes.object,
    updateFakeMessage:  React.PropTypes.func,
};

export default HomeComponent;
