// interface Task {
//   _id: string;
//   title: string;
//   description: string;
//   status: "pending" | "completed" | "failed";
//   date: string;
// }

// interface AddNewProps{
//  onSubmit:(task:Task)=>void; 
// }
const AddNewTask = () => {
  return (
    <div className="w-[300px] h-[250px] flex items-center justify-center
     bg-gray-100 rounded-xl p-2 border-2 border-gray-200 font-semibold 
     text-xl cursor-pointer font-poppins text-gray-700 shadow-md">
      + Add New Task
    </div>
  );
};

export default AddNewTask;
