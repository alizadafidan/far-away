import React, { Fragment } from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.trunc((numPacked / numItems) * 100);

  const fPerc = numItems === 0 ? 0 : percentage;

  return (
    <Fragment>
      <footer className="stats">
        <em>
          💼 You have {numItems} items in your pack. Right now you have packed{" "}
          {numPacked} ({fPerc}% ){" "}
        </em>
      </footer>
    </Fragment>
  );
};

export default Stats;
