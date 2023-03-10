import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faClock,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  //store data with use state
  const [task, setTask] = useState([]);

  //control form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  //function to update setTask
  function taskHandler(event) {
    event.preventDefault();
    const newInput = {
      id: uuidv4(),
      todo: event.target.todo.value,
      time: event.target.time.value,
    };
    setTask([...task, newInput]);
    setIsFormVisible(false);
    event.target.reset();
    console.log(task);
  }

  //function to delete task
  const handleDelete = (id) => {
    setTask(task.filter((obj) => obj.id !== id));
  };

  //local storage
  useEffect(() => {
    try {
      const data = localStorage.getItem("my-task");
      if (data) {
        setTask(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error parsing data from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if(task.length !== 0){  localStorage.setItem("my-task", JSON.stringify(task))}
  }, [task])


  
  return (
    <div className="min-h-screen h-1/2 font-Roboto flex flex-col gap-y-4  items-center">
      <h3 className="text-xl">To-dos</h3>
      {/* How a todo should look like */}

      {task.map((activity, index) => (
        <div className=" bg-c-lightBlue p-5 rounded flex gap-4 items-center  md:w-2/4  min-[280px]:w-3/4">
          <FontAwesomeIcon
            name="menu"
            icon={faCircleDot}
            className="text-green-600"
            size="1x"
            onClick={() => handleDelete(activity.id)}
          />
          <div key={activity.id} className="flex flex-col gap-2">
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

      {isFormVisible && (
        <form className="  md:w-2/4  min-[280px]:w-3/4 flex flex-col gap-2  " onSubmit={taskHandler}>
          <label  className="w-full">
            <input
              name="todo"
              required
              type="text"
              className="w-full rounded bg-c-lightBlue "
              placeholder="Add a to-do item"
            />
          </label>

          <label className="flex flex-rows gap-2">
            <input
              name="time"
              required
              type="time"
              placeholder="set time"
              className="w-1/2 rounded text-c-white bg-c-lightBlue"
            />
           

            <button className="w-1/2 rounded" type="submit">Save</button>
          </label>
        </form>
      )}

      {/* +icon */}
      <FontAwesomeIcon
        name="menu"
        icon={faPlusCircle}
        className="text-c-white"
        size="2x"
        onClick={() => {
          setIsFormVisible(true);
        }}
      />
    </div>
  );
}
