import React, {useEffect, useState} from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`

function MatchList() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        api.getMatches().then(({data}) => {
            if (!data || !data.data) {
                alert("No matches data found.")
                return
            }
            let matchesData = data.data.map(match => ({
                ...match,
                winner: match.teamOneScore === match.teamTwoScore ?
                    "Draw" : match.teamOneScore > match.teamTwoScore ?
                        match.teamOneName : match.teamTwoName
            }))
            setMatches(matchesData)
        }).catch(() => {
            window.alert("Error occurred while fetching matches. Please reload to try again.")
        })
    }, [])


    const columns = [
        {
            Header: 'Opponent1',
            accessor: 'teamOneName',
            filterable: true,
        },
        {
            Header: 'Opponent2',
            accessor: 'teamTwoName',
            filterable: true,
        },
        {
            Header: 'Opponent1 Score',
            accessor: 'teamOneScore',
            filterable: true,
        },
        {
            Header: 'Opponent2 Score',
            accessor: 'teamTwoScore',
            filterable: true,
        },
        {
            Header: 'Winner',
            accessor: 'winner',
            filterable: true,
        },
        {
            Header: "Played On",
            accessor: 'createdAt',
            filterable: true
        }
    ]

    return (
        <Wrapper>
            <ReactTable
                data={matches}
                columns={columns}
                loading={!matches}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        </Wrapper>
    )
}


export default MatchList