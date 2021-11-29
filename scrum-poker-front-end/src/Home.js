import { Typography, Button } from '@mui/material';
import { useCookies } from 'react-cookie';
import { Box } from '@mui/system';
import { randomBytes } from 'crypto';

export function Home(props) {
    const [cookies, setCookie] = useCookies();

    const setUserId = () => {
        cookies.user ?? setCookie('user', randomBytes(16).toString("hex"));
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            user_id: cookies.user
        });
    }

    return (<Box {...props}>

        <Typography component="h1" variant="h5">
            Create your planning room and invite others with a single click
            {setUserId()}
        </Typography>

        <Button
            type="submit"
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            CREATE ROOM
        </Button>

    </Box>

    );
}
