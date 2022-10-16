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
    const [category,setCategory] = useState()

    const changeNote =(e)=>{
        setNote(e.target.value)
    }
    const changeAmount =(e)=>{
        setAmount(e.target.value)
    }
    const changeDate =(e)=>{
        setDate(e.target.value)
    }
    const selectCategory =(e)=>{
        setType()
        setCategory(e.target.value)
    }

    if (closed){
    return(
        <div>
            <button onClick={handleOnClickClose}>CANCEL</button>
            <div>{/* tên người dùng ở đây */}</div>


            <select onSelect={selectCategory} value={category}>
                {categoryList.map((item)=>{return(<option></option>)})}
            </select>

            <input type="number" placeholder="Số tiền" onChange={changeAmount} value={amount}/>

            <input type="text" placeholder="Ghi chú" onChange={changeNote} value={note}/>

            <input type="date" onChange={changeDate} value={date}/>

            <button onClick={handleOnClickSave}>SAVE</button>
        </div>
    )}
}

export default InputAdd