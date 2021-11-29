import * as React from 'react';
import * as material from '@mui/material';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/system';
import { randomBytes } from 'crypto';
import { useNavigate } from 'react-router-dom';


export function Home(props) {

    const [open, setOpen] = React.useState(false)
    const [form, setForm] = React.useState({ name: "" })
    const [room, setRoom] = React.useState({ room_number: "" })
    const [cookies, setCookie] = useCookies()
    let navigate = useNavigate();

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

    async function handleEnterRoom(event) {
        event.preventDefault()
        // TODO api call to check if room exist
        console.log({
            type: 'enter_room',
            room_number: room.room_number
        });

        // TODO go to the page enter room
        navigate(`/room/${room.room_number}`)

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
                <material.Typography component="div" variant="h2">
                    Set up your planning poker
                </material.Typography>
                <material.Typography component="div" variant="h5">
                    Create your planning room and invite others with a single click
                    {setUserId()}
                </material.Typography>

                <material.Button
                    fullWidth
                    onClick={handleOpen}
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                >
                    CREATE ROOM
                </material.Button>

                <material.Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth={true}
                    maxWidth='sm' >
                    <material.DialogTitle> Create your room </material.DialogTitle>
                    <material.DialogContent>
                        <material.DialogContentText>
                            All we need is a display name.
                        </material.DialogContentText>
                        <form component={form} onSubmit={handleSubmit}>
                            <material.TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Display name"
                                type="text"
                                onChange={handleChange}
                                fullWidth
                                variant="standard" />

                            <material.DialogActions>
                                <material.Button onClick={handleClose}>CANCEL</material.Button>
                                <material.Button type='submit' >CREATE ROOM</material.Button>
                            </material.DialogActions>
                        </form>
                    </material.DialogContent>


                </material.Dialog>
                &nbsp;

                {/* TODO : Join room */}
            </Box>

            <material.Typography variant="h5" gutterBottom component="h1">
                Join a Room
            </material.Typography>
            <Box sx={{ mt: 3, mb: 2 }}
            >
                <material.Stack direction="row" spacing={2}>
                    <material.TextField name="room_number" label="Room number" onChange={handleRoomNumberChange} fullWidth />
                    <material.Button fullWidth sx={{ maxWidth: 80, }} onClick={handleEnterRoom} variant="contained">Enter</material.Button>
                </material.Stack>
            </Box>
        </div>
    );
}
