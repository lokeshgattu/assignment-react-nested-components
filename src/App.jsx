function Header() {
  return(
    <header>
    <h1> Assignment : Nested Components</h1>
    <p>This is Header Component</p>
    </header>
  )
};

function Navigation() {
  return(
    <>
    <h2> This is a Navigation Component</h2>
    <nav>
      <a href="#">Home</a>|
      <a href="#">News</a>|
      <a href="#">Contacts</a>|
      <a href="#">About-Us</a>|
    </nav>
    </>
  )
};

function Footer() {
  return(
  <footer>
  <h4>This is a Footer Component </h4>

  <nav>
  <a href="#">Privacy Policy</a>|
  <a href="#">Careers</a>|
  <a href="#">Other Components</a>|
  </nav>
  
  <p>&copyrights; reserved to Nested Components</p>
  </footer>
  )
};


function App() {
  return (
    <>
    <Header />

    <Navigation />

    <main>
      <h3>This is a main section </h3>
      <p>Nested Components</p>
    </main>
    
    <Footer />
    </>
  )
}

export default App
