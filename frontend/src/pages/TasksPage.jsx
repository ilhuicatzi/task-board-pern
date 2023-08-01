import { useEffect } from "react";
import { TasksCard } from "../components/tasks/TasksCard";
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TasksPage() {
  const { tasks, getAllTasks } = useTask();
  tasks.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  // console.log(tasksTime)

  useEffect(() => {
    getAllTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)] flex-col text-lg sm:text-2xl">
        <p className=" font-semibold"> You have no tasks to display</p>
        <p className=" font-semibold">
          Do you want to
          <Link
            to="/tasks/new"
            className="hover:underline underline-offset-2 ml-1.5 hover:text-blue-700"
          >
            create one?
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start h-[calc(100vh-64px)] w-[calc(100vw-80px)]">
      <div className="grid sm:px-20 md:px-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 my-4 w-full">
        {tasks.map((task) => (
          <TasksCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
