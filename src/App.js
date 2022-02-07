/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';

import Router from './router';
import {StripeProvider} from '@stripe/stripe-react-native/src/components/StripeProvider';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StripeProvider publishableKey="pk_test_TzbzbwLDiTeaUIUrBaGAXTkJ">
        <Router />
      </StripeProvider>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
