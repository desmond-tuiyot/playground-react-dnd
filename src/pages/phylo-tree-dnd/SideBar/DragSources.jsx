import PropTypes from "prop-types";

import DragSource from "./DragSource";

const DragSources = ({ undraggedIguanas }) => {
  return undraggedIguanas.map((iguana, index) => (
    <DragSource source="sidebar" key={index} iguana={iguana} />
  ));
};

DragSources.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
};

export default DragSources;
