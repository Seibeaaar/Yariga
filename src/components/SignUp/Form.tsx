import { Controller, useForm } from 'react-hook-form';
import { SIGN_UP_VALIDATION_SCHEMA } from '@/validators/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectAuthError, selectAuthPending } from '@/redux/selectors/auth';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { SignUpData } from '@/types/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { signUp } from '@/redux/actions/auth';
import GoogleButton from '../GoogleButton';
import Loader from '../Loader';
import Popup from '../Popup';

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(SIGN_UP_VALIDATION_SCHEMA),
  });

  const authPending = useSelector(selectAuthPending);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch<AppDispatch>();
  const onSignUp = (data: SignUpData) => dispatch(signUp(data));

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
      <form onSubmit={handleSubmit(onSignUp)} className="mt-[36px]">
        <div className="md:flex items-center gap-[8px]">
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, value } }) => (
              <Input
                label="First name"
                onChange={onChange}
                value={value}
                placeholder="Your first name"
                error={errors.firstName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Last name"
                onChange={onChange}
                value={value}
                placeholder="Your last name"
                error={errors.lastName?.message}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              type="email"
              label="Email"
              onChange={onChange}
              value={value}
              placeholder="Your email"
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              type="password"
              onChange={onChange}
              value={value}
              placeholder="Your password"
              error={errors.password?.message}
            />
          )}
        />
        <div className="my-[20px] flex flex-col gap-[24px]">
          <Button type="submit" text="Sign Up" />
          <GoogleButton />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
