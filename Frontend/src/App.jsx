import './App.css'
import Layout from './Components/Layout.jsx'
import WeatherApp from "./WeatherApp.jsx"
import Sidebar from "./Components/Sidebar.jsx"
function App() {

  return (
    <Layout className="Layout">
      <Sidebar />
      < WeatherApp />
    </Layout>
  )
}

export default App
