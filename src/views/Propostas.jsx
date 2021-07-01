import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import '../assets/css/tablecliente.css';
import api from '../ApiDesafio';
import { useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        whiteSpace: 'nowrap',
    },
    body: {
        fontSize: 12,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    wrow: {
        width: '555px',
    }


}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
        marginTop: 30,
        maxWidth: 400,
        marginLeft: 300,
    }, icons: {
        width: 33,
        cursor: "pointer",
    },
    acoesIcons: {
        display: "flex",
        justifyContent: "space-around"
    },
    addpropostas: {
        marginTop: 100,
        marginLeft: 300,

    },
    button: {
        whiteSpace: 'nowrap'

    }


});


export default function Propostas() {
    const classes = useStyles();


    const [error, setError] = useState('');
    const [proposals, setProposals] = useState([]);

    const  getProdutos = async () => {
        const proposals = await api. getProdutos();
        setProposals(proposals)

    };

    useEffect(() => {       
        getProdutos();
    }, []);

 


    const handleDel = async (dados) => {
        const json = await api.DelProdutos(dados.id)
        if (json.error) {
            setError(json.error);
        } else {
            window.location.href = '/propostas';
        }
    };





    return (<Container>
        <Grid className={classes.addpropostas}>
            <Link to={{ pathname: "/propostas", state: { dados: false, create: true } }}>
                <Button variant="contained" color="primary" className={classes.button} >
                    Adicionar Propostas</Button>
            </Link>
        </Grid>
        <TableContainer>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell  >Codigo</StyledTableCell>
                        <StyledTableCell align="center">Assunto</StyledTableCell>
                        <StyledTableCell align="center">Data</StyledTableCell>
                        <StyledTableCell align="center">Validade</StyledTableCell>
                        <StyledTableCell align="center">Cliente</StyledTableCell>
                        <StyledTableCell align="center">Ações</StyledTableCell>                      
                    </TableRow>
                </TableHead>
                <TableBody>
                    {proposals.map((dados) => (
                        <StyledTableRow key={dados}>
                            <StyledTableCell className={classes.wrow} component="th" scope="row">
                                {dados.codigo}
                            </StyledTableCell>
                            <StyledTableCell className={classes.wrow} align="right">{dados.assunto}</StyledTableCell>
                            <StyledTableCell className={classes.wrow} align="right">{dados.data}</StyledTableCell>
                            <StyledTableCell className={classes.wrow} align="right">{dados.datavalidade}</StyledTableCell>
                            <StyledTableCell className={classes.wrow} align="right">{dados.idclient}</StyledTableCell>                            
                            <StyledTableCell className={classes.wrow} align="center" className={classes.acoesIcons} >
                                <Link to={{ pathname: "/cadastro", state: { dados, create: false } }}>
                                    <EditIcon className={classes.icons} />
                                </Link>
                                <DeleteIcon onClick={() => handleDel(dados)} className={classes.icons} />
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    );
}
