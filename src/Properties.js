import React, { useState } from "react";

const Properties = () => {
  // --- User Properties ---
  const [userProps, setUserProps] = useState({
    role: "tester",
    email: "support@appcues.com",
    signupDate: parseInt(window.localStorage.timestamp) || Date.now()
  });
  const [newUserKey, setNewUserKey] = useState("");
  const [newUserValue, setNewUserValue] = useState("");
  const [userStatus, setUserStatus] = useState("");

  // --- Group Properties ---
  const [groupId, setGroupId] = useState("demo-account-001");
  const [groupProps, setGroupProps] = useState({
    companyName: "Acme Corp",
    planType: "trial",
    planTier: "standard",
    employeeCount: "50",
    mrr: "500",
    industry: "SaaS",
    betaUser: "false"
  });
  const [newGroupKey, setNewGroupKey] = useState("");
  const [newGroupValue, setNewGroupValue] = useState("");
  const [groupStatus, setGroupStatus] = useState("");

  // --- User handlers ---
  const handleUserPropChange = (key, value) => {
    setUserProps(prev => ({ ...prev, [key]: value }));
  };

  const addUserProp = () => {
    if (!newUserKey.trim()) return;
    setUserProps(prev => ({ ...prev, [newUserKey.trim()]: newUserValue }));
    setNewUserKey("");
    setNewUserValue("");
  };

  const saveUserProps = () => {
    window.Appcues.identify(window.localStorage.currentUser, userProps);
    setUserStatus("✅ User properties sent!");
    setTimeout(() => setUserStatus(""), 3000);
  };

  // --- Group handlers ---
  const handleGroupPropChange = (key, value) => {
    setGroupProps(prev => ({ ...prev, [key]: value }));
  };

  const addGroupProp = () => {
    if (!newGroupKey.trim()) return;
    setGroupProps(prev => ({ ...prev, [newGroupKey.trim()]: newGroupValue }));
    setNewGroupKey("");
    setNewGroupValue("");
  };

  const saveGroupProps = () => {
    window.Appcues.group(groupId, groupProps);
    setGroupStatus("✅ Group properties sent!");
    setTimeout(() => setGroupStatus(""), 3000);
  };

  return (
    <div className="app-content">
      <h1>Properties</h1>

      {/* User Properties */}
      <section className="properties-section">
        <h2>👤 User Properties</h2>
        <p>
          Currently identifying as: <strong>{window.localStorage.currentUser}</strong>.
          Edit any value below or add a new property, then click <em>Send</em> to fire{" "}
          <code>Appcues.identify()</code>.
        </p>

        <table className="properties-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userProps).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    type="text"
                    value={String(value)}
                    onChange={e => handleUserPropChange(key, e.target.value)}
                  />
                </td>
              </tr>
            ))}
            <tr className="add-property-row">
              <td>
                <input
                  type="text"
                  placeholder="New property name"
                  value={newUserKey}
                  onChange={e => setNewUserKey(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Value"
                  value={newUserValue}
                  onChange={e => setNewUserValue(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="properties-actions">
          <button className="add-btn" onClick={addUserProp}>+ Add Property</button>
          <button className="send-btn" onClick={saveUserProps}>Send User Properties</button>
          {userStatus && <span className="status-message">{userStatus}</span>}
        </div>
      </section>

      {/* Group Properties */}
      <section className="properties-section">
        <h2>🏢 Group Properties</h2>
        <p>
          Set a group ID and properties, then click <em>Send</em> to fire{" "}
          <code>Appcues.group()</code>. The group ID is required — all other
          properties are optional.
        </p>

        <div className="group-id-row">
          <label>Group ID</label>
          <input
            type="text"
            value={groupId}
            onChange={e => setGroupId(e.target.value)}
          />
        </div>

        <table className="properties-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupProps).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    type="text"
                    value={String(value)}
                    onChange={e => handleGroupPropChange(key, e.target.value)}
                  />
                </td>
              </tr>
            ))}
            <tr className="add-property-row">
              <td>
                <input
                  type="text"
                  placeholder="New property name"
                  value={newGroupKey}
                  onChange={e => setNewGroupKey(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Value"
                  value={newGroupValue}
                  onChange={e => setNewGroupValue(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="properties-actions">
          <button className="add-btn" onClick={addGroupProp}>+ Add Property</button>
          <button className="send-btn" onClick={saveGroupProps}>Send Group Properties</button>
          {groupStatus && <span className="status-message">{groupStatus}</span>}
        </div>
      </section>
    </div>
  );
};

export default Properties;
