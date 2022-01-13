import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Avatar,
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { green } from '@mui/material/colors';
import css from './Header.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[700],
    },
  },
});

const Header2 = ({ isAuth, login, logout }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 2, bgcolor: 'primary.main' }} className={css.header}>
        <AppBar position="static">
          <Container fixed>
            <Toolbar>
              <Typography variant="h6"sx={{ flexGrow: 1 }}>
                The Way of the Samurai
              </Typography>
              {isAuth ? (
                <>
                  <Box mr={3}>
                    <Typography variant="h6"placement="right">
                      {login}
                    </Typography>
                  </Box>
                  <Button variant="contained" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to="/login">
                  <Button variant="outlined">Login</Button>
                </NavLink>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Header2;
// export default Header;
