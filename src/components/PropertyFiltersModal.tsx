import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import { Tune } from '@mui/icons-material';
import { PropertyFilters } from '@/types/property';
import PropertyPreferencesForm from './Preferences/Form';

type PropertyFiltersModalProps = {
  buttonText: string;
  submitText: string;
  onSubmit(payload: PropertyFilters): void;
  defaultValues?: PropertyFilters;
  submitSuccess: boolean;
};

const PropertyFiltersModal = ({
  buttonText,
  onSubmit,
  defaultValues,
  submitText,
  submitSuccess,
}: PropertyFiltersModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (submitSuccess) {
      console.log('close');
      closeModal();
    }
  }, [submitSuccess]);

  return (
    <>
      <Modal open={modalOpen} onClose={closeModal}>
        <div className="mx-auto text-primary-light dark:text-primary-dark my-[24px] w-2/3 rounded-[16px] py-[16px] px-[24px] bg-white dark:bg-black overflow-scroll max-h-[calc(100%-48px)]">
          <PropertyPreferencesForm
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            submitText={submitText}
          />
        </div>
      </Modal>
      <button
        onClick={openModal}
        className="bg-bg-light transition-all hover:bg-primary dark:hover:bg-primary flex p-[10px] gap-[8px] dark:bg-bg-dark rounded-[10px]"
      >
        <Tune
          sx={{
            width: 18,
            height: 18,
          }}
          color="inherit"
        />
        <p className="text-xs">{buttonText}</p>
      </button>
    </>
  );
};

export default PropertyFiltersModal;
