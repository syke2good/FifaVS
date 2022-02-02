import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TeamList, TeamInsert, TeamUpdate, TeamVs} from '../pages'

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
                <Route path ="/matches" exact component={MatchList}/>
                <Route path="/" exact component={TeamVs}/>
            </Switch>
        </Router>
    )
}

export default App