import MobileDetect from 'mobile-detect'

export const usePhoneSized = () =>
  typeof window !== 'undefined'
    ? new MobileDetect(window.navigator.userAgent).isPhoneSized()
    : false
