import { useState } from "react"

export default function useAnimateLogo() {
  const [isLogoAnimation, setIsLogoAnimation] = useState(false)


  function animateLogo() {
    const allLettersLogo = document.querySelectorAll<HTMLElement>('#logo > span')
    let time = 0

    if (isLogoAnimation == false) {
      setIsLogoAnimation(true)
    } else {return}

    allLettersLogo?.forEach((element) => {
      setTimeout(() => {
        element.style.animation = 'moveLetters 1s 1 ease-out'
      }, time)

      element.style.animation = ''
      time += 300
    })
    setTimeout(() => setIsLogoAnimation(false), time + 1000)
  }

  return animateLogo
}