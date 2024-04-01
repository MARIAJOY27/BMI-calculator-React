import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [status, setStatus] = useState('')

  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true) 

  const validate=(e)=>{
    const {name , value}= e.target
    console.log(name);
    console.log(value);


    if(!!value.match(/^\d+(\.\d+)?$/)){
      const numericValue = parseFloat(value);
      if(name=='height'){
        setHeight(numericValue)
        setIsHeight(true)
      }
      else{
        setWeight(numericValue)
        setIsWeight(true)
      }
    }
    else{
      if(name=='height'){
        setHeight(value)
        setIsHeight(false)
      }
      else{
        setWeight(value)
        setIsWeight(false)
      }
    }

  }

   const handleCalculate = (e)=>{
    const calculatedBmi = (weight / (height * height)).toFixed(2);
    setBmi(calculatedBmi);
     
     if(calculatedBmi<18.5){
      setStatus(<span style={{color:"#b5302c"}}>Underweight</span>)
     }
     else if(calculatedBmi>=18.5 && calculatedBmi<=24.9){
      setStatus(<span style={{color:"#A1C398"}}>Normal weight</span>)
     }
     else if(calculatedBmi>=25 && calculatedBmi<=29.9){
      setStatus(<span style={{color:"#b5302c"}}>Overweight</span>)
     }
     else{
      setStatus(<span style={{color:"#b5302c"}}>Obesity</span>)
     }

   }

   const handleReset = ()=>{
    setHeight('')
    setWeight('')
    setBmi('')
    setIsHeight(true)
    setIsWeight(true)
    setStatus('')

   }

  return (
    <>
      <div className='main'>
        <div className='sub p-5'>
         <h1 className='heading' style={{paddingLeft:"90px"}}><span style={{color:"#BB8493"}}>Calculate Your BMI</span></h1>
         <p style={{paddingLeft:"92px",fontSize:"20px"}}>Enter your weight(in kg) and height(in metres)</p>

         <div className=' d-flex justify-content-center result align-items-center flex-column '>
          <h1><span style={{color:"#704264"}}>{bmi}</span></h1>
          <h3>{status}</h3>
          
         </div>

         <form action="" className='mt-4 ms-3 me-3'>
         <TextField style={{backgroundColor:"#FFF7F1"}} id="outlined-basic" name='height' value={height ||""} label="Height in metres"  variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
         {!isHeight && <p className='text-danger'>Invalid Input</p>} <br /> <br />
         <TextField style={{backgroundColor:"#FFF7F1"}}  id="outlined-basic" name='weight' value={weight ||""} label="Weight in kg"  variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
         {!isWeight && <p className='text-danger'>Invalid Input</p>}
         </form>

         <div className='d-flex mt-4'>
         <Button style={{backgroundColor:"#BB8493"}} onClick={handleCalculate} variant="contained" className='btn w-50 p-3 ms-4 me-3'  disabled={isHeight && isWeight ?false:true}><span style={{fontSize:"17.6px"}}>CALCULATE</span></Button>

         <Button onClick={handleReset} variant="outlined"color='error' className='btn w-50 p-3 me-3 ms-3'><span style={{fontSize:"17.6px"}}>RESET</span></Button>
         </div>

         

        </div>
      </div>
    </>
  )
}

export default App
