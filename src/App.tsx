import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  age: number;
  gender: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault();
    return console.log("data", data);
  };

  console.log("errors", errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("age", { required: true })} />
        <input {...register("name", { required: true })} />
        <select {...register("gender", { required: true })}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <button type="submit">Click</button>
        {errors.age && <p>{errors?.age?.message}</p>}
      </form>
    </div>
  );
};

export default App;
