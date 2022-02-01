import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TeamList, TeamInsert, TeamUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/team/list" exact component={TeamList} />
                <Route path="/team/create" exact component={TeamInsert} />
                <Route
                    path="/team/update/:id"
                    exact
                    component={TeamUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App