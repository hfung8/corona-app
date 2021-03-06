import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../API';


const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());

        }
        fetchAPI();
    }, [setFetchedCountries]);

    // const [fetchFlag, setFlag] = useState([]);
    // useEffect(() => {
    //     const fetchFlag = async () => {
    //         setFlag(await getFlag());

    //     }
    //     fetchFlag();
    // }, [setFlag]);

    return (
        <FormControl className = { styles.formControl }>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;