import React from "react";

export const SingleTodoItem = ({
  taskId,
  taskIndex,
  isLoading,
  title,
  description,
  isComplete,
  updateTaskHandler,
  deleteTaskHandler,
}) => {
  return (
    <div className="mt-3">
      <div className="card bg-primary text-white">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end mt-3">
            <button
              className="btn btn-success"
              onClick={() => {
                updateTaskHandler(taskId, taskIndex);
              }}
              disabled={isLoading.update}
            >
              {isComplete ? "Remove Mark as Complete" : "Mark as Complete"}
            </button>
            <button
              className="btn btn-error"
              onClick={() => {
                deleteTaskHandler(taskId);
              }}
              disabled={isLoading.delete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
