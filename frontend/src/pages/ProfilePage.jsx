import { useAuth } from "../context/AuthContext"
import { Card } from "../components/ui"


function ProfilePage() {
  const {user, formatDate} = useAuth()
  return (
    <div className="flex justify-center items-center h-[calc(100vh-128px)]">
      <Card>
        <div className="flex flex-col justify-between items-center ">
        <img src={user?.gravatar} alt="imagen-user" className="rounded-full bg-cover mb-8" />
        <div className="border-2 px-8 py-4 rounded-2xl hover:border-stone-900 border-gray-950 flex flex-col items-center">
        <h2 className="text-3xl font-semibold ">{ user?.username}</h2>
        <p className="font-mono italic text-gray-400 hover:text-blue-500">{user?.email}</p>
        <p className="hover:text-teal-500 flex justify-end text-zinc-500 text-xs mt-8">{formatDate(user?.created_at)}</p>
        </div>
        </div>
      </Card>
    </div>
  )
}

export default ProfilePage