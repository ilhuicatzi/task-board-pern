import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";
import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const { user, formatDate } = useAuth();
  const { tasks } = useTask();
  const result = tasks.length;
  return (
    <div className="flex justify-center items-center h-[calc(100vh-40px)] w-[calc(100vw-72px)]">
      <Card>
        <div className="flex flex-col justify-between items-center ">
          <img
            src={user?.gravatar}
            alt="imagen-user"
            className="rounded-full bg-cover mb-8"
          />
          <div className="border-2 px-8 py-4 rounded-2xl hover:border-stone-900 border-gray-950 flex flex-col items-center">
            <h2 className="text-3xl font-semibold ">{user?.username}</h2>
            <p className="font-mono italic text-gray-400 hover:text-blue-500">
              {user?.email}
            </p>
            <p className="hover:text-teal-500 flex justify-end text-zinc-500 text-xs mt-8">
              {formatDate(user?.created_at)}
            </p>
          </div>
        </div>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} >
                <Link to={`/tasks/edit/${task.id}`} className="flex text-[calc(10px)] hover:text-blue-600 justify-between text-slate-400 ">
                <p>{task.title}</p>
                <p>{formatDate(task.created_at)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default ProfilePage;
