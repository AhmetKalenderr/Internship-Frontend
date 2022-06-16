import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from 'formik';
import {NotificationManager,NotificationContainer} from 'react-notifications/lib';
import { Container } from '@mui/system';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import 'react-notifications/lib/notifications.css';
import classes from '../asset/Styles/_Login.module.css'
import images from '../asset/images/login.png'
import { GetAllCity, RegisterCompany, RegisterUser } from '../Services/api';

export default  function Register({isRegister,setIsRegister,isUser,setIsUser}) {
    const navigate = useNavigate();
    const [register,setRegister] = useState(false);

    const [cities,setCities] = useState([]);

    const [selectedCity,setSelectedCity] = useState();

    useEffect(()=>{
      if(register) {
        navigate("/login")
      }
      GetAllCity().then(resp=>{
        setCities(resp.data.data);
      })
    },[register,navigate])




    const registerCompanySchema = Yup.object().shape({
     
        companyName: Yup.string().required("Şirket İsmi alanı boş bırakılamaz!"),
        phoneNumber : Yup.string().required("Telefon Numarası alanı boş bırakılamaz!"),
        email: Yup.string().required("Email alanı boş bırakılamaz!"),
        password : Yup.string().required("Password alanı boş bırakılamaz!"),
        webSite :   Yup.string().required("Web Sitesi Alanı boş bırakılamaz!"),
        cityId : Yup.number().required("Şehir seçimi alanı boş bırakılamaz!")
       
    });

    const registerUserSchema = Yup.object().shape({
      email: Yup.string().required("Email alanı boş bırakılamaz!"),
      password : Yup.string().required("Password alanı boş bırakılamaz!"),
      name :  Yup.string().required("İsim Alanı boş bırakılamaz!"),
      surname : Yup.string().required("Soyisim Alanı boş bırakılamaz!")
    });


    const formik = useFormik({
        initialValues: {
            companyName :"",
            webSite:"",
            email : "",
            password:"",
            phoneNumber:"",
            name:"",
            surname:"",
            cityId : "",
            schoolId : ""
            
        },
        validationSchema:isUser ? registerUserSchema : registerCompanySchema,
        onSubmit:(values) => {
          if(isUser) {
                RegisterUser(values).then((resp) => {
                  NotificationManager.success(resp.data.data)
                  navigate("/login")
                }).catch(resp=>{
                  NotificationManager.warning(resp.response.data.data)
                })
            }else {
              RegisterCompany(values).then(resp =>{
                NotificationManager.success(resp.data.data)
                navigate("/login")

              }).catch(resp=>{
                NotificationManager.warning(resp.response.data.data)
              })
            }
        }
    })

    const handleSelectedCity = (event) =>{
      setSelectedCity(event.target.value);
      formik.values.cityId = event.target.value;
    }

    return (
      <div>
        <img src={images} className={classes.container_img} />
        <Container className={classes.container_login}
        maxWidth="sm"
      >
               
        <div style={{padding: "25px"}}>
        <b className={classes.container_login_b}>{isUser ? 'Kullanıcı Kayıt' : 'Şirket Kayıt'}</b>
        </div>
        <p onClick={() => {
            navigate("/login")
            setIsRegister(false)
        }}>
          Zaten bir kayıdın var mı {" "}
          <b style={{ color: "#8CC0DE", cursor: "pointer" }}>buraya</b> tıklayarak
          giriş yapabilirsin
        </p>
        <form onSubmit={formik.handleSubmit}>
          {!isUser && <TextField
            id="companyName"
            label="Şirket İsmi"
            variant="filled"
            style={{ width: "100%" }}
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.companyName && formik.errors.companyName}
            helperText={formik.errors.companyName}
          />
          }
          {!isUser && <TextField
            id="webSite"
            label="Web Sitesi"
            type="text"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.webSite}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.webSite && formik.errors.webSite}
            helperText={formik.errors.webSite}
          />}
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.errors.email}
          />
            <TextField
            id="password"
            label="Şifre"
            type="password"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.errors.password}
          />
           {!isUser &&  <TextField
            id="phoneNumber"
            label="Telefon Numarası"
            type="tel"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            helperText={formik.errors.phoneNumber}
          />}
          {isUser && <TextField
            id="name"
            label="İsim"
            type="text"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            helperText={formik.errors.name}
          />}
          {isUser && <TextField
            id="surname"
            label="Soyisim"
            type="text"
            variant="filled"
            style={{ width: "100%", marginTop: "20px" }}
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && formik.errors.surname}
            helperText={formik.errors.surname}
          />}

          {!isUser && 
           <FormControl fullWidth style={{marginTop : "20px" , backgroundColor:"rgba(0, 0, 0, 0.06)"}}>
           <InputLabel id="demo-simple-select-label">Şehir</InputLabel>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={selectedCity}
             label="Şehir"
             onChange={handleSelectedCity}
             error={formik.touched.cityId && formik.errors.cityId}
           >
             {cities.map(c=>(
             <MenuItem value={c.id}>{c.name}</MenuItem>)
             )}
           </Select>
         </FormControl>
         }

          <div className={classes.container_login_div}>
          <Button
            className={classes.container_login_button}
            variant="contained"   
            type="submit"
            >
            Kayıt Ol
          </Button>
        <Button
          className={classes.container_login_button}
          variant="contained"
          onClick={() => {
            navigate("/login");
            setIsRegister(false)
          }}
        >
          Giriş Yap
        </Button>
        </div>
  </form>
    <NotificationContainer/>
      </Container>
      </div>
)}

