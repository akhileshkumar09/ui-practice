import React, {useState, useEffect} from "react"
import { FaArrowRight } from "react-icons/fa";

function Carousel({ slides}) {
    const [curr, setCurr] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(
            ()=> setCurr((curr) => (curr === slides.length-1 ? 0 : curr+1))
        , 3000);
        return () => clearInterval(slideInterval);
    },[slides.length])
    
  return (
    <div className="overflow-hidden relative w-full rounded-xl h-full">

    <div className="absolute top-4 left-4 text-white text-2xl font-bold z-10 cursor-pointer">
        AMU   
    </div>

    <div className="absolute top-4 right-4 z-10 rounded-xl">
        <button className="bg-gray-300 text-white px-2 py-1 rounded flex gap-1 opacity-50 hover:opacity-80">
            back to website <span className="mt-1"> <FaArrowRight/></span>
        </button>
    </div>

     <div className="flex transition-transform ease-out duration-500 h-full w-full"
     style={{transform: `translateX(-${curr*100}%)`}}>
        {slides.map((s, index) => (
            <img src={s} key={index} alt="e"
                className="min-w-full object-cover h-full "
            />
        ))}
     </div>

    <div className="absolute  bottom-12 w-full  flex items-center justify-center ">
        <h2 className="text-center text-white text-xl font-bold"> Capturing Moments,<br/> Creating Memories</h2>
    </div>
    <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
            { slides.map((_, i) => (
                <div
                key={i}
                className={`transition-all w-4 h-1 bg-white 
                ${curr === i ? "" : "bg-opacity-50"}`}
                />
            ))}
        </div>
        
    </div>

    </div>
  )
}

export default Carousel