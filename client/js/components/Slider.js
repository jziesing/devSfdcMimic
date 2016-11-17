import React from 'react'

class Slider extends React.Component {

    constructor() {
        super();
        this.state = {
          activeBtn: 'lightningSliderBtn',
        }
    }

    getMarkup() {
      switch(this.state.activeBtn) {
          case 'lightningSliderBtn':
              return (
                <div><ul><li id="lightningSliderPage" class="slds-container--fluid sliderElem">
                    <img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-11-lightning-1280x248-homepage-bkgrd.png" class="slds-container--fluid backboardImg" />
                    <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                        <div class="slds-size--2-of-4">
                            <img src="http://dfc-resources2-staging.s3.amazonaws.com/resources2/images/2016-11-350x248-lightning_astro-homepage-img.png" />
                        </div>
                        <div class="slds-size--2-of-4 slds-p-left--large"></div>
                    </div>
                </li></ul>
                <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                    <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                        <ul class="slds-container--fluid">
                            <li><button id="lightningSliderBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab activeSliderBtn"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                            <li><button id="buldFasterBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                            <li><button id="smarterAppsBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                            <li><button id="deamHouseBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                            <li><button id="getStartedBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab "><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                        </ul>
                    </aside>
                </div></div>
              );
              break;
          case 'buldFasterBtn':
              return (
                <div><ul><li id="buldFasterPage" class="slds-container--fluid sliderElem">
                    <img src="https://dfc-resources2-production.s3.amazonaws.com/resources2/images/homepage/2016-010-1280x248-lightning_winter17-homepage-bkgrd.png" class="slds-container--fluid backboardImg" />
                    <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                        <div class="slds-size--2-of-4">
                            <img src="https://dfc-resources2-production.s3.amazonaws.com/resources2/images/homepage/2016-10-550x248-lightnign_winter17-homepage-img.png" />
                        </div>
                        <div class="slds-size--2-of-4 slds-p-left--large"></div>
                    </div>
                </li></ul>
                <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                    <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                        <ul class="slds-container--fluid">
                            <li><button id="lightningSliderBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                            <li><button id="buldFasterBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab activeSliderBtn"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                            <li><button id="smarterAppsBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                            <li><button id="deamHouseBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                            <li><button id="getStartedBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab "><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                        </ul>
                    </aside>
                </div></div>
              );
              break;
          case 'smarterAppsBtn':
              return (
                <div><ul><li id="smarterAppsPage" class="slds-container--fluid sliderElem">
                    <img src="http://dfc-resources2-staging.s3.amazonaws.com/resources2/images/2016-11-1280x248-homepage-bkgrd.png" class="slds-container--fluid backboardImg" />
                    <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                        <div class="slds-size--2-of-4">
                            <img src="http://dfc-resources2-staging.s3.amazonaws.com/resources2/images/2016-11-350x248-einstein-homepage-img.png" />
                        </div>
                        <div class="slds-size--2-of-4 slds-p-left--large"></div>
                    </div>
                </li></ul>
                <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                    <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                        <ul class="slds-container--fluid">
                            <li><button id="lightningSliderBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                            <li><button id="buldFasterBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                            <li><button id="smarterAppsBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab activeSliderBtn"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                            <li><button id="deamHouseBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                            <li><button id="getStartedBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab "><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                        </ul>
                    </aside>
                </div></div>
              );
              break;
          case 'deamHouseBtn':
              return (
                <div><ul><li id="smarterAppsPage" class="slds-container--fluid sliderElem">
                    <img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-1280x248-dreamhouse-homepage-bkgrd.png" class="slds-container--fluid backboardImg" />
                    <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                        <div class="slds-size--2-of-4">
                            <img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-370x166-dreamhouse-homepage-img.png" />
                        </div>
                        <div class="slds-size--2-of-4 slds-p-left--large"></div>
                    </div>
                </li></ul>
                <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                    <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                        <ul class="slds-container--fluid">
                            <li><button id="lightningSliderBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                            <li><button id="buldFasterBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                            <li><button id="smarterAppsBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                            <li><button id="deamHouseBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab activeSliderBtn"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                            <li><button id="getStartedBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab "><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                        </ul>
                    </aside>
                </div></div>
              );
              break;
          case 'getStartedBtn':
              return (
                <div><ul><li id="smarterAppsPage" class="slds-container--fluid sliderElem">
                    <img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-bg.png" class="slds-container--fluid backboardImg" />
                    <div class="slds-grid slds-is-relative slds-container--x-large slds-container--center slds-grid--vertical-align-center slds-p-horizontal--medium" >
                        <div class="slds-size--2-of-4">
                            <img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-img.png" />
                        </div>
                        <div class="slds-size--2-of-4 slds-p-left--large"></div>
                    </div>
                </li></ul>
                <div class="slds-is-relative slds-container--x-large slds-container--center slds-p-horizontal--medium">
                    <aside class="ext-hero__navbar slds-grid slds-grid--vertical-align-center slds-float--right sliderCntrl" >
                        <ul class="slds-container--fluid">
                            <li><button id="lightningSliderBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide1-icon.png" /></span><span class="ext-hero__tab-text">Lightning Dev Center</span></button></li>
                            <li><button id="buldFasterBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="http://res.cloudinary.com/hy4kyit2a/image/upload/2016-10-31x29-lightning_mac-homepage-icon.png" /></span><span class="ext-hero__tab-text">Build Apps Faster</span></button></li>
                            <li><button id="smarterAppsBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide3-icon.png" /></span><span class="ext-hero__tab-text">Build Smarter Apps</span></button></li>
                            <li><button id="deamHouseBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/2016-09-31x29-dreamhouse-homepage-icon.png" /></span><span class="ext-hero__tab-text">DreamHouse App</span></button></li>
                            <li><button id="getStartedBtn" onClick={this.handleClick.bind(this)} class="ext-hero__tab activeSliderBtn"><span class="ext-hero__tab-icon"><img src="https://developer.salesforce.com/resources2/images/homepage/home-slide5-icon.png" /></span><span class="ext-hero__tab-text"> Get Started</span></button></li>
                        </ul>
                    </aside>
                </div></div>
              );
              break;
      }

    }

    handleClick(e) {
        console.log(e.currentTarget);
        this.setState({activeBtn: e.currentTarget.id});
    }

    render() {

      let markup = this.getMarkup();

        return (
          <div class="slds-is-relative slds-container--fluid">
            {markup}


          </div>
        );
  }
}

export default Slider
