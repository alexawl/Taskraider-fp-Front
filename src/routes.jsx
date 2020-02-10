import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import JobList from './views/jobsList/jobsList'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/jobs" component={() => <JobList />} />
        </Switch>
    </BrowserRouter>
)


export default Routes;