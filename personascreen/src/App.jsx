import React from "react";
import PersonaCard from "./components/PersonaCard";
import { personas } from "./data/personas";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span className="app-logo">🌡️</span>
        <div>
          <h1>HeatWatch AI — Persona Profiles</h1>
          <p>Climate Intelligence for Heatwave Monitoring, Prediction & Early Warning · KJS-CES-01</p>
        </div>
      </header>

      {personas.map((p, i) => (
        <div
          className="persona-block"
          key={p.id}
          style={{ "--accent": p.accent, "--accent-soft": p.accentSoft }}
        >
          <h2 className="persona-heading">Persona {i + 1}: {p.heading}</h2>
          <PersonaCard persona={p} />
        </div>
      ))}
    </div>
  );
}