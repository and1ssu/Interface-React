import { Container} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
       
        bottom: 0,
        position: 'fixed',
        display: 'flex',      
        flexDirection: 'column'
    },
    txt:{
        marginLeft: 'auto',
        marginRight: 'auto'        
    }
    
}));



const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.footer} position="static" color="primary">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography  className={classes.txt}>
                            © 2021 Interface React 
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Footer;