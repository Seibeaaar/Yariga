import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { SignUpData } from "@/types/auth";
import Button from "@/components/Button";

const SignUpForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSignUp = (data: SignUpData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSignUp)} className="mt-[20px]">
      <div className="md:flex items-center gap-[8px]">
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange } }) => (
            <Input
              label="First name"
              onChange={onChange}
              placeholder="Your first name"
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange } }) => (
            <Input
              label="Last name"
              onChange={onChange}
              placeholder="Your last name"
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <Input
            type="email"
            label="Email"
            onChange={onChange}
            placeholder="Your email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <Input
            label="Password"
            type="password"
            onChange={onChange}
            placeholder="Your password"
          />
        )}
      />
      <div className="my-[20px]">
        <Button type="submit" text="Sign In" />
      </div>
    </form>
  );
};

export default SignUpForm;
