import {useNavigate } from 'react-router-dom';
import { auth } from '../../LandingPage/components/config';
import {Box,Button,AppBar,Toolbar} from '@mui/material'
import { Link } from 'react-router-dom';
import '@mui/icons-material'
import {BarChart, AssignmentInd, AccountBalanceWallet, Summarize, Logout} from '@mui/icons-material';

const NavBar =()=> {
    const btnStyle={
        width: "100%",
        m:"5px",
        backgroundColor:"#2db84c",
        '&:hover':{
            backgroundColor: '#34d157',  
        },
        border: "0px"
    };

    const btnStyleLogout={
        width: "100%",
        m:"5px",
        backgroundColor:"#2db84c",
        '&:hover':{
            backgroundColor: 'red',  
        },
        border: "0px"
    };

    const navigate=useNavigate()
    const clickLogout=()=>{
    //     auth.signOut
        navigate('/')

    }

    return (
        <Box sx={{
            width: "15%",height: "100%",
            backgroundColor: "#FFFF",
            borderRadius:"12px",
            padding: "3px",
            }}>

            <AppBar position="static"
                    style={{
                        width: "100%",height: "100%",
                        backgroundColor:"#bdbdbd",
                        borderRadius: "inherit",
                        padding: "2px",
                        }}>

                <Toolbar style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: "100%",height: "100%",
                    backgroundColor: "#FFFF",
                    borderRadius:"inherit",
                    m: "auto",
                    padding: "5px",}}>

                    <Link to="/beri/chartpage"
                        variant="contained"
                        startIcon={<BarChart />}
                        sx ={btnStyle}
                        >
                        Chartpage
                    </Link>

                    {/* <Button
                        variant="contained"
                        startIcon={<AssignmentInd />}
                        sx ={btnStyle}
                        >
                        Portfolio
                    </Button> */}
                    
                    <Link to="/beri/transactionlist"
                        variant="contained"
                        startIcon={<AccountBalanceWallet />}
                        sx ={btnStyle}
                        >
                        Transactions
                    </Link>

                    {/* <Button
                        variant="contained"
                        startIcon={<Summarize />}
                        sx ={btnStyle}
                        >
                        Summary
                    </Button> */}

                    <Button
                        variant="contained"
                        startIcon={<Logout />}
                        sx ={btnStyleLogout}
                        onClick= {clickLogout}
                        >
                        Logout
                    </Button>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar
