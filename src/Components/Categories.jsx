import React from 'react'
import { Card, Spin } from 'antd'
import Category from './Category'
import spinStyle from './spinStyle'

const cardStyle={ padding: '0'}

export default ({ categories, onCategorySelect }) => {
  if (!categories) return <Spin style={spinStyle} />

  return (
    <Card bordered={false} style={cardStyle}>
      {categories &&
        categories.map(category => (
          <Category
            onCategorySelect={onCategorySelect}
            category={category}
            key={category}
          />
        ))}
    </Card>
  )
}
