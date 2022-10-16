const Transaction =(props)=>{
    return(
        <div className="transaction">
            <img className="category-icon">{props.icon}</img>
            <h1 className="category-name">{props.category}</h1>
            <h1 className="date">{props.day}
                <span>Tháng {props.month}, {props.year}</span>
            </h1>
            <p className="transaction-note">{props.note}</p>
            <p className="amount">{props.amount} VNĐ</p>
        </div>
    )
}

export default Transaction