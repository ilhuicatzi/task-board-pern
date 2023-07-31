
import { Button, Card, Input, Label } from "../components/ui";
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthContext'

function RegisterPage() {

  const {register, handleSubmit, formState: {errors} } = useForm()
  const {signup, errors:signupErrors} = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data)
    if (user) {
      navigate('/profile')
    }
  })

  return (
    <div className="h-[calc(100vh-70px)] flex justify-center items-center">
      <Card>
        {
          signupErrors && signupErrors.map((error,index) => (
            <p className="text-red-500 text-center"
            key={index}>{error}</p>
          ))
        }
        <h3 className="text-3xl font-semibold my-4">Register</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input placeholder="Username"
          {...register('username',{
            required: true,
          })} />

          {
            errors.username && <p className="text-red-500">Username is required</p>
          }
          
          <Label htmlFor="email">Email</Label>
          <Input placeholder="Email" type="email"
          {...register('email',{
            required: true,
          })} />

          {
            errors.email && <p className="text-red-500">Email is required</p>
          }

          <Label htmlFor="password">Password</Label>
          <Input placeholder="Password" type="password"
          {...register('password',{
            required: true,
          })} />

          {
            errors.password && <p className="text-red-500">Password is required</p>
          }

          <Button>Register</Button>
        </form>

        <div>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" 
            className="text-indigo-500 hover:underline hover:text-indigo-400 font-bold">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
