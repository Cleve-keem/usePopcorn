import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  gap: "10px",
  backgroundColor: "#333",
  padding: "1rem",
  borderRadius: "10px",
  // width: "max-content",
  margin: "auto",
  color: "orange",
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
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <div style={textStyle}>{rating || ""}</div>
    </div>
  );
}
