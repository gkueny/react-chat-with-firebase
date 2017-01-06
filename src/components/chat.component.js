import React, {Component} from 'react';

import '../assets/css/chat.css';

class ChatComponent extends Component {

    constructor (props) {
        super(props);

        this.state = {
            messageWriting : "",
        };

    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.scrollRef.scrollTop = this.scrollRef.scrollHeight;
    }

    handleTextChange = e => {
        this.setState({
            messageWriting : e.target.value
        });
    }

    sendNewMessage = e => {
        e.preventDefault();

        this.props.updateMessage(this.props.name, this.state.messageWriting);

        this.setState({
            messageWriting : ""
        });
    }

    render() {

        let tchat;

         this.props.state.chat.messages ?
            tchat = this.props.state.chat.messages.map((message, index) => {

                if(message.name === this.props.name) {
                    return (
                        <div className="message-wrapper me " key={index}>
                            <div className="text-wrapper animated fadeIn">{message.text}</div>
                        </div>
                    );
                } else {
                    return (
                        <div className="message-wrapper them" key={index}>
                            <div className="circle-wrapper animated bounceIn" >{message.name}</div>
                            <div className="text-wrapper animated fadeIn">{message.text}</div>
                        </div>
                    );
                }

            }) :
            tchat = "pas encore de messages...";

        return (
            <form>
                <div className="wrapper">
                    <nav className="nav" id="nav">
                        <div className="default-nav">
                            <div className="main-nav">
                                <div className="main-nav-item">
                                    general - {this.props.name}
                                </div>
                                <div className="options" />
                            </div>
                        </div>
                    </nav>
                    <div
                        className="inner"
                        id="inner"
                        ref={(ref) => this.scrollRef = ref}
                    >
                        <div className="content" id="content" >
                            {tchat}
                        </div>
                    </div>
                    <div className="bottom" id="bottom">
                        <textarea
                            onChange={this.handleTextChange}
                            className="input"
                            id="input"
                            placeholder="saisissez votre texte ici.."
                            value={this.state.messageWriting}
                        />
                        <button onClick={this.sendNewMessage} className="send" id="send"/>
                    </div>

                </div>
            </form>
        );
    }
}

ChatComponent.propTypes = {
    state: React.PropTypes.object,
    updateMessage: React.PropTypes.func,
    name: React.PropTypes.string
};

export default ChatComponent;
