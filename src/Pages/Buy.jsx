import { useSelector } from "react-redux"


const Buy = () => {

const data = useSelector((state)=> state.counter.value)







  return (
    
    <>
            
           <p className="flex justify-center items-center min-h-[100vh] font-extrabold text-xl text-blue-600">Thank you</p>
           
                
           
  
      
    </>
  )
}

export default Buy