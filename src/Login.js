
import app from './firebase';
import './Login.css'
import React, {useState} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import { createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword, 
 } from 'firebase/auth';


function Login() {
    
    // 초기값 설정해주기
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
        //Signed in
            const user = userCredentials.user;
            console.log(user);
            alert("성공적으로 계정을 생성했습니다");
            navigate('/')
        // ...
        })
            .catch((error)=> {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode);
                //..
        })
    }
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
               const user = userCredentials.user;
               console.log(user);
               alert("성공적으로 로그인 했습니다");   
               navigate('/')      
        })
            .catch((error) =>{
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode);
        })
    }
   

//onChange에 의해서 값이 위에 초기값으로 이동
    return (
        <div className="login">
            <Link to="/">
                <img className='login_logo'
                     src="https://static.vecteezy.com/system/resources/thumbnails/004/979/844/small/simple-cactus-logo-that-is-easy-to-recognize-and-remember-free-vector.jpg"
                     alt=''/>
            </Link>


            <div className='login_container'>
                <h1>로그인</h1>
                
                <form>
                    <h5>이메일 </h5>
                    <input type='email' value={email} onChange=
                        {e => setEmail(e.target.value)}/>

                    <h5> 비밀번호 </h5>
                    <input type='password' value={password} onChange
                        ={e => setPassword(e.target.value)}/>
                   
                    <button type='submit'
                            className='login_signInButton'
                            onClick={signIn}>로그인
                    </button>
                 
                </form>

                <p>회원가입을 하지 않으셔도 페이지 이용이 가능합니다</p>

                <button onClick={register} className='login_registerButton'>회원가입하기</button>
            </div>
        </div>
    );
}

export default Login