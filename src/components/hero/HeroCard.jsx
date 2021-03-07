import React from 'react'
import { HeroFilter } from './HeroFilter'
import { HeroList } from './HeroList'
import { HeroSearch } from './HeroSearch'
import PropTypes from 'prop-types'

export const HeroCard = ({ getByName, hero, heroSelected, changeHeroSelected }) => {

    return (
        <div>
            <HeroSearch filter={getByName} />
            <HeroFilter hero={hero} changeHeroSelected={changeHeroSelected} />
            <HeroList hero={heroSelected} />
        </div>
    )
}

HeroCard.propTypes = {
    getByName: PropTypes.func.isRequired,
    hero: PropTypes.array.isRequired,
    heroSelected: PropTypes.object.isRequired,
    changeHeroSelected: PropTypes.func.isRequired
}