import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from 'reactstrap'
import dummy from '../../image/dummy.png'


export const HeroList = ({ hero }) => {


    const validateHeroEmpty = () => {
        return JSON.stringify(hero) === '{}'
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h5">{validateHeroEmpty() ? 'Select a hero' : hero.name}</CardTitle>
            </CardHeader>
            <CardImg top width="100%" src={validateHeroEmpty() ? dummy : hero.image?.url} alt={hero?.name} />
            <CardBody>
                <CardText>
                    <b>Speed:</b> {validateHeroEmpty() ? '?' : hero.powerstats?.speed}
                    <br />
                    <b>power:</b> {validateHeroEmpty() ? '?' : hero.powerstats?.power}
                </CardText>
            </CardBody>
        </Card>
    )
}
