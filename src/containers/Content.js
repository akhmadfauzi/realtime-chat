import React from 'react'
import '../styles/content.scss'
import { ChatRoom } from '../components/ChatRoom';
import { Conversation } from '../components/Conversation';
import { Route } from "react-router-dom";

export default function Content() {
    return (
        <main className="content">
            {/* <ChatRoom></ChatRoom> */}
            {/* <Conversation></Conversation> */}
            <Route path="/conversation/:id" exact component={ChatRoom} />
            <Route path="/conversations/" component={Conversation} />
        </main>
    )
}
