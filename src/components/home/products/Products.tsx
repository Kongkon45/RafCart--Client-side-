"use client"
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import { IoMdAddCircle } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaMinus } from "react-icons/fa6";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"


import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/features/carts/cartsSlice';


const displays = [
    "PLS LCD",
    "TFT",
    "IPS",
    "AMOLED",
    "Super AMOLED",
    "OLED",
    "Dynamic AMOLED"
];
const rams = [
    "2GB",
    "3GB",
    "4GB",
    "6GB",
    "8GB",
    "12GB",
    "16GB",
    "24GB",
    "18GB"
];
const internalStorages = [
    "32GB",
    "64GB",
    "128GB",
    "256GB",
    "512GB",
    "1TB"
];
const chipsets = [
    "Snapdragon",
    "MediaTek",
    "Exynos",
    "Bionic",
    "Tensor",
    "Kirin",
    "Unisoc",
    "Apple"
];
const regions = [
    "Indian",
    "UK",
    "USE",
    "Japan",
    "International",
    "Singapore",
    "China",
    "Vietnam",
    "Canada",
    "Hong Kong"
]

const ProductsPage = () => {
    const [sliderValue, setSliderValue] = useState([50]);
    const [inputValue1, setInputValue1] = useState(1);
    const [inputValue2, setInputValue2] = useState(1000);
    useEffect(() => {
        setInputValue1(sliderValue[0]);
        setInputValue2(sliderValue[1]);
    }, [sliderValue]);
    const handleSliderChange = (value: any) => {
        setSliderValue(value);

    };

    const handleInputChange1 = (event: any) => {
        setInputValue1(event.target.value);

    };

    const handleInputChange2 = (event: any) => {
        setInputValue2(event.target.value);

    };

    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetAllProductsQuery({})
    // console.log("porducts", data?.data);
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 m-10'>
            {
                data?.data?.map((product:any) => {
                    return <div key={product._id} className='border rounded-lg shadow-lg'>
                        {/* <Image className='w-full h-60 mx-auto ' src={`${product.image}`} alt={`${product.title}`} width={100} height={100} /> */}
                        <img  className='w-full h-60 mx-auto ' src={`${product.image}`} alt={`${product.title}`} />
                        <div className='text-center px-2 pb-4'>
                            <h3 className='text-2xl font-bold '>{product.title}</h3>
                            <p className='text-xl font-semibold'>Price : ${product.price}</p>
                            <div className="flex justify-between items-center mx-6 mt-2">
                                <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700"><Link href={`/products/${product?._id}`}>View Details</Link></button>
                                <button onClick={()=>dispatch(addCart(product))} className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;