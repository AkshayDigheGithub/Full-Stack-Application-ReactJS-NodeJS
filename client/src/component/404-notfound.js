import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <h1>Page Not Found
                <li>
                    <Link to="/">Home</Link>
                </li>
            </h1>
        );
    }
}

export default NotFoundComponent;