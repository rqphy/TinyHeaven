import './styles/reset.css'
import './styles/App.css'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Popup from './components/popup/popup'


function App() {
	return (
		<div className="App">
			<Header />
			<Popup  />
			<Experience />
		</div>
	)
}

export default App
