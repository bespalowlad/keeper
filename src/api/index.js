import axios from 'axios';

const BASE_ENDPOINT = `http://localhost:3001`

export const fetchLists = () => {
    return axios.get(`${BASE_ENDPOINT}/lists?_expand=color&_embed=tasks`)
}

export const fetchColors = () => {
    return axios.get(`${BASE_ENDPOINT}/colors`)
}

export const deleteMenuItem = (id) => {
    return axios.delete(`${BASE_ENDPOINT}/lists/${id}`)
}

export const addMenuItem = (menuObj) => {
    return axios.post(`${BASE_ENDPOINT}/lists`, menuObj)
}

export const updateMenuTitle = (listId, title) => {
    return axios.patch(`${BASE_ENDPOINT}/lists/${listId}`, { name: title })
}

export const updateTaskText = (id, text) => {
    return axios.patch(`${BASE_ENDPOINT}/tasks/${id}`, { text });
}

export const removeTask = (id) => {
    return axios.delete(`${BASE_ENDPOINT}/tasks/${id}`);
}

export const updateStatusTask = (id, completed) => {
    return axios.patch(`${BASE_ENDPOINT}/tasks/${id}`, {
        completed: !completed
    });
}