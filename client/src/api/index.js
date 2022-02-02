import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTeam = payload => api.post(`/team`, payload)
export const getAllTeams = () => api.get(`/teams`)
export const updateTeamById = (id, payload) => api.put(`/team/${id}`, payload)
export const deleteTeamById = id => api.delete(`/team/${id}`)
export const getTeamById = id => api.get(`/team/${id}`)
export const getMatches = () => api.get('/matches')
export const insertMatch = payload => api.post ('/match', payload)

const apis = {
    insertTeam,
    getAllTeams,
    updateTeamById,
    deleteTeamById,
    getTeamById,
    getMatches,
    insertMatch
}

export default apis