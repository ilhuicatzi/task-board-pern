import { Button, Card, Input, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { signin, errors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/profile");
    }

  });

  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center">
      <Card>

        {
          errors && errors.map((error,index) => (
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

          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />

          <Button>Login</Button>
        </form>

        <div className="flex items-center my-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 hover:underline hover:text-indigo-400 font-semibold"
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
