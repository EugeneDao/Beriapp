import {useState} from "react"

const InputAdd =(props)=>{
    const [closed,setClosed] = useState(true)

    const handleOnClickClose =()=>{
        setClosed(false)
    }

    const handleOnClickSave =()=>{
        
    }

    const [note,setNote] = useState("")
    const [amount,setAmount] = useState(0)
    const [date,setDate] = useState()
    const [type,setType] = useState("Expense")

    const changeNote =(e)=>{
        setNote(e.target.value)
    }
    const changeAmount =(e)=>{
        setAmount(e.target.value)
    }
    const changeDate =(e)=>{
        setDate(e.target.value)
    }
    const selectType =(e)=>{
        setType(e.target.value)
    }

    if (closed){
    return(
        <div>
            <button onClick={handleOnClickClose}>CANCEL</button>
            <div>{/* tên người dùng ở đây */}</div>


            <select onSelect={selectType} value={type}>
                <option>Expense</option>
                <option>Income</option>
            </select>

            <input type="number" placeholder="Số tiền" onChange={changeAmount} value={amount}/>

            <input type="text" placeholder="Ghi chú" onChange={changeNote} value={note}/>

            <input type="date" onChange={changeDate} value={date}/>

            <button onClick={handleOnClickSave}>SAVE</button>
        </div>
    )}
}

export default InputAdd