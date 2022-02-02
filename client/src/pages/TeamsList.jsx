import React, {Component} from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateTeam extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/teams/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteTeam extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the team ${this.props.id} permanently?`,
            )
        ) {
            api.deleteTeamById(this.props.id).catch(() => {
                window.alert("Error occurred while deleting team")
            })
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class TeamsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})

        await api.getAllTeams().then(teams => {
            this.setState({
                teams: teams.data.data,
                isLoading: false,
            })
        }).catch(() => {
            window.alert("Error occurred while fetching teams")
        })
    }

    render() {
        const {teams, isLoading} = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'League',
                accessor: 'league',
                Cell: props => <span>{props?.value}</span>,
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteTeam id={props.original._id}/>
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateTeam id={props.original._id}/>
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!teams.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={teams}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default TeamsList