import { Controller, useForm } from 'react-hook-form';
import { SIGN_UP_VALIDATION_SCHEMA } from '@/validators/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { SignUpData } from '@/types/auth';
import GoogleIcon from '@/assets/icons/Google.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux';
import Loader from '../Loader';
import { signUp } from '@/redux/actions/auth';
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

  const dispatch = useDispatch<AppDispatch>();
  const { authPending, authError } = useSelector(
    (state: RootState) => state.auth,
  );
  const onSignUp = (data: SignUpData) => dispatch(signUp(data));

  return (
    <>
      <Loader showLoader={authPending} />
      <Popup
        vertical="top"
        horizontal="right"
        title="Oops. Something wrong"
        severity="error"
        showPopup={!!authError}
        content={authError as string}
      />
      <form onSubmit={handleSubmit(onSignUp)} className="mt-[36px]">
        <div className="md:flex items-center gap-[8px]">
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange } }) => (
              <Input
                label="First name"
                onChange={onChange}
                placeholder="Your first name"
                error={errors.firstName?.message}
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
                error={errors.lastName?.message}
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
          <Button type="submit" text="Sign Up" />
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

export default SignUpForm;
