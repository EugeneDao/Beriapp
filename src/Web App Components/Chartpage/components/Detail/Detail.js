import './Detail.css'
import { React, useState } from 'react';
import Item from './Item';
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
const Detail = (props) => {
  const handleClose=()=>{
    props.close(false);
  }

    return (
        <div className='container'>
            <div className='child'>
                <div className='child-3'>
                    <div>Opening Balance<br></br><span>900</span></div>
                    <div>Ending Balance<br></br><span>900</span></div>
                </div>
                <div className='child-4' >
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
                    }}>Net Income<br></br>2000 đ</div>
                    <ResponsiveContainer className="chart" width="80%" aspect={2}>
                        <BarChart
                            width={500}
                            height={300}
                            data={props.data}               // CHU Y CO GI DOI LAI THANH DATA
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
                        <div>Income hello<br></br>300</div>
                    </div>
                    <div>
                        <div>Outcome hello<br></br>500</div>
                    </div>
                </div>

            </div>
            <div className='detail-right'>
                 <div className='nav' style={{fontSize:"20px", fontWeight:"bold"}}><div style={{marginRight:"16px", cursor:"pointer"}} onClick={handleClose}>X</div>Net Income</div>
                        <div className='child-4' >
                    <br></br>
                    <div style={{
                        marginBottom: "20px", color:
                            "#000000"
                        , flexBasis:
                            "100%",
                        fontSize:
                            "24px",
                            fontWeight:"bold",
                        lineHeight:
                            "21px",
                        textAlign:
                            "center"
                    }}><br></br>2000 đ</div>
                    <ResponsiveContainer className="chart" width="80%" aspect={2}>
                        <BarChart
                            width={500}
                            height={300}
                            data={props.data}
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
                {
                    props.dataDay.filter((item)=>{
                        return (
                            item.month===props.thang
                        )
                    })
                    .map((item) => {
                        return (
                          <Item 
                            // key={item.id}
                            dataDay={props.dataDay}
                            dataBegin={props.dataStart}
                            month={item.month}
                            year={item.year}
                            day={item.day}
                            // uv={item.uv}
                            // pv={item.pv}
                          />
                        );
                      })
                }
            </div>
        </div>
    );
}
export default Detail;