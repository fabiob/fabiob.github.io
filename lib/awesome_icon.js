'use strict';

import React from 'react';
import classNames from 'classnames';

export default function AwesomeIcon({ icon, className, ...props }) {
  let cls = ['fa', className];
  if (typeof icon === 'object' && typeof icon.forEach === 'function')
    icon.forEach(i => cls.push(`fa-${i}`));
  else
    cls.push(`fa-${icon}`);

  return <span {...props} className={classNames(cls)}/>;
}
AwesomeIcon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};