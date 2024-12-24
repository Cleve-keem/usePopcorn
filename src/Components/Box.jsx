import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle1() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle1}>{isOpen ? "-" : "+"}</Button>
      {isOpen && children }
    </div>
  );
}