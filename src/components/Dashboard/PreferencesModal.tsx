import { FC } from 'react';
import { Modal } from '@mui/material';
import { setPreferences } from '@/redux/actions/user';
import PropertyPreferencesForm from '../Preferences/Form';

type PreferencesModalProps = {
  open: boolean;
  onClose(): void;
};

const PreferencesModal: FC<PreferencesModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="mx-auto text-primary-light dark:text-primary-dark my-[24px] w-2/3 rounded-[16px] py-[16px] px-[24px] bg-white dark:bg-black overflow-scroll max-h-[calc(100%-48px)]">
        <PropertyPreferencesForm onSubmit={setPreferences} />
      </div>
    </Modal>
  );
};

export default PreferencesModal;
