import React from "react"

const Body = () => {
    return (
        <>

            <div className="row">

            
                 <div className="col-lg-4 col-md-6">
                <div class="card text-white bg-primary mb-3">
                <div class="card-header">Zaika Family Restaurent</div>
                <div class="card-body">
                <h4 class="card-title">9 reviews</h4>
                
                {/* <div>
                <img src="https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg" alt="HTML5 Icon" style="width:12px;height:12px;"></img>
                </div> */}
                <p class="card-text">Zaika restaurant offers good ambience in a small town like Darbhanga where one has low expectations. Food is good. Service is prompt and courteous. Try fresh fish fry . It's sumptuous.</p>
            </div>
            </div>
                </div> 

                <div className="col-lg-4 col-md-6">
                <div class="card text-white bg-secondary mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                <h4 class="card-title">Restaurant 2</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>

                <div className="col-lg-4 col-md-6">
                <div class="card text-white bg-danger mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                <h4 class="card-title">Restaurant 3</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
                </div>
            </div>
            
        </>
    )
}

export default Body