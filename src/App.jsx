import Navbar from "./Navbar";
// @ts-ignore
import Intro from "./Main-1";
import Features from "./Main-2";
import Download from "./Main-3";
import Faq from "./Main-4";
import Footer from "./Footer";

function App() {

  return (
    <>
      <div>
        <div className="text-[0.9375rem] sm:text-base font-Rubik text-veryDarkBlue">
          <header>
           <Navbar/>
          </header>

          <main>
            <Intro />
            <Features />
            <Download />
            <Faq />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
        
      </div>
    </>
  )
}

export default App
