import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLogin= (e) =>
    {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value
            const password = form.password.value

            loginUser(email, password)
            .then(result =>{
                    console.log(result.user)
                    const lastSignInTime = result.user?.metadata?.lastSignInTime
                    const loginInfo ={email, lastSignInTime}

                    fetch(`https://coffee-store-server-one-rho.vercel.app/users`, {
                        method : 'PATCH'  ,
                        headers :{
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(loginInfo)
                                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset();
                    })
                    
            })
            .catch(error =>{
                console.log(error)
            })
    }
    return (
        <div>
            <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form onSubmit={handleLogin} action="">
                <div className="relative mt-6">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="NA"
                    />
                    <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                        Email Address
                    </label>
                </div>
                <div className="relative mt-6">
                    <input

                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                        Password
                    </label>
                </div>
                <div className="my-6">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-gradient-to-r   from-[#1A120B] to-[#3C2A21]  px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                    >
                        Sign in
                    </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                    Don&#x27;t have an account yet?{" "}
                  
                       <Link to='/signup'> Sign up</Link>
                
                    
                </p>
            </form>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;