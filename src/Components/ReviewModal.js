//MUI imports
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function ReviewModal({open, setOpen}) {

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
            <DialogTitle>Book Name Here</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae odio atque dignissimos ex reiciendis, quisquam dolores necessitatibus perspiciatis, labore exercitationem ratione officiis odit ullam aliquid. Possimus consectetur nihil sapiente quam laudantium aut explicabo, obcaecati reprehenderit!
                </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>

      </Dialog>
    )
}

export default ReviewModal
