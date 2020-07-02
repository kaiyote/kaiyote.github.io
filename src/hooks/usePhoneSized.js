import MobileDetect from 'mobile-detect'

export const usePhoneSized = () => new MobileDetect(window?.navigator?.userAgent).isPhoneSized()
