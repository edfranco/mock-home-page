import React from 'react';

import Carousel from '../Carousel/Carousel';

import './Index.css';
class Index extends React.Component{
    render(){
        return(
            <div className="index content">
                <Carousel />
        <div className="featured">
          <div className="lws">
            <h1>
            Learn Online With Us
            </h1>
            <p>Feed your curiosity for free—wherever you are. Discover our vast collection of experiences, browse resources for teaching and learning, and tune in to online events.</p>
            <div className="lws-pods">
              <div className="lws-pod">
                <img className="lws-pod-img" src="https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/kaleidoscope_pod_38168271791_o.jpg?itok=LDSStM2k"/>
                <div className="lws-content">
                  <h5 className="lws-header">Subscribe to our weekly newsletter</h5>
                  <p className="lws-p">Get at-home activities and learning tools delivered straight to your inbox.</p>
                </div>
              </div>
              <div className="lws-pod">
                <img className="lws-pod-img" src="https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/LearningToolboxPod_380x213.jpg?itok=0Whn0S6S"/>
                <div className="lws-content">
                  <h5 className="lws-header">Learning Toolbox</h5>
                  <p className="lws-p">Make sense of timely topics and find general science support for your virtual classroom or learning together at home.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-content">
            <div className="featured-video">
              
            </div>
          </div>
        </div>
            </div>
        );
    };
};

export default Index;
