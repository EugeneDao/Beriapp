import { useState } from "react";
import { Input, Box, Modal, Typography, Button } from "@mui/material";
import React from "react";
import Transaction from "./Transaction/Transaction";
import InputAdd from "./InputAdd/InputAdd";
import { AuthContext } from "../../../LandingPage/authprovider";

const TransactionList = (props) => {
  {
    /* style css general */
  }
  const btnStyle = {
    m: "5px",
    backgroundColor: "#2db84c",
    "&:hover": {
      backgroundColor: "#34d157",
    },
  };

  const filterStyle = {
    backgroundColor: "#FFFF",
  };
  {
    /*end of css general*/
  }

  {
    /* Phần state Popup Modal của InputAdd */
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log(open);
    setOpen(false);
    console.log(open);
  };
  const close = (x) => {
    setOpen(x);
  };
  {
    /* Hết rồi */
  }

  const [list, setList] = useState([
    {
      type: "Expense",
      note: "Phúc đi tay vịn",
      amount: 300000,
      day: 16,
      month: 10,
      year: 2022,
    },
    {
      type: "Income",
      note: "Phúc được đãi buffet",
      amount: 200000,
      day: 14,
      month: 5,
      year: 2022,
    },
    {
      type: "Income",
      note: "Project được giải nhất",
      amount: 500000,
      day: 17,
      month: 10,
      year: 2022,
    },
  ]);

  const addList = (x) => {
    setList([...list, x]);
  };

  console.log(list);

  let ngay = new Date();
  const [thang, setThang] = useState(ngay.getMonth() + 1);

  const chooseMonth = (e) => {
    const arr = e.target.value.split("-");
    setThang(parseInt(arr[1], 10));
    console.log(thang);
    const filterList = list.filter((item) => item.month === thang);
    console.log(filterList);
  };
//   const {
//     user: { displayName },
//   } = React.useContext(AuthContext);
  const usernameDisplay = {}; /* gọi API username */

  const transactionData =
    []; /* gọi API transaction để lấy dữ liệu từ database xuất ra UI */

  const callBalance = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += transactionData[i].amount;
    }
    return sum;
  };

  return (
    <Box
      sx={{
        position: "relative",
        left: "15%",
        bottom: "100%",
        width: "85%",
        height: "100%",
        backgroundColor: "#E4E4E4",
        padding: "10px",
      }}
    >
      <Box>
        {/* Số dư hiện tại */}
        <Typography variant="h5">{usernameDisplay.name}</Typography>{" "}
        {/* thuộc tính tên người dùng trong object người dùng */}
        <Typography variant="h6">
          Current Balance: {callBalance(transactionData)}{" "}
        </Typography>
      </Box>

      <Button sx={btnStyle} variant="contained" onClick={handleOpen}>
        Add New Transaction
      </Button>
      {/* Pop-up Trigger */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <InputAdd addList={addList} />
      </Modal>
      {/* Modal Pop-up của InputAdd */}

      {/* <Button>Month Filter</Button> */}
      <Input type="month" sx={filterStyle} onChange={chooseMonth}></Input>

      <Box
        sx={{
          backgroundColor: "#FFFF",
          width: "50%",
          height: "60%",
          m: "auto",
          mt: "5%",
          borderRadius: "9px",
        }}
      >
        {list.map((item) => {
          return (
            <Transaction
              key={item.id}
              user={item.user}
              day={item.day}
              month={item.month}
              year={item.year}
              note={item.note}
              amount={item.amount}
              type={item.type}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TransactionList;
