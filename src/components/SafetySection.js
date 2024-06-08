import React from "react";
import lockIcon from "./images/lock-icon.png"; // Add the path to the lock icon image
import callIcon from "./images/call-icon.png"; // Add the path to the call icon image
import promptIcon from "./images/prompt-icon.png"; // Add the path to the prompt icon image
import rateLimitIcon from "./images/rate-limit-icon.png"; // Add the path to the rate limit icon image
import auditIcon from "./images/audit-icon.png"; // Add the path to the audit icon image

function SafetySection() {
  return (
    <div className="safety-section">
      <div className="icon">
        <img src={lockIcon} alt="Safety Icon" />
      </div>
      <div className="content">
        <h2>Unwavering Safety & Security</h2>
        <p>
          With robust internal audits and stringent data governance, we champion
          the ethical use of AI, ensuring technology serves humanity's best
          interests. Our commitment sets the foundation for Advanced General
          Intelligence (AGI) with integrity.
        </p>
      </div>
      <div className="features">
        <ul>
          <li>
            <img src={callIcon} alt="Call Monitoring" />
            <span>Call Monitoring</span>
          </li>
          <li>
            <img src={promptIcon} alt="Prompt Injection" />
            <span>Prompt Injection</span>
          </li>
          <li>
            <img src={rateLimitIcon} alt="Rate Limits" />
            <span>Rate Limits</span>
          </li>
          <li>
            <img src={auditIcon} alt="Internal Hard Audits" />
            <span>Internal Hard Audits</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SafetySection;
