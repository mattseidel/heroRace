import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Container } from 'reactstrap'
import { HeroWiner } from './heroWiner'
import PropTypes from 'prop-types'


export const HeroAction = ({ attacker, deffender }) => {

    const [winer, setWiner] = useState({})
    const [open, setOpen] = useState(false)


    const validateHeroEmpty = () => {
        return JSON.stringify(attacker) === '{}' || JSON.stringify(deffender) === '{}'
    }

    const makeRace = () => {
        parseInt(deffender.powerstats.speed) > parseInt(attacker.powerstats.speed) ? setWiner(deffender) : parseInt(attacker.powerstats.speed) > parseInt(deffender.powerstats.speed) ? setWiner(attacker) : setWiner({ draw: true })
        setOpen(!open)
    }

    const makeFigth = () => {
        parseInt(deffender.powerstats.power) > parseInt(attacker.powerstats.power) ? setWiner(deffender) : parseInt(attacker.powerstats.power) > parseInt(deffender.powerstats.power) ? setWiner(attacker) : setWiner({ draw: true })
        setOpen(!open)
    }

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
            <div></div>
            <Card className='bg-secondary p-4 text-center'> <h1>VS</h1> </Card>
            <ButtonGroup size='lg'>
                <Button onClick={makeFigth} disabled={validateHeroEmpty()} color='danger'>Figth</Button>
                <Button onClick={makeRace} color='warning' disabled={validateHeroEmpty()}>Race</Button>
            </ButtonGroup>
            <HeroWiner modal={open} toggle={() => setOpen(!open)} winer={winer} />
        </Container>
    )
}

HeroAction.propTypes = {
    attacker: PropTypes.object.isRequired,
    deffender: PropTypes.object.isRequired
}