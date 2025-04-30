import React from "react";

const EmbeddedWebsite = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="https://mycozee.ffazar.com/"
        title="MyCozee Website"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default EmbeddedWebsite;
