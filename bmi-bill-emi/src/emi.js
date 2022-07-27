import React, { useState } from 'react';
import "./emi.css"
const Emi = () => {
    const [emi,setEmi]=useState(0);
    const [tinterest,setInt]=useState(0);
    const [amt,setAmt]=useState(0);
    const calcEmi = ()=>{
        let loan = Number(document.getElementById("loan").value);
        let si = Number(document.getElementById("si").value);
        let yrs = Number(document.getElementById("timeYrs").value);
        let mnt = Number(document.getElementById("timeMnt").value);
        let err = document.getElementById("error2");
        err.innerHTML = "";
        document.getElementById("emiAns").innerHTML = "";
        document.getElementById("detailList").innerHTML = "";
        let n = yrs*12+mnt;
        let r = si/12/100;
        let e = loan*r*((1+r)**n)/((1+r)**n-1);
        if(isFinite(e)){
            document.getElementById("emiAns").innerHTML = `<label for="emiResult">EMI:</label><input value=${"\u20B9"+e.toLocaleString()} id="emiResult" disabled/>`
            setEmi(e.toLocaleString());
            setInt((e*n-loan).toLocaleString());
            setAmt((e*n).toLocaleString());
        }
        else{
            err.innerHTML="Getting EMI as Infinity"
        }
    }
    const reset = ()=>{
        document.getElementById("loan").value="";
        document.getElementById("si").value="";
        document.getElementById("timeYrs").value="";
        document.getElementById("timeMnt").value="";
        document.getElementById("error2").innerHTML = "";
        document.getElementById("emiAns").innerHTML = "";
        document.getElementById("detailList").innerHTML = "";
        setEmi(0);
        setInt(0);
        setAmt(0);
    }
    const details = ()=>{
        if(emi!==0)
        document.getElementById("detailList").innerHTML=`
        <h3>Details:</h3>
        <table>
        <tr>
            <th>Monthly EMI</th>
            <td>\u20B9${emi}</td>
        </tr>
        <tr>
            <th>Total Interest</th>
            <td>\u20B9${tinterest}</td>
        </tr>
        <tr>
            <th>Total Amount</th>
            <td>\u20B9${amt}</td>
        </tr>
        </table>`;
        else
        document.getElementById("error2").innerHTML="Calculate First"
    }
    return (
        <center><div id="emi">
            <h2>EMI Calculator</h2>
            <p className='note2'>Note: Empty Field is Considered as 0</p>
            <br/>
            <div>
                <label htmlFor='loan'>Loan Amount:</label>
                <input placeholder="Rs.0" type="number" min="0" id='loan'/>
            </div>
            <br/>
            <div>
                <label htmlFor='si'>Interest:</label>
                <input placeholder='0%' type="number" min="0" id='si'/>
            </div>
            <br/>
            <div>
                <label htmlFor='time'>Period:</label>
                <span>
                    <input placeholder='0 Years' type="number" min="0" className="time" id='timeYrs'/>
                    <input placeholder='0 Months' type="number" min="0" max="11" className="time" id='timeMnt'/>
                </span>
            </div>
            <br/>
            <div id='emiAns'></div>
            <br/>
            <pre id='error2'></pre>
            <div id="buttons">
                <button className='calc1' onClick={calcEmi}>Calculate</button>
                <button className='reset' onClick={reset}>Reset</button>
                <button className='details' onClick={details}>Details</button>
            </div>
            <div id='detailList' style={{display:"block"}}></div>
            <br/>
        </div></center>
    );
};

export default Emi;