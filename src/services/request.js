import axios from 'axios'

const header = {
  header: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Cache-Control': 'no-cache'
  }
}

const tokens = []

export const submit = (
  server,
  url,
  method = undefined,
  payload = undefined,
  paramter = undefined
) => {
  const source = axios.CancelToken.source()
  payload = payload || {}
  payload.cancelToken = source.token
  tokens.push(payload.cancelToken)

  let prms = {}
  switch ((method || 'get').toLowerCase()) {
    case 'post':
      prms = axios.post(url, payload, header)
      break
    case 'put':
      prms = axios.put(url, payload, header)
      break
    case 'delete':
      prms = axios.delete(url, header)
      break
    case 'get':
    default:
      prms = axios.get(url, header)
  }
  return prms.then((res) => {
    return res.data
  })
}

export const cancelAll = () => {
  tokens.forEach((t) => {
    try {
      t.cancel('Request canceled.')
    } catch (_err) {
      // Do something
    }
  })
}
