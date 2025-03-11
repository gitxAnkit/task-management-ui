import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import TaskCard from "./TaskCard";
import NewTaskPopup from "./NewTaskPopup";
import api from "../axiosInstance";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: "pending" | "completed" | "failed";
  deadline: string;
}

interface NewTask {
  title: string;
  description: string;
  status: "pending" | "completed" | "failed";
  deadline: string;
}

const Home = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]); 

  // Fetch tasks from API (Runs only once)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get<{ tasks: Task[] }>("/tasks");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [tasks]); 

  // Handle new task addition
  const handleNewTask = async (task: NewTask) => {
    try {
      const response = await api.post<Task>("/tasks", task);
      const newTask = response.data;

      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  };

  // Handle task deletion
  const handleDeleteTask = async (_id: string) => {
    try {
      await api.delete(`/tasks/${_id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="h-screen py-6 px-8 flex flex-col">
      <h1 className="text-center text-[50px] font-black font-caladea">
        TASK MANAGER
      </h1>
      {/* Main section */}
      <div className="border border-black rounded-xl px-6 py-3 flex-1 shadow-lg flex flex-col overflow-hidden">
        <div className="my-4 flex justify-between font-poppins text-3xl">
          <div>
            <span className="border-b-4 border-[#5ddd54]">Your</span>
            <span> Tasks</span>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-600 text-gray-300"
          >
            +
          </button>
        </div>
        {/* Task List */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                initialStatus={task.status}
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                onDelete={handleDeleteTask}
              />
            ))}
            <div onClick={() => setShowPopup(true)} className="h-full">
              <AddNewTask />
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <NewTaskPopup onClose={() => setShowPopup(false)} onSubmit={handleNewTask} />
      )}
    </div>
  );
};

export default Home;
