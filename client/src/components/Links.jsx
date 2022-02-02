import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Fifa VS
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/team/list" className="nav-link">
                                List Team
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/team/create" className="nav-link">
                                Create Team
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/matches" className="nav-link">
                                Match results
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links