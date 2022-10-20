import {Box,Typography,Button,Stack,Grid} from "@mui/material"
import NavBar from "../NavBar/NavBar"
import TransactionList from "../Portfolio/TransactionList/TransactionList"

const AppContainer =()=>{
    return(
        <Box sx={{
            width:"100vw",
            height:"100vh",
            backgroundColor:"#daebdf",
            padding:'10px'
        }}>
            <NavBar/>
            <TransactionList/>
        </Box>
    )
}

export default AppContainer