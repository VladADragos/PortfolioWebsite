import React, { Component } from 'react';
import { Main } from './main';
import { About } from './about';
import { PortfolioHeader } from '../portfolioHeader';
// import { Portfolio } from '../Portfolio';
import { Footer } from '../layout/footer';
import { scrollToPortfolio } from '../../scripts/smoothScroll';
export class Home extends Component {
  render() {
    return (
      <div className='App'>
        <Main />
        <div className='ocean'>
          <About />
          <PortfolioHeader />
          {/* <Portfolio /> */}
          <Footer />
        </div>
      </div>
    );
  }
}
