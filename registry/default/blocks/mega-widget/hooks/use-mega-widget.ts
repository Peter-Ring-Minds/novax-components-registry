import * as React from "react"

export function useMegaWidget() {
  const [count, setCount] = React.useState(0)

  const increment = React.useCallback(() => setCount((c) => c + 1), [])
  const reset = React.useCallback(() => setCount(0), [])

  return { count, increment, reset }
}
