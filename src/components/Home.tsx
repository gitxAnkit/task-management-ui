import { useState } from "react";
import AddNewTask from "./AddNewTask";
import TaskCard from "./TaskCard";
import NewTaskPopup from "./NewTaskPopup";

interface Task {
  title: string;
  description: string;
  status: "pending" | "completed" | "failed";
  date: string;
}
const Home = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleNewTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="h-screen py-6 px-8">
      <h1 className="text-center text-[50px] font-black font-caladea">
        TASK MANAGER
      </h1>

      {/* Main section  */}
      <div className="border border-black  rounded-xl px-6 py-3 h-[90%] shadow-lg">
        <div className="my-4 flex justify-between font-poppins text-3xl">
          <div className="">
            <span className="border-b-4 border-[#5ddd54]">Your</span>
            <span> Tasks</span>
          </div>
          <button onClick={()=>setShowPopup(true)}
           className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-600 text-gray-300">
            +
          </button>
        </div>

        <div className="py-1 grid grid-rows-2 grid-cols-4 gap-8">
          <TaskCard
            initialStatus="pending"
            title="intenship assignment"
            description="complete the task manager assignment for the internship"
            date="12/03/2025"
          />
          <TaskCard
            initialStatus="pending"
            title="intenship assignment"
            description="complete the task manager assignment for the internship"
            date="12/03/2025"
          />
          <TaskCard
            initialStatus="pending"
            title="intenship assignment"
            description="complete the task manager assignment for the internship"
            date="12/03/2025"
          />
          <TaskCard
            initialStatus="pending"
            title="intenship assignment"
            description="complete the task manager assignment for the internship"
            date="12/03/2025"
          />
          <TaskCard
            initialStatus="pending"
            title="intenship assignment"
            description="complete the task manager assignment for the internship"
            date="12/03/2025"
          />

          <div onClick={() => setShowPopup(true)}><AddNewTask /></div>
        </div>
      </div>
      {showPopup && (
        <NewTaskPopup
          onClose={() => setShowPopup(false)}
          onSubmit={() => handleNewTask}
        />
      )}
    </div>
  );
};

export default Home;
