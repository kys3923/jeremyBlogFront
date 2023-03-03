import moment from 'moment';

export const dateFormatter = (string) => {
  return moment(string).format('LLL')
}

export const headerStyleDistributor = (state) => {
  if(state) {
    return 'absolute top-0 z-90 w-full px-24 py-4 text-white'
  } else {
    return 'h-full w-48 bg-indigo-900 overflow-auto'
  }
}