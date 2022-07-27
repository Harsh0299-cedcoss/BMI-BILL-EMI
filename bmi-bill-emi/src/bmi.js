import React from 'react';
import "./bmi.css"
const Bmi = () => {

    //changing height unit if mass unit is changed 
    const setHeight = (e)=>{
        if(e.target.value==="-1"){
            document.getElementById("heightUnit").value="-1";
        }
        if(e.target.value==="kg"){
            document.getElementById("heightUnit").value="m";
        }
        if(e.target.value==="lb"){
            document.getElementById("heightUnit").value="in";
        }
    }

    //changing mass unit if height unit is changed
    const setMass = (e)=>{
        if(e.target.value==="-1"){
            document.getElementById("massUnit").value="-1";
        }
        if(e.target.value==="m"){
            document.getElementById("massUnit").value="kg";
        }
        if(e.target.value==="in"){
            document.getElementById("massUnit").value="lb";
        }
    }

    //Calculating bmi
    const calcBMI = ()=>{

        //getting values
        let mass = document.getElementById("mass").value;
        let height = document.getElementById("height").value;
        let massUnit = document.getElementById("massUnit").value;

        //reseting the output field and error field
        document.getElementById("output").innerHTML="";
        let err = document.getElementById("error")
        err.innerHTML = "";
        
        let c=0;//validation flag

        //validations
        if(mass===""){
            err.innerHTML+="Weight field is empty<br/>";
            c++;
        }
        if(height===""){
            err.innerHTML+="Height field is empty<br/>";
            c++;
        }

        //validations passed
        if(c===0){

            //calculating bmi for "kg" and "meters"
            if(massUnit==="kg"){
                bmiOutput(mass/(height*height))
            }

            //calculating bmi for "pounds" and "inches"
            if(massUnit==="lb"){
                bmiOutput(mass/(height*height)*703)
            }
        }
    }
    const bmiOutput = (bmi)=>{
        //setting bmi
        if(bmi<18.5){
            document.getElementById("output").innerHTML=`BMI = ${bmi.toFixed(3)}<br/>Weight Status = <span class="uW"><b>Underweight</b></span>`;
        }
        else if(bmi<25.0){
            document.getElementById("output").innerHTML=`BMI = ${bmi.toFixed(3)}<br/>Weight Status = <span class="hW"><b>Healthu</b></span>`;
        }
        else if(bmi<30.0){
            document.getElementById("output").innerHTML=`BMI = ${bmi.toFixed(3)}<br/>Weight Status = <span class="oW"><b>Overweight</b></span>`;
        }
        else if(bmi>=30.0){
            document.getElementById("output").innerHTML=`BMI = ${bmi.toFixed(3)}<br/>Weight Status = <span class="ob"><b>Obesity</b></span>`;
        }
    }
    return (
        <center><div id="bmi">
            <h2>BMI Calculator</h2>
            <p className="note">Note: Select one unit and other gets selected by itself</p>
            <label htmlFor="mass">Enter Weight: </label><br/>
            <input id='mass' type="number" min={0}/>
            <select id="massUnit" defaultValue="-1" onChange={setHeight}>
                <option value="-1" disabled>-Mass-</option>
                <option value="kg">Kilos</option>
                <option value="lb">Pounds</option>
            </select>
            <br/>
            <br/>
            <label htmlFor="height">Enter Height:  </label><br/>
            <input id='height' type="number" min={0}/>
            <select id="heightUnit" defaultValue="-1" onChange={setMass}>
                <option value="-1" disabled>-Height-</option>
                <option value="m">Meters</option>
                <option value="in">Inches</option>
            </select>
            <br/>
            <pre id='error'> </pre>
            <button id='calcBMI' className='calc' onClick={calcBMI}>Calculate BMI</button>
            <p id='output'></p>
        </div></center>
    );
};
export default Bmi;