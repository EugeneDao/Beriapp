import Profile from "./Profile/Profile"
import Summary from "./Summary/Summary"
import TransactionList from "/Transaction/TransactionList.js"

const Portfolio = (props) => {
    return (
        <div>
            <Profile/>
            <TransactionList/>
            <Summary/>
        </div>
    )
}

export default Portfolio