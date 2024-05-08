import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import SuccessBox from '../components/successbox/SuccessBox';

function Success() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(5); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval); 

        
    }, []); 

    useEffect(() => {
        if (timeLeft === 0) {
            navigate('/'); 
        }
    }, [navigate, timeLeft]);

    return (
        <>
            <Navbar />
            <SuccessBox timeLeft={timeLeft} />
        </>
    );
}

export default Success;
