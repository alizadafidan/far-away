import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const App = () => {
  // const [items, setItems] = useState([]);

  // const handleAddItem = (item) => {
  //   setItems((items) => [...items, item]);
  // };
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => setItems((items) => [...items, newItem]);

  // const handleToggleItem = (id) =>
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, packed: !item.packed } : item
  //     )
  //   );

  const handleDeleteItem = (id) =>
    setItems((items) => items.filter((movcudObj) => movcudObj.id !== id));

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <Fragment>
      <div>
        <Logo />
        <Form handleAddItem={handleAddItem} />
        <PackingList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </div>
    </Fragment>
  );
};

export default App;
