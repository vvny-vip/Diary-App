import React, { useState,useEffect } from 'react';
const API = process.env.REACT_APP_API_URL;
import './diary.css';

const AddEntry = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [users,setUsers] = useState([]);
  const [filterMood, setFilterMood] = useState('All Moods');
  const [editId, setEditId] = useState(null);

  const moods = ['😊', '😡', '😍', '😴', '😨', '🎉', '😎'];

  const handleSaveEntry = async () => {
    try{
      if (!title.trim() || !content.trim() || !date.trim() || !selectedMood.trim()) {
  alert('Please fill all fields before saving!');
  return;
}
       const response = await fetch(`${API}/content`, {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
          "Authorization": `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({
          title: title,
          content: content,
          mood: selectedMood,
          date: date
        }),
      });
      
      if(!response.ok){
        alert("Error saving entry");
        return;
      }
      else{
        alert("Entry saved successfully!");
      }
    }
    catch(err){
      console.error("Error connecting to server:", err);
      alert("Server error. Try again later.");
    }
    // Reset form
    setTitle('');
    setDate('');
    setContent('');
    setSelectedMood('');
    setEditId(null);
    Rendered();
  };
  const Rendered = async() => {
    try{
      const res = await fetch(`${API}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };
  useEffect(() => {
    Rendered();
  }, []);
    
  const userE = (editItem) => {
    try{
        setTitle(editItem.title);
        setDate(new Date(editItem.date).toISOString().split('T')[0]);
        setContent(editItem.content);
         setSelectedMood(editItem.mood);
         setEditId(editItem._id);
      }
    
    catch(err){
      alert("Update failed ⛓️‍💥");
    }
  }
const editedUsers = async(id) => {
    try{
      const response = await fetch(`${API}/edit/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}` },
        body : JSON.stringify({
          title: title,
          content: content,
          mood: selectedMood,
          date: date
        }),
      });
    }catch(err){
      console.error("Error connecting to server:", err);
      alert("Server error. Try again later.");
    }
    // Reset form
    setTitle('');
    setDate('');
    setContent('');
    setSelectedMood('');
    Rendered();
  };
const deleteEntry = async(id) => {
  try{
    const response = await fetch(`${API}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
    });
    if(!response.ok){
      alert("Error deleting entry");
      return;
    }
    Rendered();
    setEditId(null);
  }
  catch(err){
    console.error("Error connecting to server:", err);
    alert("Server error. Try again later.");
  }
};
  return (
    <div className='diary-page'>
    <div className="dashboard-container">
      {/* Top Navigation Bar */}

      <div className="dashboard-content">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="app-header">
              <i className="fas fa-book"></i>
              <h1>My Diary</h1>
            </div>
            <hr className='hro'/>
            <p className="entry-count">{users.length} entries</p>
            
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search entries..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search search-icon"></i>
            </div>
            
            <div className="filter-container">
              <label>Filter by Mood:</label>
              <select 
                value={filterMood}
                onChange={(e) => setFilterMood(e.target.value)}
                className="mood-filter"
              >
                <option>All Moods</option>
                <option>Happy</option>
                <option>Angry</option>
                <option>Love</option>
                <option>Tired</option>
                <option>Scared</option>
                <option>Celebratory</option>
                <option>Cool</option>
              </select>
            </div>
          </div>
          <div className='saved-entries-container'>
               {users.length > 0 ? (
        <ul>
          {users.map((entry) => (
            <li key={entry._id}   className='saved'><strong>
            Title:</strong> {entry.title} <br/> <strong>
            Content:</strong> {entry.content} <br /><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}
            <br />mood:{entry.mood}
           <button className='refresh' onClick={() => userE(entry)}>Edit</button>
            <button className='refresh2' onClick={() => deleteEntry(entry._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Entries Yet</p>
      )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="entry-card">
            <h2>New Diary Entry</h2>
            <hr className='hr' />
            <div className="input-row">
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Title" 
                  className="title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <input 
                  type="date" 
                  className="date-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <i className="fas fa-calendar calendar-icon"></i>
              </div>
            </div>
            
            <div className="mood-section">
              <h3>How are you feeling?</h3>
              <div className="mood-buttons">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    className={`mood-btn ${selectedMood === mood ? 'active' : ''}`}
                    onClick={() => setSelectedMood(mood)}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="content-section">
              <textarea 
                placeholder="What's on your mind today?"
                className="content-input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            
            <button 
              className="save-btn" 
  onClick={() => editId ? editedUsers(editId) : handleSaveEntry()}
>
  {editId ? "Update Entry ✏️" : "Save Entry 📝"}
</button>

          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default AddEntry;