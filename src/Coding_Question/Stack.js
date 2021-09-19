import React,{useState} from 'react';
import { render } from 'react-dom';


export default function Stack(){
    const [stack,setStack]=useState([]);
    const [data,setData]=useState(0);

    const handlePush=()=>{
       setStack([...stack,data]);
       console.log(stack);
    }

    const handlePop=()=>{
       const item=[...stack];
       item.pop();
       setStack(item);
       console.log(stack,item);
    }

    const handleNumber=(e)=>{
      setData(e.target.value);
      console.log(data); 
    }

    const handleEmpty=()=>{
      setStack([]);
      console.log(stack);
    }
      return(
          <div>
              <div>
                  <input type="text" value={data} onChange={handleNumber}></input>
                  <button onClick={handlePush}>push</button>
                  <button onClick={handlePop}>pop</button>
                  <button onClick={handleEmpty}>isEmpty</button>
              </div>
            {stack.map((item)=>(
                 <div>
                 <h1>{item}</h1>
                 <hr/>
                 </div>
                )
            )}
          </div>
      );
  
}