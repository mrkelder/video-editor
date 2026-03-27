import { Outlet } from 'react-router'

export default function App() {
	return (
		<html lang='en'>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<head>
				<title>Audio Editor</title>
			</head>
			<body>
				<Outlet />
			</body>
		</html>
	)
}
