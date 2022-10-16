import {useState} from "react"
import Transaction from "./Transaction/Transaction"
import InputAdd from "./InputAdd/InputAdd"

const TransactionList =(props)=>{

    const [list,setList] = useState([])

    const [inputAdd,setInputAdd] = useState(false)

    const inputAddPopUp =()=>{
        setInputAdd(!inputAdd)
    }

    return(
        <div>
            <div>{/* Số dư hiện tại */}
            <h2>username</h2>
            <h2>Balance</h2>
            </div>

            <div>{/* Tóm tắt thu chi theo tháng */}
            <h1>Tháng này</h1>
            <h2>Tiền vào: {totalInflow}</h2>
            <h2>Tiền ra: {totalOutflow}</h2>
            <h2>{totalInflow-totalOutflow}</h2>
            </div>

            <button className="add-button" onClick={inputAddPopUp}>Thêm giao dịch ik</button>
            {inputAdd && <InputAdd/>}


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
        </div>
    )
}

export default TransactionList

