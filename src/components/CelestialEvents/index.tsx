import format from 'date-fns/format'
import { h } from 'preact'
import { useCelestialEvents } from '../../hooks'
import { StyledEvents } from './CelestialEvents.styles'

function nameToLabel (name: string): string {
  switch (name) {
    case 'new': return 'New Moon'
    case 'first': return 'First Quarter'
    case 'full': return 'Full Moon'
    case 'last': return 'Last Quarter'
    case 'vernal equinox': return 'Vernal Equinox'
    case 'summer solstice': return 'Summer Solstice'
    case 'autumnal equinox': return 'Autumnal Equinox'
    case 'winter solstice': return 'Winter Solstice'
    default: return ''
  }
}

export default function CelestialEvents (): any {
  const { lunar, solar } = useCelestialEvents()

  return (
    <StyledEvents>
      {nameToLabel(lunar.soonest.name)}<br />
      {format(lunar.soonest.date, 'MM/dd/yyyy HH:mm:ss')}<br />
      <br />
      {nameToLabel(solar.soonest.name)}<br />
      {format(solar.soonest.date, 'MM/dd/yyyy HH:mm:ss')}<br />
    </StyledEvents>
  )
}
