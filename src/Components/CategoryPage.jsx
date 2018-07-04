import React from 'react'
import RandomQuoteContainer from './RandomQuoteContainer'
import CategoriesContainer from './CategoriesContainer'
import PageTemplate from './PageTemplate'

export default () => (
  <PageTemplate
    title="Categories"
    subtitle="select a category to see a quote from chuck"
  >
    <RandomQuoteContainer />
    <CategoriesContainer />
  </PageTemplate>
)
