'use strict';

import React from 'react';

import { Button } from 'react-bootstrap';
import Icon from '../lib/awesome_icon';

export default function SocialBar({ github, bitbucket, twitter, facebook }) {
  const comps = [];
  if (github)
    comps.push(<GitHubButton key="github" block user={github}/>);
  if (bitbucket)
    comps.push(<BitBucketButton key="bitbucket" block user={bitbucket}/>);
  if (twitter)
    comps.push(<TwitterButton key="twitter" block user={twitter}/>);
  if (facebook)
    comps.push(<FacebookButton key="facebook" block user={facebook}/>);

  return (
      <div style={{ marginLeft: '1.5em' }}>
        {comps}
      </div>
  );
}
SocialBar.propTypes = {
  github: React.PropTypes.string,
  bitbucket: React.PropTypes.string,
  twitter: React.PropTypes.string,
  facebook: React.PropTypes.string
};

export function GitHubButton({ user, ...props }) {
  return <Button href={`https://github.com/${user}`} {...props}><Icon icon="github"/></Button>;
}
GitHubButton.propTypes = {
  user: React.PropTypes.string.isRequired
};

export function BitBucketButton({ user, ...props }) {
  return <Button href={`https://bitbucket.org/${user}`} {...props}><Icon icon="bitbucket"/></Button>;
}
BitBucketButton.propTypes = {
  user: React.PropTypes.string.isRequired
};

export function TwitterButton({ user, ...props }) {
  return <Button href={`https://twitter.com/${user}`} {...props}><Icon icon="twitter"/></Button>;
}
TwitterButton.propTypes = {
  user: React.PropTypes.string.isRequired
};

export function FacebookButton({ user, ...props }) {
  return <Button href={`https://www.facebook.com/${user}`} {...props}><Icon icon="facebook"/></Button>;
}
FacebookButton.propTypes = {
  user: React.PropTypes.string.isRequired
};