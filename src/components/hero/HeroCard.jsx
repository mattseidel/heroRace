import React from 'react'
import { HeroFilter } from './HeroFilter'
import { HeroList } from './HeroList'
import { HeroSearch } from './HeroSearch'

export const HeroCard = ({ getByName, hero, heroSelected, changeHeroSelected }) => {

    return (
        <div>
            <HeroSearch filter={getByName} />
            <HeroFilter hero={hero} changeHeroSelected={changeHeroSelected} />
            <HeroList hero={heroSelected} />
        </div>
    )
}
