export const urlGenerator = (resource) => {
    const base = "https://jsonplaceholder.typicode.com/"
    return `${base}${resource}`
}