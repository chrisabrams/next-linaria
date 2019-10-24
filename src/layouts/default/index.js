import Header from '../../components/header'
import Navigation from '../../components/navigation'
import React from 'react'
import { Element, Main } from './styles'

export default (props) => {

  return (
    <Element>
      <Navigation />
      <Header></Header>
      <Main>
        {props.children}
      </Main>
    </Element>
  )

}
