import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcons from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import AccountCirlce from "@material-ui/icons/AccountCircle";
import Hidden from "@mui/material/Hidden";

import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolBar: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between"
  },
  logo: {
    cursor: "pointer",
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolBar}>
        <Box display={"flex"} alignItems="center">
          <MenuIcons />
          <img src="/logo.svg" alt="logo" className={classes.logo} />
        </Box>

        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        <Box display={"flex"}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>

          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCirlce />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
