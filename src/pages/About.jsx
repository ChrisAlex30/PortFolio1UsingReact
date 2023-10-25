const About = () => {
  return (
    <section className="about-desc">
    <div className="card">
        <div className="card-img">
            <img src="/src/assets/card-img-1.png"/>
        </div>
        <div className="card-content">
            <h2>React JS</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est earum suscipit, voluptatum autem soluta repellendus
                 similique ducimus accusamus. Ad accusamus facilis autem minus deleniti architecto ex debitis quae saepe aut.</p>
             <button className="btn"  href="#">Read More</button>   
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="/src/assets/card-img-2.png"/>
        </div>
        <div className="card-content">
            <h2>Node JS</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est earum suscipit, voluptatum autem soluta repellendus
                 similique ducimus accusamus. Ad accusamus facilis autem minus deleniti architecto ex debitis quae saepe aut.</p>
                 <button className="btn"  href="#">Read More</button>   
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="/src/assets/card-img-3.png"/>
        </div>
        <div className="card-content">
            <h2>Mongo DB</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est earum suscipit, voluptatum autem soluta repellendus
                 similique ducimus accusamus. Ad accusamus facilis autem minus deleniti architecto ex debitis quae saepe aut.</p>
                 <button className="btn"  href="#">Read More</button>   
        </div>
    </div>
</section>
  )
}

export default About