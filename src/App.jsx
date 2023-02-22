import './styles/reset.css'
import './styles/App.css'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Popup from './components/popup/popup'
import useMessage from './stores/useMessage'


function App() {
	const messageId = useMessage((state) => state.messageId)
	console.log(messageId)

	return (
		<div className="App">
			<Header />
			<Popup messageId={ messageId } />
			<Experience />
		</div>
	)
}

export default App
