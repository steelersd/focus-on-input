import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Input, {withFocus} from './Input/Input'
//import Input2, {withFocus, withFocusMount} from './Input/Input2'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

// const FocusInput = withFocusMount(withFocus(Input2))
const FocusInput =withFocus(Input)

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>The first input is a FocusInput </h2>

    <div> First Name: <FocusInput id="first" /></div>
    <div> Last Name: <Input id="second" /></div>

  </div>
);

render(<App />, document.getElementById('root'));

