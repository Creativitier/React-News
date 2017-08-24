export function getItem(key) {
    return JSON.parse(JSON.stringify(window.localStorage.getItem(key)))
}

export function setItem(key, value) {
    return window.localStorage.setItem(key, value)
}

