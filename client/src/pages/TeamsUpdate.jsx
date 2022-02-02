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

class TeamsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdateTeam = async () => {
        const {id, name, rating, league} = this.state
        const payload = {name, rating, league}

        await api.updateTeamById(id, payload).then(_ => {
            window.alert(`Team updated successfully`)
            this.setState({
                name: '',
                rating: '',
                league: '',
            })
        })
    }

    componentDidMount = async () => {
        const {id} = this.state
        const team = await api.getTeamById(id)

        this.setState({
            name: team.data.data.name,
            rating: team.data.data.rating,
            league: team.data.data.league
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

                <Button onClick={this.handleUpdateTeam}>Update Team</Button>
                <CancelButton href={'/teams/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TeamsUpdate