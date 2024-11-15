import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftAside = () => {

    const [Categories , setCategories] =  useState([]);

    useEffect(()=>{

        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data =>setCategories(data.data.news_category))

    },[])

    return (
        <div>
            <p className="text-xl font-bold">All Categories({Categories.length})</p>

            <div className="flex flex-col justify-center gap-3 py-3">
                {
                    Categories.map(category =>  <NavLink 
                        to={`/category/${category.category_id}`}
                        className="btn" key={category.category_id}>{category.category_name} </NavLink>)
                }
            </div>
            
        </div>
    );
};

export default LeftAside;