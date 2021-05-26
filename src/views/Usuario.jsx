import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: '90px',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 230,
          },
    },
    

}));


const Home = () => {
    const classes = useStyles();


    return (
        <>
            <form className={classes.title} noValidate autoComplete="off">
            <TextField  label="Nome" id="standard-size-small" defaultValue="Andersson"  />
            <TextField label="Celular" id="standard-size-small" defaultValue="(48)96969663"  />
            <TextField className={classes.textEmail} label="Email" id="standard-size-small" defaultValue="anderssonbrito@wattei.com.br"  />
            </form>


        </>
    )

}

export default Home;