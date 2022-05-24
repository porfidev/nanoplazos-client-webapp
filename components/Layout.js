import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #66bf3c;
`;

function Layout({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Layout.defaultProps = {
  children: <div />,
};

export default Layout;
