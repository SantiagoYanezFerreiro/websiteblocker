import React, { useState, useEffect } from "react";

export default function WebsiteBlocker() {
  const [blockWebsites, setBlockedWebsites] = useState([]);

  function addBlockedWebsite(website) {
    if (!addBlockedWebsite.includes(website)) {
      blockWebsites.push(website);
    }
  }
  return (
    <div className="blocker-container">
      <h1>Website Blocker</h1>
      <button onClick={addBlockedWebsite}>Add New Website</button>
    </div>
  );
}
