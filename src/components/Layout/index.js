import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import AppBar from './TopBar'
import NavBar from './NavBar'
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#F8F8FF',
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      width: '100vw',
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 256,
      },
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
    },
  }));

export default function Layout({ children, title }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={classes.root}>
      <div>
        <AppBar/>
      </div>
        <div>
            <NavBar/>
        </div>
       
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>

            <div className={classes.content}>{children}</div>

          </div>
        </div>
      </div>
    </>
  );
}
