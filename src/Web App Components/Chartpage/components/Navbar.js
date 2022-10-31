// import react from 'react';
import './Navbar.css';
import { React, PureComponent, useState } from 'react';
import Detail from './Detail/Detail';
// BIEU DO COT
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1',
    Expense:0,
    Income:0,
    // uv: 400,
    // pv: -240,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2400,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '3',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '5',
    Expense:0,
    Income:0,
    // uv: -200,
    // pv: 90,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2290,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '7',
    Expense:0,
    Income:0,
    // uv: -780,
    // pv: 908,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2000,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '9',
    Expense:0,
    Income:0,
    // uv: -800,
    // pv: 400,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2181,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '11',
    Expense:0,
    Income:0,
    // uv: 390,
    // pv: -800,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2500,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '13',
    Expense:0,
    Income:0,
    // uv: 490,
    // pv: -300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '15',
    Expense:0,
    Income:0,
    // uv: -490,
    // pv: 300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '17',
    Expense:0,
    Income:0,
    // uv: 490,
    // pv: -300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '19',
    Expense:0,
    Income:0,
    // uv: -490,
    // pv: 300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '21',
    // uv: 490,
    // pv: -300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
    Expense:0,
    Income:0,
  },
  {
    name: '',
    Expense:0,
    Income:0,
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
  },
  {
    name: '23',
    // uv: -490,
    // pv: 300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
    Expense:0,
    Income:0,
  },
  {
    name: '',
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
    Expense:0,
    Income:0,
  },
  {
    name: '25',
    // uv: 490,
    // pv: -300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
    Expense:0,
    Income:0,
  },
  {
    name: '',
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
    Expense:0,
    Income:0,
  },
  {
    name: '27',
    // uv: -490,
    // pv: 300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
    Expense:0,
    Income:0,
  },
  {
    name: '',
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2210,
    Expense:0,
    Income:0,
  },
  {
    name: '29',
    // uv: 490,
    // pv: -300,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    Expense:0,
    Income:0,
    // note:"mua do an"
    //: 2100,
  },
  {
    name: '',
    // uv: -300,
    // pv: 398,
    // type:"Expense",
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    Expense:0,
    Income:0,
    //: 2210,
  },
  {
    name: '31',
    // uv: -490,
    // pv: 300,
    // type:"Expense",
    Expense:0,
    Income:0,
    // day:12,
    // month:1,
    // year:2022,
    // amount:5000,
    // note:"mua do an"
    //: 2100,
  },
];
// data[30].Expense=0;





const changeMonth = (m) => {
  switch (m) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}




const Navbar = () => {
  const dulieu=[
    {
      day:"10",
      month:10,
      year:"2022",
      amount:500,
      note:"li xi"
    },
    {
      day:"20",
      month:11,
      year:"2022",
      amount:500,
      note:"li xi"
    },
    {
      day:"30",
      month:10,
      year:"2022",
      amount:1500,
      note:"li xi"
    },
    {
      day:"10",
      month:10,
      year:"2022",
      amount:200,
      note:"sinh nhat"
    },
    {
      day:"19",
      month:10,
      year:"2022",
      amount:-200,
      note:"mua nuoc"
    },
    {
      day:"1",      // Ở ĐÂY SAO KO HIỆN  
      month:10,
      year:"2022",
      amount:-700,
      note:"quan ao"
    },
    {
      day:"2",
      month:10,
      year:"2022",
      amount:600,
      note:"ba me"
    },
    {
      day:"3",
      month:11,
      year:"2022",
      amount:300,
      note:"luong"
    },
    
    {
      day:"1",
      month:11,
      year:"2022",
      amount:-1000,
      note:"nha"
    },
    {
      day:"7",
      month:11,
      year:"2022",
      amount:3000,
      note:"hoc bong"
    },
  ]
  const tmpData=dulieu;
  console.log(tmpData)
  let date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);

  console.log(month);
  const [detail,setDetail]=useState(false);

  console.log(detail)
  const handleClose=(x)=>{
    setDetail(x);
  }

  const handleChange = (e) => {
    const arr = e.target.value.split("-");
    setMonth(parseInt(arr[1], 10));
    // console.log(chartData(filterMonthData(changeData(dulieu)),data))
    // console.log(month)
  }


  // xem lai (chi xet trong 2022)
  const openBalance=(x)=>{
    let tong=0;
    for(let i=0;i<x.length;i++){
        if(x[i].month<=month){
          tong=tong+x[i].amount;
        }
    }
    return tong;
  }

  // xem lai (chi xet trong 2022)
  const netIncome=(x)=>{
    let tong=0;
    for(let i=0;i<x.length;i++){
      if(x[i].month==month){
        tong=tong+x[i].amount;
      }
    }
    return tong;
  }

  // xem lai (chi xet trong 2022) dung du lieu data cua do thi
  const endingBalance=()=>{
    return netIncome(data)+openBalance(data);
  }

  //xem lai
  const inCome=(x)=>{
    let tong=0;
    for(let i=0; i<x.length;i++){
      if(x[i].month==month&&x[i].amount>0){
        tong+=x[i].amount;
      }
    }
    return tong;
  }


  //xem lai
  const exPense=(x)=>{
    let tong=0;
    for(let i=0; i<x.length;i++){
      if(x[i].month==month&&x[i].amount<0){
        tong+=x[i].amount;
      }
    }
    return tong;
  }

  // XEM LAI CHO INCOME EXPENSE
  const changeData=(x)=>{
    let tmp=x;
    for(let i=0;i<tmp.length;i++){
      if(tmp[i].amount>0){
        tmp[i].Income=tmp[i].amount;
        tmp[i].Expense=0;
      }else{
        tmp[i].Expense=tmp[i].amount;
        tmp[i].Income=0;
      }
    }
    return tmp;
  }
  const filterMonthData=(x)=>{
    let tmp=x;
    for(let i=0;i<tmp.length;i++){
      for(let j=i+1;j<tmp.length;j++){
        if(tmp[i].day==tmp[j].day&&tmp[i].month==tmp[j].month&&tmp[i].year==tmp[j].year){
          tmp[i].Income+=tmp[j].Income;
          tmp[i].Expense+=tmp[j].Expense;
          tmp.splice(j, 1);
        }
      }
    }
    return tmp;
  }
  const chartData=(x,y)=>{ //y la data
    let tmp=x;
    let tmp2=y;
    // console.log(tmp)
    for(let i=0;i<tmp.length;i++){
      if(tmp[i].month===month){
        // console.log(tmp[i])
      tmp2[tmp[i].day-1].Expense=tmp[i].Expense;
      tmp2[tmp[i].day-1].Income=tmp[i].Income;
      // console.log( tmp2[tmp[i].day-1])
      }else{
        tmp2[tmp[i].day-1].Expense=0;
      tmp2[tmp[i].day-1].Income=0;
      }
    }
    console.log(tmp2)
    return tmp2;
  }
  const handleDetail=()=>{
    // console.log(detail)

      setDetail(!detail);
      // console.log(changeData(data))
      // console.log(filterMonthData(changeData(data)));
  }

  return <div>
    <div className='child-1'>
      <div className='contain-thanh'>
        <div className='thanh'>
          <img src="./avatar.png" style={{ width: "25%" }}></img>
          <div>
            phuc
            <div>5000</div>
          </div>
        </div>
        <div style={{ fontWeight: "bold" }}>{month === date.getMonth() + 1 ? changeMonth(date.getMonth() + 1) : changeMonth(month)}</div>
        <div className='chose-date'>
          {/* <div style={{ fontWeight: "bold" }}>{month === date.getMonth() + 1 ? changeMonth(date.getMonth() + 1) : changeMonth(month)}</div> */}

          <div>
            <input type="month" onChange={handleChange}></input>
          </div>
        </div>
      </div>
    </div>
    {detail? <Detail data={chartData(filterMonthData(changeData(dulieu)),data)} dataStart={tmpData} thang={month} dataDay={filterMonthData(changeData(dulieu))} close={handleClose}/> :
    <div className='child-2'>
      <div className='child-3'>
        <div>Opening Balance<br></br><span>900</span></div>
        <div>Ending Balance<br></br><span>900</span></div>
      </div>
      <div className='child-4' onClick={handleDetail}>
        <br></br>
        <div style={{
          marginBottom: "20px", color:
            "#000000"
          , flexBasis:
            "100%",
          fontSize:
            "14px",
          lineHeight:
            "21px",
          textAlign:
            "center"
        }}>Net Income<br></br>2000</div>
        <ResponsiveContainer className="chart" width="80%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={chartData(filterMonthData(changeData(dulieu)),data)}          //CHU Y CO GI DOI LAI DATA NGAY
            stackOffset="sign"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="Income" fill="#22a1d3" stackId="stack" strokeWidth={1000} />
            <Bar dataKey="Expense" fill="#f25a5a" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='child-5'>
        <div>
          <div>Income <br></br>300</div>
        </div>
        <div>
          <div>Outcome <br></br>500</div>
        </div>
      </div>
      
    </div>
    }
  </div>
}
export default Navbar;