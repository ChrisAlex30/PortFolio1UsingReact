const Contact = () => {
  return (
    <section className="contact">
    <div className="contact-img">
        <img src="/src/assets/contact-img.png" alt=""/>
    </div>
    <div className="contact-desc">
        <div>
        <h2>CONTACT US</h2>
    </div>
        
        <input type="text" name="name" placeholder="Name" />
        
        <input type="email" name="email" placeholder="Email"/>
        
        <input type="phone" name="phone" placeholder="Phone" />
        
        <textarea name="detail" placeholder="Message" ></textarea>
        <div>
        <button className="btn"  href="#">Submit</button>   
    </div>
    </div>

</section>
  )
}

export default Contact