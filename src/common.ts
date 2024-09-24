export const openWindow = (link: string) => {
    return () => { window.open(`https://${link}`, '_blank'); }
}

export const convertRemToPixels = (rem: number) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}