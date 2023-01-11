import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        console.log(nome);
        console.log(sobrenome);
        console.log(checkbox);
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