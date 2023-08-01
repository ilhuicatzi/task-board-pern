import { createContext, useState, useContext } from "react";
import {
  getAllTasksRequest,
  deleteTaskReuest,
  createTaskRequest,
  updateTaskRequest,
  getTaskByIdRequest
} from "../api/tasks.api";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const getAllTasks = async () => {
    try {
      const res = await getAllTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([...tasks, res.data]);
      return res.data;
    } catch (error) {
      console.log(error);
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskReuest(id);
      if (res.status === 204) {
        setTasks(tasks.filter((task) => task.id !== id)); // Delete task from state
      }
    } catch (error) {
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };
  
  const getTaskById = async (id) => {
    try {
      const res = await getTaskByIdRequest(id);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      return res.data;
    } catch (error) {
      if (error.response) {
        setError([error.response.data.message]);
      }
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        getAllTasks,
        deleteTask,
        createTask,
        getTaskById,
        updateTask,
        formatDate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
