import * as React from 'react';
import {
    Typography,
    Button, Dialog,
    DialogTitle, DialogContent,
    DialogContentText, TextField,
    DialogActions,
    Stack
} from '@mui/material';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/system';
import { randomBytes } from 'crypto';


export function Home(props) {

    const [open, setOpen] = React.useState(false)
    const [form, setForm] = React.useState({ name: "" })
    const [room, setRoom] = React.useState({ room_number: "" })
    const [cookies, setCookie] = useCookies()

    const setUserId = () => {
        cookies.user ?? setCookie('user', randomBytes(16).toString("hex"))
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

    function  handleEnterRoom(event) {
        event.preventDefault()
        // TODO api call to check if room exist
        console.log({
            type: 'enter_room',
            room_number: room.room_number
        });        

        // TODO go to the page enter room
    }

    function handleClose() {
        setOpen(false);
    }


    function handleOpen() {
        setOpen(true);
    }


    function handleChange(e) {
        setForm((prevForm) => (
            {
                ...prevForm,
                [e.target.name]: e.target.value
            })
        )
    }

    function handleRoomNumberChange(e) {
        setRoom((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        })
        )
    }


    return (

        <div>
            <Box {...props}>
                <Typography component="h1" variant="h5">
                    Create your planning room and invite others with a single click
                    {setUserId()}
                </Typography>

                <Button
                    fullWidth
                    onClick={handleOpen}
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                >
                    CREATE ROOM
                </Button>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth={true}
                    maxWidth='sm' >
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
                &nbsp;

                {/* TODO : Join room */}
            </Box>

            <Typography variant="h5" gutterBottom component="h1">
                Join a Room
            </Typography>
            <Box sx={{ mt: 3, mb: 2 }}
            >
                <Stack direction="row" spacing={2}>
                    <TextField  name="room_number" label="Room number" onChange={handleRoomNumberChange} fullWidth />
                    <Button fullWidth sx={{ maxWidth: 80, }} onClick={handleEnterRoom} variant="contained">Enter</Button>
                </Stack>
            </Box>
        </div>
    );
}
