import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {

    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`https://63be5402e348cb07620cb9c8.mockapi.io/Fake_Data`)
                .then((response) => {
                    setAPIData(response.data);
                })
        }, [])

    const setData = (data) => {
        let { id, nome, sobrenome, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Nome', nome);
        localStorage.setItem('Sobrenome', sobrenome);
        localStorage.setItem('Checkbox', checkbox);
    }

    return (

        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>Termos</Table.HeaderCell>
                        <Table.HeaderCell>Atualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.sobrenome}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Concorda' : 'Discorda'}</Table.Cell>
                            <Link to='/update'>
                                <Table.Cell> <Button onClick={() => setData(data)}>Atualizar</Button> </Table.Cell>
                            </Link>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
                
            </Table>
        </div>
    )
}