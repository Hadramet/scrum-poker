import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from './Copyright';
import { Home } from './Home';
import { Room } from './Room';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Home sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }} />} />
            <Route path="/room/:roomId" element={<Room sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }} />} />
          </Routes>
        </BrowserRouter>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
