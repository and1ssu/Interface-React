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
import useApi from '../ApiDesafio';
import { useEffect } from 'react';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
        marginTop: 100,
        maxWidth: 400,
        marginLeft: 100,
    },

});

export default function Cliente() {
    const classes = useStyles();
    const api = useApi();

    const [error, setError] = useState('');
    const [clients, setClients] = useState([]);

    useEffect(() => {

        const tableSubmit = async (e) => {
            setError('');
            const json = await api.Cliente();
            if(json.error == '') {
                setClients(json.result);
            }       
        }
        console.log(clients)
        tableSubmit();
    });

   

    return (<Container>
        <TableContainer   >
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell align="right">Tipo de Pessoa</StyledTableCell>
                        <StyledTableCell align="right">CPF/CNPJ</StyledTableCell>
                        <StyledTableCell align="right">Cep</StyledTableCell>
                        <StyledTableCell align="right">Endereço</StyledTableCell>
                        <StyledTableCell align="right">Bairro</StyledTableCell>
                        <StyledTableCell align="right">Cidade</StyledTableCell>
                        <StyledTableCell align="right">Estado</StyledTableCell>
                        <StyledTableCell align="right">Pais</StyledTableCell>
                        <StyledTableCell align="right">Numero</StyledTableCell>
                        <StyledTableCell align="right">Complemento</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((clients) => (
                        <StyledTableRow key={clients}>
                            <StyledTableCell component="th" scope="row">
                                {clients.nome}
                            </StyledTableCell>
                            <StyledTableCell align="right">{clients.tipodepessoa}</StyledTableCell>
                            <StyledTableCell align="right">{clients.cpf_cnpj}</StyledTableCell>
                            <StyledTableCell align="right">{clients.cep}</StyledTableCell>
                            <StyledTableCell align="right">{clients.endereco}</StyledTableCell>
                            <StyledTableCell align="right">{clients.bairro}</StyledTableCell>
                            <StyledTableCell align="right">{clients.cidade}</StyledTableCell>
                            <StyledTableCell align="right">{clients.estado}</StyledTableCell>
                            <StyledTableCell align="right">{clients.pais}</StyledTableCell>
                            <StyledTableCell align="right">{clients.numero}</StyledTableCell>
                            <StyledTableCell align="right">{clients.complemento}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    );
}
