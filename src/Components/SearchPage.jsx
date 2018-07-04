import React from 'react'
import { Input } from 'antd'

import store from '../store'
import { fetchSearchResults } from '../actions'
import SearchResultsContainer from './SearchResultsContainer'
import ContentTemplate from './PageTemplate'

function onSearchHandler(term) {
  store.dispatch(fetchSearchResults(term))
}

export default () => (
  <ContentTemplate
    title="Search"
    subtitle="enter a single term to begin your search"
  >
    <Input.Search
      style={{ maxWidth: '50%', margin: 'auto', display: 'block' }}
      placeholder="punk..."
      enterButton
      onSearch={onSearchHandler}
    />

    <SearchResultsContainer />
  </ContentTemplate>
)
