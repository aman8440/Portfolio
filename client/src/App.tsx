
import './App.css'
import { CustomCursor } from './components/custom-cursor'
import { Footer } from './components/footer'
import { Navigation } from './components/navigation'
import Home from './pages/page'

function App() {

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      <main>
        <Home />
        {/* <About/>
        <Skills/>
        <Experience />
        <Projects /> */}
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
