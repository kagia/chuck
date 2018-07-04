import React from 'react'
import { Divider, List, Avatar, Spin } from 'antd'
import spinStyle from './spinStyle'

export default ({ searchResults }) => {
  if (searchResults.isFetching) return <Spin style={spinStyle} />

  return (
    <div className="search-results">
      <Divider>Results</Divider>
      <List
        itemLayout="horizontal"
        dataSource={(searchResults && searchResults.quotes) || []}
        style={{
          padding: '0 36px',
          maxWidth: '50em',
          margin: 'auto',
          display: 'block'
        }}
        renderItem={quote => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={quote.icon_url} />}
              description={quote.value}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
