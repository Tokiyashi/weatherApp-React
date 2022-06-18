import React from 'react';

const api = {
  key: "6288c75382467c9f1bd043ba12aa0a7b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

    const dateBuilder = (d) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear()

        return `${day} ${date} ${month} ${year}`
    }

  return (
    <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>
        <div className="location-box">
            <div className="location">
              New York, US
            </div>
            <div className="date">
                {dateBuilder(new Date())}
            </div>
        </div>
        <div className="weather-box">
            <div className="temperature">
                15 °c
            </div>
            <div className="weather">
                Sunny
            </div>
        </div>
    </main>
  );
}

export default App;
