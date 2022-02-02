import React, { useState } from 'react'
function TeamVs(){
    const [firstTeam, setFirstTeam] = useState("")
    const [secondTeam, setSecondTeam] = useState("")
    const [firstTeamScore, setFirstTeamScore] = useState("")
    const [secondTeamScore, setSecondTeamScore] = useState("")
    function teamBattle(){
        const team1el = document.querySelector("#team1")
        const team2el = document.querySelector("#team2")
        const team1 = team1el.options[team1el.selectedIndex].textContent
        const team2 = team2el.options[team2el.selectedIndex].textContent
        console.log(team1, team2)
        const team1score = Math.ceil(Math.random()*5)
        const team2score = Math.ceil(Math.random()*5)
        setFirstTeam(team1)
        setSecondTeam(team2)
        setFirstTeamScore(team1score)
        setSecondTeamScore(team2score)
        

    }
    return (
        <div className="vs">
        <h1>TeamVs</h1>
       <select id="team1">
           <option>Nepal</option>
           <option>Team 2</option>
           <option>Team 3</option>
       </select>
       <button onClick={teamBattle}>Start</button>
       <select id="team2">
           <option>India</option>
           <option>Team 2</option>
           <option>Team 3</option>
       </select>
       <h1>{firstTeam}: {firstTeamScore} VS {secondTeam}: {secondTeamScore}</h1>
        </div>
    )
}
export default TeamVs