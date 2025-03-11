import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Task {
  _id:string,
  title: string;
  description: string;
  status: "pending" | "completed" | "failed";
  deadline: string;
}

interface NewTaskPopupProps {
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

const NewTaskPopup: React.FC<NewTaskPopupProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<"pending" | "completed" | "failed">(
    "pending"
  );
  const [deadline, setDeadline] = useState<string>(
    new Date().toISOString().split("T")[0]
  ); // Default to today

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    const newTask: Task = { title, description, status, deadline };
    onSubmit(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[350px] p-5 rounded-xl shadow-lg relative font-poppins">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <CloseIcon />
        </button>

        {/* Heading */}
        <h1 className="text-xl font-bold text-center mb-4">Create New Task</h1>

        {/* Task Title Input */}
        <div className="mb-3">
          <label className="block font-semibold">Title:</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>

        {/* Task Description Input */}
        <div className="mb-3">
          <label className="block font-semibold">Description:</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            required
          />
        </div>

        {/* Status Dropdown */}
        <div className="mb-3 ">
          <label className="block font-semibold">Status:</label>
          <select
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "pending" | "completed" | "failed")
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label className="block font-semibold">Deadline:</label>
          <input
            type="date"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default NewTaskPopup;
