import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import useApi from '../ApiDesafio';


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




const CadCliente = () => {
    const classes = useStyles();
    const api = useApi();


    const [nome, setNome] = useState('');
    const [tipodepessoa, setTipodepessoa] = useState('');
    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [disebled, setdisebled] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      
        e.preventDefault();
        setError('');
        const json = await api.CadCliente(nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento);
      
    }

    return (
        <>
            <Container>
                <h1 className={classes.title}>Cadastrar Cliente</h1>
                <form className={classes.title} noValidate autoComplete="off">
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField label="Nome" id="standard-size-small" value={nome} onChange={e => setNome(e.target.value)} />
                            <TextField label="Tipo de pessoa" value={tipodepessoa} onChange={e => setTipodepessoa(e.target.value)} placeholder="Fisica ou Juridica" id="standard-size-small" />
                            <TextField label="Cpf ou CNPJ" value={cpf_cnpj} onChange={e => setCpf_cnpj(e.target.value)} id="standard-size-small" />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField label="CEP" value={cep} onChange={e => setCep(e.target.value)} id="standard-size-small" />
                            <TextField label="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} id="standard-size-small" />
                            <TextField label="Bairro" value={bairro} onChange={e => setBairro(e.target.value)} id="standard-size-small" />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField label="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} id="standard-size-small" />
                            <TextField label="Estado" value={estado} onChange={e => setEstado(e.target.value)} id="standard-size-small" />
                            <TextField label="Pais" value={pais} onChange={e => setPais(e.target.value)} id="standard-size-small" />
                            <TextField label="Numero" value={numero} onChange={e => setNumero(e.target.value)} id="standard-size-small" />
                            <TextField label="Complemento" value={complemento} onChange={e => setComplemento(e.target.value)} id="standard-size-small" />
                        </Grid>
                    </Grid>

                    <Button variant="contained" color="primary" onClick={handleSubmit} >  Cadastrar Cliente</Button>

                </form>
            </Container>


        </>
    )

}

export default CadCliente;