import React, {useEffect} from 'react'
import { Button, TextField } from '@mui/material';
import classes2 from "../asset/Styles/_Navbar.module.css";
import axios from 'axios';
import { MailVerifY } from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';



export default function MailVerified() {

    const navigate = useNavigate();

    function MailVerified() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('token');
        MailVerifY(foo).then(response =>{
            NotificationManager.success("Mail Doğrulama Başarılı!");
            navigate("/login")
        }).catch(res =>{
          NotificationContainer.error("Mail doğrulaması sırasında hata oluştu!")
        });
    }

  return (
    <div style={{textAlign:"right",marginRight:"50px"}}>
       <Button variant="contained" className={classes2.container_typography_btn} onClick={() => MailVerified()}>
                    {'Mail Doğrula'}
                  </Button> 
                  <NotificationContainer/>
    </div>
  
  
    )
}
