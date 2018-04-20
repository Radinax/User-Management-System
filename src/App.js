import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

//Components
import Dashboard from './components/dashboardComponent/dashboard';
import Homepage from './pages/homepage';
import Users from './pages/users';
import Groups from './pages/groups';
import CreateUsers from './pages/createUsers';
import CreateGroups from './pages/createGroups';
import EditGroup from './pages/editGroups';
import EditUser from './pages/editUsers';

//Includes
import './Assets/css/default.min.css';

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <div className="columns is-gapless division">
                        <div className="column dashboard">
                            <Dashboard />
                        </div>
                        <div className="column">
                            <Switch>
                                <Route exact path='/' component={Homepage}/>
                                <Route exact path='/users' component={Users}/>
                                <Route exact path='/groups' component={Groups}/>
                                <Route exact path='/createUsers' component={CreateUsers}/>
                                <Route exact path='/createGroups' component={CreateGroups}/>  
                                <Route exact path='/editGroups/:id' component={EditGroup}/>
                                <Route exact path='/editUser/:name' component={EditUser}/> 
                            </Switch>                       
                        </div>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;