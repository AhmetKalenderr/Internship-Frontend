import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { GetUsersFromApp } from '../Services/api';
import ModalComponent from './ModalComponent';

function CompanyPostComponent({post}) {

  const [users,setUsers] = useState([]);
  const [open,setOpen] = useState(false);

const handleClick = () => {
  GetUsersFromApp(post.post.id).then(resp => {
    setUsers(resp.data.data);
    setOpen(true);
  })
}
  

    return (
        <Paper>

         
        <Card sx={{ maxWidth: "100%" }} >
          <b style={{marginLeft:"auto"}}>{new Date(post.post.postStartTime).toLocaleString()}</b>
           <Grid container spacing={3} item xs={12} md={12}>
           <Grid item xs={12} md={3}>
            <CardMedia
              component="img"
              height="200"
              image="https://secure.gravatar.com/avatar/af84d222e95b95cfe269e7477cfdf876?s=250&d=mm&r=pg"
              alt="png"
        />
            </Grid>
            <Grid item xs={12} md={9} style={{marginTop:"50px"}}>
           <CardContent>
              <Typography gutterBottom variant="h5" component="animate" color={"#F47C7C"}>
                {post.post.company.companyName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {post.post.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="body1" style={{marginRight:"50px"}}>{post.post.city.name}</Typography>
              <Typography variant="body1" style={{marginLeft:"50px"}}>{post.post.position.name}</Typography>
              
              <b onClick={handleClick} style={{ color: "#8CC0DE", cursor: "pointer",marginLeft:"auto" }}>{post.count} Başvuru</b>
            </CardActions>
           </Grid>
           </Grid>
          </Card>
         <ModalComponent datas={users} opened={open} setOpen={setOpen}/>
           </Paper>
    );
}

export default CompanyPostComponent;