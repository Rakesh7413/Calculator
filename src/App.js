import { useState } from 'react';
function App() {
    const [cal, setCal] = useState("");
    const [res, setRes] = useState("");

    const op=['/', '*', '+', '-', '.'];

    const updateCal = value => {
        if(
            op.includes(value) && cal === '' ||
            op.includes(value) && op.includes(cal.slice(-1)
            )
        ) {
            return;
        }
        setCal(cal +value);
        if(!op.includes(value))
        {
            setRes(eval(cal+value).toString());
        }
    }
    const digits  = () =>{
        const digit = [];
        for(let i=1;i<10;i++)
        {
            digit.push(<button onClick={() => updateCal(i.toString())} key = {i}>{i}</button>)
        }
        return digit;
    }
    const calculate = () => {
        setCal(eval(cal).toString());
    }
    const deleteLast = () => {
        if(cal == '')
        {
            return;
        }
        const value = cal.slice(0,-1);
        setCal(value);
    }
    return ( 
        <div className = "App">
            <div className="claculator">
                <div className="result">
                    {res ? <span>({res})</span> : ''} {cal || "0"}
                </div>
                <div className="operators">
                    <button onClick={() => updateCal('*')}>*</button>
                    <button onClick={() => updateCal('/')}>/</button>
                    <button onClick={() => updateCal('+')}>+</button>
                    <button onClick={() => updateCal('-')}>-</button>
                    <button onClick={deleteLast}>C</button>
                </div>
                <div className="numbers">
                    { digits()}
                    <button onClick={() => updateCal('0')}>0</button>
                    <button onClick={() => updateCal('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;