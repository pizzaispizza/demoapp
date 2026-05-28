import React from "react";

const IFrames = () => {
  return (
    <div className="app-content">
      <h1>iFrame Testing</h1>
      <p>
        Use this page to test how Appcues experiences behave when attached to
        elements inside an iFrame. The iFrame below is served from the same
        domain, so there are no cross-origin restrictions.
      </p>
      <iframe
        id="test-iframe"
        src="/iframe-content.html"
        title="iFrame Test Content"
        style={{
          width: "90%",
          height: "500px",
          border: "2px solid rgba(0, 8, 63, 0.2)",
          borderRadius: "8px",
          marginTop: "10px",
          backgroundColor: "#fff"
        }}
      />
    </div>
  );
};

export default IFrames;
