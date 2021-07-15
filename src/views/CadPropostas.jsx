import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, } from '@material-ui/core';
import { useState } from 'react';
import api from '../ApiDesafio';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import InputDate from '../components/InputDate';




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




const CadPropostas = () => {
    const classes = useStyles();
    const [serchid, setSerchId] = useState(['']);
    const [id, setId] = useState('')
    const [assunto, setAssunto] = useState('')
    const [data, setData] = useState("")
    const [datavalidade, setDatavalidade] = useState('')
    const [idclient, setIdclient] = useState('')
    const [codigo, setCodigo] = useState('')
    const [error, setError] = useState('');
    const [isNew, setIsNew] = useState('');
    const location = useLocation();

    useEffect(() => {
        getSerchId();

        const { state } = location
        const { dados, create } = state
        setIsNew(create)

        if (dados) {
            setCodigo(dados.codigo)
            setAssunto(dados.assunto)
            setData(new Date(dados.data))
            setDatavalidade(dados.datavalidade)
            setIdclient(dados.idclient)
            setId(dados.id)


        } else {
            setCodigo('')
            setAssunto('')
            setData('')
            setDatavalidade('')
            setIdclient('')

        }
    }, [])

    const getSerchId = async () => {
        const response = await api.getSerchId();
        setSerchId(response)

    };

    const handleSubmit = async (e) => {
        const json = await isNew ? api.CadPropostas(codigo, assunto, data, datavalidade, idclient) :
            api.PutPropostas(id, codigo, assunto, data, datavalidade, idclient)

        if (json.error) {
            setError(json.error);
        } else {
            window.location.href = '/propostas';
        }
    }

    return (
        <>
            <Container >
                <h1 className={classes.title}>{isNew ? "Cadastrar" : "Editar"} Propostas</h1>
                <Grid className={classes.form}>
                    <form className={classes.title} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container >
                            <Grid item xs={12}>
                                <TextField label="Codigo" value={codigo} onChange={e => setCodigo(e.target.value)} />
                                <TextField label="Assunto" value={assunto} onChange={e => setAssunto(e.target.value)} />
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <InputDate className={classes.textField} value={data} setValue={value => setData(value)} label={"Data"} />
                                           
                                <InputDate value={datavalidade}  setValue={value => setDatavalidade(value)} label={"Validade"} />
                                <TextField
                                    select
                                    value={idclient}
                                    label="Id do Clientes"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => setIdclient(e.target.value)}
                                    helperText="Selecione um Cliente para cadastrar uma proposta"
                                >
                                    {serchid.map((dados) => (
                                        <option key={dados.idclients}>
                                            {dados.idclients}
                                        </option>
                                    ))}
                                </TextField>

                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Box m={2}>
                                    <Button variant="contained" color="primary" onClick={handleSubmit} >  Cadastrar Propostas</Button>
                                </Box>
                                <Box>
                                    <Link to="/propostas">
                                        <Button variant="contained" color="primary" onClick={handleSubmit} >  Voltar </Button>
                                    </Link>
                                </Box>

                            </Grid>
                        </Grid>


                    </form>
                </Grid>
            </Container>


        </>
    )

}

export default CadPropostas;