import React from 'react'
import '../styles/content.scss'
import ChatRoom from '../components/ChatRoom';
import { Conversation } from '../components/Conversation';
import { Route } from "react-router-dom";

export default function Content() {
    return (
        <main className="content">
            {/* <ChatRoom></ChatRoom> */}
            {/* <Conversation></Conversation> */}
            <Route path="/conversation/:id" component={ChatRoom} />
            <Route path="/conversations" component={Conversation} />
            <Route path="/"  exact component={Conversation} />
        </main>
    )
}
