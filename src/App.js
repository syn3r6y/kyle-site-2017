import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
/*
 *  Navigation Components
 */
import Menu from './components/Menu';
import Navigation from './components/Navigation';
/*
 *  Base Screens
 */
import Home from './containers/Home';
import Work from './containers/Work';
import About from './containers/About';
import Contact from './containers/Contact';
/*
 * Work Slides
 */
import WorkText from './components/work-slides/WorkText';
import WorkMobile from './components/work-slides/WorkMobile';
import ImageYardly from './images/mobile-yardly.svg';
import ImageNL from './images/mobile-naturelynx.svg';
import LogoJS from './images/logo-js.svg';
import LogoReact from './images/logo-react.svg';
import LogoIonic from './images/logo-ionic.svg';
import LogoDribbble from './components/LogoDribbble';

class App extends PureComponent {
  state = {
    menuOpen: false,
    currentScreen: 'home',
    workSlideIndex: 0,
    workDescActive: false
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  changeScreen = value => {
    this.setState({
      currentScreen: value,
      menuOpen: false
    });
  };

  changeWorkSlide = direction => {
    if (direction === 'right') {
      if (this.state.workSlideIndex === 3) return;
      this.setState({ workSlideIndex: this.state.workSlideIndex + 1 });
    } else {
      if (this.state.workSlideIndex === 0) return;
      this.setState({ workSlideIndex: this.state.workSlideIndex - 1 });
    }
  };

  toggleWorkDesc = () => {
    this.setState({
      workDescActive: !this.state.workDescActive
    });
  };

  renderWorkSlides = () => {
    let workSlides = [];
    workSlides.push(
      <WorkText
        title="My Work"
        content={
          <p>
            Here you can find some of my most recent work. Use the arrows to
            cycle through different projects.
          </p>
        }
      />
    );
    workSlides.push(
      <WorkMobile
        title="Yardly"
        job="Mobile App Design & Development"
        image={ImageYardly}
        desc="Also contributed to single page web application, and occasional website updates and changes."
        techLogos={[LogoJS, LogoReact]}
        descActive={this.state.workDescActive}
        onMoreInfo={this.toggleWorkDesc}
      />
    );
    workSlides.push(
      <WorkMobile
        title="NatureLynx"
        job="Mobile App UX & Design"
        image={ImageNL}
        desc="Designed, built and styled elements and layouts."
        techLogos={[LogoJS, LogoIonic]}
        descActive={this.state.workDescActive}
        onMoreInfo={this.toggleWorkDesc}
      />
    );
    workSlides.push(
      <WorkText
        title="Coming Soon"
        content={
          <ComingSoonWrapper>
            <p>
              I'll be adding more projects shortly. In the meantime, feel free
              to have a look at my dribbble page for more of my work.
            </p>
            <a href="https://dribbble.com/kyle_erickson">
              <LogoDribbble />
            </a>
          </ComingSoonWrapper>
        }
      />
    );
    return workSlides;
  };

  render() {
    let currentScreen;

    switch (this.state.currentScreen) {
      case 'home':
        currentScreen = <Home menuOpen={this.state.menuOpen} />;
        break;
      case 'work':
        currentScreen = (
          <Work
            menuOpen={this.state.menuOpen}
            currentSlide={this.state.workSlideIndex}
            changeSlide={this.changeWorkSlide}
            slides={this.renderWorkSlides()}
          />
        );
        break;
      case 'about':
        currentScreen = <About menuOpen={this.state.menuOpen} />;
        break;
      case 'contact':
        currentScreen = <Contact menuOpen={this.state.menuOpen} />;
        break;
      default:
        currentScreen = <Home menuOpen={this.state.menuOpen} />;
        break;
    }

    return (
      <HomeDiv>
        <MenuWrapper
          onClick={this.toggleMenu}
          className={this.state.menuOpen ? '-open' : null}
        >
          <Menu />
        </MenuWrapper>
        {currentScreen}
        <Navigation
          isActive={this.state.menuOpen}
          itemClick={this.changeScreen}
        />
      </HomeDiv>
    );
  }
}

export default App;

const fadeOut = keyframes`
    0% {
        filter: blur(0px);
    }
    100% {
        filter: blur(20px);
    }
`;

const opacityFull = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const rotatePull = keyframes`
    0%{
        transform: rotateZ(0deg) translate3d(0, 0, 0);;
    }
    50%{
        transform: rotateZ(15deg);
    }
    100%{
        transform: rotateZ(0deg) translate3d(0, calc(50vh - 2em), 0);
    }
`;

const rotatePullDesktop = keyframes`
    0%{
        transform: rotateZ(0deg) translate3d(0, 0, 0);;
    }
    50%{
        transform: rotateZ(15deg);
    }
    100%{
        transform: rotateZ(0deg) translate3d(0, calc(50vh - 5em), 0);
    }
`;

const HomeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;

  .blurred {
    animation: ${fadeOut} 0.5s linear;
    filter: blur(20px);
  }

  .-open {
    transform: translate3d(0, calc(50vh - 2em), 0);
    animation: ${rotatePull} 1s;

    @media (min-width: 48em) {
      transform: translate3d(0, calc(50vh - 5em), 0);
      animation: ${rotatePullDesktop} 1s;
    }

    svg > g > path {
      opacity: 0;
      transition: opacity 0.5s;
    }
  }

  .-active {
    display: flex;

    > li {
      animation: ${opacityFull} 1s ease-in;
      opacity: 1;
    }
  }

  @media (min-width: 48em) {
    padding: 4em;
  }
`;

const MenuWrapper = styled.a`
  position: fixed;
  top: 2em;
  right: 2em;
  z-index: 10;
  transition: transform 1s ease-in-out;
  @media (min-width: 48em) {
    right: 4em;
    top: 4em;
  }
`;

const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    width: 4em;
    height: auto;
    margin-top: 2em;
  }
`;
