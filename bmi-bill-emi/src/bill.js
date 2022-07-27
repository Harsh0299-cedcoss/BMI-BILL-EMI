import React from 'react';
import "./bill.css"
const Bill = () => {
    const calcBILL = ()=>{
        let units = document.getElementById("unit").value.trim();
        let err = document.getElementById("error1");
        let output = document.getElementById("output1");
        output.innerHTML = "";
        err.innerHTML = "";
        if(units===""){
            err.innerHTML = "Enter Units";
            return;
        }
        if(units<0){
            err.innerHTML = "Units cannot be nagative";
            return;
        }
        if(units<=50){
            output.innerHTML = "Bill = <span id='billOutput'><b>\u20B9"+(units*3.50).toFixed(2)+"</b></span>"
        }
        else if(units<=150){
            output.innerHTML = "Bill = <span id='billOutput'><b>\u20B9"+(50*3.50+(units-50)*4.0).toFixed(2)+"</b></span>"
        }
        else if(units<=250){
            output.innerHTML = "Bill = <span id='billOutput'><b>\u20B9"+(50*3.50+100*4.0+(units-150)*5.20).toFixed(2)+"</b></span>"
        }
        else {
            output.innerHTML = "Bill = <span id='billOutput'><b>\u20B9"+(50*3.50+100*4.0+100*5.20+(units-250)*6.50).toFixed(2)+"</b></span>"
        }
    }
    return (
        <center><div id="bill">
            <h2>Electricity Bill Calculator</h2>
            <p className="note">Note: Bill is Calculated in Rupees</p><br/>
            <label htmlFor="unit">Enter Units: </label>
            <input id='unit' type="number" min={0}/>
            <br/>
            <pre id='error1'> </pre>
            <button id='calcBILL' className='calc' onClick={calcBILL}>Calculate BILL</button>
            <p id='output1'></p>
        </div></center>
    );
};

export default Bill;