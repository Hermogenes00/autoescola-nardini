import React from "react";
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";
import SpeedImage from "draws/Speed";
export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam numquam
        deserunt commodi dolorem, nihil alias debitis labore explicabo qui
        deleniti tenetur obcaecati distinctio repellat aspernatur voluptatum
        quae natus, beatae nulla?
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
