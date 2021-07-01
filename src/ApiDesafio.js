import qs from 'qs';

const BASEAPI = 'http://localhost:3000/api';


const apiFetchPost = async (endpoint, body) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();

    return json;
}
const apiFetchPut = async (endpoint, body) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();

    return json;
}

const apiFetchDelete = async (endpoint, body) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed) {
        window.localtion.href = `/client/${body.idclients}`;
        return;
    }
    return json;
}

// const apiFetchGet = async (endpoint, body = []) => {
//     console.log('endpoint ' + endpoint)
//     const res = await fetch(BASEAPI+'/api/clients',{
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     })
//     console.log(res)
//     const json = await res.json();
//     if (json.notallowed) {
//         window.localtion.href = '/';
//         return;
//     }
//     return json;
// }


// const ApiDesafio = {

//     CadCliente: async (nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
//         const json = await apiFetchPost(
//             '/api/clients',
//             { nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento }
//         );
//         return json;
//     },


// };

export default {
    //#################Clientes###########################################################################
    getClients : async () => {
        const res = await fetch(BASEAPI+'/clients');
        const json = await res.json();
        return json;
    },
    CadCliente:async ( nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
        const json = await apiFetchPost(
            '/clients',
            {
                nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento
            }
        );
        return json;
    },

    PutCliente:async ( idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
        const json = await apiFetchPut(
            `/clients/${idclients}`,
            {
                idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento
            }
        );
        return json;
    },

    DelCliente:async ( idclients) => {
        const json = await apiFetchDelete(
            `/clients/${idclients}`,
            {idclients}
        );
        return json;
    },
    //#############################################################################

    //########################PRODUTOS#############################################


    getProdutos : async () => {
        const res = await fetch(BASEAPI+'/proposals');
        const json = await res.json();
        return json;
    },
    CadProdutos :async ( codigo, assunto, data, datavalidade, idclient) => {
        const json = await apiFetchPost(
            '/proposals',
            {
                codigo, assunto, data, datavalidade, idclient
            }
        );
        return json;
    },

    PutProdutos :async ( idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento) => {
        const json = await apiFetchPut(
            `/proposals/${idclients}`,
            {
                idclients, nome, tipodepessoa, cpf_cnpj, cep, endereco, bairro, cidade, estado, pais, numero, complemento
            }
        );
        return json;
    },

    DelProdutos :async ( id) => {
        const json = await apiFetchDelete(
            `/proposals/${id}`,
            {id}
        );
        return json;
    },



};