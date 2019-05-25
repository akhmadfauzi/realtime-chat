import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/chat-room.scss';
import ChatMessage from './ChatMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserProfile from '../components/UserProfile';

export class ChatRoom extends Component {

    onInputHandler(e) {
        const target = e.target;
        if (target.value !== '') {
            target.style.height = '20px';
            target.setAttribute('style', 'height:' + target.scrollHeight + 'px !important;')
        } else {
            target.style.height = 'auto';
            target.setAttribute('style', 'height:20px !important;')
        }
    }

    getName(id){
        let users = ["Barry Fleming","Ikra Carrillo","Leanna Orr","Hammad Garza","Zarah Burrows","Harlee Gallagher","Bert Brown","Felicity Herrera","Hailie Wise","Andreas Wilkinson"];
        return users[id];
    }

    render() {
        return (
            <div className="chat-room">
                <div className="chat-room__header">
                    <UserProfile name={this.getName(this.props.match.params.id)}></UserProfile>
                </div>
                <div className="chat-room__body">
                    <ChatMessage isSender={false} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                    <ChatMessage isSender={true} text="lorem ipsum"></ChatMessage>
                    <ChatMessage isSender={false} text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></ChatMessage>
                </div>
                <div className="chat-room__footer">
                    <div className="text-editor">
                        <div className="text-editor__left">
                            <textarea onInput={this.onInputHandler.bind(this)}></textarea>
                        </div>
                        <div className="text-editor__right">
                            <button><FontAwesomeIcon icon="paper-plane" /></button>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
