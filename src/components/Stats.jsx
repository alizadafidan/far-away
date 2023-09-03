import React, { Fragment } from "react";

const Stats = ({ items }) => {
  // const numItems = items.length;
  // const numPacked = items.filter((item) => item.packed).length;
  // const percentage = Math.trunc((numPacked / numItems) * 100);

  // const fPerc = numItems === 0 ? 0 : percentage;

  const numberOfItems = items.length;
  const numberOfPacked = items.filter(item => item.packed).length;
  const percentage = Math.trunc(numberOfPacked / numberOfItems * 100);
  return (
    <Fragment>
      <footer className="stats">
        <em>
          Cantanizda {numberOfItems} element var. Hal-hazirda onun{" "}
          {numberOfPacked} denesi ({percentage}%) yigilib.
        </em>
      </footer>
    </Fragment>
  );
};

export default Stats;
// <footer className="stats">
// <em>
//   💼 You have {numItems} items in your pack. Right now you have packed{" "}
//   {numPacked} ({fPerc}% ){" "}
// </em>
// </footer>
