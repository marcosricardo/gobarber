import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Text } from './styles';
import PropTypes from 'prop-types';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container { ...rest }>
      {
        loading ? (<ActivityIndicator size="small" color="#FFF"/>) : ( <Text>{ children }</Text> )
      }
    </Container>
  );
}


Button.PropTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

Button.defaultProps = {
  loading: false
};
