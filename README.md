# 🌦️ Weather App

> **Get real-time weather of any city — instantly, no API key needed.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![API](https://img.shields.io/badge/wttr.in-API-00BCD4?style=for-the-badge&logo=cloud&logoColor=white)

---

## ✨ What is this?

**Weather App** is a React-powered web app that fetches real-time weather data for any city in the world using the free **wttr.in API** — no API key or signup required!

---

## 🚀 Live Demo

<img width="1906" height="930" alt="Screenshot From 2026-07-09 10-17-19" src="https://github.com/user-attachments/assets/73865dd7-5879-414c-a2bf-cecc26c65c5f" />


---



## ⚡ Features

- ✅ **Real-time Weather** — live data fetched from wttr.in API
- ✅ **Search by City** — type any city name worldwide
- ✅ **Enter Key Support** — press Enter to search instantly
- ✅ **Error Handling** — shows message if city not found
- ✅ **Temperature** — current temp in Celsius
- ✅ **Feels Like** — apparent temperature
- ✅ **Humidity** — percentage humidity
- ✅ **Wind Speed** — in Km/h
- ✅ **Weather Condition** — clear, cloudy, rainy etc.
- ✅ **Country Name** — auto-detected from API
- ✅ **Beautiful UI** — sky background with weather card

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **React 18** | UI components and rendering |
| **React Hooks** | `useState`, `useEffect` for state management |
| **wttr.in API** | Free weather data — no key needed |
| **JavaScript ES6+** | Async/Await, fetch, error handling |
| **HTML5 & CSS3** | Structure and styling |
| **Parcel** | Module bundling |

---

## 🔌 API Used

**wttr.in** — completely free, no signup, no API key!

```
GET https://wttr.in/{city}?format=j1
```

| Data | API Key |
|------|---------|
| 🌡️ Temperature | `current_condition[0].temp_C` |
| 🤔 Feels Like | `current_condition[0].FeelsLikeC` |
| 💧 Humidity | `current_condition[0].humidity` |
| 💨 Wind Speed | `current_condition[0].windspeedKmph` |
| ☁️ Condition | `current_condition[0].weatherDesc[0].value` |
| 📍 Country | `nearest_area[0].country[0].value` |

---

## 📁 Project Structure

```
weather-app-react/
│
├── weather.html      # Main HTML entry point
├── weather.js        # Root React component
├── Head.js           # Header component
├── body.js           # Search + Weather card component
├── weather.css       # Styling
└── README.md
```

---

## 🏃 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Vansh140507/weather-app-react.git

# 2. Navigate into folder
cd weather-app-react

# 3. Install dependencies
npm install

# 4. Run with Parcel
npx parcel weather.html
```

Open **http://localhost:1234** 🎉

---

## 🧠 What I Learned

- Fetching data from a **REST API** without authentication
- Managing **multiple states** with `useState`
- Implementing **error handling** with try/catch in async functions
- Adding **keyboard support** with `onKeyDown` event
- Building **component-based architecture** in React
- Working with **nested JSON data** from API response
- Applying **conditional rendering** to show/hide content

---

## 🔮 Future Improvements

- [ ] Loading spinner while fetching
- [ ] 3-day forecast section
- [ ] Sunrise and Sunset times
- [ ] Auto-detect user location using Geolocation API
- [ ] Dark/Light mode toggle
- [ ] Animated weather icons

---

## 👨‍💻 Author

**Vansh**
- 🎓 B.Tech IoT & Cybersecurity with Blockchain Technology — CGC Jhanjeri
- 📧 vanshbhatnagar2808@gmail.com
- 🐙 GitHub: [@Vansh140507](https://github.com/Vansh140507)
- 💼 LinkedIn: [Vansh Bhatnagar](https://www.linkedin.com/in/vansh-bhatnagar-4ba792370/)

---

<div align="center">

⭐ <b>If you found this useful, drop a star!</b> ⭐

*Built with ❤️ using React and wttr.in API*

</div>
