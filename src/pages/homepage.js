import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                USER MANAGEMENT SYSTEM
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid">
                    <div className="columns">
                        <div className="column content">
                            <p className="has-text-weight-bold">With this aplication you are able to do the following:</p>
                            <ul>
                                <li>You can add a group with the name you want.</li>
                                <li>You can add a user with any name you wish to an existing group.</li>
                                <li>You can remove a user from the group.</li>
                                <li>You can remove a group if there aren't any users on it.</li>
                                <li>You can change the group and user name.</li>
                                <li>You can watch a list of existing users and groups.</li>
                            </ul>
                        </div>
                        <div className="column content">
                            <p className="has-text-weight-bold">You can't perform these actions:</p>
                            <ul>
                                <li>Create a user without assigning it to a group first.</li>
                                <li>Remove a group if it has users on it.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid has-text-centered">
                    <p className="has-text-weight-bold">Made by Adrian Beria.</p>
                    <p className="has-text-weight-bold">React JS Front-End Web Developer.</p>
                </section>
            </div>
        );
    }
}

export default Homepage;