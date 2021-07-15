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




const CadProdutos = () => {
    const classes = useStyles();

    const [id, setId] = useState('')
    const [descricao, setDescricao] = useState('')
    const [descritivo, setDescritivo] = useState('')
    const [valorvenda, setValorVenda] = useState('')
    const [tipos, setTipos] = useState('')
    const [formacomercializacao, setFormaComercializacao] = useState('')
    const [error, setError] = useState('');
    const [isNew, setIsNew] = useState('');
    const location = useLocation();

    useEffect(() => {
        const { state } = location
        const { dados, create } = state
        setIsNew(create)

        if (dados) {
            setDescricao(dados.descricao)
            setDescritivo(dados.descritivo)
            setValorVenda(dados.valorvenda)
            setTipos(dados.tipos)
            setFormaComercializacao(dados.formacomercializacao)
            setId(dados.id)


        } else {
            setDescricao('')
            setDescritivo('')
            setValorVenda('')
            setTipos('')
            setFormaComercializacao('')

        }
    }, [])

    const handleSubmit = async (e) => {
        const json = await isNew ? api.CadProdutos(descricao, descritivo, valorvenda, tipos, formacomercializacao) :
            api.PutProdutos(id, descricao, descritivo, valorvenda, tipos, formacomercializacao)

        if (json.error) {
            setError(json.error);
        } else {
            window.location.href = '/produtos';
        }
    }

    return (
        <>
            <Container >
                <h1 className={classes.title}>{isNew ? "Cadastrar" : "Editar"} Produtos</h1>
                <Grid className={classes.form}>
                    <form className={classes.title} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container >
                            <Grid item xs={12}>
                                <TextField label="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                                <TextField label="Descritivo" value={descritivo} onChange={e => setDescritivo(e.target.value)} />

                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField label="Valor de Venda" value={valorvenda} onChange={e => setValorVenda(e.target.value)} />
                                    <TextField label="Tipos" value={tipos} onChange={e => setTipos(e.target.value)} 
                                    />
                                    <TextField label="Forma de Comerc." value={formacomercializacao} onChange={e => setFormaComercializacao(e.target.value)} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Button variant="contained" color="primary" onClick={handleSubmit} >  Cadastrar Produtos</Button>

                    </form>
                </Grid>
            </Container>


        </>
    )

}

export default CadProdutos;