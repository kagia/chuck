import React from 'react'
import { Layout, Menu } from 'antd'
import CategoryPage from './CategoryPage'
import SearchPage from './SearchPage'
import PageMenuItem from './PageMenuItem'

const { Sider, Content } = Layout

const layoutStyle = {
  width: '100%',
  height: '100%'
}

export default ({ page, onPageSelect }) => (
  <Layout style={layoutStyle}>
    <Sider breakpoint="lg" collapsedWidth="0" theme="light">
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[page]}
        style={{ paddingTop: '3em' }}
      >
        <PageMenuItem
          key="categories"
          page="categories"
          iconType="appstore"
          title="categories"
          onPageSelect={onPageSelect}
        />
        <PageMenuItem
          key="search"
          page="search"
          iconType="search"
          title="search"
          onPageSelect={onPageSelect}
        />
      </Menu>
    </Sider>
    <Layout style={layoutStyle}>
      <Content style={{ padding: '24px 16px 0', ...layoutStyle }}>
        {page === 'categories' && <CategoryPage />}
        {page === 'search' && <SearchPage />}
      </Content>
    </Layout>
  </Layout>
)
