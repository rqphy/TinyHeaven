import './styles/reset.css'
import './styles/typography.css'
import './styles/App.css'
import { Suspense } from 'react'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Popup from './components/popup/popup'
import Loader from './components/loader/loader'

function App() {
	return (
		<div className="App">
			<Header />
			<Popup  />
			<Suspense fallback={<Loader />}>
				<Experience />
			</Suspense>
		</div>
	)
}

export default App
