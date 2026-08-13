import React from "react";
import "./PreferenceBar.css";

const PreferenceBar = ({ label, value }) => (
  <div className="pref">
    <div className="pref-head">
      <span>{label}</span>
      <span className="pref-val">{value}%</span>
    </div>
    <div className="pref-track">
      <div className="pref-fill" style={{ "--value": `${value}%` }} />
    </div>
  </div>
);

export default PreferenceBar;