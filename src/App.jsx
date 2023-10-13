import { Route, Routes, useNavigate } from "react-router"
import Dashboard from "./components/dashboard/Dashboard"
import Navbar from "./components/Navbar"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Profile from "./components/Profile"
import { useEffect } from "react"
import users from "./components/apis/users"

export const globalData = {
  server: "https://todo-app-with-authentication-using.onrender.com"
}

function App() {

  const navigate = useNavigate()

  useEffect(async () => {

    try {
      const res = await users.getUserProfile()
      if (res.data.status !== "OK") {
        console.log("Inside .then of try : !== OK")
        navigate("/login")
      }
    } catch (error) {
      if (error.response.status === 401) {
        console.log("Inside .catch of try : 401")
        navigate("/login")
      }
    }

  }, [])

  console.log("App.js is Rendered")

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
