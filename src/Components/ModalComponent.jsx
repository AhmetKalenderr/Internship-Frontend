import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, style } from '@mui/system';

function ModalComponent({datas,opened,setOpen}) {

    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <Modal
        open={opened}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
           <Box sx={{...style,width:650}}>
           <TableContainer component={Paper}>
                <Table aria-label="simple table"></Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>İsim</TableCell>
                        <TableCell align='center'>Soyisim</TableCell>
                        <TableCell align='center'>Email Adresi</TableCell>
                        <TableCell align='center'>Okul</TableCell>
                        <TableCell align='center'>Başvuru Zamanı</TableCell>
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
            </TableContainer>
           </Box>

        </Modal>
    );
}

export default ModalComponent;