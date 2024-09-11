import { Controller, useForm } from 'react-hook-form';
import { LOGIN_VALIDATION_SCHEMA } from '@/validators/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { LoginData } from '@/types/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { login } from '@/redux/actions/auth';
import GoogleButton from '../GoogleButton';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
  });

  const dispatch = useDispatch<AppDispatch>();
  const onLogin = (data: LoginData) => dispatch(login(data));

  return (
    <form onSubmit={handleSubmit(onLogin)} className="mt-[36px]">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <Input
            type="email"
            label="Email"
            onChange={onChange}
            placeholder="Your email"
            error={errors.email?.message}
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
            error={errors.password?.message}
          />
        )}
      />
      <div className="my-[20px] flex flex-col gap-[24px]">
        <Button type="submit" text="Login" />
        <GoogleButton />
      </div>
    </form>
  );
};

export default LoginForm;
