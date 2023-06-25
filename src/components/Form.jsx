import React, { Fragment, useState } from "react";
const Form = ({ handleAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    handleAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <Fragment>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Let's pack!</h3>
        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="sun lotion"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default Form;
