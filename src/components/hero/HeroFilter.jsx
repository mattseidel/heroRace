import React from 'react'
import { Alert, ListGroup, ListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types'


export const HeroFilter = ({ hero = [], changeHeroSelected }) => {
    return (

        <ListGroup style={{ maxHeight: '150px', overflow: 'scroll' }}>
            {hero.length === 0 ? <Alert color='warning'>No hero to show</Alert> :

                (React.Children.toArray(
                    hero.map(({ id, name }) => (
                        <ListGroupItem onClick={() => changeHeroSelected(id)} style={{ cursor: 'pointer' }}>{name}</ListGroupItem>
                    ))
                )
                )
            }

        </ListGroup>
    )
}

HeroFilter.propTypes = {
    hero: PropTypes.array,
    changeHeroSelected: PropTypes.func.isRequired
}