import React, { Component } from 'react'
import { Card } from 'antd'

const gridStyle = {
  width: '10em',
  textAlign: 'center'
}

export default class Category extends Component {
  onClickHandler = () => {
    this.props.onCategorySelect(this.props.category)
  }

  render() {
    return (
      <Card.Grid style={gridStyle} onClick={this.onClickHandler}>
        {this.props.category}
      </Card.Grid>
    )
  }
}
