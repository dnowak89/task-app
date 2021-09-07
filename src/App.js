import './App.scss';
import { SearchHistory } from './components/SearchHistory';
import { UserDetails } from './components/UserDetails';
import { SearchBox } from './components/SearchBox';
import { Wrapper } from './components/Wrapper';

const App = () => {
  return (
      <Wrapper wrapperClass="main-container">
          <SearchHistory />
          <Wrapper wrapperClass="details-container">
              <UserDetails />
              <SearchBox />
          </Wrapper>
      </Wrapper>
  );
}

export default App;
