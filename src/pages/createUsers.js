import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/createUsers';

class CreateUsers extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
            name: '',
            groups: []
            }
        }
    }
    removeGroupFromNewUser = (group = '') => {
        const {groups} = this.state.newUser;
        const idx = groups.indexOf(group);
    
        if (idx !== -1) {
          this.setState(state => ({
            ...state,
            newUser: {
              ...state.newUser,
              groups: [
                ...groups.slice(0, idx),
                ...groups.slice(idx + 1)
              ]
            }
          }))
        }
    }
    
    addGroupToNewUser = (group = '') => {
        // Checks if a group alredy exists
        this.setState(state => ({
          ...state,
          newUser: {
            ...state.newUser,
            groups: [...state.newUser.groups, group]
          }
        }))
    }
    
    isGroupAssigned = group => {
        const {groups} = this.state.newUser;
        return groups.indexOf(group) !== -1;
    }
    
    handleGroupChange = (e, group) => {
        const {checked} = e.target;
    
        if (checked) {
          this.addGroupToNewUser(group)
        } else {
          this.removeGroupFromNewUser(group)
        }
    }
    
    handleChangeUserInput = e => {
        const {value} = e.target;
        this.setState(state => ({
          ...state,
          newUser: {
            ...state.newUser,
            name: value
          }
        }))
    }
    
    cleanNewUser = () => {
        this.setState({
          newUser: {
            name: '',
            groups: []
          }
        })
    }
    
    addUser(newUser) {
        if (newUser.name !== '') {
          this.props.addUser(newUser);
          this.cleanNewUser();
          this.props.history.push('/users')
        }
    
    }

    render () {
        const {newUser} = this.state;
        const {groups} = this.props;
        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Introduce New Users
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid content has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <h3>Add User</h3>
                            <br/>
                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <label class="label">Name: </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input type="text"
                                                className="input"
                                                placeholder="User Name"
                                                value={newUser.name}
                                                onChange={this.handleChangeUserInput}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <h3>Assign Groups</h3>
                            {groups.length
                            ?
                                <table className="table-is-narrow">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Assign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {groups.map((group, i) => (
                                        <tr key={i}>
                                        <td>
                                            {group.name}
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onChange={ e => this.handleGroupChange(e, group)}
                                                checked={this.isGroupAssigned(group)}
                                            />
                                        </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            : <div><p>There are no groups, please create a new one so you can assign a user</p></div>
                            }
                        </div>
                    </div>
                    <a className="button is-link add-user" onClick={() => this.addUser(newUser)}>Save Changes</a>
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
    addUser: user => dispatch(addUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUsers)