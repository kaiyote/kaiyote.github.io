import Markdown from 'markdown-to-jsx'
import { forwardRef } from 'preact/compat'
import PropTypes from 'prop-types'
import { bio, links, name, pronouns } from '~/data'
import { MarkdownWrapper, Separator, StyledMenu } from './Menu.styles'

const Menu = forwardRef(({ isOpen, isMobile }, ref) =>
  <StyledMenu {...{ isOpen, isMobile }} ref={ref}>
    <div>{name}</div>
    <small>{pronouns}</small>
    <Separator />
    <MarkdownWrapper>
      <Markdown options={{ overrides: { a: { props: { target: '_blank', rel: 'noreferrer' } } } }}>{bio}</Markdown>
    </MarkdownWrapper>
    <Separator />
    <div>Links:</div>
    {Object.entries(links).map(([k, v]) => <a key={k} href={v} target='_blank' rel='noreferrer'>{k}</a>)}
  </StyledMenu>
)

Menu.propTypes = {
  isOpen: PropTypes.bool,
  isMobile: PropTypes.bool
}
export default Menu
