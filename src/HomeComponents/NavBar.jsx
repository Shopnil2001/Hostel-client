import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../../src/App.css"
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const NavBar = () => {
    const [toggle, setToggle] = useState('hidden')
    const { user, LogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()

    }
    return (
        <div className='fixed w-full z-20  bg-white'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center">

                        <img className="h-8 w-auto" src="https://i.ibb.co/2cZQpd2/north-south-university1451.jpg" alt="" />
                        <span className="text-lg font-bold text-cyan-600">NSU-Hostel</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={() => setToggle('')} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">


                    <NavLink to={'/'} onClick={() => setToggle('hidden')} className="text-sm font-semibold leading-6 text-gray-900">Home</NavLink>

                    <NavLink to={'/Meals'} onClick={() => setToggle('hidden')} className="text-sm font-semibold leading-6 text-gray-900">Meals</NavLink>

                    <NavLink to={'/UpcomingMeals'} onClick={() => setToggle('hidden')} className="text-sm font-semibold leading-6 text-gray-900">Upcoming Meals</NavLink>



                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        user ? <div className="dropdown dropdown-end rounded-full  w-10 h-10" >
                            <div tabIndex={0} role="button" style={{ backgroundImage: `url(${user?.photoURL})` }} className="btn m-1 rounded-full w-11 h-11 bg-contain bg-no-repeat border border-green-400"></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                                <p className='text-center text-xl font-bold pb-3'>{user?.displayName}</p>
                                <Link to={'/dashboard/profile'} className='text-lg text-center text-orange-400 w-2/3 mx-auto font-semibold leading-6 pb-2  hover:border-b-orange-400 hover:border-b-2'>Dashboard</Link>
                                <button onClick={handleSignOut} className='btn w-14 mx-auto bg-orange-400'>Logout</button>
                            </ul>
                        </div>
                            : <Link onClick={() => setToggle('hidden')} to={'/Login'}><p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500" >Join Us<span aria-hidden="true">&rarr;</span></p></Link>
                    }
                </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className={`lg:hidden ${toggle} `} role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center">

                            <img className="h-8 w-auto" src="https://i.ibb.co/2cZQpd2/north-south-university1451.jpg" alt="" />
                            <span className="text-lg font-bold text-cyan-600">NSU-Hostel</span>
                        </a>
                        <button onClick={() => setToggle('hidden')} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {user ?<div className="dropdown  rounded-full  w-10 h-10" >
                                        <div tabIndex={0} role="button" style={{ backgroundImage: `url(${user?.photoURL})` }} className="btn m-1 rounded-full w-11 h-11 bg-contain bg-no-repeat border border-green-400"></div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                                            <p className='text-center text-xl font-bold pb-3'>{user?.displayName}</p>
                                            <Link to={'/dashboard/profile'} className='text-lg text-center text-orange-400 font-semibold leading-6 pb-2  hover:border-b-orange-400 hover:border-b'>Dashboard</Link>
                                            <button onClick={handleSignOut} className='btn w-14 mx-auto bg-orange-400'>Logout</button>
                                        </ul>
                                    </div>
                                    :''
                                    }

                                <NavLink onClick={() => setToggle('hidden')} to={'/'} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</NavLink>
                                <NavLink onClick={() => setToggle('hidden')} to={'/Meals'} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Meals</NavLink>
                                <NavLink onClick={() => setToggle('hidden')} to={'/UpcomingMeals'} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Upcoming Meals</NavLink>

                            </div>
                            <div className="py-6">
                                {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a> */}
                                {
                                    user ? ''
                                        : <Link onClick={() => setToggle('hidden')} to={'/Login'}><p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" >Join Us<span aria-hidden="true">&rarr;</span></p></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NavBar;