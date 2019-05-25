import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/chat-room.scss';
import ChatMessage from './ChatMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ChatRoom extends Component {
    static propTypes = {
        prop: PropTypes
    }

    onInputHandler(e) {
        const target = e.target;
        console.log(target.scrollHeight,target.scrollWidth);
        if (target.value !== '') {
            target.style.height = '20px';
            target.setAttribute('style', 'height:' + target.scrollHeight + 'px !important;')
        }else{
            target.style.height = 'auto';
            target.setAttribute('style', 'height:20px !important;')
        }
    }

    render() {
        return (
            <div className="chat-room">
                {/* <div className="chat-room__header">
                   
                </div> */}
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
