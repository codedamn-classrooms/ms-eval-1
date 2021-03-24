import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
