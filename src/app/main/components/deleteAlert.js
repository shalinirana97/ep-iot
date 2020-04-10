import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteAlertDialogSlide(props) {
    const { openDeleteModal, handleDelete, deleteText} = props

    const handleClose = () => {
        handleDelete(false)
    };

    return (
        <div>
            <Dialog
                open={openDeleteModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{deleteText} Remove Confirmation ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this {deleteText}
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} color="primary" >
                        No
          </Button>
                    <Button variant="contained" onClick={handleClose} color="secondary">
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
