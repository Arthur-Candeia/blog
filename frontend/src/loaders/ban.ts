export function loaderWithBan() {
  if (localStorage.posts && document.cookie.includes('ban')) {
    return JSON.parse(localStorage.posts)
  }
}