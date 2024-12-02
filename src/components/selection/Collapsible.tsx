import React, { useState } from "react";

export default function Collapsible({
  header,
  content,
  defaultOpen = true,
  mt = true,
}: {
  header: JSX.Element;
  content: JSX.Element;
  defaultOpen?: boolean;
  mt?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="collapsible">
      <div
        className={`header pointer d-flex gap-1 align-center mb-2${
          mt ? " mt-2" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        {header}
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && content}
    </div>
  );
}
