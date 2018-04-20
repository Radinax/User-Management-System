import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeGroup} from '../actions/groups';

class Groups extends Component {
    render () {
        const {users, groups} = this.props;
        let showDeleteButton = true;
        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                List of Groups
                            </h1>
                            <h2 className="subtitle">
                            Here you can check the list of groups created.
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid content has-text-centered">
                    { groups.length !== 0
                    ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.groups.map((group, i) => (
                            <tr key={i}>
                                <td>
                                    {group.name}
                                </td>
                                <td>
                                    <Link to={`/editGroups/${group.id}`}>
                                        {/*<Button className={'remove-button'} icon={' fa-pencil-square-o'} />*/}
                                        <button className={"group-detail remove-button"}><i class="far fa-address-card"></i></button>
                                    </Link>

                                    {!showDeleteButton ? showDeleteButton = true : null }
                                    {
                                        users.map(function(user){
                                        // For each user, finds if the group exists in the users groups
                                        // else it renders a delete button
                                        if(user.groups.find(grp => grp.id === group.id)){
                                            showDeleteButton = false;
                                        }
                                            return showDeleteButton;
                                        
                                        })
                                    }
                                    {showDeleteButton ? <button className="remove-button" onClick={() => this.props.removeGroup(group)}><i class="fas fa-user-times"></i></button> : null }
                                </td>
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    : <div><p>No groups created</p></div>
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
    removeGroup: group => dispatch(removeGroup(group))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups)