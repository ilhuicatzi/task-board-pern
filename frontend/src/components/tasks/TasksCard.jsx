import { Card, Button } from "./TasksComponents";
import { TbTrashXFilled, TbPencil } from "react-icons/tb";
import { useTask } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";

export function TasksCard({ task }) {
  const { deleteTask, formatDate } = useTask();
  const navigate = useNavigate();
  return (
    <Card>
      <div>
        <h2 className="text-lg font-semibold"> {task.title} </h2>
        <hr className="mb-2" />
        <p className="text-gray-500 text-sm"> {task.description} </p>
      </div>
      <div className="flex justify-end items-center gap-x-2">
        <Button 
        onClick={() => {
          navigate(`/tasks/edit/${task.id}`)
        }}
        className="bg-sky-800 hover:bg-sky-600  rounded-full">
          {" "}
          <TbPencil />{" "}
        </Button>
        <Button
          className="bg-red-800 hover:bg-red-600 rounded-full"
          onClick={async () => {
            if (window.confirm("Do you want to delete this task?")) {
              await deleteTask(task.id);
            }
          }}
        >
          {" "}
          <TbTrashXFilled />{" "}
        </Button>
      </div>
      <div className="flex justify-end mt-2">
        <p className="text-gray-500 text-xs"> {formatDate(task.created_at)} </p>
      </div>
    </Card>
  );
}

export default TasksCard;
