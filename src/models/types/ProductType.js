import PropTypes from "prop-types";

const ProductType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  title: PropTypes.string,
  sumary: PropTypes.string,
  slung: PropTypes.string,
});

export default ProductType;
