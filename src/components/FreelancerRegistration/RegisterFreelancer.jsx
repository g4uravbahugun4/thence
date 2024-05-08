import React, { useState } from 'react'
import './registration.css'
import { useNavigate } from 'react-router-dom';
function RegisterFreelancer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!name) {
            setErrorMessage('Please enter your name.');
        } else if (!email) {
            setErrorMessage('Please enter valid email.');
        } else if (!regex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            // Clear error message and submit form
            setErrorMessage('');
            console.log("Form submitted successfully.");
            navigate('/success')
        }
    };
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isFormValid = name && email && regex.test(email)
    console.log(isFormValid)
    return (
        <div className='registration'>
            
            <div className='heading'>
                <div className='title'>Registration Form</div>
                <div className='description'>Start your success Journey here!</div>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', marginTop: '70px' }}>
            <input className='form-input' placeholder='Enter your name' type='text' value={name} onChange={handleNameChange}></input>
            <input className='form-input' placeholder='Enter your email' type='email' value={email} onChange={handleEmailChange}></input>
            {errorMessage && <div style={{display:'flex',gap:'5px',alignItems:'center',width:'417px',margin:'auto'}}><img src='/error.svg' /><div className='error-message'>{errorMessage}</div></div>}
            <button className={`btn ${isFormValid ? 'btn-active' : 'btn-inactive'}`}  onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    );
}

export default RegisterFreelancer