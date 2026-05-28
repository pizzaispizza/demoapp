import React, { useState } from "react";

const Modal = ({ id, title, onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        id={id}
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const DynamicElements = () => {
  const [openModal, setOpenModal] = useState(null);

  const close = () => setOpenModal(null);

  return (
    <div className="app-content">
      <h1>Dynamic Elements</h1>
      <p>
        Click a button below to open a modal. Use these to test how Appcues
        experiences behave when anchored to elements that appear dynamically
        without a URL change.
      </p>

      <div className="modal-trigger-group">
        <button id="open-modal-a" onClick={() => setOpenModal("a")}>Open Modal A</button>
        <button id="open-modal-b" onClick={() => setOpenModal("b")}>Open Modal B</button>
        <button id="open-modal-c" onClick={() => setOpenModal("c")}>Open Modal C</button>
      </div>

      {/* Modal A - Feature Overview */}
      {openModal === "a" && (
        <Modal id="modal-a" title="Feature Overview" onClose={close}>
          <p id="modal-a-description">
            This is a sample feature overview modal. It appears dynamically
            without changing the URL — a great test case for Appcues anchoring.
          </p>
          <ul id="modal-a-list">
            <li>Feature highlight one</li>
            <li>Feature highlight two</li>
            <li>Feature highlight three</li>
          </ul>
          <button id="modal-a-cta">Learn More</button>
        </Modal>
      )}

      {/* Modal B - Settings Panel */}
      {openModal === "b" && (
        <Modal id="modal-b" title="Settings Panel" onClose={close}>
          <p id="modal-b-description">
            A sample settings panel. Try anchoring a tooltip to one of the
            options below.
          </p>
          <div id="modal-b-options">
            <div className="modal-setting-row">
              <label id="modal-b-option-1">Enable notifications</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="modal-setting-row">
              <label id="modal-b-option-2">Dark mode</label>
              <input type="checkbox" />
            </div>
            <div className="modal-setting-row">
              <label id="modal-b-option-3">Auto-save</label>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
          <button id="modal-b-save">Save Settings</button>
        </Modal>
      )}

      {/* Modal C - Confirmation Dialog */}
      {openModal === "c" && (
        <Modal id="modal-c" title="Confirm Action" onClose={close}>
          <p id="modal-c-description">
            This is a sample confirmation dialog. These are common in apps and
            a useful surface for testing Appcues experience targeting.
          </p>
          <div id="modal-c-actions">
            <button id="modal-c-confirm">Confirm</button>
            <button id="modal-c-cancel" onClick={close}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DynamicElements;
