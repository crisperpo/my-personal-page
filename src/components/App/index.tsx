import Title from '../Title/';
import Headline from '../Headline/';
import Social from '../Social/';
import '../../styles/app.css';
import { HeaderContainer } from './index.styled';

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
