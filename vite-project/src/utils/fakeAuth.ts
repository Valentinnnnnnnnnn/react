export function fakeAuth(email: string, password: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (password === 'password' && email.trim() !== '') {
        resolve(true)
      } else {
        reject(false)
      }
    }, 100)
  })
}
