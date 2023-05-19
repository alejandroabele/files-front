import React, { useState, useEffect } from 'react';
import { useApiContext } from '../../context/ApiProvider';
import MainComponent from '../../components/MainComponent'

const MainPage = () => {
  const { getFiles } = useApiContext();
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    getFiles().then(data => {
      setFileData(data);
    });
  }, []);

  return (
    <MainComponent fileData={fileData} />

  );
}

export default MainPage;
