import React, {createElement } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {lifecycle, toClass} from 'recompose'

export const StyledInput = styled.input`
  padding: 5px;
  margin: 8px 3px;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #555;
  outline: none;
  font-size: 1.1em;
`

export const withFocusMount = lifecycle({
  componentDidMount() {
    console.log("In componentDidMount")
    console.log(this.ref)
    ReactDOM.findDOMNode(this.refs.focusInput).focus()
  }
})

export const withFocus = WrappedComponent => {
  const comp = toClass(WrappedComponent)
  const Component = props => {
    const p =  {...props, ref: 'focusInput'}
    console.log(p)
    return createElement(comp, p)
  }
  console.log(toClass(Component))  
  Component.displayName = `Adam`
  return Component
}

export default StyledInput;