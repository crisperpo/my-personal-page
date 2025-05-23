import { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import fetchHomePageData from '../../services/fetchHomePageData';
import Title from '../../components/Title/';
import Headline from '../../components/Headline/';
import Social from '../../components/Social/';
import { HeaderContainer } from './index.styled';
import { AppContext } from '../../context/AppContext';
import useDetectDarkModeAndReload from '../../hooks/useDetectDarkModeAndReload';
import '../../styles/app.css';
import theme from '../../lib/constants/theme';

const App = () => {
  const [loading, setLoading] = useState(true);
  const appContext = useContext(AppContext);
  const isDarkMode = useDetectDarkModeAndReload();
  const { setPageData } = appContext || {};  
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomePageData();
      if(setPageData) setPageData(data);
      setLoading(false);
    };
    fetchData();
  }, [setLoading, setPageData]);

  if (loading || !appContext) {
    return <div>...</div>;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <HeaderContainer>
         <Title />
        <Headline />
        <Social />
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default App;
