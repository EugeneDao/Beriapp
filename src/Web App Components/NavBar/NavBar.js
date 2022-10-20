import {Box,Button,Typography,AppBar,Toolbar} from '@mui/material'
import {BarChart, AssignmentInd, AccountBalanceWallet, Summarize, Logout} from '@mui/icons-material';

const NavBar =()=> {
    const btnStyle={
        width: "100%",
        m:"5px",
        backgroundColor:"green",
        '&:hover':{
            backgroundColor: '#00ff49',
            color:'darkgreen',
        },
        border: "2px solid green"
    };

    return (
        <Box sx={{
            width: "15%",height: "100%",
            backgroundColor: "green",
            borderRadius:"12px",
            padding: "5px",
            }}>

            <AppBar position="static"
                    style={{
                        width: "100%",height: "100%",
                        backgroundColor: "yellow",
                        borderRadius: "inherit",
                        padding: "5px",
                        }}>

                <Toolbar style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: "100%",height: "100%",
                    backgroundColor: "#062910",
                    borderRadius:"inherit",
                    m: "auto",
                    padding: "5px",}}>

                    <Button
                        variant="contained"
                        startIcon={<BarChart />}
                        sx ={btnStyle}
                        >
                        Chartpage
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<AssignmentInd />}
                        sx ={btnStyle}
                        >
                        Portfolio
                    </Button>
                    
                    <Button
                        variant="contained"
                        startIcon={<AccountBalanceWallet />}
                        sx ={btnStyle}
                        >
                        Transactions
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<Summarize />}
                        sx ={btnStyle}
                        >
                        Summary
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<Logout />}
                        sx ={btnStyle}
                        >
                        Logout
                    </Button>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar
