import React, { useState } from 'react'


export default function Calculator() {
  const [curent,setCurent]=useState(' ');
  const [previus,setPrevius]=useState('');
  const[operation,setOperation]=useState('');
  const append=(e)=>{
    const value = e.target.getAttribute('data');
    if( value === '.' && curent.includes('.'))return;
    setCurent(curent + value)

  }
  const hendelDelet=() =>{
    setCurent(curent.slice(0,-1))
  }
  const handelAllClear=()=>{
    setCurent('');
    setPrevius('');
    setOperation('');


  }
  const choosOperator =(e) =>{
    if(curent === '')return
    if(previus !== ''){
      let value = compute();
      setPrevius(value)
    }
    else{
      setPrevius(curent)
    }
    setCurent('');
    setOperation(e.target.getAttribute('data'));

  }
  const compute =() =>{
    let result;
    let number = parseFloat(previus);
    let currentNumber=parseFloat(curent)
    if (isNaN(number) || isNaN(currentNumber))return
switch(operation){
    case '+':
        result=number + currentNumber;
       break;
    case '-':
       result=number - currentNumber;
      break;
    case '÷':
       result = number / currentNumber;
       break;
    case '×':
    result=number * currentNumber;
    break;
    default:return 
}
return result

  }
  const equals =()=>{
    let value=compute();
    if(value === undefined || value === null)return
    setCurent(value);
    setPrevius('');
    setOperation('');

  } 
   
  

  return (
   <div className="container">
    <div className="screen">
      <div className="previos">{previus} {operation}</div>
      <div className="curent">{curent}</div>
    </div>
    <div className="btn bg-info "  id='name' onClick={handelAllClear}>Ac</div>
    <div className="btn bg-info" onClick={hendelDelet}>DEL</div>
    <div data={'÷'} className="btn bg-secondary" onClick={choosOperator}>÷</div>
    <div className="btn btn-info"  data={'7'} onClick={append}>7</div>
    <div className="btn btn-info" data={'8'} onClick={append}>8</div>
    <div className="btn btn-info" data={'9'} onClick={append}>9</div>
    <div  data={'×'} className="btn  bg-secondary" onClick={choosOperator}>×</div>
    <div className="btn btn-info" data={'4'} onClick={append}>4</div>
    <div className="btn btn-info" data={'5'} onClick={append}>5</div>
    <div className="btn btn-info" data={'6'} onClick={append}>6</div>
    <div  data={'+'}className="btn  bg-secondary" onClick={choosOperator}>+</div>
    <div className="btn btn-info" data={'1'} onClick={append}>1</div>
    <div className="btn btn-info" data={'2'} onClick={append}>2</div>
    <div className="btn btn-info" data={'3'} onClick={append}>3</div>
    <div data={"-"} className="btn  bg-secondary" onClick={choosOperator}>-</div>
    <div className="btn bg-info" data={'.'} onClick={append}>.</div>
    <div className="btn btn-info" data={'0'} onClick={append} >0</div>
    <div data={'='} className="btn  bg-secondary "id='name' onClick={equals}>=</div>




   </div>
  )
}
