import { Ref, ref } from 'vue'

export default function useSendCaptcha(
  rowIsSend: Ref<Boolean> | Boolean,
  rowCaptchaBtnText: Ref<string> | string,
) {
  const isSend = ref(rowIsSend)
  const captchaBtnText = ref(rowCaptchaBtnText)
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
