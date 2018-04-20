import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Dashboard extends Component {
    
    render () {
        return (
            <div>
                <aside className="menu">
                    <p className="menu-label">
                        Home
                    </p>
                    <ul className="menu-list">
                        <Link className="list" to='/'><li><a>Homepage</a></li></Link>
                    </ul>
                    <p className="menu-label">
                        Users
                    </p>
                    <ul className="menu-list">
                        <Link className="list" to='/users'><li><a>List of users</a></li></Link>
                        <Link className="list" to='/createUsers'><li><a>Add new users</a></li></Link>
                    </ul>
                    <p className="menu-label">
                        Groups
                    </p>
                    <ul className="menu-list">
                        <Link className="list" to='/groups'><li><a>List of groups</a></li></Link>
                        <Link className="list" to='/createGroups'><li><a>Add new groups</a></li></Link>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default Dashboard;