import TransactionList from "/Transaction/TransactionList.js"
import RegularIncomes from "/RegularIncomes/RegularIncomes.js"

const Portfolio = (props) => {
    return (
        <div>
            <Profile/>
            <TransactionList/>
            <RegularIncomes/>
        </div>
    )
}

export default Portfolio