
import React from 'react'
import { Button, ButtonGroup, Card, Container } from 'reactstrap'

export const HeroAction = () => {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
            <div></div>
            <Card className='bg-secondary p-4 text-center'> <h1>VS</h1> </Card>
            <ButtonGroup size='lg'>
                <Button color='danger'>Figth</Button>
                <Button color='warning'>Race</Button>
            </ButtonGroup>
        </Container>
    )
}
