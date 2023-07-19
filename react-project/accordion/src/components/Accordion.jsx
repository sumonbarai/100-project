import AccordionList from "./AccordionList";
import fag from "../data/fag";
const Accordion = () => {
  return (
    <div className="accordion">
      <h1>Accordion List</h1>
      {fag.map((data) => (
        <AccordionList key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Accordion;
