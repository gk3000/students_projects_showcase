import React from "react";

export const Grid = props => (
  <div
    className={props.className}
    style={{
      display: "grid",
      // passin a number to display this number of columns with equal width
      // passing other value to define any type of template like '1fr 2fr'
      gridTemplateColumns: props.columns
        ? props.columns.length > 2
          ? props.columns
          : `repeat(${props.columns}, 1fr`
        : "1fr",
      gap: props.gap || "1em"
    }}
  >
    {props.children}
  </div>
);
