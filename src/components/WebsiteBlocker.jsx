import React, { useState, useEffect } from "react";

export default function WebsiteBlocker() {
  const [blockedSites, setBlockedSites] = useState([]);
  const [currentsite, setCurrentSite] = useState("");

  function handleInput(event) {
    setCurrentSite(event.target.value);
  }

  function addBlockedSite() {
    if (!blockWebsite.includes(currentsite)) {
      setBlockedSites([...blocked, currentsite]);
      setCurrentSite("");
    }
  }
  return (
    <div className="blocker-container">
      <h1>Website Blocker</h1>
      <button onClick={addBlockedSite}>Add New Website</button>
    </div>
  );
}
