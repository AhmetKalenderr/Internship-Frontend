import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Container, width } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { GetAllPositions,AddPostApi } from '../Services/api';
import {useNavigate} from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function AddPost() {

    const [positions,setPositions] = useState([]);
    const [selectedPosition,setSelectedPosition] = useState();
    const [endDate,setEndDate] = useState();
    const [description,setDescription] = useState();

    useEffect(()=>{
        GetAllPositions().then((resp)=>{
            console.log(resp.data.data);
            setPositions(resp.data.data)
        })
    },[])

    const navigate = useNavigate();

    const handleChangePosition = (event) => {
        setSelectedPosition(event.target.value);
    }
    const handleChangeDate = (event) => {
        setEndDate(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleSubmit = () => {
        if(selectedPosition && endDate && description){
            AddPostApi({PositionId:selectedPosition,Description:description,PostExpireDay:parseInt(endDate),Token:localStorage.getItem("token")}).then((res) => {
                alert("Eklendi")
                navigate("/mycompanypost")
            })
        }else{
            NotificationManager.warning("Bütün Alanları doldurduğunuzdan emin olunuz!")
        }
    }

    return (
        <>
           <p style={{ fontSize: "25px", textAlign:"center" , fontWeight:"700"}}>İlan Oluştur</p>
           <Container  style= {{marginTop :"30px"}}>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sektör Seçiniz</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPosition}
          label="Sektör Seçiniz"
          onChange={handleChangePosition}
        >
          {positions.map(position => (
              <MenuItem value={position.id}>{position.name}</MenuItem>
              
          ))}
        </Select>
      </FormControl>
      <TextField id="outlined-basic" value={endDate} type="number" style={{width:"100%",marginTop:"15px"}} label="Kaç Gün Geçerli Olacağını Giriniz" variant="outlined" onChange={handleChangeDate} />

      <TextField
          id="outlined-multiline-flexible"
          label="Açıklama"
          multiline
          rows={4}
          value={description}
          onChange={handleChangeDescription}
          style={{marginTop:"15px",width:"100%"}}
        />

            <Button style={{width:"100%",marginTop:"15px"}} color="primary" onClick={handleSubmit}>İlan Ekle</Button>
            <NotificationContainer/>
        </Container>
        </>
       
    );

}
