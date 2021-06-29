import qs from 'qs';

const BASEAPI = 'http://localhost:3000';


const apiFetchPost = async (endpoint, body) =>{
    const res = await fetch(BASEAPI+endpoint, {
       method:'POST',
       headers:{
           'Accept':'application/json',
           'Content-Type':'application/json'
       },
       body:JSON.stringify(body) 
    });
    const json = await res.json();

    return json;
}

const apiFetchGet = async () =>{
    const res = await fetch(BASEAPI+'/api/clients',{
        method:'GET',  
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    });
    const json = await res.json();  
    return json;
}

const ApiDesafio = {

    CadCliente:async (nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
        const json = await apiFetchPost(
            '/api/clients',
            {nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento}
        );
        return json;
    },  
    
    Cliente:async (nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
        const json = await apiFetchGet(
            '/api/clients',
            {nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento}
        );
        return json;
    }

};

export default () => ApiDesafio;