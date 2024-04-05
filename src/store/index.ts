import { proxy } from 'valtio'

interface Store {
    isIntro: boolean
    isEarthVisible: boolean
    isLoader: boolean
    isDesc: boolean
    isPanelInfo: boolean
    isPanelHacked: boolean
    isObjectData: boolean
    isBio: boolean
    isBioLinkHovered: boolean
    isWorkLinkHovered: boolean
    isContactLinkHovered: boolean
}

export const state = proxy<Store>({
    isIntro: true,
    isEarthVisible: true,
    isLoader: true,
    isDesc: false,
    isPanelInfo: true,
    isPanelHacked: false,
    isObjectData: false,
    isBio: false,
    isBioLinkHovered: false,
    isWorkLinkHovered: false,
    isContactLinkHovered: false,
})

export default state