import react, {useState} from 'react';

export default function Watch(){
  const [currentTime,setCurrentTime]=useState();
    const getCurrentTime=()=>{
    let date=new Date().toLocaleTimeString().slice(0,8);
    return date;
    }
    const updateTime =()=>{
      setCurrentTime(getCurrentTime());
    }
    setInterval(updateTime,1000);
    return(
        <div>
          <h1>{currentTime}</h1>  
        </div>
    )
    ;
}