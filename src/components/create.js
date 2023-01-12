import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let history = useNavigate();

    // Função para enviar os dados e redirecionar para o read
    const postData = () => {
        axios.post(`https://63be5402e348cb07620cb9c8.mockapi.io/Fake_Data`, {
            nome,
            sobrenome,
            checkbox
        }).then(() => {
            history("/read")
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='nome' onChange={(e) => setNome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='sobrenome' onChange={(e) => setSobrenome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com os termos e condições' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Enviar</Button>
            </Form>
        </div>
    )
}