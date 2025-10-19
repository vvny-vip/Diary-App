import React,{useState,useEffect} from "react";
export default function AddEntry() {
  const [entry, setEntry] = useState({ title: "", content: "" ,date:new Date().toISOString().split("T")[0],
    mood:""
  });
  const [users, setUsers] = useState([]);
  const emojiMoods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😠', label: 'Angry' },
    { emoji: '🥳', label: 'Celebrating' },
    { emoji: '😴', label: 'Tired' },
    { emoji: '😍', label: 'Loved' },
    { emoji: '😨', label: 'Scared' },
    { emoji: '🙏', label: 'Grateful' },
    { emoji: '😰', label: 'Anxious' }
  ];
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEntry((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (entry.title.trim() === "" || entry.content.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    const newEntry = { ...entry, id: Date.now() };
    setUsers((prev) => [...prev, newEntry]);
    setEntry({ title: "", content: "" ,date:new Date().toISOString().split("T")[0],});
  }
  return (
    <div className="add-entry-container">
      <h2>Add New Entry</h2>
      <form className="entry-form" onSubmit={handleSubmit}>
        <label className="entry-label">Title:</label>
        <input type="text" className="entry-input" placeholder="Enter Title" name="title" value={entry.title} onChange={handleChange} />
         <input type="date" className="entry-date" name="date" value={entry.date} onChange={handleChange} />

        <label className="entry-label">Content:</label>
        <textarea className="entry-textarea" placeholder="Enter Content" name="content" value={entry.content} onChange={handleChange} />
        <button type="submit" className="entry-button">Add Entry</button>
      </form>
      <div className="entries-list">
        <h3>Your Entries:</h3>
        {users.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="entry-item" style={{listStyle:"none"}}>
                <h4>{user.title}</h4>
                <p>{user.content}</p>
                <small>{user.date}</small>
                <p>Mood: {user.mood}</p>
              </li> 
            ))}
          </ul>
        )}
        <div className="emoji-picker"style={{border:"1px solid black"}}>
  {emojiMoods.map((m) => (
    <label key={m.label} style={{ fontSize: "2rem", margin: "0 5px", cursor: "pointer" }}>
      <input
        type=""
        name="mood"
        value={m.label}
        checked={entry.mood === m.label}
        onChange={handleChange}
        style={{display: "none",backgroundColor:"red"}}
      />
      {m.emoji}
    </label>
  ))}
</div>

      </div>
    </div>
  );
} 

