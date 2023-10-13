import { SingleTodoItem } from "./SingleTodoItem";
import listTodo from "./hooks/listTodo";

const ListTodos = () => {
  const { isLoading, data, updateTaskHandler, deleteTaskHandler } = listTodo();

  return isLoading.get ? (
    <div className="mt-3">
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <p>Fetching All Tasks...</p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      {data.map((singleTask, singleTaskIndex) => {
        return (
          <SingleTodoItem
            taskId={singleTask._id}
            taskIndex={singleTaskIndex}
            isLoading={isLoading}
            title={singleTask.title}
            description={singleTask.description}
            isComplete={singleTask.isComplete}
            updateTaskHandler={updateTaskHandler}
            deleteTaskHandler={deleteTaskHandler}
          />
        );
      })}
    </div>
  );
};

export default ListTodos;
