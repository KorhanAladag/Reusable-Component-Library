import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/index"
import Banner from "./components/Banner/Banner.jsx"
import Card from "./components/Card/Card.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"

function App() {
  return (
    <>
    
      <Badge.Pill color="gray">Badge</Badge.Pill>
      <Badge.Pill color="red">Badge</Badge.Pill>
      <Badge.Pill color="yellow">Badge</Badge.Pill>
      <Badge.Pill color="green">Badge</Badge.Pill>
      <Badge.Pill color="blue">Badge</Badge.Pill>
      <Badge.Pill color="indigo">Badge</Badge.Pill>
      <Badge.Pill color="purple">Badge</Badge.Pill>
      <Badge.Pill color="pink">Badge</Badge.Pill>

      <br></br>
      <br></br>

      <Badge.Square color="gray">Badge</Badge.Square>
      <Badge.Square color="red">Badge</Badge.Square>
      <Badge.Square color="yellow">Badge</Badge.Square>
      <Badge.Square color="green">Badge</Badge.Square>
      <Badge.Square color="blue">Badge</Badge.Square>
      <Badge.Square color="indigo">Badge</Badge.Square>
      <Badge.Square color="purple">Badge</Badge.Square>
      <Badge.Square color="pink">Badge</Badge.Square> 
      
      <br></br>
      <br></br>
      
      <Banner
      className="banner"
      variant="success"
      title="Congratulations!"
      paragraph=" This a paragraph to check if the code works or not."
      />
      
      <Banner
      className="banner"
      variant="success"
      title="Congratulations!"
      />
      
      
      <Banner
      className="banner"
      variant="warning"
      title="Attention!"
      paragraph="This a paragraph to check if the code works or not."
      />
      
      <Banner
      className="banner"
      variant="warning"
      title="Attention!"
      />
      
      <Banner
      className="banner"
      variant="error"
      title="There is a problem with your application"
      paragraph="This a paragraph to check if the code works or not."
      />
      
      <Banner
      className="banner"
      variant="error"
      title="There is a problem with your application"
      />
      
      <Banner
      className="banner"
      variant="neutral"
      title="Update available"
      paragraph="This a paragraph to check if the code works or not."
      />
      
      <Banner
      className="banner"
      variant="neutral"
      title="Update available"
      />      
      
      <br></br>
      <br></br>
      
      <Card
      className="card"
      title="Deployment 1"
      paragraph="Tryout paragraph for Deployment 1. "
       />
       
      <Card
      className="card"
      title="Deployment2"
      paragraph="Tryout paragraph for Deployment 2."
       />
       
      <br></br>
      <br></br>
      
      <Testimonials 
      image ={false}
      text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
      workplace ="Korymba"
      > 
      Korhan Aladağ
      </Testimonials>       
     
      <Testimonials 
      image ={true}
      text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
      workplace ="Scrimba"      
      >
      Korhan Aladağ
      </Testimonials>      
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 