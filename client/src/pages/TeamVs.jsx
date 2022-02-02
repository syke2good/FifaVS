import React, {useEffect, useState} from 'react'
import {getAllTeams, insertMatch} from "../api";
import styled from 'styled-components'
import {Button, Card, Form} from "react-bootstrap";

const MAX_SCORE = 6

const HomeWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  .select-card, .result-card {
    width: 100vw;
    max-width: 600px;
    margin-top: 1rem;
  }

  .start-button {
    margin: 0 10px;
  }

  .team-select {
    width: 150px;
  }
`

const TeamSelectContainer = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ResultCardBodyWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .team-score {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .team-score > div:first-child {
    font-size: 1.5rem;
  }

  .team-score > div:nth-child(2) {
    font-size: 2rem;
  }

  .vs-div {
    font-size: 4rem;
    color: #0069d9;
    margin: 0 2rem;
  }
`

function TeamVs() {
    const [teams, setTeams] = useState([])

    const [firstTeam, setFirstTeam] = useState("")
    const [secondTeam, setSecondTeam] = useState("")

    const [firstTeamScore, setFirstTeamScore] = useState()
    const [secondTeamScore, setSecondTeamScore] = useState()
    const [resultText, setResultText] = useState("")

    const teamBattle = () => {
        if (!firstTeam || !secondTeam) {
            window.alert("Please select teams.")
            return
        }
        if (firstTeam === secondTeam) {
            window.alert("Please select different teams.")
            return
        }

        const teamOneScore = Math.ceil(Math.random() * MAX_SCORE)
        const teamTwoScore = Math.ceil(Math.random() * MAX_SCORE)

        setFirstTeamScore(teamOneScore)
        setSecondTeamScore(teamTwoScore)

        if (teamOneScore === teamTwoScore) {
            setResultText("It's draw!")
        } else if (teamOneScore > teamTwoScore) {
            setResultText(`${firstTeam} WON!`)
        } else {
            setResultText(`${secondTeam} WON!`)
        }

        insertMatch({
            "teamOneName": firstTeam,
            "teamTwoName": secondTeam,
            teamOneScore,
            teamTwoScore
        })
            .then(() => {
            }).catch(() => {
            window.alert("Error occurred while uploading match data.")
        })
    }

    const handleFirstTeamChange = ({target}) => {
        setFirstTeam(target.value)
    }

    const handleSecondTeamChange = ({target}) => {
        setSecondTeam(target.value)
    }

    useEffect(() => {
        getAllTeams().then(({data}) => {
            setTeams(data.data)
        }).catch(_ => {
            window.alert("Error occurred while fetching teams, please reload this window to try again.")
        })
    }, [])

    if (!teams) {
        return <div>Loading...</div>
    }

    return (
        <HomeWrapper>
            <Card className="text-center select-card">
                <Card.Header>TEAM VS</Card.Header>
                <Card.Body>
                    <Card.Title>Ready to play a match between you favorite team?</Card.Title>
                    <Card.Text>
                        Just select teams from the dropdown menu and click Play!
                    </Card.Text>

                    <TeamSelectContainer>
                        <Form.Control as="select" value={firstTeam} onChange={handleFirstTeamChange}
                                      className="team-select">
                            <option disabled={true} value=""/>
                            {teams && teams.map(team => (
                                <option key={team._id} value={team.name}>
                                    {team.name}
                                </option>
                            ))}
                        </Form.Control>

                        <Button onClick={teamBattle} className="start-button" variant="primary">
                            Play
                        </Button>

                        <Form.Control as="select" value={secondTeam} onChange={handleSecondTeamChange}
                                      className="team-select">
                            <option disabled={true} value=""/>
                            {teams && teams.map(team => (
                                <option key={team._id} value={team.name}>
                                    {team.name}
                                </option>
                            ))}
                        </Form.Control>
                    </TeamSelectContainer>

                </Card.Body>
            </Card>

            {resultText && <Card className="text-center result-card">
                <Card.Header>{resultText}</Card.Header>
                <Card.Body>
                    <ResultCardBodyWrapper>
                        <div className="team-score">
                            <div>{firstTeam}</div>
                            <div>{firstTeamScore}</div>
                        </div>

                        <div className="vs-div">VS</div>

                        <div className="team-score">
                            <div>{secondTeam}</div>
                            <div>{secondTeamScore}</div>
                        </div>
                    </ResultCardBodyWrapper>
                </Card.Body>
                <Card.Footer className="text-muted">Result added to database!</Card.Footer>
            </Card>}
        </HomeWrapper>
    )
}

export default TeamVs