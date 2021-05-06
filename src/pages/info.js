import React from 'react'
import {Link} from "gatsby"
import Title from "../components/title"


export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="We Are Foodies" />
                <div className="row">
                    <div className="col-10 col-sm-8
                    mx-auto text-center">
                        <p className="lead 
                        text-muted mb-5  style ">
                            "Laughter is brightest where food is best."
                         <br/>One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.
                        </p>
                        <Link to="/about/">
                            <button className="btn
                             text-uppercase btn-yellow">
                                ABOUT US
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
