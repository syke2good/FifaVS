import React, {Component} from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TeamsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            league: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({name})
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({rating})
    }

    handleChangeInputLeague = async event => {
        const league = event.target.value
        this.setState({league})
    }

    handleIncludeTeam = async () => {
        const {name, rating, league} = this.state
        const payload = {name, rating, league}

        await api.insertTeam(payload).then(_ => {
            window.alert(`Team inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                league: '',
            })
        }).catch(() => {
            window.alert(
                "An error occurred while inserting team. Make sure the team with same " +
                "name doesn't already exists or rating input is not string."
            )
        })
    }

    render() {
        const {name, rating, league} = this.state
        return (
            <Wrapper>
                <Title>Create Team</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>League: </Label>
                <InputText
                    type="text"
                    value={league}
                    onChange={this.handleChangeInputLeague}
                />

                <Button onClick={this.handleIncludeTeam}>Add Team</Button>
                <CancelButton href={'/teams/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TeamsInsert