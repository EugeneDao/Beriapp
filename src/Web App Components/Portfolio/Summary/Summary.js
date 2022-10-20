const Summary =(props)=>{
    return (
        <div className="summary">
            <div>{/* Tóm tắt thu chi theo tháng */}
            <h1>Tháng này</h1>
            <h2>Tiền vào: {totalInflow}</h2>
            <h2>Tiền ra: {totalOutflow}</h2>
            <h2>{totalInflow-totalOutflow}</h2>
            </div>
        </div>
    )
}

export default Summary;