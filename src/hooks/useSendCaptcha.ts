/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import { Ref } from 'vue'

export default function useSendCaptcha(
  isSend: Ref<Boolean>,
  captchaBtnText: Ref<string>,
) {
  return () => {
    isSend.value = true
    let time = 60
    const timer = setInterval(() => {
      time--
      captchaBtnText.value = `${time}s`
      if (time === 0) {
        captchaBtnText.value = '发送验证码'
        isSend.value = false
        clearInterval(timer)
      }
    }, 1000)
  }
}
