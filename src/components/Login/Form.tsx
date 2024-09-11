import { Controller, useForm } from 'react-hook-form';
import { LOGIN_VALIDATION_SCHEMA } from '@/validators/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { LoginData } from '@/types/auth';
import GoogleIcon from '@/assets/icons/Google.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux';
import Popup from '../Popup';
import Loader from '../Loader';
import { login } from '@/redux/actions/auth';

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
  const { authError, authPending } = useSelector(
    (state: RootState) => state.auth,
  );

  const onLogin = (data: LoginData) => dispatch(login(data));

  return (
    <>
      <Loader showLoader={authPending} />
      <Popup
        title="Oops. Something went wrong"
        content={authError as string}
        showPopup={!!authError}
        vertical="top"
        horizontal="right"
        severity="error"
      />
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
          <Button
            variant="outlined"
            leftIcon={GoogleIcon}
            text="Continue with Google"
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
