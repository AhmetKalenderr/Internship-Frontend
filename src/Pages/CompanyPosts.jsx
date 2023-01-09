import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CompanyPostComponent from '../Components/CompanyPostComponent';
import InternPost from '../Components/InternPost';
import { CompanyPost } from '../Services/api';

export default function CompanyPosts() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        CompanyPost({Token:localStorage.getItem("token")}).then(resp=> {
            setPosts(resp.data.data)
        })
    },[])


    return (
    <Container>
        <p style={{ fontSize: "25px", textAlign:"center" , fontWeight:"700"}}>Randevular</p>
        <Grid container spacing={3} style={{marginTop:"30px"}}>
            {posts.map(post => (
               <Grid item key ={post.id} xs={12} md={12} lg={12}>
                     <CompanyPostComponent post={post}/>
               </Grid>
            ))}
            <Grid item xs={12} md={12}>
              
            </Grid>
        </Grid>
    </Container>
    );
}