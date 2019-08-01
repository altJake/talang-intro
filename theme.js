import React from 'react'

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        height: '7%',
        color: '#fff',
        marginRight: '2rem',
        marginBottom: '0,5rem',
        float: 'right',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <span
        css={{
          marginRight: '1rem',
        }}
      >
        We Are Developers 2019
      </span>
      <img
        src='images/logo.svg'
        alt='Talon.One Logo'
        css={{
          float: 'right',
          width: '120px',
        }}
      />
    </div>
  </div>
)

export default {
  Provider,
}
