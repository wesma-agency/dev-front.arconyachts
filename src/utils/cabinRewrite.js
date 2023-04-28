const cabinRewrite = (data) => {
  return data.map(item => {
    if (item.filter === 'cabin') {
      return {
        ...item,
        newVal: ['cabin', item.value].join('-')
      }
    } else {
      return item
    }
  });
}
export default cabinRewrite