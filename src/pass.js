import React, {useState }from "react";
import validator from 'validator';

const Main = () =>{
     const [errorMessage, setErrorMessage] = useState('')
     const validate = (value) => {
        if(validator.isStrongPassword(value,{
            minLength:8, minLowercase: 1,
            minUppercase : 1, minNumbers:1, minSymbols: 1
        })) {
            setErrorMessage('Strong Password')
        }else{
            setErrorMessage('Weak Password')
        }
     }


return(
    <div style={{
      marginLeft:'200px',
    }}> 
    
     <pre>
        <h2>Checking Password Strenth in ReactJS</h2>
        <span>Enter Paasword:</span><input type="text"
            onChange={(e) => validate(e.target.value)} /><br/>
            {errorMessage === '' ? null:
                <span style={{
                     fontWeight:'bold',
                     color:'red',

                }}>{errorMessage}</span>
            }



     </pre>
    </div>  
);
}
export default Main;