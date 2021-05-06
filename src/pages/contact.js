import React from "react"
import Title from "../components/title"

const ContactPage = () => {
    return (
            <div>
            <section className="contact py-5">
            <Title title="Contact us for more details" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/f/xwkwgooz" method="POST">


                        
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"
                            name="name"
                            id="name"
                            placeholder="Enter your name..." />
                        </div>

                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control"
                            name="email"
                            id="email"
                            placeholder="your_email" />
                        </div>

                        {/* message */}
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                            name="message"
                            id="message"
                            className="form-control"
                            rows="5"
                            placeholder="your message here..." />
                        </div>

                         {/* submit */}

                         <button type="button" class="btn btn-outline-info">Submit</button>
                         {/* <button 
                         type="submit"
                         className="btn btn-yellow btn-black
                         text-capitalize mt-5">
                             submit
                         </button> */}
                    </form>
                </div>
            </div>
        </section>
            </div>
        
            
    )
}

export default ContactPage