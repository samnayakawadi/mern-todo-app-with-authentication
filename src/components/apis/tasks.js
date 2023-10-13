import axios from "axios";
import { globalData } from "../../App";

const addNewTask = (data) => {
  return axios.post(globalData.server + "/tasks/create", data, {
    withCredentials: true,
  });
};

const listAllTasks = () => {
  return axios.get(globalData.server + "/tasks/all", {
    withCredentials: true,
  });
};

const updateTask = (taskId) => {
  return axios.put(globalData.server + "/tasks/update?taskid=" + taskId, {}, {
    withCredentials: true,
  });
};

const deleteTask = (taskId) => {
  return axios.delete(
    globalData.server + "/tasks/delete?taskid=" + taskId,
    {
      withCredentials: true,
    },
  );
};

const tasks = {
  addNewTask,
  listAllTasks,
  updateTask,
  deleteTask,
};

export default tasks;
