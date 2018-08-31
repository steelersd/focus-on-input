import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'


export const StyledInput = styled.input`
  padding: 5px;
  margin: 8px 3px;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #555;
  outline: none;
  font-size: 1.1em;
`

// HOC
export function withFocus (WrappedComponent) {
  return class extends React.Component {
    
    componentDidMount() {
      ReactDOM.findDOMNode(this.refs.focusInput).focus()
    }

    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent ref="focusInput" {...this.props} />;
    }
  }
}

export default StyledInput;