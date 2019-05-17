/**
 * 1. import React from 'react'
 * 2. class TopBar extends React.Component
 * 3. implements 'render' function
 * 4. export component
 */

import React from 'react';
import {Register} from "./Register";

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Register />
            </div>
        );
    }
}