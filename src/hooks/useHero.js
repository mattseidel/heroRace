export const useHero = () => {
    const [hero, setHero] = useState({})

    const changeHeroSelected = (id) => {
        setHero(heros.find(hero => hero.id === id))
    }

    return [hero, changeHeroSelected]
}
