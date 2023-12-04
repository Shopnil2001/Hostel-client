import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../HomeComponents/AuthProvider';

const Profile = () => {
    const {user,loading} = useContext(AuthContext)
   
    const [MUser, setMUser] = useState([]);
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/users?Email=${user?.email}`)
        .then(res => res.json())
        .then(data => {setMUser(data)
            
        //  console.log(MUser[0]);
        })
    },[user,MUser])
    
    if(loading){
        
        return <p>loading</p>
    }
    return (
        <div className='text-center '>
            <img className='w-28 rounded-full mx-auto mb-3' src={user?.photoURL} alt="" />
            <h2 className='text-3xl font-extrabold '>{user?.displayName}</h2>
            <div>
                <h1 className='text-xl font-bold text-orange-400 border-b my-5 border-b-orange-500 '>Badge</h1>
                <div className='flex gap-4 justify-center'>
                    <img className='w-10 rounded-full' src={MUser[0]?.userBadge} alt="" />
                    <img src={MUser[0]?.payBadge} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;