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
    const handleClose = () => {
        console.log(open);
        setOpen(false);
        console.log(open);
    }
    const close=(x)=>{
        setOpen(x);
    }
    {/* Hết rồi */}

    const [list,setList] = useState([
        {type:'Expense',note:'Phúc đi tay vịn',amount:300000,day:16,month:10,year:2022},
        {type:'Income',note:'Phúc được đãi buffet',amount:200000,day:14,month:5,year:2022},
        {type:'Income',note:'Project được giải nhất',amount:500000,day:17,month:10,year:2022},
    ])

    const addList = (x)=>{
        setList([...list,x])

    }

    console.log(list)

    let ngay = new Date()
    const [thang,setThang]=useState(ngay.getMonth()+1);

    const chooseMonth =(e)=>{
        const arr=e.target.value.split("-")
        setThang(parseInt(arr[1],10));
        console.log(thang)
        const filterList=list.filter((item)=>item.month===thang)
        console.log(filterList)
        }
        
    
    
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
                sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
                >
                    <InputAdd addList={addList}/>
            </Modal>
            {/* Modal Pop-up của InputAdd */}


            {/* <Button>Month Filter</Button> */}
            <input type="month" onChange={chooseMonth}></input>

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

