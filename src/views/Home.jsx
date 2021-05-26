
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: '90px',

    }
    

}));


const Home = () => {
    const classes = useStyles();
  


    return (
        <>
            
                <h1 className={classes.title}>Desafio React - 01 - 02</h1>
        




        </>
    )

}

export default Home;