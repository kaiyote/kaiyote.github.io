import { CelestialEvents, events } from 'witch-clock'

export function useCelestialEvents (): CelestialEvents {
  return events()
}
