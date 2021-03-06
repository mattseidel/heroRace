import { useState } from "react";
import { search } from '../helpers/http'

/**
 * Hook to comunicate the application to the API
 */
export const useFetch = () => {
    const [hero, setHero] = useState([])
    const [error, setError] = useState({})

    /**
     * Reset the error
     */
    const clearError = () => {
        setError({})
    }


    /**
     * @returns array match hero
     *  @param {string} name hero name
     */
    const getByName = (name = 'batman') => {
        clearError()
        search(name)
            .then(data => {
                console.log(data);
                setHero(data)
            })
    }

    return { hero, error, getByName }

}
