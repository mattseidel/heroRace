import { useState } from "react"
import { hero } from "../data/hero"


export const useHero = () => {
    const [heroSelected, setHeroSelected] = useState({})

    const changeHeroSelected = (id) => {
        setHeroSelected(hero.find(hero => hero.id === id))
    }

    return [heroSelected, changeHeroSelected]
}
