"use client";

import { useState } from "react";

export default function ResponseCard() {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(true);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end"></div>
        <div
          className={`badge ${approved ? "badge-success" : "badge-secondary"}`}
        >
          {approved && approved ? "Approved" : ""}
          {rejected && rejected ? "Rejected" : "Pending"}
        </div>
      </div>
    </div>
  );
}
