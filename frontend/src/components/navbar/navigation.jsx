import {BiAddToQueue} from 'react-icons/bi'
import {LiaTasksSolid} from 'react-icons/lia'
import {FaCircleUser} from 'react-icons/fa6'

export const navigationPublic = [
    { name: "About", path: "/about", current: false },
    { name: "Login", path: "/login", current: false },
    { name: "Register", path: "/register", current: false },
]

export const navigationPrivate = [
    { name: "Profile", path: "/profile",icon: <FaCircleUser className='h-5 w-5' />, current: false },
    { name: "Tasks", path: "/tasks", icon: <LiaTasksSolid className='h-5 w-5' />, current: false },
    { name: "New Tasks", path: "/tasks/new", icon: <BiAddToQueue className='h-5 w-5' />, current: false },
  ];