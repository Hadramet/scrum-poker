
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import * as material from '@mui/material';
import { Box } from '@mui/system';

export function Room(props) {

    let room = useParams();

    return (
        <Box {...props}>
            <Typography variant="h2" gutterBottom component="div">
                Enter Room
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
                Provide your name or any pseudonym to enter the scrum poker room {room.roomId}.
            </Typography>

            <material.TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Display name *"
                type="text"
                fullWidth
                variant="outlined" />

            <material.Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
            >
                ENTER
            </material.Button>
            <material.Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
            >
                CANCEL
            </material.Button>
        </Box>
    )
}