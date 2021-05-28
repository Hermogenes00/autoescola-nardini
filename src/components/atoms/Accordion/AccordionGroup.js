import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);
  return React.Children.map(children, (child, childIndex) =>
    React.cloneElement(child, {
      open: childIndex == index,
      onChange: () => {
        if (index == childIndex) {
          setIndex(-1);
        } else {
          setIndex(childIndex);
        }
      },
    })
  );
};

export default AccordionGroup;
