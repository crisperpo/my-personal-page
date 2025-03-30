import { useState, useEffect, useContext } from 'react';

import fetchHomePageData from '../../services/fetchHomePageData';
import Title from '../../components/Title/';
import Headline from '../../components/Headline/';
import Social from '../../components/Social/';
import { HeaderContainer } from './index.styled';
import { AppContext } from '../../context/AppContext';
import '../../styles/app.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const appContext = useContext(AppContext);
  
  const { setPageData } = appContext || {};

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
    <>
      <HeaderContainer>
        <Title />
        <Headline />
        <Social />
      </HeaderContainer>
    </>
  );
};

export default App;
