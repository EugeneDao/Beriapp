import {Box,Button,Typography} from "@mui/material"

const Transaction =(props)=>{
    return(
        <Box sx={{
            backgroundColor: 'lightgreen',
            border: '2px solid grey',
            borderRadius: '10px',
            width:'100%',height:'20%',

            display:'flex',
            justifyContent:'space-around',
            alignContent:'center',
            flexWrap: 'wrap',
        }}>
            <Typography>{props.day}</Typography>
            <Typography> Tháng {props.month}, {props.year}</Typography>
            <Typography>{props.type}</Typography>
            <Typography>{props.note}</Typography>
            <Typography>{props.type==="Expense"?props.amount*-1:props.amount}</Typography>
        </Box>
    )
}

export default Transaction