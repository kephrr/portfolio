import './App.css'
import {Introduction} from './components/introduction'
import { Skills } from './components/skills-utils'

function App() {

  return (
      <div>
        <Introduction></Introduction>
        <div className="flex-col flex items-center">
          <Skills></Skills>
        </div>
      </div>
  )
}

export default App
