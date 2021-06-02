import React from "react";
import { render, screen, fireEvent } from "test-utils";

import AccordionGroup from "./AccordionGroup";
import Accordion from "./Accordion";

const title = "My title";

const renderGroup = (n) => {
  const accordions = [];
  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>
    );
  }

  return render(<AccordionGroup>{accordions}</AccordionGroup>);
};

test("renders whit one child", () => {
  render(
    <AccordionGroup>
      <Accordion title={title}>Children {title} </Accordion>
    </AccordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders whit 3 child", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getAllByAltText(title)).toHaveLength(3);
});

test("renders with all the accordions closed", async () => {
  renderGroup(3);

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("opens accordion with click", async () => {
  renderGroup(5);

  await fireEvent.click(screen.getByText("Title 4"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 4")).toBeInTheDocument();
});

test("closes accordion with click", async () => {
  renderGroup(5);

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});
