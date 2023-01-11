import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios'

function Read() {

    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`https://63be5402e348cb07620cb9c8.mockapi.io/Fake_Data`)
                .then((response) => {
                    setAPIData(response.data);
                })
        }, [])

    return (

        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>{data.nome}</Table.Cell>
                            <Table.Cell>{data.sobrenome}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;