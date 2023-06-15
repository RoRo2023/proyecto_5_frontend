import { Routes, Route,  Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import SignUp from '../pages/SignUp';
import UserInfo from '../pages/UserInfo';

import { useContext, useState } from 'react';
import { UserContext } from '../context/userContex';


function NavigationRoute() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    const { userContex } = useContext(UserContext)

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login
              setToken={setToken}
              setUser={setUser}
            />
            }></Route>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/userinfo' element={<UserInfo/>}/>
        </Routes>
    )
}

export default NavigationRoute;