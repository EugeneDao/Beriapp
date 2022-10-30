import {Input,Box,Typography,Button} from '@mui/material'

const Summary =(props)=>{
    return (
        <Box sx={{
            position: 'relative',
            left:'15%',bottom:'100%',
            width:'85%',height:'100%',
            backgroundColor:'#bacfc4',
            padding:'10px',
        }}>
            <Box>
                <Typography>Choose month</Typography>
                <Input type="month" placeholder="Placeholder"></Input>
            </Box>
           
            <Box sx={{backgroundColor:'white', width:'60%',height:'60%', m:'auto', mt:'5%', display:'flex',flexDirection:'column',alignItems:'center'}}>{/* Tóm tắt thu chi theo tháng */}
                <Typography variant='h4'>This month</Typography>
                <Typography variant='h5'>Income{"totalInflow"}</Typography>
                <Typography variant='h5'>Expense {"totalOutflow"}</Typography>
                <Typography variant='h5'>{"totalInflow-totalOutflow"}</Typography>
            </Box>
        </Box>
    )
}

export default Summary;