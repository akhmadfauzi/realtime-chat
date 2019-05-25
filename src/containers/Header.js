import React from 'react';
import '../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header() {
    return (
        <header className="header">
            <div className="header-brand">
                Chattt
                 </div>
            <div className="header-toggle"><button><FontAwesomeIcon icon="bars" /></button></div>
        </header>

    )
}

