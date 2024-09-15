import { Controller, useForm } from 'react-hook-form';
import { InputMask } from '@react-input/mask';
import { PROFILE_COMPLETE_SCHEMA } from '@/validators/user';
import { yupResolver } from '@hookform/resolvers/yup';
import ForwardedInput from '@/components/Input/Forwarded';
import Button from '@/components/Button';
import { USER_ROLE } from '@/types/user';
import Loader from '../Loader';
import Popup from '../Popup';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserCompleteError,
  selectUserCompletePending,
} from '@/redux/selectors/user';
import { completeUser } from '@/redux/actions/user';
import { UserCompleteRequest } from '@/types/user';

import { USER_ROLE_OPTIONS } from '@/constants/user';
import UserRoleCard from './RoleCard';
import { AppDispatch } from '@/redux';

const ProfileCompleteForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      dateOfBirth: '',
      role: USER_ROLE.Tenant,
      phoneNumber: '',
    },
    resolver: yupResolver(PROFILE_COMPLETE_SCHEMA),
  });
  const dispatch = useDispatch<AppDispatch>();
  const userCompletePending = useSelector(selectUserCompletePending);
  const userCompleteError = useSelector(selectUserCompleteError);

  const onSubmit = (data: UserCompleteRequest) => dispatch(completeUser(data));

  return (
    <>
      <Loader showLoader={userCompletePending} />
      <Popup
        title="Oops. Something went wrong"
        content={userCompleteError as string}
        showPopup={!!userCompleteError}
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[36px]">
        <div>
          <p className="text-sm font-medium mb-[4px]">
            You want to join Yariga to:
          </p>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, value } }) => (
              <div className="flex flex-col md:flex-row gap-[16px]">
                {USER_ROLE_OPTIONS.map((option) => (
                  <UserRoleCard
                    key={option.role}
                    option={option}
                    onSelect={() => onChange(option.role)}
                    selected={option.role === value}
                  />
                ))}
              </div>
            )}
          />
        </div>
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask="__.__.____"
              replacement={{ _: /\d/ }}
              component={ForwardedInput}
              value={value}
              onChange={onChange}
              placeholder="dd.mm.yyyy"
              label="Date of birth"
              error={errors.dateOfBirth?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <InputMask
              mask="+1 (___) ___-____"
              replacement={{ _: /\d/ }}
              component={ForwardedInput}
              value={value}
              onChange={onChange}
              placeholder="Valid phone number (e.g. +1 (111) 111-1111)"
              label="Phone number (United States)"
              error={errors.phoneNumber?.message}
            />
          )}
        />
        <div className="my-[20px] flex flex-col gap-[24px]">
          <Button type="submit" text="Complete profile" />
        </div>
      </form>
    </>
  );
};

export default ProfileCompleteForm;
