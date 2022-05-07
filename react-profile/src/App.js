import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Links to my projects',
    },
    { name: 'Projects', description: 'Several projects that I have worked on including class collaborations' },
    { name: 'Resume', description: 'My work experience' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
      <main>
        {!contactSelected ? (
          <>
          {/* <Projects currentCategory={currentCategory}></Projects> */}
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}


export default App;
