import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {NavBar} from '../components'
import {MatchList, TeamInsert, TeamList, TeamUpdate, TeamVs} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
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
            </Switch>
        </Router>
    )
}

export default App