/**
 * 1. import React from 'react'
 * 2. class TopBar extends React.Component
 * 3. implements 'render' function
 * 4. export component
 */

import React from 'react';
import logo from "../assets/logo.svg";



export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>Around</div>
            </header>
        )
    }
}