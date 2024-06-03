import React from 'react';

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__content">
        <div className="testimonial__text">
          <p>
            Cost efficiency and the ability for the team to basically respond to us on a daily, responses pretty quick. They were always available. And so those were really the things that really pushed me towards GrowExx. So dealt with some other organizations and some individuals who just didn't work out, and that's how it works out in development. But when you find a good firm, you would like to keep it. And so that's why we ended up going with GrowExx.
          </p>
          <div className="testimonial__author">
            <h3>Bryan Hobbs</h3>
            <span>CEO, Pruuvn</span>
          </div>
        </div>
        <div className="testimonial__image">
          <img src="https://www.growexx.com/images/testimonial-image.jpg" alt="Testimonial Image" />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Testimonial />
    </div>
  );
}

export default App;