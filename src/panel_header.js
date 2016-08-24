'use strict';

import React from 'react';

import Gravatar from '../lib/gravatar';

export default function PanelHeader() {
  return (
      <h4>
        <Gravatar style={{ float: 'right', marginTop: '-.4em' }} email="fabio@elementarsistemas.com.br" size={32}/>
        Fábio Batista
      </h4>
  )
}