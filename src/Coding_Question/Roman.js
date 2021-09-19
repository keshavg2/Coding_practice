// Convert the Roman Number in to Integer

import react,{useState} from 'react';

export default function Roman(){
    const [val,setVal]=useState('');
    const [num,setNum]=useState(0);
    const [rom,setRom]=useState(false);
    
    const sate=(i)=>{
        if(i=='I'){
            return 1;
        }
        if(i=='V'){
            return 5;
        }
        if(i=='X'){
            return 10;
        }
        if(i=='L'){
            return 50;
        }
        if(i=='C'){
            return 100;
        }
        if(i=='D'){
           return 500; 
        }
        if(i=='M'){
            return 1000;
        }
        return -1;
    }
    if(rom){
        let count=0;
        for(let i=0;i<val.length;i++){
            let sum=sate(val.charAt(i));
            let c=sate(val.charAt(i+1));
            //console.log(sum,c);
            if(c>0){
              if(sum>=c){
                count=count+sum;
              }
              else{
                count=count+c-sum;
                i++;
              }
            }
            else{
                count=count+sum;
            }
        }
            setNum(count);
            setRom(false);
    }

    const handleConvert=()=>{
        setRom(true);
    }
        
   return(
        <div>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={handleConvert}>convert</button>
            <div>{num}</div>

        </div>
    );
}

