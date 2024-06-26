import React from 'react';
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import categoriesData from "../../../categories.json"
// console.log(categoriesData)
const Category = () => {
    return (
        <div className="px-12">
            <div className="flex justify-between items-center mb-6">
                <h3 className="lg:text-2xl md:text-xl text-sm font-bold">Categories</h3>
                <button className="flex justify-center items-center lg:gap-2 gap-1 lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 py-0.5 lg:px-4 px-1 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10 ">
            {
                categoriesData?.map((category)=>{
                    return <div key={category.id}>
                        <div>
                        <Image className="lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] mx-auto  border border-[#fd3d57] lg:p-4 p-2 shadow-lg rounded-full hover:scale-110 duration-300 cursor-pointer transtion ease-in-out" src={category.images} alt={category.name} width={160} height={160}/>
                        
                    </div>
                    <h4 className="text-center lg:text-md md:text-md text-sm font-bold mt-4">{category.name}</h4>
                    </div>
                })
            }
            </div>
            
        </div>
    );
};

export default Category;