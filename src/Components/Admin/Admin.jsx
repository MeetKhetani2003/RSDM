import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';

import ContactsIcon from '@mui/icons-material/Contacts';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import ContactsTab from './ContactsTab';
import PhotosTab from './PhotosTab';

const drawerWidth = 240;

const Admin = () => {
  const [currentTab, setCurrentTab] = useState('Contacts');

  const tabs = [
    { name: 'Contacts', icon: <ContactsIcon /> },
    { name: 'Photos', icon: <PhotoLibraryIcon /> },
  ];

  const renderTabContent = () => {
    switch (currentTab) {
      case 'Contacts':
        return <ContactsTab />;
      case 'Photos':
        return <PhotosTab />;
      default:
        return <Typography>Select a tab</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {tabs.map((tab) => (
              <ListItem key={tab.name} disablePadding>
                <ListItemButton onClick={() => setCurrentTab(tab.name)}>
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          // ml: `${drawerWidth}px`,
          mt: 8,
        }}
      >
        {renderTabContent()}
      </Box>
    </Box>
  );
};

export default Admin;
