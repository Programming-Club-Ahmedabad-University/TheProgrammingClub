import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "./pages/About"
import Events from "./pages/Events"
import Community from "./pages/Community"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

import Layout from "./components/Layout"

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/community" element={<Community />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	)
}

export default App
