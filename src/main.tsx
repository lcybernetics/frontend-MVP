import React from "react"
import ReactDOM from "react-dom/client"
import { LandingPage, Dashboard } from "./pages"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom"
import { GlobalStyles } from "./theme"

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider router={router} />
	</React.StrictMode>
)
