import {useState} from "react"
import {Box,Modal,Typography,Button,Stack} from '@mui/material'

import Transaction from "./Transaction/Transaction"
import InputAdd from "./InputAdd/InputAdd"

const TransactionList =(props)=>{

    {/* style css button */}
    const btnStyle={
        backgroundColor:'green',
        '&:hover':{
        backgroundColor:'lightgreen',
        color:'darkgreen',
        }};

    {/* Phần state Popup Modal của InputAdd */}
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    {/* Hết rồi có 3 dòng thôi */}

    const [list,setList] = useState([
        {type:'Expense',note:'Phúc đi tay vịn giá rẻ rủi ro cao',amount:300000,day:16,month:10,year:2022},
        {type:'Income',note:'Phúc được Giang tặng voucher buffet',amount:200000,day:14,month:5,year:2022},
        {type:'Income',note:'Project được thưởng giải nhất',amount:500000,day:17,month:10,year:2022},
    ])

    return(
        <Box sx={{
            position: 'relative',
            left:'15%',bottom:'100%',
            width:'85%',height:'100%',
            backgroundColor:'#bacfc4',
            padding:'10px',
        }}>
            
            <Box>{/* Số dư hiện tại */}
                <Typography variant="h5">Username</Typography>
                <Typography variant="h5">Balance: </Typography>
            </Box>

            <Button sx={btnStyle} variant='contained' onClick={handleOpen}>
                Add New Transaction
            </Button>{/* Pop-up Trigger */}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <InputAdd/>
            </Modal>{/* Modal Pop-up của InputAdd */}

            {/* */}
            <Button>Month Filter</Button>

            <Box sx={{backgroundColor:'white', width:'60%',height:'60%', m:'auto', mt:'5%'}}>

                {list.map((item)=>{
                    return(
                        <Transaction
                            key={item.id}
                            user={item.user}
                            day={item.day}
                            month={item.month}
                            year={item.year}
                            note={item.note}
                            amount={item.amount}
                            type={item.type}/>
                )
            })}
            </Box>

        </Box>
    )
}

export default TransactionList

