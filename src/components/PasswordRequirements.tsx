import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { HelpOutline } from '@mui/icons-material';
import { PASSWORD_REQUIREMENTS } from '@/constants/auth';

const PasswordRequirements = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const closeDialog = () => setDialogOpen(false);
  const openDialog = () => setDialogOpen(true);
  return (
    <>
      <div
        onClick={openDialog}
        className="text-secondary-light dark:text-secondary-dark mb-[22px] cursor-pointer"
      >
        <HelpOutline fontSize="medium" color="inherit" />
      </div>
      <Dialog open={dialogOpen} maxWidth="md" onClose={closeDialog}>
        <div className="bg-white dark:bg-black min-w-[500px] p-[24px] rounded-[4px] text-primary-light dark:text-primary-dark">
          <h3 className="mb-[24px] text-2x font-bold">
            Password should match such criterias:
          </h3>
          <ul className="ml-[20px]">
            {PASSWORD_REQUIREMENTS.map((req) => (
              <li className="list-disc">{req};</li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default PasswordRequirements;
