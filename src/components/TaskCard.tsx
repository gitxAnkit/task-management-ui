import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../axiosInstance";

interface TaskCardProps {
  id: string;
  initialStatus?: "completed" | "pending" | "failed";
  title: string;
  description: string;
  deadline?: string;
  onDelete: (id: string) => void; 
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  initialStatus = "pending",
  title,
  description,
  deadline = new Date().toLocaleDateString(),
  onDelete,
}) => {
  const [status, setStatus] = useState(initialStatus);

  const statusStyles = {
    completed: "border-[#54c64c] bg-[#5ddd54] text-black",
    pending: "border-[#facc15] bg-[#fde047] text-black",
    failed: "border-[#dc2626] bg-[#f87171] text-white",
  };

  const handleTaskDelete = async () => {
    try {
      await api.delete(`/task/${id}`); 
      onDelete(id); 
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="w-[350px] flex flex-col justify-between bg-gray-200 rounded-xl p-4 border-2 border-gray-400 shadow-md">
      <div>
        <h1 className="capitalize font-caladea text-2xl font-semibold">
          {title}
        </h1>
        <p className="first-letter:uppercase font-poppins text-justify py-2 text-md">
          {description}
        </p>
      </div>
      <div>
        <div className="font-bold text-lg my-2">{deadline.split('T')[0]}</div>
        <div className="flex justify-between items-center">
          <select
            className={`capitalize border-2 p-2 rounded-3xl text-sm outline-none cursor-pointer transition ${statusStyles[status]}`}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "completed" | "pending" | "failed")
            }
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
          <div>
           
            <button
              className="hover:text-red-600 transition"
              onClick={handleTaskDelete} // Attach delete function
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
