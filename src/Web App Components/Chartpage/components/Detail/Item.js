import './Item.css'
import {React, useState} from 'react'
const Item=(props)=>{
    const [modal,setModal]=useState(false);
    const handleModal=()=>{
        setModal(!modal);
    }
    const locData=(x)=>{
        let tmp=x;
        for(let i=0;i<tmp.length;i++){
            // console.log(tmp[i].day, tmp[i].month, tmp[i].year )
            // console.log(props.day, props.month, props.year )
            // console.log(true);
            if(tmp[i].day!==props.day&&tmp[i].month!=props.month&&tmp[i].year!=props.year){
                // console.log(true);
                tmp.splice(i, 1);
            }
            
        }
        // console.log(tmp);
        return tmp;
    }
    const tmp=props.dataBegin;
    console.log(tmp);
    for(let i=0;i<tmp.length;i++){
        // console.log(tmp[i].day, tmp[i].month, tmp[i].year )
        // console.log(props.day, props.month, props.year )
        // console.log(true);
        if(tmp[i].day!==props.day&&tmp[i].month!==props.month&&tmp[i].year!==props.year){
            // console.log(true);
            tmp.splice(i, 1);
        }
        
    }
    // console.log(tmp);
    // console.log(props.day, props.month, props.year )
    // console.log(props.dataBegin)
    return(
        <div onClick={handleModal}>
                <div className='contain'>
        <div className='item-1' >{props.day}/{props.month}/{props.year}  </div>
        <div className='item-2'>
        <div>{props.year}</div>
            <div>{props.day}</div>
            <div>{props.year-props.day}</div>
        </div>
        
    </div>
    <div className='item-3'></div>
    
    {
        modal? 
        <div className="modal">
        <div onClick={handleModal} className="overlay"></div>
        <div className="modal-content">
      { props.dataBegin
    //    locData(props.dataBegin)
      .filter((item) => {
            return (
              item.day===props.day
            //   ,
            //   item.month===props.month,
            //   item.year===props.year
            );
          })
          .map((item) => {
            return (
            //   <ToDoItems workList={workList}
            //   key={item.id}
            //   work={item.work}
            //   day={item.day}
            // />
                <div>
                    {item.note}
             </div>
            );
          })
        }
          {/* <button className="close-modal" style={{ color: "#2db84c" }} onClick={handleModal}>
            CLOSE
          </button> */}
        </div>
      </div>:""
    }
    </div>
    );
}
export default Item;