import * as services from './services'

export { App } from './app'

const mapKeysToValueArrays = 
    (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapKeysToValueArrays(services)
]