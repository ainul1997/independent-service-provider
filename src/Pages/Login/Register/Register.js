import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigeteLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'> Plase Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />
                <input type="email" name='email' id="" placeholder='Email Address' required />
                <input type="password" name='password' placeholder='password' id="Password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? ' ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms"> Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms"> Accept Genius Car Terms and Conditions</label>
                <input disabled={!agree} className='btn btn-primary w-50 mx-auto d-block mb-3 mt-3' type="submit" value="Register" />
            </form>
            <p> Already have an account? <Link to="/login " className='text-primary text-decoration-none' onClick={navigeteLogin}> Plase Login</Link></p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;