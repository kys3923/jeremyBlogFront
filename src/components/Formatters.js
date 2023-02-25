import moment from 'moment';

export const dateFormatter = (string) => {
  return moment(string).format('LLL')
}