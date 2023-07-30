import { Button, Card, Input, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await axios.post("http://localhost:4000/api/signin", data, {
      withCredentials: true,
    });
    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
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
