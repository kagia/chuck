import React from 'react'
import { Divider, Spin } from 'antd'
import spinStyle from './spinStyle'
import chuck from '../assets/chuck.png'

export default ({ randomQuote: { quote, isFetching } }) => (
  <div className="random-quote">
    <img
      src={chuck}
      alt="chuck norris"
      style={{ margin: 'auto', width: '150px', display: 'block' }}
    />
    <Divider>Chuck would say</Divider>
    {isFetching && <Spin style={spinStyle} />}

    {!isFetching && (
      <h2 style={{ textAlign: 'center', padding: '0 2em' }}>
        &quot;{(quote && quote.value) || 'wait for it...'}&quot;
      </h2>
    )}
  </div>
)
