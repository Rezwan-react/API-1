import { useSelector } from "react-redux"


const Data = () => {

const data = useSelector((state)=> state.counter.value)



  return (
      <>
     <div className="main w-[full] p-6 rounded-lg mt-24 bg-white shadow-xl gap-12 mb-2 flex">
       <div className="productImg w-[500px] h-[400px] shadow-md mt-6"><img src={data.Photo} alt="img" /></div>
       <div className="description mb-8">
        <h2 className="text-2xl ">description</h2>
        <h2 className="text-xl font-semibold mt-8 ">Key Features</h2>
        <h3 className="text-lg font-normal mt-3">Laptop_name: {data.Laptop_name}</h3>
        <h3 className="text-lg font-normal mt-3">model: {data.Model}</h3>
        <h3 className="text-lg font-normal mt-3">processor: {data.Processor} </h3>
        <h3 className="text-lg font-normal mt-3">storage: {data.Storage}</h3>
        <h3 className="text-lg font-normal mt-3">ram: {data.RAM} </h3>
        <h3 className="text-lg font-normal mt-3">display: {data.Display} </h3>
        <h3 className="text-lg font-normal mt-3">screen_size: {data.Display_Size}</h3>        
        <h2 className="text-xl font-semibold mt-8 text-red-500 hover:text-black cursor-pointer">View More Info</h2>
        <div className="text-3xl text-red-600 mt-4 font-bold">Price: {data.Price}</div>
       </div>
    </div>
    <div className="specification w-[900px] p-6 bg-white shadow-lg ml-12 mb-9 rounded-sm ">
      <h2 className="text-[30px] text-black font-semibold">Specification</h2>
      <h3 className="text-lg text-gray-800 mt-5">Processor: {data.Processor}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">charger_capacity: {data.Charger_Capacity}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">display_resolution: {data.Display_Resolution}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">display_type: {data.Display_Type}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">storage: {data.Storage}</h3>
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">Storage_Capacity: {data.Storage_Capacity}</h3>
      
      <hr />
      <h3 className="text-lg text-gray-800 mt-5">touch_screen: {data.Touch_Screen}</h3>
      <hr />
    </div>

      <div className="add w-[600px] p-6 flex gap-[20px]">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7WrHNF9KKso?si=gu0jN6v3y9bovqke" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p className=" text-x text-2xl text-[#FDFFC2]">নতুন নতুন অফার পেতে আমাদের সাথেই থাকুন</p>
      </div>
      </>
  )
}

export default Data