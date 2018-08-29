
import React from 'react'
import l from './MainLayout.less'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function MainLayout ({ children, location }) {
  const active = location.pathname.indexOf('products') !== -1 ? '2' : location.pathname.indexOf('us') !== -1 ? '3' : '1'
  console.log(active)
  return (
    <Layout >
      <Header>
        <div className={l.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[active]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><a href="#/">首页</a></Menu.Item>
          <Menu.Item key="2"><a href="#/products">作品</a></Menu.Item>
          <Menu.Item key="3"><a href="#/us">关于</a></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className={l.content}>
          {children}
        </div>
      </Content>
      <Footer>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}
export default MainLayout
