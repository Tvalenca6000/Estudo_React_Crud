import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function Update() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    
    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setNome(localStorage.getItem('Nome'));
            setSobrenome(localStorage.getItem('Sobrenome'));
            setCheckbox(localStorage.getItem('Checkbox'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://63be5402e348cb07620cb9c8.mockapi.io/Fake_Data/${id}`, {
            nome,
            sobrenome,
            checkbox
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobre nome</label>
                    <input placeholder='sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com os termos e condições' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Atualizar</Button>
            </Form>
        </div>
    )
}