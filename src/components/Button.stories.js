import React from "react";
import Button from "./Button";
import styled from "styled-components";

import { actions } from "@storybook/addon-actions";

export default {
  title: "Component/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <Toolbar>
    <p>Enabled</p>
    <Button {...events}>Default</Button>
    <Button {...events} color="primary">
      Primary
    </Button>
    <Button {...events} color="danger">
      Danger
    </Button>
    <p>Disabled</p>
    <Button disabled {...events}>
      Default
    </Button>
    <Button disabled {...events} color="primary">
      Primary
    </Button>
    <Button disabled {...events} color="danger">
      Danger
    </Button>
  </Toolbar>
);

export const outlined = () => (
  <Toolbar>
    <p>Enabled</p>
    <Button variant="outlined" {...events}>
      Default
    </Button>
    <Button variant="outlined" {...events} color="primary">
      Primary
    </Button>
    <Button variant="outlined" {...events} color="danger">
      Danger
    </Button>
    <p>Disabled</p>
    <Button variant="outlined" disabled {...events}>
      Default
    </Button>
    <Button variant="outlined" disabled {...events} color="primary">
      Primary
    </Button>
    <Button variant="outlined" disabled {...events} color="danger">
      Danger
    </Button>
  </Toolbar>
);

export const link = () => (
  <Toolbar>
    <p>Enabled</p>
    <Button variant="link" {...events}>
      Default
    </Button>
    <Button variant="link" {...events} color="primary">
      Primary
    </Button>
    <Button variant="link" {...events} color="danger">
      Danger
    </Button>
    <p>Disabled</p>
    <Button variant="link" disabled {...events}>
      Default
    </Button>
    <Button variant="link" disabled {...events} color="primary">
      Primary
    </Button>
    <Button variant="link" disabled {...events} color="danger">
      Danger
    </Button>
  </Toolbar>
);
