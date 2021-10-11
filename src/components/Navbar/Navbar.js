import React from 'react';
import { Menu, Typography, Layout, Input, Space, Row, Col, Select } from 'antd';
import './Navbar.css';

const { Text } = Typography;
const { Header } = Layout;
const { Search } = Input;
const { Option } = Select;
function Navbar() {
  return (
    <Header
      className='header'
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <nav className='menu'>
        <Row justify='space-between'>
          <Col className='logo' xs={20} sm={4}>
            <a href='/'>Products</a>
          </Col>
          <Col className='search' xs={2} sm={10}>
            <Search
              placeholder='Search'
              // onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col xs={2} sm={10}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Sort by'
              aria-label='sorting select option'
            >
              <Option value='1'>Apphbeically, A-Z</Option>
              <Option value='2'>Apphbeically, Z-A</Option>
              <Option value='3'>Row Price</Option>
              <Option value='4'>High Price</Option>
            </Select>
          </Col>
        </Row>
      </nav>
    </Header>
  );
}

export default Navbar;
