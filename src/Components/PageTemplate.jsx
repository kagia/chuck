import React from 'react'

const contentTemplateStyle = {
  width: '100%',
  height: '100%',
  overflow: 'auto',
  background: '#fff',
  minWidth: '350px'
}

const headingStyle = {
  padding: '36px 0 0 36px',
  textTransform: 'uppercase'
}

export default ({ children, title, subtitle }) => (
  <div className="content-template" style={contentTemplateStyle}>
    <h2 style={headingStyle}> {title} </h2>
    <div style={{ padding: '0 0 36px 36px' }}> {subtitle} </div>

    {children}
  </div>
)
