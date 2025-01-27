
import './App.css'
import { About } from './components/about'
import { Footer } from './components/footer'
import { Navigation } from './components/navigation'

function App() {

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <About/>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
