


import {Component} from 'react';

class About extends Component{
    render(){
        return(
            <>
            <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to DJS Pizza Store!</h1>
        <p>Welcome to DJS Pizza Store. Here you can customize your own pizza of your choice with your favourite toppings. </p>
      </div>
    </div>
  </div>
            </>
        )
    }
}

export default About;