import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './btnIcon.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(style);

function BtnIcon({ children, text, label }) {
  return text ? (
    <Tippy content={text} delay={200}>
      <button className={`btnIcon ${cx('btnIcon')}`}>
        {children}
        {label && <span>{label}</span>}
      </button>
    </Tippy>
  ) : (
    <button className={`btnIcon ${cx('btnIcon')}`}>{children}</button>
  );
}

BtnIcon.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  label: PropTypes.string,
};

export default BtnIcon;
