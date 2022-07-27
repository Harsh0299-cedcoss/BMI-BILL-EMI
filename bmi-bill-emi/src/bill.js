import React from 'react';
import "./bill.css"
const Bill = () => {

    //calculating bill
    const calcBILL = ()=>{
        //getting input value
        let units = document.getElementById("unit").value;

        //clearing error and output field
        let err = document.getElementById("error1");
        let output = document.getElementById("output1");
        output.innerHTML = "";
        err.innerHTML = "";

        //validations
        if(units===""){
            err.innerHTML = "Enter Units";
            return;
        }
        //if negative units are entered
        if(units<0){
            err.innerHTML = "Units cannot be nagative";
            return;
        }

        //calculating bill amount
        let amt = 0;
        if(units<=50){
            amt = (units*3.50)
        }
        else if(units<=150){
            amt = (50*3.50+(units-50)*4.0);
        }
        else if(units<=250){
            amt = (50*3.50+100*4.0+(units-150)*5.20);
        }
        else {
            amt = (50*3.50+100*4.0+100*5.20+(units-250)*6.50)
        }
        //Rendering output with appropriate unit
        output.innerHTML = "Bill = <span id='billOutput'><b>\u20B9"+amt.toLocaleString('en-IN')+"</b></span>"
    }
    return (
        <center><div id="bill">
            <h2>Electricity Bill Calculator</h2>
            <p className="note">Note: Bill is Calculated in Rupees</p><br/>
            <div>
                <label htmlFor="unit">Enter Units: </label>
                <input id='unit' type="number" min={0}/>
            </div>
            <br/>
            <pre id='error1'> </pre>
            <button id='calcBILL' className='calc' onClick={calcBILL}>Calculate BILL</button>
            <p id='output1'></p>
        </div></center>
    );
};

export default Bill;