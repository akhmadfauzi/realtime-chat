import React from 'react';
import '../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserProfile from '../components/UserProfile';
export default function Header() {
    return (
        <header className="header">
            <div className="header-brand">
                <UserProfile></UserProfile>
            </div>
            <div className="header-toggle"><button><FontAwesomeIcon icon="bars" /></button></div>
        </header>

    )
}
