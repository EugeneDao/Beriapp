import Chart from "/Chart.js"

const Chartpage = (props) => {
    return(
        <div>
            <TimeFilter className= "time-filter" />
            <Chart className= "chart" />
        </div>
    )
}

export default Chartpage