import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {NavBar} from '../components'
import {MatchList, TeamInsert, TeamList, TeamUpdate, TeamVs} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import video from '../components/goals_1.mp4'
import './video.css'


function App() {
    return (
        <Router>
            <video autoPlay loop muted id='video'>
                <source src={video} type='video/mp4'/>
            </video>
            <NavBar/>
            <div style={{height: "1rem"}}/>
            <Switch>
                <Route path="/team/list" exact component={TeamList}/>
                <Route path="/team/create" exact component={TeamInsert}/>
                <Route
                    path="/team/update/:id"
                    exact
                    component={TeamUpdate}
                />
                <Route path="/matches" exact component={MatchList}/>
                <Route path="/" exact component={TeamVs}/>
                <Route path="/login" exact component={LoginForm}/>
                <Route path="/signup" exact component={SignupForm}/>
            </Switch>
        </Router>
    )
}

export default App