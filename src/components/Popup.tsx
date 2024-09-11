import { Snackbar, Alert, AlertTitle, AlertColor } from '@mui/material';
import { FC, useState, useEffect } from 'react';

type PopupProps = {
  title: string;
  content: string;
  showPopup: boolean;
  vertical: 'top' | 'bottom';
  horizontal: 'center' | 'right' | 'left';
  severity: AlertColor;
};

const Popup: FC<PopupProps> = ({
  title,
  content,
  showPopup,
  vertical,
  horizontal,
  severity,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (showPopup !== open) {
      setOpen(showPopup);
    }
  }, [showPopup]);

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
    >
      <Alert variant="filled" severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </Snackbar>
  );
};

export default Popup;
