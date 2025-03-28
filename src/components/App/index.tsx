import Title from '../Title/';
import Headline from '../Headline/';
import Social from '../Social/';
import { HeaderContainer } from './index.styled';
import '../../styles/app.css';

const App = () => (
  <>
    <HeaderContainer>
      <Title />
      <Headline />
      <Social />
    </HeaderContainer>
  </>
);

export default App;
