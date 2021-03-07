import { useState } from "react";
import { hero } from "../data/hero";
// import { search } from '../helpers/http'


/**
 * Hook to comunicate the application to the API
 */
export const useFetch = () => {
    const [heroArray, setHeroArray] = useState([])
    // const [error, setError] = useState({})

    // /**
    //  * Reset the error
    //  */
    // const clearError = () => {
    //     setError({})
    // }


    /**
     * @returns array match hero
     *  @param {string} name hero name
     */
    const getByName = (name = 'batman') => {
        // clearError()
        // search(name)
        //     .then(data => {
        //         setHero(data)
        //     })
        setHeroArray(hero.filter(data => data.name.toLowerCase().includes(name.toLowerCase())))
        console.log(heroArray);
    }

    return [heroArray, getByName]

}
