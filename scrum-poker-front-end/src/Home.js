import * as React from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/system';
import { randomBytes } from 'crypto';


export function Home(props) {

    const [open, setOpen] = React.useState(false);    
    const [form, setForm] = React.useState({ name: ""});

    const [cookies, setCookie] = useCookies();

    const setUserId = () => {
        cookies.user ?? setCookie('user', randomBytes(16).toString("hex"));
    };

    function handleSubmit(event) {

        event.preventDefault()

        handleClose()

        // TODO api call
        console.log({
            type: 'create_room',
            user_id: cookies.user,
            user_display_name: form.name
        });
    }

    const handleClose = () => {
        setOpen(false);
    };


    const handleOpen = () => {
        setOpen(true);
    }


    const handleChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    };
    return (<Box {...props}>

        <Typography component="h1" variant="h5">
            Create your planning room and invite others with a single click
            {setUserId()}
        </Typography>

        <Button
            type="submit"
            fullWidth
            onClick={handleOpen}
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
        >
            CREATE ROOM
        </Button>

        <Dialog open={open} onClose={handleOpen} >
            <DialogTitle> Create your room </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    All we need is a display name.
                </DialogContentText>

                <form component={form} onSubmit={handleSubmit}>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Display name"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                        variant="standard" />

                    <DialogActions>
                        <Button onClick={handleClose}>CANCEL</Button>
                        <Button type='submit' >CREATE ROOM</Button>
                    </DialogActions>
                </form>
            </DialogContent>


        </Dialog>

    </Box>

    );
}
