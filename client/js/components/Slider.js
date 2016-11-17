import React from 'react'

class Slider extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
          <div class="slds-is-relative slds-container--fluid">
              <ul>
                  <li class="slds-container--fluid sliderElem">
                      <img src="imgs/slider/realNames/2016-11-lightning-1280x248-homepage-bkgrd.png" class="slds-container--fluid backboardImg" />
                      <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                          <div class="slds-size--2-of-4">
                              <img src="imgs/slider/realNames/2016-11-350x248-lightning_astro-homepage-img.png" />
                          </div>
                          <div class="slds-size--2-of-4 slds-p-left--large">

                          </div>
                      </div>
                  </li>
              </ul>
              <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                  <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                      <ul class="slds-container--fluid">
                          <li><button class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                          <li><button class="ext-hero__tab -active"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                          <li><button class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                          <li><button class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                          <li><button class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                      </ul>
                  </aside>
              </div>
          </div>
        );
  }
}

export default Slider
