import { ElMessage } from 'element-plus'

export default function handleError(err: Error | string): void {
  err instanceof Error
    ? ElMessage({ type: 'error', message: err.message, center: true })
    : ElMessage({ type: 'error', message: err, center: true })
}
