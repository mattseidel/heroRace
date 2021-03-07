import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useFetch } from '../../hooks/useFetch'
import { useHero } from '../../hooks/useHero'
import { HeroAction } from './HeroAction'
import { HeroCard } from './HeroCard'

export const HeroScreen = () => {
    const [heroAttacker, getAttacker] = useFetch()
    const [heroDeffender, getDeffender] = useFetch()
    const [heroAttackerSelected, changeHeroAttackerSelected] = useHero()
    const [heroDeffenderSelected, changeHeroDeffenderSelected] = useHero()

    return (
        <Container>
            <div className="card mt-2 bg-secondary text-center p-2">
                <h1>Super hero Racing</h1>
            </div>
            <Row>
                <Col md='4'>
                    <HeroCard getByName={getAttacker} hero={heroAttacker} heroSelected={heroAttackerSelected} changeHeroSelected={changeHeroAttackerSelected} />
                </Col>
                <Col md='4'>
                    <HeroAction attacker={heroAttackerSelected} deffender={heroDeffenderSelected} />
                </Col>
                <Col md='4'>
                    <HeroCard getByName={getDeffender} hero={heroDeffender} heroSelected={heroDeffenderSelected} changeHeroSelected={changeHeroDeffenderSelected} />
                </Col>
            </Row>
        </Container>
    )
}
