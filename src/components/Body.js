import { useState } from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faClock,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Body() {
//store data with use state
const [task, setTask] = useState([]
);

//control form visibility
const [isFormVisible, setIsFormVisible] = useState(false);



//function to update setTask
function taskHandler(event) {
  event.preventDefault();
  const newInput = {
    todo: event.target.todo.value,
    time: event.target.time.value,
  };
  setTask([...task,newInput]
    
    
  );
  setIsFormVisible(false)
  event.target.reset();
  console.log(task)
}


  return (
    <div className="min-h-screen font-Roboto flex flex-col gap-y-4  items-center">
      <h3 className="text-xl">To-dos</h3>
      {/* How a todo should look like */}

      
      {task.map((activity, index) => (
      <div className=" bg-c-lightBlue p-5 rounded flex gap-4 items-center">
        <FontAwesomeIcon
          name="menu"
          icon={faCircleDot}
          className="text-c-white"
          size="1x"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{activity.todo}</p>
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


      {/* form  */}

     {isFormVisible && <form className="flex flex-col" onSubmit={taskHandler}>
        <label>
          <input
          name="todo"
          required

            type="text"
            className="bg-c-lightBlue"
            placeholder="Add a to-do item"
          />
        </label>

        <label className="flex flex-rows">
          <input name="time"
            required
 type="time" placeholder="set time" className="" />

          <button type="submit"  >Submit</button>
        </label>
      </form>} 

      {/* +icon */}
      <FontAwesomeIcon
        name="menu"
        icon={faPlusCircle}
        className="text-c-white"
        size="2x"

        onClick={() => {setIsFormVisible(true)
        }}
      />
    </div>
  );
}
