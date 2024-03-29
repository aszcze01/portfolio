import { proxy } from 'valtio'

export const state = proxy({
    isIntro: true,
    isEarthVisible: true,
    isLoader: true,
    isDesc: false,
    isPanelInfo: true,
    isPanelHacked: false,
    isObjectData: false,
    isBio: false
})

export default state