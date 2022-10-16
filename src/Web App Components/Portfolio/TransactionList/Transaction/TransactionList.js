import {useState} from "react"
import Transaction from ".Transaction"
import InputAdd from "../InputAdd/InputAdd"

const TransactionList =(props)=>{
    const [list,setList] = useState([])

    const [inputAdd,setInputAdd] = useState(false)

    const inputAddPopUp =()=>{
        setInputAdd(!inputAdd)
    }

    return(
        <div>
            <button onClick={inputAddPopUp}>Thêm giao dịch ik</button>
            {inputAdd && <InputAdd/>}

            {list.map((item)=>{
                return(
                    <Transaction
                        key={item.id}
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

