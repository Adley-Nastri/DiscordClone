import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ContentContainer from './components/ContentContainer'
import ChannelBar from './components/ChannelBar';
import MemberBar from './components/MembersBar';

function App() {
  
  
  return (
    <div className="flex">
      
      <SideBar />
      <ChannelBar/>
      <ContentContainer />
      <MemberBar/>
    </div>
  );
}

export default App;
