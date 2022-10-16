import Chart from "./Chart"

const Chartpage = (props) => {
    return(
        <div>
            <TimeFilter className= "time-filter" />
            <Chart className= "chart" />
        </div>
    )
}

export default Chartpage