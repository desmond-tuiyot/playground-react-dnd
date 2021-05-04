import PropTypes from "prop-types";

import DragSource from "./DragSource";

const DragSources = ({
  allowTransition,
  handleDragStart,
  undraggedIguanas,
}) => {
  return undraggedIguanas.map((iguana, index) => (
    <DragSource
      handleDragStart={handleDragStart}
      source="sidebar"
      key={index}
      iguana={iguana}
      allowTransition={allowTransition}
    />
  ));
};

DragSources.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
};

export default DragSources;
