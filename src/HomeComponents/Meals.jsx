import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Meals = () => {
    const axiosPublic = useAxios()
    const [category, setCategory] = useState('')
    const [Text, setText] = useState('')
   
    const { data: Meals = [],isPending } = useQuery({
        queryKey: ['Meals',category,Text],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Meals?FoodCategory=${category}&search=${Text}`)
            return res.data;
        }

    })
    const handleFilter = e => {
        
        e.preventDefault();

        setCategory(e.target.value);
       setText('')
       
    }
    const handleSearch = e =>{
        e.preventDefault()
        const form = e.target;
        const Text = form.Text.value;
        setText(Text)
        setCategory('')
        
    }
    if(isPending){
        return <p>loading</p>
    }
    console.log(Meals,category);
    return (
       <>
         <h1 className='mb-20'>hey</h1>
        <div> 
        <div>
            <form onSubmit={handleSearch} className='flex' >
                <div className="join mx-auto my-10">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search Meal" name='Text' />
                        </div>
                    </div>
                   
                    <div className="indicator">
                        <input className="btn join-item" type="submit"  value='search' id="" />
                        
                    </div>
                </div>
            </form>
          
           <div className="flex justify-center mb-20">
                <h1 className=" mr-4 text-lg font-medium">Filter Meals category: </h1>
                <select onChange={handleFilter} className="" name="" id="">
                    <option value=''>All </option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5'>
               
            {
               Meals?.map(meal=><div  
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" key={meal._id} className='card w-5/6 h-96  glass mx-auto '>
                <figure><img className='w-full ' src={meal.FoodImage} alt="car!" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">Food:{meal.FoodName}</h2>
                    <p>Category:{meal.FoodCategory}</p>
                    <p>Price:{meal.Price}</p>
                    <p>Likes:{meal.Likes}</p>
                    
                    

                    <div className="card-actions justify-end">
                        <Link to={`/MealDetails/${meal._id}`}><button className="btn ">Details</button></Link>
                     
                    </div>
                </div>

            </div>)
            }
            </div>
        </div>
       </>
    );
};

export default Meals;