import React from 'react';
import {connect} from 'react-redux';
import {editUser} from '../actions/users';

class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          user: this.props.user
        }
      }
    
    
    getUser = name => {
        const {users} = this.props;
        return users.filter(user => user.name === name)
    }

    handleChangeUserInput = e => {
        const {value} = e.target;
        this.setState(state => ({
            ...state,
            user: {
            ...state.user,
            name: value
            }
        }))
    }

    isGroupAssigned = group => {
        const {groups} = this.state.user;
        return groups.indexOf(group) !== -1;
    }

    doesUserHaveGroup = group => {
        const {groups} = this.state.user;
        return !!groups.filter(g => g.id === group.id).length
    }

    handleGroupChange = (e, group) => {
        const {checked} = e.target;
        if (checked) {
            this.addGroupToUser(group)
        } else {
            this.removeGroupFromUser(group)
        }
    }

    removeGroupFromUser = (group = '') => {
        const {groups} = this.state.user;
        const idx = groups.indexOf(groups.find(grp => grp.id === group.id))
        if (idx !== -1) {
            this.setState(state => ({
            ...state,
            user: {
                ...state.user,
                groups: [
                ...groups.slice(0, idx),
                ...groups.slice(idx + 1)
                ]
            }
            }))
        }
    }

    addGroupToUser = (group = '') => {
        this.setState(state => ({
            ...state,
            user: {
            ...state.user,
            groups: [...state.user.groups, group]
            }
        }))
    }

    editUser = () => {
        if (this.state.user.name !== '') {
            const idx = this.props.users.indexOf(this.props.user);
            this.props.editUser(idx, this.state.user);
            this.props.history.push('/users')
        }
    }

    render() {
        const {user, groups} = this.props;
        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Edit User's Details
                            </h1>
                        </div>
                    </div>
                </section>
                {
                    <div>
                        <section className="section container is-fluid content">
                            <div>
                                <div className="columns">
                                    <div className="column">
                                        <h2>Name: {user.name}</h2>
                                        <hr/>
                                        <label><h3>Groups Assigned:</h3></label>
                                        <ul>
                                            {user.groups && user.groups.map((group, i) => (
                                                <li key={i}>
                                                <label>
                                                    {groups.find(grp => grp.id === group.id).name}
                                                </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <h3>Update name and groups:</h3>
                                        <div class="field is-horizontal">
                                            <div class="field-label">
                                                <label class="label">Name: </label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control">
                                                        <input className="input" 
                                                            type="text" 
                                                            onChange={this.handleChangeUserInput} 
                                                            value={this.state.user.name}/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {groups.length > 0
                                                ?
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Group</th>
                                                            <th>Assign</th>
                                                        </tr>

                                                        {groups.map((group, i) => (
                                                            <tr key={i}>
                                                            <td>
                                                                <label>
                                                                {group.name}
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <input
                                                                type="checkbox"
                                                                onChange={ e => this.handleGroupChange(e, group)}
                                                                defaultChecked={this.doesUserHaveGroup(group)}
                                                                />
                                                            </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                                : <div><p>No groups to assign, please create a new group first.</p></div>
                                            }
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </section>
                        <section className="section container is-fluid content has-text-centered">
                            <a className="button is-link add-user"
                                onClick={this.editUser}>
                                Save Changes
                            </a>
                        </section>
                </div>
                }

            </div>
        )
    }
}

const getUser = (name, users) => {
    return users.filter(user => user.name === name)
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
        user: getUser(ownProps.match.params.name, state.users)[0],
        groups: state.groups
    };
}

const mapDispatchToProps = dispatch => ({
    editUser: (idx, editedUser) => dispatch(editUser(idx, editedUser))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUser)