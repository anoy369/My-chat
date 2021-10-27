import React from "react";

import "./chatHeads.css";

export default function ChatHeads({ items, setReceiver }) {
  return (
    <div>
      <p>ChatHeads</p>
      {items.map((obj, i) => (
        <div
          key={i}
          onClick={() => setReceiver(obj)}
          className="chat-head-item"
        >
          <div className="user-profile-pic-container">
            <p className="user-profile-pic-text">{obj.email[0]}</p>
          </div>
          <p>{obj.email}</p>
        </div>
      ))}
    </div>
  );
}
