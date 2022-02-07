import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimateNumber from 'react-native-animate-number';

const AnimatedNumbersSample = () => {
  const [animateToNumber, setAnimateToNumber] = React.useState(7979);

  const increase = () => {
    setAnimateToNumber(animateToNumber + 1999);
  };

  return (
    <SafeAreaView>
      <AnimateNumber value={100} countBy={10} />
      {/*<AnimateNumber*/}
      {/*  value={100}*/}
      {/*  fontStyle={{fontSize: 50, fontWeight: 'bold'}}*/}
      {/*/>*/}
    </SafeAreaView>
  );
};
export default AnimatedNumbersSample;
