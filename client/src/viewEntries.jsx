import React, { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;

export default function ViewEntries() {
  const [entries, setEntries] = useState([]);

  // Fetch entries
  const fetchEntries = async () => {
    try {
      const res = await fetch(`${API}/users`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error("Error fetching entries:", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="saved-entries-container">
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry) => (
            <li key={entry._id} className="saved">
              <strong>Title:</strong> {entry.title} <br />
              <strong>Content:</strong> {entry.content} <br />
              <strong>Date:</strong> {new Date(entry.date).toLocaleDateString()} <br />
              <strong>Mood:</strong> {entry.mood}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Entries Yet</p>
      )}
    </div>
  );
}
