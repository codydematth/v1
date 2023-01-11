import React from 'react';
import LoaderContainer from '../../containers/LoaderContainer';
import Welcome from './Welcome';

const Loader = () => {
  return (
    <LoaderContainer>
      <Welcome />
    </LoaderContainer>
  );
};

export default Loader;
