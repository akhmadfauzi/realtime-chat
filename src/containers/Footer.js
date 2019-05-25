import React from 'react'
import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="footer">
            <p>Made with <span><FontAwesomeIcon icon="heart"></FontAwesomeIcon></span></p>
        </footer>
    )
}
