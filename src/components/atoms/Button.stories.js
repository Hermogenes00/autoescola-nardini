import React from "react";
import Button, { ButtonColors } from "./Button";
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

const ButtonsWrapper = (props) => (
  <div>
    <Toolbar>
      <p>Enabled</p>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button {...props} {...events} color={ButtonColors.primary}>
        Primary
      </Button>
      <Button {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>

    <p>As a link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" {...props} {...events} color="primary">
        Primary
      </Button>
      <Button as="a" href="#" {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button disabled {...props} {...events} color="primary">
        Primary
      </Button>
      <Button disabled {...props} {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonsWrapper variant="default" />;
export const outlined = () => <ButtonsWrapper variant="outlined" />;
export const link = () => <ButtonsWrapper variant="link" />;
