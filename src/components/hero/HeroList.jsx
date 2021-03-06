import React from 'react'
import { Card, CardBody, CardHeader, CardImg,  CardText, CardTitle } from 'reactstrap'

export const HeroList = ({ hero }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h5">{hero.name}</CardTitle>
            </CardHeader>
            <CardImg top width="100%" src={hero.image.url} alt={hero.name} />
            <CardBody>
                <CardText>
                    <b>Speed:</b> {hero.powerstats.speed}
                    <br />
                    <b>power:</b> {hero.powerstats.power}
                </CardText>
            </CardBody>
        </Card>
    )
}
