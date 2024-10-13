import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
  InputBase,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const OverlayList = styled(List)(({ theme }) => ({
  position: 'absolute',
  top: '64px', // Adjust this value based on the height of the AppBar
  left: 0,
  right: 0,
  backgroundColor: theme.palette.background.black, // Change this to your desired color
  zIndex: 1,
  boxShadow: theme.shadows[5],
}));

const Header = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <AppBar position="static">
      {/* Upper row: Left icon and right search bar */}
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
        </Grid>
      </Toolbar>

      {/* Bottom row: Navigation links */}
      <Toolbar>
        <Grid container justifyContent="center">
          {['Home', 'About', 'Services', 'Contact'].map((section) => (
            <Grid item key={section} sx={{ margin: '0 8px' }}>
              <Button color="inherit" onClick={() => handleToggle(section)}>
                {section}
              </Button>
              <Collapse in={expanded[section]} timeout="auto" unmountOnExit>
                <OverlayList component="div" disablePadding>
                  {section === 'Home' && (
                    <>
                      <ListItem>
                        <ListItemText primary="Home Item 1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Home Item 2" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Home Item 3" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Home Item 4" />
                      </ListItem>
                    </>
                  )}
                  {section === 'About' && (
                    <>
                      <ListItem>
                        <ListItemText primary="About Item 1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="About Item 2" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="About Item 3" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="About Item 4" />
                      </ListItem>
                    </>
                  )}
                  {section === 'Services' && (
                    <>
                      <ListItem>
                        <ListItemText primary="Service Item 1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Service Item 2" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Service Item 3" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Service Item 4" />
                      </ListItem>
                    </>
                  )}
                  {section === 'Contact' && (
                    <>
                      <ListItem>
                        <ListItemText primary="Contact Item 1" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Contact Item 2" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Contact Item 3" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Contact Item 4" />
                      </ListItem>
                    </>
                  )}
                </OverlayList>
              </Collapse>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
