import axios from "./axios";

export const createTaskRequest =(task) => {
    return axios.post("/tasks", task);
}

export const getAllTasksRequest = () => {
    return axios.get("/tasks");
}

export const deleteTaskReuest = (id) => {
    return axios.delete(`/tasks/${id}`);
}

export const getTaskByIdRequest = (id) => {
    return axios.get(`/tasks/${id}`);
}

export const updateTaskRequest = (id, task) => {
    return axios.put(`/tasks/${id}`, task);
}
