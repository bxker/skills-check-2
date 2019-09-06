import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components
import Dashboard from './Components/Dashboard';
import AddItem from './Components/AddItem';
import EditItem from './Components/EditItem';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/additem" component={AddItem}/>
        <Route path="/edititem" component={EditItem}/>
    </Switch>
)