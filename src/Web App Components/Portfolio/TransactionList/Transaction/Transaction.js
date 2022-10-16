const Transaction =(props)=>{
    return(
        <div className="transaction">
            <h1 className="type">{props.type}</h1>
            <h1 className="date">{props.day}
                <span>Tháng {props.month}, {props.year}</span>
            </h1>
            <p className="transaction-note">{props.note}</p>
            <p className="amount">{props.amount} VNĐ</p>
        </div>
    )
}

export default Transaction