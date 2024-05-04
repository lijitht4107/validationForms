import React from 'react'
import {useForm} from 'react-hook-form'
import Header from './Header';

const VlidateLogin = () => {
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
        
      };
  return (
    <div>
        <Header/>
       <form onSubmit={handleSubmit(onSubmit)} className="register-form p-5">
        <h1 className="regform-heading p-3">Regisration form</h1>
        
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
    </div>
  )
}

export default VlidateLogin
