import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class AppComponent extends Component {

    componentDidMount() {

        this.generateRandomText();

    }

    generateRandomText = () => {

        let text = "";
        let maxSize = 25;

        const possible = "abcdefghijklmnopqrstuvwxyz ";

        let size = Math.floor(Math.random() * maxSize);

        for( let i=0; i < maxSize; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        this.props.updateFakeMessage(text);
    }

    handleCLick = e => {

        this.generateRandomText();

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hey !</h2>
                </div>
                <p className="App-intro">
                    Poiur commencer, mettez à jour le fichier
                    <code> src/components/app.component.js </code>
                    puis sauvez et actualisez.
                </p>
                <p className="App-intro">
                    Voici une suite de lettre random : <b>{this.props.state.general.fakeMessage}</b>
                </p>
                <p className="App-intro">
                    (Fais nous une capture d'écran si la suite signifie quelque-chose ! :D)
                </p>

                <button onClick={this.handleCLick}>Génerer un mot aléatoire !</button>
            </div>
        );
    }
}

AppComponent.propTypes = {
    state: React.PropTypes.object,
    updateFakeMessage:  React.PropTypes.func,
};

export default AppComponent;
