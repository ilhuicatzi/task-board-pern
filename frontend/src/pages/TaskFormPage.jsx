import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { TbArrowBack } from "react-icons/tb";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, getTaskById, updateTask, error } = useTask();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let res;
    if (!params.id) {
      res = await createTask(data);
    } else {
      res = await updateTask(params.id, data);
    }
    if (res) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      //console.log({ id: params.id, message: "Edit task" });
      getTaskById(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, [params.id]);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)] w-[calc(100vw-64px)] ">
      <Card>
        <h2 className="mb-8 text-3xl font-semibold text-center">
          {params.id ? "Edit task" : "Create task"}
        </h2>
        {error && <p className="text-red-500 text-center"> {error} </p>}
        <form onSubmit={onSubmit}>
          <Label htmlFor="title"> Title </Label>
          <Input
            placeholder="Title"
            autoFocus
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500"> Title is required </p>}

          <Label htmlFor="description"> Description </Label>
          <Textarea
            placeholder="Description"
            rows={4}
            {...register("description")}
          />

          <div className="flex justify-between items-center">
            <Button className="px-3 py-2 bg-sky-700 hover:bg-sky-500 rounded-lg">
              {params.id ? "Edit task" : "Create task"}
            </Button>
            <Link to="/tasks" className=" bg-teal-700 hover:bg-teal-500 rounded-full p-2 mt-1">
              <TbArrowBack className="w-6 h-6" />
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
