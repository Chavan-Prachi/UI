import React from "react";
import PreferenceBar from "./PreferenceBar";
import "./PersonaCard.css";

const Section = ({ icon, title, items }) => (
  <div className="pc-section">
    <h3><span className="pc-icon">{icon}</span>{title}</h3>
    <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
  </div>
);

const PersonaCard = ({ persona }) => (
  <section className="persona-card">
    <aside className="pc-profile">
      <div className="pc-avatar">
        <span className="pc-initials">{persona.initials}</span>
        <span className="pc-emoji">{persona.emoji}</span>
      </div>
      <h2>{persona.name}</h2>
      <p className="pc-title">{persona.title}</p>
      <span className="pc-badge">{persona.userType}</span>
      <ul className="pc-meta">
        {persona.meta.map((m, i) => (
          <li key={i}><span>{m.label}</span><strong>{m.value}</strong></li>
        ))}
      </ul>
    </aside>

    <div className="pc-main">
      <Section title="Goals" items={persona.goals} />
      <Section title="Challenges" items={persona.challenges} />
      <Section  title="Motivations" items={persona.motivations} />
    </div>

    <div className="pc-side">
      <div className="pc-section">
        <h3><span className="pc-icon"></span>Preferences</h3>
        {persona.preferences.map((p, i) => <PreferenceBar key={i} {...p} />)}
      </div>
      <Section  title="Behaviours" items={persona.behaviours} />
    </div>
  </section>
);

export default PersonaCard;