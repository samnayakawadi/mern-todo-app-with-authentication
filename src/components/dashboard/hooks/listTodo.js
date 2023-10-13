import React, { useEffect, useState } from "react";
import tasks from "../../apis/tasks";
import { toast } from "react-toastify";

const listTodo = () => {
  const defaultIsLoading = {
    get: false,
    update: false,
    delete: false,
  };
  const [isLoading, setIsLoading] = useState(defaultIsLoading);
  const defaultData = [];
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    setIsLoading((prevState) => {
      return { ...prevState, get: true };
    });
    try {
      const res = await tasks.listAllTasks();
      setData(res.data.data);
      setIsLoading((prevState) => {
        return { ...prevState, get: false };
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading((prevState) => {
        return { ...prevState, get: false };
      });
    }
  };

  const updateTaskHandler = async (taskId, taskIndex) => {
    setIsLoading((prevState) => {
      return { ...prevState, update: true };
    });
    try {
      const res = await tasks.updateTask(taskId);
      toast.success(res.data.message);
      setData((prevState) => {
        prevState[taskIndex].isComplete = res.data.data.isComplete;
        return prevState;
      });
      setIsLoading((prevState) => {
        return { ...prevState, update: false };
      });
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading((prevState) => {
        return { ...prevState, update: false };
      });
    }
  };

  const deleteTaskHandler = async (taskId, taskIndex) => {
    setIsLoading((prevState) => {
      return { ...prevState, update: true };
    });
    try {
      const res = await tasks.deleteTask(taskId);
      toast.success(res.data.message);
      setData((prevState) => {
        return prevState.filter((singleTask) => {
          return singleTask._id !== taskId;
        });
      });
      setIsLoading((prevState) => {
        return { ...prevState, update: false };
      });
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading((prevState) => {
        return { ...prevState, update: false };
      });
    }
  };

  return { isLoading, data, updateTaskHandler, deleteTaskHandler };
};

export default listTodo;
