const Home = () => {
  return (
    <section className="hero">
    <div className="hero-desc">
         <span>MERN || STACK</span>
         <h2>Jay Sean</h2>
         <p>
            Hi! I'm a FullStack Developer with 5 years of experience.
            I'm passionate about building web applications that are both user-friendly and scalable.                
         </p>
         <div className="hero-btn">                
            <button className="btn">Hire Me</button>
            <button className="btn">My App</button>
         </div>
    </div>
    <div className="hero-img">
            <img src="/src/assets/alex.png" alt="my image"/>
    </div>

</section>
  )
}

export default Home