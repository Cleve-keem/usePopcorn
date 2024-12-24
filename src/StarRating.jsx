import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItem: "center",
  gap: "10px",
};

const starContainerStyle = {
  display: "flex",
  //   gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

export default function StarRating({ maxRating }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="starRating" style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onClick={() => setRating(i + 1)} />
        ))}
      </div>
      <div style={textStyle}>{rating || ""}</div>
    </div>
  );
}
