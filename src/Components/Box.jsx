import { useState } from "react";
import Button from "./Button";

export default function Box({ element }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="box">
      <Button onClick={handleToggle}>{isOpen ? "-" : "+"}</Button>
      { isOpen && element }
    </div>
  );
}
