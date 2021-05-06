import React from "react"

const Footer = () => {
    return (
        <footer className="footer
        py-3 ">
             <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


<div class ="social">
    <section class="container text-center">
        <ul>
            <li>
            <a href="#"><img src="https://img.icons8.com/fluent/50/000000/facebook-new.png"/></a>
            </li>

            <li>
            <a href="#"><img src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png"/></a>
            </li>

            <li>
            <a href="#"><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></a>
            </li>
        </ul>
    
    </section>
</div>

      <div className="container">
                <div className="row">
                    <div className="col-10
                    mx-auto
                     col-md-6 
                     text-yellow 
                     text-center
                      text-capitalize">
                          <h6>WoW Food | All rights reserved &copy; 
                              {new Date().getFullYear().toString()}
                          </h6>

                    </div>
                </div>
            </div>
        </footer>
        )
}

export default Footer