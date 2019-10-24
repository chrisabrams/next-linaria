import React, { Component } from 'react'
import {
  Element,
  Section0
} from './styles'

export default class Navigation extends Component {

  menu() {

    return [
      {
        children: [
          {
            
          }
        ]
      }
    ]

  }

  render() {

    return (
      <Element>
        {this.renderMenu(this.menu())}
      </Element>
    )

  }

  renderMenu(menu, level = 0) {

    const Menu = []

    for(let i = 0, l = menu.length; i < l; i++) {
      const item = menu[i]
      const key = `render__menu:${level}:${i}`

      const Section = Section0
      
      Menu.push(
        <Section key={key}>
          {item.icon ? <item.icon/> : ''}
        </Section>
      )
    }

    return Menu

  }

}
