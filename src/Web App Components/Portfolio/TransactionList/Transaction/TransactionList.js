import {useState} from "react"
import Transaction from "/Transaction.js"
import InputAdd from "./InputAdd/InputAdd.js"

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
                        icon={item.icon}
                        category={item.category}/>
                )
            })}
        </div>
    )
}

export default TransactionList

