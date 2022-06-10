import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
  return <div>DefaultLayout {children}</div>;
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
