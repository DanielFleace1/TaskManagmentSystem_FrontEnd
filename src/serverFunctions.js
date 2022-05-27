import axios from 'axios'

//  Use below to run front end locally with back end
// const baseURL = 'http://localhost:3001/'
const baseURL = '/'

const getTask = async () => {
    const response = await axios.get(`${baseURL}api/task`)
    return response.data
}

const addTask = async (obj) => {
    const response = await axios.post(`${baseURL}api/task`, obj)
    return response.data
}

export default { getTask, addTask }
