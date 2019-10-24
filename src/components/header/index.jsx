import HamburgerIcon from '../icons/bars'
import React, { Component } from 'react'
import {
  Element,
  MenuButton,
  Title,
} from './styles'

export default class Header extends Component {

  render() {

    return (
      <Element>
        <MenuButton onClick={this.onHamburgerClick}><HamburgerIcon/></MenuButton>
        <Title>Next Linaria</Title>
      </Element>
    )

  }

  onHamburgerClick = (e) => {

    console.log('clicked', e)

  }

}
