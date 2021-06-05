import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  let color = "task";
  if (task.price < 0) color = "taskm";

  return (
    <div className={color}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>₱ {parseInt(task.price ? task.price : "0").toLocaleString()}</p>
    </div>
  );
};

export default Task;
