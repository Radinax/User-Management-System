import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeUser} from '../actions/users';

class Users extends Component {
    render () {
        const {groups, users} = this.props;

        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                List of Users
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid content has-text-centered">
                    <h4>You can check the list of users, change the names, assigning or removing them from existing groups.</h4>
                    { users.length !== 0
                    ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Groups</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user,i) => (
                                <tr key={i}>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        <ul>
                                            {
                                            user.groups.map((group, i) => (
                                                <li key={i}>
                                                    {
                                                        groups.find(grp => grp.id === group.id).name
                                                    }
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    </td>
                                    <td>
                                        <Link to={`/editUser/${user.name}`}>
                                            <button className={"user-detail remove-button"} title="User Details"><i class="far fa-address-card"></i></button>
                                        </Link>
                                        <button className={"remove-user remove-button"} title="Remove user" onClick={() => this.props.removeUser(user)}><i class="fas fa-user-times"></i></button>
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    : <div><p>No users created. Please create a new one.</p></div>
                    }
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    users: state.users,
    groups: state.groups
})

const mapDispatchToProps = dispatch => ({
    removeUser: user => dispatch(removeUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)