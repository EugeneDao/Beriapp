const Income =(props)=>{
    return(
        <div className="transaction">
            <img className="category-icon">{props.icon}</img>
            <h1 className="category-name">{props.category}</h1>
            <h1 className="day">{props.day}</h1>
            <p className="transaction-note">{props.note}</p>
            <p className="amount">{props.amount} VNĐ</p>
        </div>
    )
}

export default Income