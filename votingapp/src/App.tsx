
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/mode-toggle'
import { ThemeProvider } from './components/ui/theme-provider'
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      App
      <ModeToggle/>
      <Button>Btn</Button>
    </ThemeProvider>
  )
}

export default App
