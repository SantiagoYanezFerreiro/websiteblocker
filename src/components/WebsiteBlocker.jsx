import React, { useState, useEffect } from "react";

export default function WebsiteBlocker() {
  const [blockedSites, setBlockedSites] = useState([]);
  const [currentSite, setCurrentSite] = useState("");

  function handleInput(event) {
    setCurrentSite(event.target.value);
  }

  function addBlockedSite() {
    if (!blockedSites.includes(currentSite)) {
      setBlockedSites([...blockedSites, currentSite]);
      setCurrentSite("");
    }
  }

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const currentSite = window.location.hostname;
      if ((blockedSites, includes(currentSite))) {
        event.preventdefault();
        event.returnvalue = "";
        console.log(currentSite);
      }
    };

    function handleUnload() {
      const currentSite = window.location.hostname;
      if (blockedSites.includes(currentSite)) {
        window.location.href = "https://www.example.com/blocked";
        console.log(currentSite);
      }
    }

    //Add Event Listeners
    window.addEventListener("beforeUnload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    //Remove event listeners when component unmounts

    return () => {
      window.removeEventListener("beforeUnload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [blockedSites]);

  return (
    <div className="blocker-container">
      <h1>Website Blocker</h1>
      <input type="Text" value={currentSite} onChange={handleInput} />
      <button onClick={addBlockedSite}>Add New Website</button>
      <div>
        {blockedSites.map((site) => (
          <div>
            <p key={site}>{site}</p> <button>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
