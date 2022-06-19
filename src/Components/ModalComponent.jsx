import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

function ModalComponent({datas,opened,setOpen}) {

    const handleClose = () =>{
        setOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
        open={opened}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
           <Box sx={style}>
           <TableContainer component={Paper}>
                <Table aria-label="simple table"></Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' style={{fontSize:"20px"}}>İsim</TableCell>
                        <TableCell align='center' style={{fontSize:"20px"}}>Soyisim</TableCell>
                        <TableCell align='center' style={{fontSize:"20px"}}>Email Adresi</TableCell>
                        <TableCell align='center' style={{fontSize:"20px"}}>Okul</TableCell>
                        <TableCell align='center' style={{fontSize:"20px"}}>Başvuru Zamanı</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data,index)=>(
                        <TableRow key={index}>
                            <TableCell align='center'>{data.name}</TableCell>
                            <TableCell align='center'>{data.surname}</TableCell>
                            <TableCell align='center'>{data.email}</TableCell>
                            <TableCell align='center'>{data.school.name}</TableCell>
                            <TableCell align='center'>{new Date(data.appTime).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <div style={{textAlign:"right",margin:"10px"}}>
                    <Button onClick={handleClose}   style={{color:"blue"}}>Kapat</Button>
                </div>
            </TableContainer>
           </Box>

        </Modal>
    );
}

export default ModalComponent;