import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TabCard = (category) => {
    const [Meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/Meals?FoodCategory=${category.category}`)
        .then(res => res.json())
        .then(data => {setMeals(data)
        console.log(category);})
    },[category])
    if(Meals.length==0){
        return <div><h1 >No Food available</h1></div>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3'>
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
    );
};

export default TabCard;