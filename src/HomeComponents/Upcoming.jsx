import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { AiOutlineLike } from "react-icons/ai";

const Upcoming = () => {
    
    const axiosPublic = useAxios()
    const [disabled, setDisabled]=useState('')
    
    const { data: Meals = [], refetch } = useQuery({
        queryKey: ['Meals'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming`)
            return res.data;
        }

    })
    const handleLike= async (id)  =>{
        const Meal= Meals.find(meal=>meal._id==id)
        
        
        
        const Likes =parseInt(Meal.Likes)+1;
        console.log(Likes);
        const updated= {
            Likes
        }
        console.log(updated);
        const mealRes = await axiosPublic.put(`/upcoming/${id}`,updated)
        console.log(mealRes);
        if(mealRes.data.modifiedCount>0){
           
           refetch()
          setDisabled(1)
            
        }

    }
    return (
        <div>
           <div>

           </div>
           <h1 className='mb-20'>hello</h1>
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
                       <div className='flex'>
                        <p>give like:</p>
                        <button disabled={disabled}  onClick={()=>{handleLike(meal._id)}}  ><AiOutlineLike  /></button>
                       </div>
                       
                       
   
                       
                   </div>
   
               </div>)
               }
               </div>
       
           
        </div>
    );
};

export default Upcoming;