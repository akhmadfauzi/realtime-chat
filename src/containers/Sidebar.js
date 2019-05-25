import React from 'react'
import '../styles/sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserList } from '../components/UserList';

export default function Sidebar() {
    return (
        <aside className="sidebar sidebar-collapse">
            <div className="sidebar__header">
                <div className="close-button">
                    <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                </div>
            </div>
            <div className="sidebar__body">
                <UserList />
            </div>
            <div className="sidebar__footer">logout</div>
        </aside>
    )
}
