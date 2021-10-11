import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import Datafetching from './services/DataFetching';
import { Layout } from 'antd';
const { Footer, Content } = Layout;

function App() {
  return (
    <>
      <Navbar />6
      <Content style={{ padding: '6rem 3rem' }}>
        <Datafetching></Datafetching>
        <ProductCard></ProductCard>
      </Content>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
