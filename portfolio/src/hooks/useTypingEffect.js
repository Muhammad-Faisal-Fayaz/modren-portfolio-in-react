import { useEffect, useState } from 'react'

export function useTypingEffect(
  phrases,
  typingSpeed = 55,
  pauseMs = 1600,
  deletingSpeed = 35,
) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => setText((t) => t.slice(0, -1)), deletingSpeed)
    } else {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, pauseMs, deletingSpeed])

  return text
}
