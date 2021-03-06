import React from 'react'
import { Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { useForm } from '../../hooks/useForm'

export const HeroSearch = ({filter}) => {

    const [{ name }, onChange] = useForm({ name: '' })

    const onSubmit=(e)=>{
        e.preventDefault()
        filter(name)
    }

    return (
        <Form onSubmit={onSubmit}>
            <InputGroup>
                <Input value={name} onChange={onChange} placeholder="Hero name" name='name' />
                <InputGroupText><i className="fas fa-search"></i></InputGroupText>
            </InputGroup>
        </Form>
    )
}
