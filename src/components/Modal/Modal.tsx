import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactNode, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { XMarkSvg } from '../../assets/svgs/XMarkSvg';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const Modal = ({ open, onClose, title, children }: Props) => {
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 11,
          top: 11,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <XMarkSvg style={{ width: 24, height: 24 }} />
      </IconButton>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          style={{ whiteSpace: 'break-spaces', fontSize: 14 }}
        >
          {children}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
