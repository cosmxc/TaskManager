import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [prices, setPrice] = useState("");
  const onSubmit = (e) => {
    if (!text) return alert("Please provide a task!");

    let price;
    if (text.toLowerCase().includes("dish")) price = "30";
    if (text.toLowerCase().includes("sweep")) price = "30";
    if (text.toLowerCase().includes("bed")) price = "25";
    if (text.toLowerCase().includes("offload")) price = "25";
    if (text.toLowerCase().includes("table")) price = "25";
    if (text.toLowerCase().includes("refill")) price = "25";
    if (text.toLowerCase().includes("laundry")) price = "60";
    if (text.toLowerCase().includes("clothes")) price = "40";
    if (text.toLowerCase().includes("late")) price = "-25";
    if (text.toLowerCase().includes("bath")) price = "-25";
    else if (!price) return alert("Please provide a valid task");

    e.preventDefault();
    onAdd({ text, price });
    setText("");
    setPrice({ price });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <input type="submit" value="Save Task" className="btn" />
    </form>
  );
};

export default AddTask;
