import { styled } from 'linaria/react'

export const Element = styled.header`
  align-items: flex-start;
  display: flex;
  flex: 1 1 100%;
  height: 100px;
  max-height: 100px;
  padding: 16px;
  z-index: 1;
`

export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex: 1;
  height: 16px;
  width: 16px;

  & svg[data-icon] {
    fill: currentColor;
    height: 100%;
    pointer-events: none;
    width: 100%;
  }
`

export const Title = styled.h2`
  display: flex;
  flex: 13;
  margin: 0 0 0 16px;
`

export const Controls = styled.div`
  margin-left: auto;
`
