import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

// * The Code below is mine


// import React, { useContext } from 'react'
// import { HashRouter, Routes, Route } from 'react-router-dom'
// import { ThemeContext } from './contexts/theme'

// import Header from './components/Header/Header'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import './App.css'

// const App = () => {
//   const [{ themeName }] = useContext(ThemeContext)

//   return (
//     <HashRouter>
//       <ScrollToTop />
//       <div id='top' className={`${themeName} app`}>
//         <Header />
//         <main>
//           <Routes>
//             <Route path='/' element={<About />} />
//             <Route path='/projects' element={<Projects />} />
//             <Route path='/skills' element={<Skills />} />
//             <Route path='/contact' element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </HashRouter>
//   )
// }
// export default App
