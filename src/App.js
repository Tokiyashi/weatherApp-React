import React from 'react';

const api = {
  key: "6288c75382467c9f1bd043ba12aa0a7b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>
    </main>
  );
}

export default App;
