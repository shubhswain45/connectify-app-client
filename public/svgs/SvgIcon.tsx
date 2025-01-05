import SVGs from "./Svgs";

const SvgIcon = ({ name }: { name: keyof typeof SVGs }) => {
  const svgString = SVGs[name];
  if (!svgString) {
    return null; // Return null if the SVG name is not found
  }
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};

export default SvgIcon;
