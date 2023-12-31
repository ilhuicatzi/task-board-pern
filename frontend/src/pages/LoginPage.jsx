import { Button, Card, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signin, errors:errorsPost } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/tasks");
    }

  });

  return (
    <div className="h-[calc(80vh)] flex justify-center items-center w-[calc(100vw-72px)]">
      <Card>

        {
          errorsPost && errorsPost.map((error,index) => (
            <p className="text-red-500 text-center"
            key={index}>{error}</p>
          ))
        }

        <h3 className="text-3xl font-semibold my-4">Login</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500"> Email is required </p>}

          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500"> Password is required </p>
          )}

          <Button className="px-3 py-2 rounded-xl bg-sky-700 hover:bg-sky-500" >Login</Button>
        </form>

        <div className="flex items-center my-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="ml-1 text-sky-500 hover:underline hover:text-indigo-400 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
