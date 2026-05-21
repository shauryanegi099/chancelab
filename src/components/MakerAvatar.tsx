"use client";
import { useState } from "react";

/** Shows /maker.jpg if present, otherwise falls back to the SN monogram. */
export default function MakerAvatar() {
  const [ok, setOk] = useState(true);
  if (!ok) return <div className="monogram">SN</div>;
  return (
    <img
      src="/maker.jpg"
      alt="Shaurya Negi"
      className="maker-img"
      onError={() => setOk(false)}
    />
  );
}
