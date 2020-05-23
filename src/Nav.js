// @flow
import "./styles.css";
import * as React from 'react';
import {Link} from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <ul>
                <Link  to="/client">
                <li>Home</li>
                </Link>
                <Link  to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
};