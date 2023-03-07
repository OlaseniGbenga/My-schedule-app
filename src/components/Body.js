import { useState } from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faClock,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  const [task, setTask] = useState([]);
  const [todo, setTodo] =useState("");
  const [time, setTime] = useState("")
  const [isFormVisible, setIsFormVisible] = useState(false);

  const taskHandler = () => {
    setTask([
      ...task,
      { item: "Read and write", time: "3:30pm" },
      { item: "Read and write", time: "3:30pm" },
      { item: "Read and write", time: "3:30pm" },
    ]);
  };

  return (
    <div className="min-h-screen font-Roboto flex flex-col gap-y-4  items-center">
      <h3 className="text-xl">To-dos</h3>
      How a todo should look like
      
        {task.map((activity, index) => (
 <div className=" bg-c-lightBlue p-5 rounded flex gap-4 items-center">
 <FontAwesomeIcon
       name="menu"
       icon={faCircleDot}
       className="text-c-white"
       size="1x"
     />
     <div className="flex flex-col gap-2">
     <p className="text-lg font-bold">{activity.item}</p>
     <div className="flex">
     <FontAwesomeIcon
       name="menu"
       icon={faClock}
       className="text-lg text-c-white"
       size="1x"
     />
     <p className="pl-2">{activity.time}</p>
     </div>
     </div>
</div>


          




        ))}
       
       <form  className="flex flex-col">
          <label>
            
            <input type="text" className="bg-c-lightBlue" placeholder="Add a to-do item" />
          </label>
        
          <label className="flex flex-rows">
            <input type="time" placeholder="set time" className=""/>
           
            
            <button type="submit">Submit</button>
          </label>
          
          
        </form>

      <FontAwesomeIcon
        name="menu"
        icon={faPlusCircle}
        className="text-c-white"
        size="2x"
        onClick={taskHandler}
      />
    </div>
  );
}
