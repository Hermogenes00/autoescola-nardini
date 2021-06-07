import React from "react";
import PropTypes from "prop-types";
import Error from "components/pages/Error";
import TakenImage from "draws/Taken";

const error404 = () => (
  <Error
    image={<TakenImage />}
    title="Página não encontrada"
    description="Ops! Esta página foi abduzida"
  />
);

export default error404;
