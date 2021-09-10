// npm install @material-ui/core
import { makeStyles, createStyles } from '@material-ui/core/styles';

import theme from './theme';
import * as Font from './fonts';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      // backgroundColor: '#303030',
      zIndex: 0,
    },
    contentRoot: {
      margin: '0 auto',
    },
    innerContainer: {
      height: '100%',
    },
    navigation: {
      height: 3,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      top: 10,
      zIndex: 1,
      width: '98vw',
      margin: '0 auto',
    },
    navigationItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      height: 2,
      flex: 1,
      margin: '0 8px',
      transition: 'linear all 0.4s',
    },
    item: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      transition: 'linear all 0.5s',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    itemContainer: {
      position: 'absolute',
      top: 60,
      width: '100%',
      maxWidth: 1400,
      margin: '0 auto',
    },
    itemTitle: {
      color: 'white',
      fontFamily: Font.MAIN_BOLD,
      fontSize: 48,
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(4),
      maxWidth: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        fontSize: 34,
      },
    },
    subtitle: {
      fontFamily: Font.NUNITO,
      fontWeight: 700,
      fontSize: 16,
      color: 'white',
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    itemButton: {
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(10),
      maxWidth: 360,
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
    icon: {
      marginLeft: theme.spacing(5),
      marginBottom: theme.spacing(1),
      width: 170,
      [theme.breakpoints.down('sm')]: {
        width: 150,
      },
    },
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
      visibility: 'hidden',
    },
  })
);

export default useStyles;
