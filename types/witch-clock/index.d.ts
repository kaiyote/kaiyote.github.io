declare module 'witch-clock' {
  export interface Event {
    code: string
    date: Date
    name: string
  }

  export interface Events {
    recent: Event
    soonest: Event
  }

  export interface CelestialEvents {
    lunar: Events
    solar: Events
  }

  export function events (date?: Date): CelestialEvents

  export namespace lunar {
    export const CODES: {
      first: string
      full: string
      last: string
      new: string
    }

    export const EVENTS: string[]

    export function events (date?: Date): Event[]

    export function first (date?: Date): Date

    export function full (date?: Date): Date

    export function last (date?: Date): Date

    export function recent (date?: Date): Event

    export function soonest (date?: Date): Event
  }

  export namespace solar {
    export const CODES: {
      'autumnal equinox': string
      'summer solstice': string
      'vernal equinox': string
      'winter solstice': string
    }

    export const EVENTS: string[]

    export function events (date?: Date): Event[]

    export function recent (date?: Date): Event

    export function soonest (date?: Date): Event

    export namespace equinox {
      export function autumnal (date?: Date): Date

      export function vernal (date?: Date): Date

    }

    export namespace solstice {
      export function summer (date?: Date): Date

      export function winter (date?: Date): Date
    }
  }
}
