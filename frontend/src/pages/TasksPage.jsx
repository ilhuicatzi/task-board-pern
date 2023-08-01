import { useEffect } from "react"
import { TasksCard } from "../components/tasks/TasksCard"
import { useTask } from "../context/TaskContext"

function TasksPage() {
  const { tasks, getAllTasks} = useTask()

  useEffect(() => {
    getAllTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <p className="text-2xl font-semibold"> No tasks found </p>
      </div>
    )
  }

  return (
    <div className="grid sm:px-20 md:px-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 my-4">
        {tasks.map((task) => (
          <TasksCard task={task} key={task.id} />
        ))}
    </div>
  )
}

export default TasksPage