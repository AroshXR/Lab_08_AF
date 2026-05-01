import React from 'react'
import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

function App() {
  const handleButtonClick = (type) => {
    alert(`${type} button clicked!`);
  };

  return (
    <div className="app-container">
      <NavBar />

      <main style={{ padding: '20px' }}>
        <Banner
          message="Welcome to our React Lab 01!"
          backgroundColor="#28a745"
        />

        <Greeting />

        <section style={{ margin: '40px 0' }}>
          <h2>Exercise 03: Components</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <Card
              title="Premium Service"
              description="High-quality React components for your project."
              imageUrl="https://picsum.photos/300/200"
            />
            <Card
              title="Fast Delivery"
              description="Get your lab work done in no time with Vite."
              imageUrl="https://picsum.photos/300/201"
            />
          </div>

          <div style={{ margin: '20px 0' }}>
            <h3>Customizable Buttons</h3>
            <Button label="Primary" onClick={() => handleButtonClick('Primary')} styleType="primary" />
            <Button label="Secondary" onClick={() => handleButtonClick('Secondary')} styleType="secondary" size="small" />
            <Button label="Success" onClick={() => handleButtonClick('Success')} styleType="success" size="large" />
            <Button label="Danger" onClick={() => handleButtonClick('Danger')} styleType="danger" />
          </div>

          <Testimonial
            quote="This React lab was very helpful for understanding component-based architecture."
            name="John Doe"
            photoUrl="https://i.pravatar.cc/80?img=1"
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
