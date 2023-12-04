import React, { useContext, useEffect, useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../HomeComponents/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
   
    const [MUser, setMUser] = useState([]);
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/users?Email=${user?.email}`)
        .then(res => res.json())
        .then(data => {setMUser(data)
            
       
        })
    },[user,MUser])
    
    return (


       <>
        <div className='flex justify-between w-full mx-auto'>
        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden"><FiAlignJustify /></label>
        <img className='w-16 lg:hidden' src="https://i.ibb.co/2cZQpd2/north-south-university1451.jpg" alt="" />
        </div>
        <div>
            
          
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   
                   <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to={'profile'} >Profile</NavLink></li>
                        {MUser.Role== 'user' ? <><li><NavLink to={'RequestedMeals'} >Requested Meals</NavLink></li>
                        <li><NavLink to={'MyReviews'} >My Reviews</NavLink></li></>
                        :<>
                       <li> <NavLink to={'AddMeals'} >Add Meals</NavLink></li>
                        <li><NavLink to={'AllMeals'} >All Meals</NavLink></li>
                        
                        <li><NavLink to={'UpcomingMeals'} >Upcoming Meals</NavLink></li>
                        <li><NavLink to={'Serve Meals'} >Serve Meals</NavLink></li>
                        <li><NavLink to={'ManageUser'} >Manage User</NavLink></li>
                        </>
                        }
                        <li><NavLink to={'/'} >Back to Home</NavLink></li>
                        
                    </ul>

                </div>
            </div>

        </div>
       </>
    );
};

export default Dashboard;