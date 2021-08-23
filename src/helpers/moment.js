import moment from 'moment'
const formatdate = {
  methods: {
    setFormatDate(data) {
      return moment(data)
        .startOf('hour')
        .fromNow()
    },
  },
}
export default formatdate
