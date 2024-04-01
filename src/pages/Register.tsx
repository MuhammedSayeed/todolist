import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../components/ui/Input";
import InputErrorMessage from "../components/InputErrorMessage";
import { REGISTER_FORM } from "../data";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../validations";


const RegisterPage = () => {

  interface IFormInput {
    username: string;
    email: string;
    password: string;
  }
  

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({resolver : yupResolver(registerSchema)})
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }


  // RENDERS
  const renderRegisterForm = REGISTER_FORM.map(({ name, placeholder, type, validation }, idx) => {
    return <div key={idx}>
      <Input type={type} {...register(name, validation)} placeholder={placeholder} />
      {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
    </div>
  })


  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-black text-3xl font-semibold">
        Register to get access!
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        {renderRegisterForm}

        <button className="bg-teal-950">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage