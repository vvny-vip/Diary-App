import React, { useState,useEffect } from 'react';
import './diary.css';

const AddEntry = () => {
  const [selectedMood, setSelectedMood] = useState('😊');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [users,setUsers] = useState([]);
  const [filterMood, setFilterMood] = useState('All Moods');

  const moods = ['😊', '😡', '😍', '😴', '😨', '🎉', '😎'];

  const handleSaveEntry = async () => {
    try{
       const response = await fetch("http://localhost:2000/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    }
    catch(err){
      console.error("Error connecting to server:", err);
      alert("Server error. Try again later.");
    }
    // Reset form
    setTitle('');
    setDate('');
    setContent('');
    setSelectedMood('😊');
    Rendered();
  };
  const Rendered = async() => {
    try{
      const res = await fetch("http://localhost:2000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };
  useEffect(() => {
    Rendered();
  }, []);
    

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
            <p className="entry-count">0 entries</p>
            
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
            <li key={entry._id} style={{listStyle:"none"}} div className='saved'>
            title:{entry.title} <br/> content:{entry.content} <br />date:{entry.date} <br />mood:{entry.mood}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
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
            
            <button className="save-btn" onClick={handleSaveEntry}>
              Save Entry 📝
            </button>
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default AddEntry;