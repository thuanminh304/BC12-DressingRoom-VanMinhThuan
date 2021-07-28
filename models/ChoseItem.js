
class DanhMucSP {
  layDataSp (){
      return axios({
          url: 'https://60d5dbfe943aa60017768c66.mockapi.io/clothingRetails',
          method: 'GET',
      })
  }
  layDataMoiSp (id){
      return axios({
          url: `https://60d5dbfe943aa60017768c66.mockapi.io/clothingRetails/${id}`,
          method: 'GET',
      })
  }
}
export default DanhMucSP