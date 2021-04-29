import PropTypes from "prop-types";

import DragSource from "./DragSource";

const DragSources = ({ onDragStart, undraggedIguanas, onDragEnd }) => {
  return undraggedIguanas.map((iguana, index) => (
    <DragSource
      source="sidebar"
      onDragStart={onDragStart}
      key={index}
      iguana={iguana}
      onDragEnd={onDragEnd}
    />
  ));
};

DragSources.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default DragSources;
