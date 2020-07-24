import MobileDetect from 'mobile-detect'

export function usePhoneSized (): boolean {
  return typeof window !== 'undefined'
    ? new MobileDetect(window.navigator.userAgent).isPhoneSized()
    : false
}
