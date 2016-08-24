'use strict';

import React from 'react';

import md5 from 'blueimp-md5';

export default function Gravatar({ email, size, ...props }) {
  return (
      <img {...props} src={`https://www.gravatar.com/avatar/${md5(email)}?s=${size}`}/>
  )
}
Gravatar.propTypes = {
  email: React.PropTypes.string.isRequired,
  size: React.PropTypes.number
};
Gravatar.defaultProps = { size: 32 };