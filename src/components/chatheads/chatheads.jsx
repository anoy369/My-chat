import React from "react";

import "./chatHeads.css";

export default function ChatHeads({ items, setReceiver }) {
  return (
    <div>
      <p>ChatHeads</p>
      {items.map((obj, i) => (
        <div key={i}>
          <div>
            <p>{obj.email[0]}</p>
          </div>
          <p>{obj.email}</p>
        </div>
      ))}
    </div>
  );
}
