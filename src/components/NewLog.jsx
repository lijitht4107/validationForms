import { useForm } from "react-hook-form";
import Header from "./Header";

export default function NewLog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    // alert(`user name is ${data.userName}, email id :${data.email}, password :${data.password}`)
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="register-form p-5">
        <h1 className="regform-heading p-3">Regisration form</h1>
        <input
          {...register("userName", {
            required: "Please enter your first name.",
            maxLength: {value: 20, message: "max charectors must be less than 20",},
          })}
          placeholder="first name" // custom message
        />
        <span>{errors.userName?.message}</span>
        <input
          type="number"
          {...register("age", {
            min: { value: 18, message: "only 18+ people allowed here" },
            max: { value: 99, message: "max age 99 only allowed here" },
          })}
          placeholder="age"
        />
        <input
          type="email"
          {...register(
            "email",
            {
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "email not valied",
              },
            },
            {
              required: "Please enter your email id.",
            }
          )}
          placeholder="email id" // custom message
        />
        <span>{errors.email?.message}</span>
        <input
          type="password"
          {...register("password", {
            required: "Please enter your password.",
            minLength: {
              value: 4,
              message: "must have 4 charectors",
            },
          })}
          placeholder="password" // custom message
        />
        <span>{errors.password?.message}</span>
        <input type="submit" />
      </form>
    </>
  );
}
