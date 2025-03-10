import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskCardProps {
  status?: "completed" | "pending" | "failed";
  title: string;
  description: string;
  date?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  status = "pending",
  title,
  description,
  date = new Date().toLocaleDateString(), 
}) => {
  return (
    <div className="w-[350px] h-[250px] flex flex-col justify-between bg-gray-200 rounded-xl p-2 border-2 border-gray-400">
      <div>
        <h1 className="capitalize font-caladea text-2xl font-semibold">{title}</h1>
        <div className="first-letter:uppercase font-poppins text-justify py-2 text-md">
          {description}
        </div>
      </div>
      <div>
        <div className="font-bold text-lg my-2">{date}</div>
        <div className="flex justify-between">
          <button className="capitalize border-2 border-[#54c64c] p-2 rounded-3xl bg-[#5ddd54] text-sm">
            {status}
          </button>
          <div>
            <button className="mr-2">
              <EditNoteIcon />
            </button>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
