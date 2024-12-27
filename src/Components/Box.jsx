import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle}>{isOpen ? "-" : "+"}</Button>
      { isOpen && children }
    </div>
  );
}
