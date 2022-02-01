import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTeam = payload => api.post(`/team`, payload)
export const getAllTeams = () => api.get(`/teams`)
export const updateTeamById = (id, payload) => api.put(`/team/${id}`, payload)
export const deleteTeamById = id => api.delete(`/team/${id}`)
export const getTeamById = id => api.get(`/team/${id}`)

const apis = {
    insertTeam,
    getAllTeams,
    updateTeamById,
    deleteTeamById,
    getTeamById,
}

export default apis