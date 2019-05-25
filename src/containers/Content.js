import React from 'react'
import '../styles/content.scss'
import { ChatRoom } from '../components/ChatRoom';
export default function Content() {
    return (
        <main className="content">
            <ChatRoom></ChatRoom>
        </main>
    )
}
