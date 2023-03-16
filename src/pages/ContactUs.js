import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <div className="flex-grow px-16  bg-c-blue flex flex-col gap-16 md:flex-row">
      <div className="w-full md:w-3/5 flex flex-col gap-y-4">
        <div><p>Contact us</p>
        <h3 className="text-black text-[1.3rem] font-bold ">Get In Touch With Us</h3></div>
        <p className="text-gray-500">
          We welcome your feedback, questions, and comments! Please use the
          following methods to get in touch with us:
        </p>
        <div className=" flex gap-x-4 items-center">
          <span name="menu" class=" ">
            <FontAwesomeIcon
              name="menu"
              icon={faHouse}
              className=""
              size="2x"
            />
          </span>
          <div className="flex flex-col"><h3 className="text-black font-bold">Our Location</h3>
          <p>Oyo State</p></div>
        </div>

        <div className="flex gap-x-4 items-center">
          <span name="menu" class=" cursor-pointer ">
            <FontAwesomeIcon
              name="menu"
              icon={faPhone}
              className=""
              size="2x"
            />
          </span>
          <div className="flex flex-col"><h3 className="text-black font-bold">Phone Number</h3>
          <p>08122341951</p></div>
          
        </div>
        <div className="flex gap-x-4 items-center">
          <span name="menu" class="  ">
            <FontAwesomeIcon
              name="menu"
              icon={faMessage}
              className=""
              size="2x"
            />
          </span>
          <div>
          <h3 className="text-black font-bold">Email Address</h3>
          <p>gj.olaseni@gmail.com</p>
          </div>
        </div>
        
      </div>

      <div className=" w-full md:w-3/5 flex justify-end">
        <form className=" w-full md:w-2/3 flex flex-col gap-2"> 
        <label  className="">
            <input
              name="name"
              required
              type="text"
              className="w-full rounded bg-c-lightBlue p-2 "
              placeholder="Your Name"
            />
          </label>
          <label  className="">
            <input
              name="email"
              required
              type="email"
              className="w-full rounded bg-c-lightBlue p-2 "
              placeholder="Your Email"
            />
          </label>
          <label  className="">
            <input
              name="Phone"
              required
              type="number"
              className="w-full rounded bg-c-lightBlue p-2 "
              placeholder="Your Phone"
            />
          </label>
          <label  className="">
            <input
              name="Message"
              required
              type="text"
              className="w-full rounded bg-c-lightBlue p-2"
              placeholder="Your Message"
            />
          </label>
          <button className="bg-green-600 p-2 rounded">send message</button>
        </form>
      </div>
    </div>
  );
}
