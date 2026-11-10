import React, { useState } from "react";

const buttons = [
  {
    id: "btn-billing",
    label: "Billing",
    description: "Fires as a billing-related event from an admin on the dashboard.",
    attributes: {
      category: "billing",
      plan: "enterprise",
      userType: "admin",
      source: "dashboard"
    }
  },
  {
    id: "btn-support",
    label: "Support",
    description: "Fires as a support-related event from a trial viewer in settings.",
    attributes: {
      category: "support",
      plan: "trial",
      userType: "viewer",
      source: "settings"
    }
  },
  {
    id: "btn-feature",
    label: "Feature Request",
    description: "Fires as a feature request from a pro editor on the home page.",
    attributes: {
      category: "feature_request",
      plan: "pro",
      userType: "editor",
      source: "home"
    }
  }
];

const EventAttributes = () => {
  const [lastFired, setLastFired] = useState(null);

  const fireEvent = (button) => {
    window.Appcues.track("button_clicked_attributes", button.attributes);
    setLastFired(button);
  };

  return (
    <div className="app-content">
      <h1>Event Attributes</h1>
      <p>
        Each button below fires the same event — <code>button_clicked_attributes</code> —
        but with different attribute values. Use this to test Appcues targeting based
        on event attributes rather than just the event name alone.
      </p>

      <div className="event-attr-grid">
        {buttons.map(button => (
          <div key={button.id} className="event-attr-card">
            <h2>{button.label}</h2>
            <p>{button.description}</p>
            <div className="event-attr-table">
              {Object.entries(button.attributes).map(([key, value]) => (
                <div key={key} className="event-attr-row">
                  <span className="event-attr-key">{key}</span>
                  <span className="event-attr-value">"{value}"</span>
                </div>
              ))}
            </div>
            <button id={button.id} onClick={() => fireEvent(button)}>
              Fire Event
            </button>
          </div>
        ))}
      </div>

      {lastFired && (
        <div className="event-attr-confirmation">
          ✅ Fired <code>button_clicked_attributes</code> with{" "}
          <code>category: "{lastFired.attributes.category}"</code>
        </div>
      )}
    </div>
  );
};

export default EventAttributes;
