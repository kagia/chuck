import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

// to avoid breaking componentShouldUpdate we avoid partially applied callbacks.
// this component allows us to bind the onclick callback with a specific page.
// more on this technique: https://medium.com/@roman01la/avoid-partial-application-in-react-components-3c9e36d7f735
export default class PageMenuItem extends Component {
  clickHandler = () => {
    this.props.onPageSelect(this.props.page)
  }

  render() {
    // here we pass through all parent props to the child.

    // Not all 'antd' components are compatible with HOC.
    // more on this issue: https://github.com/ant-design/ant-design/issues/4853
    // we make sure we exlude this component's props before passing
    // the rest along.

    // eslint-disable-next-line no-unused-vars
    const { onPageSelect, iconType, title, ...parentProps } = this.props
    return (
      <Menu.Item {...parentProps} onClick={this.clickHandler}>
        <Icon type={iconType} />
        <span className="nav-text">{title}</span>
      </Menu.Item>
    )
  }
}
