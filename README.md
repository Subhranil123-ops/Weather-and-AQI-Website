# 🌞 BreathX

A React-based web application that displays real-time weather information along with a 5-day / 3-hour forecast using a public weather API.

This project helped me understand API integration, state management, and handling large JSON data efficiently in React.

## 🚀 Features

- Search weather by city name  
- Displays current temperature and "feels like" temperature  
- Shows 5-day / 3-hour forecast  
- Filters and transforms large API response data  
- Implements debouncing to reduce unnecessary API calls  
- Manually caches previous search results to improve performance  
- Visualizes forecast data using charts  


## ⚙️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS  
- **API:** OpenWeather API  
- **Concepts:** State management, API calls, async/await, data transformation  
## ⚙️ How It Works

1. The user types a city name.
2. Debouncing delays the API request until the user stops typing.
3. The app checks if the result is already stored in cache.
4. If cached, the stored result is used instead of calling the API again.
5. If not cached, a new request is sent to the weather API.
6. The large JSON response is filtered and transformed before rendering.
7. React updates the UI dynamically using state.
## 🛡️ Challenges & Solutions

- Faced a CORS error while fetching data and resolved it by understanding cross-origin policies.
- Optimized performance by implementing debouncing to prevent excessive API calls.
- Improved efficiency by manually caching previous search results.
- Processed and structured large forecast data before rendering charts.
## 💡 What I Learned

- Sending and handling API requests in frontend applications  
- Working with large JSON data  
- Implementing debouncing for performance optimization  
- Building a simple caching mechanism manually  
- Debugging CORS-related issues  
- Writing cleaner and more structured React logic  

## 🔮 Future Improvements

- Add loading spinner  
- Improve error handling  
- Add weather animations  
- Implement global state management  
