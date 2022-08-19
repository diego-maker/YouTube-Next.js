import { useRouter } from "next/router";

import {
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import Subscription from "@material-ui/icons/Subscriptions";
import WhatShot from "@material-ui/icons/Whatshot";
import VideoLibary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: "calc(100%- 64px)",
    borderRight: "none",
  },
  avatar: {
    cursor: "pointer",
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  }
  
}));

const primaryMenu = [
  { id: 1, label: "Inicio", path: "/", icon: HomeIcon },
  { id: 2, label: "Em alra", path: "/", icon: WhatShot },
  { id: 3, label: "Inscrições", path: "subscriptions", icon: Subscription },
];

const sencodaryMenu = [
  { id: 1, label: "Biblioteca", path: "/", icon: VideoLibary },
  { id: 2, label: "Histórico", path: "/", icon: History },
];

export default function NavBar() {
  const router = useRouter();

  const classes = useStyles();

  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height='100%' display='flex' >
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
           
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && "#f44336" }} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.label}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {sencodaryMenu.map((item)=>{
            const Icon = item.icon
            return(
                <ListItem 
                    key={item.id}
                    button
                    classes={{root: classes.listItem}}
                 
                >   
                        <ListItemIcon>
                            <Icon style={{ color: isSelected(item) && "#f44336" }}/>
                        </ListItemIcon>
                        <ListItemText
                        classes={{primary:classes.listItemText}}
                        primary={item.label}
                        >
                        </ListItemText>
                </ListItem>
            )
        })}
      </List>
      
      <Divider/>
      <Box classes={{root: classes.listItem}} mx={4} my={2}>
        <Typography variant="body2">
            Faça login para curtir os videos, comentar e se inscrever
        </Typography>
        <Box mt={2}>
            <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle/>}
            >
                Fazer login
            </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
}
