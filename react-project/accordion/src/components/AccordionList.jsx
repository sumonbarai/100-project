import { useState } from "react";

const AccordionList = ({ data }) => {
  const [show, setShow] = useState(false);
  const { id, text, title } = data;

  return (
    <div className={show ? "accordion-list border" : "accordion-list"}>
      <div
        className={show ? "active-color heading " : "heading"}
        onClick={() => setShow(!show)}
      >
        <div className="left">
          <div className="serial ">{id}</div>
          <div className="title">{title}</div>
        </div>
        <div className="icon right">{show ? "-" : "+"}</div>
      </div>
      {show && <div className="content">{text}</div>}
    </div>
  );
};

export default AccordionList;
