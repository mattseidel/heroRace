import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useFetch } from '../../hooks/useFetch'
import { HeroAction } from './HeroAction'
import { HeroCard } from './HeroCard'

export const HeroScreen = () => {
    const { hero, getByName } = useFetch()
    return (
        <Container>
            <div className="card mt-2 bg-secondary text-center p-2">
                <h1>Super hero Racing</h1>
            </div>
            <Row>
                <Col md='4'>
                    <HeroCard getByName={getByName} hero={hero} />
                </Col>
                <Col md='4'>
                    <HeroAction />
                </Col>
                <Col md='4'>
                    <HeroCard getByName={getByName} hero={hero} />
                </Col>
            </Row>
        </Container>
    )
}
