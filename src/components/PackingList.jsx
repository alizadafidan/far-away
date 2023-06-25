import React, { Fragment, useState } from "react";
import Item from "./Item";

// const initialItems = [ { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },];

const PackingList = ({ items, handleDeleteItem, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <Fragment>
      <div className="list">
        <ul>
          {sortedItems.map((item, i) => (
            <Item
              item={item}
              key={i}
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default PackingList;
