import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { GetAllCity, GetAllPositions } from '../Services/api';

function Filter({setFilter}) {

    const [selectedCity,setSelectedCity] = useState()
    const [selectedPosition,setSelectedPosition] = useState()

    const [cities,setCities] = useState([]);
    const [positions,setPositions] = useState([]);
    
    const handleChangeCity = (event) => {
        console.log(event.target.value);
        setSelectedCity(event.target.value)
        setFilter({
            cityId:event.target.value,
            positionId:selectedPosition
        })
    }

    const handleChangePosition = (event) => {
        setFilter({
            cityId:selectedCity,
            positionId:event.target.value
        })
        setSelectedPosition(event.target.value)
    }

    useEffect(()=>{
        GetAllCity().then(resp=>{
            setCities(resp.data.data)
        })

        GetAllPositions().then(resp=>{
            setPositions(resp.data.data)
        })
    },[])

    console.log(positions);
    console.log(cities);

    
    return (
        <div>    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Şehir</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedCity}
          label="Şehir"
          onChange={handleChangeCity}
        >
          <MenuItem value={0}>
            <em>Şehir Seçiniz</em>
          </MenuItem>
          {cities.map(city=>(
            <MenuItem value={city.id}>{city.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sektör</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedPosition}
          label="Sektör"
          onChange={handleChangePosition}
        >
          <MenuItem value={0}>
            <em>Sektör Seçiniz</em>
          </MenuItem>
         {positions.map(position=>(
             <MenuItem value={position.id}>{position.name}</MenuItem>
         ))}
        </Select>
      </FormControl>
      </div>


    );
}

export default Filter;