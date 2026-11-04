import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const UrlModals = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeModal = params.get("modal");

  const openModal = (num) => {
    history.push(`/url-modals?modal=${num}`);
    window.Appcues.page();
  };

  const closeModal = () => {
    history.push("/url-modals");
    window.Appcues.page();
  };

  return (
    <div className="app-content">
      <h1>URL-Changing Modals</h1>
      <p>
        Each modal updates the URL when opened, so Appcues can target them
        independently by URL. Use this to test multi-step flows where each
        state has its own addressable URL.
      </p>

      <div className="modal-trigger-group">
        <button id="open-url-modal-1" onClick={() => openModal(1)}>
          Open Modal 1
        </button>
      </div>

      {/* Modal 1 */}
      {activeModal === "1" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" id="url-modal-1" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Modal 1 — Step One</h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <p id="url-modal-1-description">
                This is the first modal. The URL is now <code>/url-modals?modal=1</code>,
                making this state independently targetable in Appcues.
              </p>
              <div id="url-modal-1-actions" style={{ display: "flex", gap: "10px" }}>
                <button id="url-modal-1-next" onClick={() => openModal(2)}>
                  Next →
                </button>
                <button id="url-modal-1-cancel" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {activeModal === "2" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" id="url-modal-2" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Modal 2 — Step Two</h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <p id="url-modal-2-description">
                This is the second modal. The URL is now <code>/url-modals?modal=2</code>.
                Each step is a distinct Appcues page event.
              </p>
              <div id="url-modal-2-actions" style={{ display: "flex", gap: "10px" }}>
                <button id="url-modal-2-confirm">
                  Confirm
                </button>
                <button id="url-modal-2-back" onClick={() => openModal(1)}>
                  ← Back
                </button>
                <button id="url-modal-2-cancel" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlModals;
