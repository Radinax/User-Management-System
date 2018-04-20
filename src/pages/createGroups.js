import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGroup} from '../actions/createGroups';

class CreateGroups extends Component {
    constructor() {
        super();
    
        this.state = {
          newGroup: {
            id:'',
            name:''
          }
        };
      }
    
      handleChangeGroupInput = e => {
        const {value} = e.target;
        this.setState(state => ({
          ...state,
          newGroup: {
            ...state.newGroup,
            name: value
          }
        }))
      }
    
    
      cleanNewGroup = () => {
        this.setState({
          newGroup: {
            id:'',
            name: ''
          }
        })
      }
    
    
      addGroup(group) {
        if (group.name) {
          let getLastId = 1;
          const {groups} = this.props;
          if (groups.length) {
            getLastId = (groups[groups.length - 1].id)+1;
          }
    
          this.setState(state => ({
            ...state,
            newGroup: {
              ...state.newGroup,
              id: getLastId,
              name: group.name,
            }
          }), () => {
            this.props.addGroup(this.state.newGroup);
            this.cleanNewGroup();
            this.props.history.push('/groups')
          })
        }
    
    
      }
    render () {
        const {newGroup} = this.state;
        return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Create a new group
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid content has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <h3>Add Group</h3>
                            <br/>
                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <label class="label">Group Name: </label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input type="text"
                                                className="input"
                                                placeholder="Group Name"
                                                value={newGroup.name}
                                                onChange={this.handleChangeGroupInput}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="button is-link add-group"
                        onClick={() => this.addGroup(newGroup)}>
                        Save Changes
                    </a>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    groups: state.groups
  })
  
const mapDispatchToProps = dispatch => ({
    addGroup: group => dispatch(addGroup(group))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroups)