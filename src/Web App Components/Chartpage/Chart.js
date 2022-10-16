const Chart = (props) => {
    return (
        <div>
            
            <div className = "balance-group" >    
                <div className= "balance" >
                    <h2>Số dư đầu</h2>
                    <h2>{props.initialBalance}</h2>
                </div>
                
                <div className= "balance" >
                    <h2>Số dư cuối</h2>
                    <h2>{props.finalBalance}</h2>
                </div>
            </div>

            <Graph className= "Graph"/>

            <div>
                <h2>Số khoản thu</h2>
                <h2>{props.incomes}</h2>

                <h2>Số khoản chi</h2>
                <h2>{props.expenses}</h2>
            </div>

        </div>
        )
    }

const Graph =()=> 
{}


export default Chart