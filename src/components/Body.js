import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faClock, faPlusCircle } from "@fortawesome/free-solid-svg-icons";


export default function Body() {
  
 
    return (
      <div className="min-h-screen font-Roboto flex flex-col gap-y-4  items-center">
        
        
        <h3 className="text-xl">To-dos</h3>
        <FontAwesomeIcon
              name="menu"
              icon={faPlusCircle}
              className="text-c-white"
              size="2x"
            /> 


         {/* How a todo should look like
  
         <div className=" bg-c-lightBlue p-5 rounded flex gap-4 items-center">
         <FontAwesomeIcon
              name="menu"
              icon={faCircleDot}
              className="text-c-white"
              size="1x"
            />
            <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">Read</p>
            <div className="flex">
            <FontAwesomeIcon
              name="menu"
              icon={faClock}
              className="text-lg text-c-white"
              size="1x"
            />
            <p className="pl-2">March 5, 2023 01:07 PM</p>
            </div>
            </div>
         </div>  */}

        
        
      </div>
    )
  }