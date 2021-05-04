export default function logger (store) {
  return next => action => {
    /* You have to comment these or you will get error when running in real device */
    const result = next(action)
    return result
  }
}
