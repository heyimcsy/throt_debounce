import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  let timerId = null
  const [state, setState] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      //언마운트 시
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [])

  const throttle = (delay) => {
    if (timerId) {
      //timerId가 있으면 바로 함수 종료
      return
    }
    setState(!state)
    console.log(`API요청 실행! ${delay}ms 동안 추가요청은 안 받습니다!`)
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지남 추가요청 받습니다!`)
      timerId = null
    }, delay)
  }
  const debounce = (delay) => {
    //반복적인 이벤트 이후 , 딜레이 가 지나면 펑션
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청시간으로부터 ${delay}ms 지났으므로 API요청 실행!`)
      timerId = null
    }, delay)
  }
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>쓰로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>
      <div>
        <button
          onClick={() => {
            navigate('/company')
          }}
        >
          페이지 이동
        </button>
      </div>
    </div>
  )
}

export default Home
