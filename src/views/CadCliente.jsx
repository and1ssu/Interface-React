import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import api from '../ApiDesafio';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: '90px',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 230,
        },
    },
    form: {
        paddingLeft: 100,
        margin: 0


    }


}));




const CadCliente = () => {
    const classes = useStyles();

    const [idclients, setIdclients] = useState('');
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
    const [isNew, setIsNew] = useState('');
    const location = useLocation();

    useEffect(() => {
        const { state } = location
        const { dados, create } = state
        setIsNew(create)

        if (dados) {
            setIdclients(dados.idclients)
            setNome(dados.nome)
            setTipodepessoa(dados.tipodepessoa)
            setCpf_cnpj(dados.cpf_cnpj)
            setCep(dados.cep)
            setEndereco(dados.endereco)
            setBairro(dados.bairro)
            setCidade(dados.cidade)
            setEstado(dados.estado)
            setPais(dados.pais)
            setNumero(dados.numero)
            setComplemento(dados.complemento)

        } else {
            setIdclients('')
            setNome('')
            setNome('')
            setTipodepessoa('')
            setCpf_cnpj('')
            setCep('')
            setEndereco('')
            setBairro('')
            setCidade('')
            setEstado('')
            setPais('')
            setNumero('')
            setComplemento('')

        }
    }, [])

    const handleSubmit = async (e) => {
        const json = await isNew ? api.CadCliente(nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) :
        api.PutCliente( idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento)
            
        if (json.error) {
            setError(json.error);
        } else {
            window.location.href = '/cliente';
        }
    }

    return (
        <>
            <Container >
                <h1 className={classes.title}>{isNew ? "Cadastrar" : "Editar"} Cliente</h1>
                <Grid className={classes.form}>
                    <form className={classes.title} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container >
                            <Grid item xs={12}>
                                <TextField label="Nome" value={nome} onChange={e => setNome(e.target.value)}  />
                                <TextField label="Tipo de pessoa" value={tipodepessoa} onChange={e => setTipodepessoa(e.target.value)} placeholder="Fisica ou Juridica" />
                                <TextField label="Cpf ou CNPJ" value={cpf_cnpj} onChange={e => setCpf_cnpj(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12}>
                                <TextField label="CEP" value={cep} onChange={e => setCep(e.target.value)} />
                                <TextField label="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                                <TextField label="Bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12}>
                                <TextField label="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                                <TextField label="Estado" value={estado} onChange={e => setEstado(e.target.value)} />
                                <TextField label="Pais" value={pais} onChange={e => setPais(e.target.value)} />
                                <TextField label="Numero" value={numero} onChange={e => setNumero(e.target.value)} />
                                <TextField label="Complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                            </Grid>
                        </Grid>

                        <Button variant="contained" color="primary" onClick={handleSubmit} >  Cadastrar Cliente</Button>

                    </form>
                </Grid>
            </Container>


        </>
    )

}

export default CadCliente;