import DragSource from "./DragSource";

const DragSources = ({ iguanas }) => {
  return iguanas.map((iguana, index) => (
    <DragSource key={index} iguana={iguana} />
  ));
};

export default DragSources;
