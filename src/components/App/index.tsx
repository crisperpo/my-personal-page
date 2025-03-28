import Title from '@/components/Title/';
import Headline from '@/components/Headline/';
import Social from '@/components/Social/';
import { HeaderContainer } from './index.styled';
import '@/styles/app.css';

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
