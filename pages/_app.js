import '../styles/globals.css';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.propTypes = {
//   Component: PropTypes.shape().isRequired,
//   pageProps: PropTypes.shape().isRequired,
// };

export default MyApp;
