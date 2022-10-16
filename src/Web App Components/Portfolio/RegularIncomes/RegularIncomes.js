import {useState} from "react"
import Income from "./Income"

const RegularIncomes =(props)=>{

    const [incomeList, setIncomeList] = useState([])

    const [inputPopUp,setInputPopUp] = useState(false)

    const handleOnClickAdd=()=>{
        setInputPopUp(!inputPopUp)
    }

    return(
        <div>
            <button onClick={handleOnClickAdd}>Thêm</button>

            {inputPopUp && <InputIncome/>}

            {incomeList.map((item)=>{
                return (
                    <Income
                        key={item.id}
                        category={item.category}
                        icon={item.icon}
                        day={item.day}
                        note={item.note}
                        amount={item.amount}
                        />
                )
            })}
        </div>
    )
}

export default RegularIncomes