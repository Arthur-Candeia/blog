export default function switchTheme(isDark: boolean) {
  if (isDark) {
    localStorage.isDark = true
    document.body.classList.remove('mode-light')
    document.body.classList.add('mode-dark')
  }
  else {
    localStorage.removeItem('isDark')
    document.body.classList.remove('mode-dark')
    document.body.classList.add('mode-light')
  }
}