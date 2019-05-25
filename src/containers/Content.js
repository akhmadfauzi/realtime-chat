import React from 'react'
import '../styles/content.scss'
import { ChatRoom } from '../components/ChatRoom';
import { Conversation } from '../components/Conversation';
export default function Content() {
    return (
        <main className="content">
            {/* <ChatRoom></ChatRoom> */}
            <Conversation></Conversation>
        </main>
    )
}
