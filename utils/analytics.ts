import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-6B4YEN9B05'); // Replace UA-XXXXX-Y with your tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
