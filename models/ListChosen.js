class DanhMucChon {
  layDanhMucChon() {
    return axios({
      url: "https://60d5dbfe943aa60017768c66.mockapi.io/Clothing",
      method: "GET",
    });
  }
}
export default DanhMucChon;
