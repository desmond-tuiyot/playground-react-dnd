import PropTypes from "prop-types";

import DragSource from "./DragSource";

const DragSources = ({ undraggedIguanas, onDragEnd }) => {
  return undraggedIguanas.map((iguana, index) => (
    <DragSource key={index} iguana={iguana} onDragEnd={onDragEnd} />
  ));
};

DragSources.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default DragSources;
