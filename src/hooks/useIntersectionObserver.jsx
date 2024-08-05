import { useRef, useEffect } from 'react'
// useRef로 지정한 DOM 객체가 감지 되었을 때, callback함수를 실행해 주는 Hook
const useIntersectionObserver = (callback) => {

  const target = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        callback()
      }
    }, { threshold: 1, })

    if (target?.current) {
      observer.observe(target.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [callback])

  return target

}

export default useIntersectionObserver