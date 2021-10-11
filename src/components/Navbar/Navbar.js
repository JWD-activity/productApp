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
        <Row align='middle'>
          <Col className='logo' sm={2}>
            <a href='/'>Products</a>
          </Col>
          <Col sm={22}>
            <Row className='menu__input'>
              <Col className='search' sm={14}>
                <Search
                  aria-label='Search for products '
                  placeholder='Search'
                  // onSearch={onSearch}
                  enterButton
                />
              </Col>
              <Col className='filter' sm={10}>
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
          </Col>
        </Row>
      </nav>
    </Header>
  );
}

export default Navbar;
