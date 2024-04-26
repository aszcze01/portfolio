import { proxy } from 'valtio'
// import { devtools } from 'valtio/utils'

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
    isInfoPage: boolean
    isContactPage: boolean
    isBioPage: boolean
    isHomePage: boolean
    isModalOpen: boolean
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
    isInfoPage: false,
    isContactPage: false,
    isBioPage: false,
    isHomePage: true,
    isModalOpen: false
})

// const unsub = devtools(state, { name: 'state name', enabled: true })

export default state