export const FirstStyleDistributor = (state) => {
  if(state === '/' || state === '/login') {
    return 'mx-auto'
  } else {
    return ''
  }
}

export const SecondStyleDistributor = (state) => {
  if(state === '/' || state === '/login') {
    return `relative h-screen isolate overflow-hidden bg-gray-900 px-6 shadow-2xl flex flex-col items-center flex-nowrap`
  } else {
    return 'h-screen isolate overflow-auto bg-gray-900 shadow-2xl flex flex-row flex-nowrap'
  }

}
