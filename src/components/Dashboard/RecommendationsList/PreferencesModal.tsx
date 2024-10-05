import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getRecommendations } from '@/redux/actions/property';
import {
  selectUser,
  selectsetPreferencesSuccess,
} from '@/redux/selectors/user';
import { Modal } from '@mui/material';
import { setPreferences } from '@/redux/actions/user';
import PropertyPreferencesForm from '../../Preferences/Form';
import { Tenant } from '@/types/user';

type PreferencesModalProps = {
  open: boolean;
  onClose(): void;
};

const PreferencesModal: FC<PreferencesModalProps> = ({ open, onClose }) => {
  const user = useSelector(selectUser) as Tenant | null;
  const setPreferencesSuccess = useSelector(selectsetPreferencesSuccess);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (setPreferencesSuccess) {
      onClose();
      dispatch(getRecommendations());
    }
  }, [setPreferencesSuccess, dispatch]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="mx-auto text-primary-light dark:text-primary-dark my-[24px] w-2/3 rounded-[16px] py-[16px] px-[24px] bg-white dark:bg-black overflow-scroll max-h-[calc(100%-48px)]">
        <PropertyPreferencesForm
          defaultValues={user?.preferences}
          onSubmit={setPreferences}
        />
      </div>
    </Modal>
  );
};

export default PreferencesModal;
