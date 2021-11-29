import { Typography, Link } from '@mui/material';

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Scrum Poker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
