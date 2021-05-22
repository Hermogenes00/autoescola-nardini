import React from "react";
import Button, { ButtonColors, ButtonsVariants } from "./Button";
import { render, fireEvent } from "../../test-utils";

test("render as text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  const handleClick = jest.fn();

  const { getByRole } = render(<Button onClick={handleClick}></Button>);

  fireEvent.click(getByRole("button"));

  expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map((item) => [item]))(
  "renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color}></Button>);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonsVariants).map((item) => [item]))(
  "renders with variant %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant}></Button>);

    expect(asFragment()).toMatchSnapshot();
  }
);

test("renders with color primary and variant outlined", () => {
  const { asFragment } = render(
    <Button variant="outlined" color="primary"></Button>
  );

  expect(asFragment()).toMatchSnapshot();
});

test("renders with color primary and variant link", () => {
  const { asFragment } = render(
    <Button variant="link" color="primary"></Button>
  );

  expect(asFragment()).toMatchSnapshot();
});
