import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InternPost from '../Components/InternPost';
import { GetByFilter } from '../Services/api';
import Filter from '../Components/Filter'

function HomePage({isUser,login}) {

    const [posts,setPosts] = useState([]);
    const [filter,setFilter] = useState({cityId:0,positionId:0})
    



    useEffect(()=>{
        GetByFilter(filter).then(resp=> {
            setPosts(resp.data.data)
        })
    },[filter])


    return (
    <div >
        <p style={{ fontSize: "25px", textAlign:"center" , fontWeight:"700"}}>Ana Sayfa</p>
            <Container>
             <Grid item xs={12} md={12} spacing={12} style={{marginTop:"30px"}}>
              <Filter setFilter={setFilter}/>
            </Grid>
        
        <Grid container spacing={3} style={{marginTop:"30px"}} xs={12}>
            {posts.map(post => (
               <Grid item key ={post.id} xs={12} md={12} lg={12}>
                     <InternPost post={post} isUser={isUser}/>
               </Grid>
            ))}       
        </Grid>
        </Container>
    </div>
    
    );
}

export default HomePage;