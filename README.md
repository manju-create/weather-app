# 🌤️ Weather App

A beautiful and responsive weather application that provides real-time weather information for any city worldwide.

## ✨ Features

- **Real-time Weather Data** - Get current temperature, weather conditions, and more
- **Beautiful UI** - Glass morphism design with smooth animations
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Dynamic Backgrounds** - Background changes based on temperature
- **Error Handling** - User-friendly error messages for invalid cities
- **Fast & Lightweight** - Optimized for quick loading and performance

## 🚀 How to Use

1. **Enter a city name** in the search box
2. **Click the search button** or press **Enter**
3. **View weather information** including:
   - Current temperature in Celsius
   - Weather description
   - City name

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with modern features (Flexbox, Animations, Backdrop Filter)
- **JavaScript** - Dynamic functionality and API integration
- **OpenWeatherMap API** - Weather data source

## 📁 File Structure

```
weather-app/
│
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # JavaScript functionality
├── bg.jpeg             # Default background image
├── hot.jpeg            # Hot weather background
├── warm.jpeg           # Warm weather background
└── cold.jpeg           # Cold weather background
```

## 🌡️ Temperature Backgrounds

The app automatically changes backgrounds based on temperature:
- **Above 30°C** - Hot weather background
- **20°C to 30°C** - Warm weather background  
- **Below 20°C** - Cold weather background

## 🔧 Setup Instructions

1. **Clone or download** the project files
2. **Ensure all files** are in the same directory:
   - `index.html`
   - `style.css` 
   - `script.js`
   - Background images (`bg.jpeg`, `hot.jpeg`, `warm.jpeg`, `cold.jpeg`)
3. **Open `index.html`** in your web browser
4. **Start searching** for weather information!

## 📱 Browser Compatibility

- Chrome ✅
- Firefox ✅  
- Safari ✅
- Edge ✅

## 🎨 Customization

You can easily customize:
- **Colors** in `style.css`
- **Background images** by replacing the JPEG files
- **Animations** by modifying CSS keyframes
- **Temperature ranges** in the `changebg()` function

## ⚠️ Important Notes

- Requires an active internet connection for API calls
- City names should be spelled correctly
- API key is included for demo purposes

## 🔮 Future Enhancements

Potential features to add:
- 5-day weather forecast
- Geolocation support
- Weather maps
- Temperature unit toggle (Celsius/Fahrenheit)
- Weather alerts
- Favorite cities

---

**Enjoy using the Weather App!** 🌈
