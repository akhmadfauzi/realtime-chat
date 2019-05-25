import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/chat-message.scss';

export class ChatMessage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const sender = this.props.isSender ? "sender" : "receiver";
        const contentBG = this.props.isSender ? "sender-bg" : "receiver-bg";
        const text = this.props.text;
        return (
            <div className={`chat-message ${sender}`}>
                <div className={`chat-message__content  ${contentBG}`}>
                    <div className="chat-message-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage)
