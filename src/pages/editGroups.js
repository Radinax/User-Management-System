import React from 'react';
import {connect} from 'react-redux';
import {editGroup} from '../actions/groups';

class EditGroup extends React.Component {
    constructor() {
      super();
      this.state = {
        editedGroup: {
          id:'',
          name: ''
        }
      };
    }

    getGroup = id => {
      const {groups} = this.props;
      return groups.find(group => group.id === +id)
    }

    handleChangeGroupInput = e => {
      const {value} = e.target;
      this.setState(state => ({
        ...state,
        editedGroup: {
          ...state.editedGroup,
          name: value
        }
      }))
    }

    cleanEditedGroup = () => {
      this.setState({
        editedGroup: { name: ''}
      })
    }

    editGroup(editedGroup) {
      const groupId = this.props.match.params.id;
      const group = this.getGroup(groupId)
      const {groups} = this.props;
      const idx = groups.indexOf(group);

      if (editedGroup.name) {
        this.setState(state => ({
          ...state,
          editedGroup: {
            ...state.editedGroup,
            id: +groupId
          }
        }), () => {
          this.props.editGroup(idx, this.state.editedGroup)
          this.cleanEditedGroup();
          this.props.history.push('/groups')
        })
      }
    }

  render() {
    const group = this.getGroup(this.props.match.params.id);
    const {editedGroup} = this.state;
    return (
            <div>
                <section className="hero is-black is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                Edit Group's Name
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid content">
                  <h2>Group Name: {group.name}</h2>
                  <hr />
                  <div>
                      <h3>Update:</h3>
                      <label>New group name:</label>
                      <input type="text" 
                          className="input"
                          onChange={this.handleChangeGroupInput} 
                          value={editedGroup.name}/>
                  </div>
                </section>
                <section className="section container is-fluid content has-text-centered">
                  <a className="button is-link add-group"
                      onClick={() => this.editGroup(editedGroup)}>
                      Save Changes
                  </a>
                </section>
              
            </div>
    )
    }
}

const mapStateToProps = state => ({
  groups: state.groups
})
const mapDispatchToProps = dispatch => ({
    editGroup: (idx, editedGroup) => dispatch(editGroup(idx, editedGroup))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroup)