import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { singelProductData } from "../slices/ProductSlices"

const Home = () => {

const [productData, setProductData] = useState ([])
const ma = useNavigate()
const dispatch = useDispatch()



  useEffect(()=>{
    
  axios. get('https://api.jsonbin.io/v3/b/6675971ce41b4d34e406c36e')
  .then((res)=> setProductData(res.data.record))
  .catch((err)=> console.log(err))

  }, [])

  

  const handelShow = (nana)=>{
    ma ('/Data')
    dispatch(singelProductData(nana))
    
  }
  const handleBuy = (item)=>{
    ma ('/Buy')
    
  }

  return (
    <>
    <div className="off flex gap-[15px] mt-[10px]">
      <img src="https://t3.ftcdn.net/jpg/02/77/69/26/360_F_277692680_b65wdSQDuWZRrKwIUmGQo0zwND6n0MZR.jpg" alt="off_img" />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/rCj2i_iEnGk?si=uUbJTFQfTFOqjg2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="main flex justify-center  flex-wrap gap-4">
    <div className="Product flex justify-center flex-wrap gap-3">
    {
      productData.map((item, i)=>(
        
        <div key={i} className="singleProduct w-[300px] p-3 shadow-xl bg-[#83B4FF] mt-11 rounded-md flex justify-center flex-col hover:shadow-2xl hover:bg-[#A7E6FF]">
           <div className="singleProductImg w-[250px]  p-3 bg-white shadow-md ml-3">
            <img src= {item.Photo} alt="img" />
           </div>
           <div className="content">
             <ol>
               <li className="mt-3 mb-4 text-xl text-black font-bold ">{item. Laptop_name}</li>
               <li className="mt-1 text-sm text-black font-normal">Model : {item.Model}</li>
               <li className="mt-1 text-sm text-black font-normal">Processor : {item.Processor}</li>
               <li className="mt-1 text-sm text-black font-normal">RAM : {item.RAM}</li>
               <li className="mt-1 text-sm text-black font-normal">Display : {item.Display}</li>
               <li className="mt-1 text-sm text-black font-semibold">Price : {item.Price}</li>
             </ol>
             <button onClick={ ()=> handelShow(item)} className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-[#5C2FC2] ml-6 mt-3 hover:bg-white hover:text-black active:text-white active:bg-[#5C2FC2]">Show More</button>
             <br />
             <br />
             <button onClick={ ()=>handleBuy(item)} className="text-xl text-white font-bold w-[200px] p-3 rounded-md bg-blue-900 ml-6 mb-4 hover:bg-white hover:text-black active:text-white active:bg-blue-900">Order</button>
           </div>
        </div>
     
      ))
    }
    </div>
    </div>
    </>
  )
}

export default Home