import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Navbar />

      <Content>Content</Content>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
