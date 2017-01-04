import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class AppComponent extends Component {

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
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hey ! Bienvenue sur ton application React</h2>
                </div>
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

AppComponent.propTypes = {
    state: React.PropTypes.object,
    updateFakeMessage:  React.PropTypes.func,
};

export default AppComponent;
