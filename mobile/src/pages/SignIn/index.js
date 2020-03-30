import React, { Component } from 'react';
import { Text } from 'react-native';
import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default class SignIn extends Component {
  render() {
    return (
      <Background>
         <Text>SignIn</Text>
          <Input style={{  marginTop:30 }} icon="call" placeholder="Digite o seu nome"/>
          <Button>Entrar</Button>
      </Background>
    );
  }
}
