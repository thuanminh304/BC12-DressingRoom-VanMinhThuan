import DanhMucChon from "../models/ListChosen.js";
import DanhMucSP from "../models/ChoseItem.js";
import HienThiDataMenuTab from "../utils/callData.js";

const getEle = (id) => document.getElementById(id);

const danhMucChon = new DanhMucChon();
const danhMucSp = new DanhMucSP();
const hienThiDataMenuTab = new HienThiDataMenuTab();
// tạo localStorage
function setLocalStorage(dsqa) {
  localStorage.setItem("DSQA", JSON.stringify(dsqa));
}

//
function getLocalStorage() {
  if (localStorage.getItem("DSQA")) {
    return JSON.parse(localStorage.getItem("DSQA"));
  }
}

//gọi dữ liệu sp từ api về
const layDataSp = () => {
  danhMucSp
    .layDataSp()
    .then((result) => {
      setLocalStorage(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
layDataSp();
//mang product
let mangProduct = getLocalStorage();
//Hàm filter để lọc mảng sản phẩm
const Filter = (mangProduct, type) => {
  return mangProduct.filter((clothingRetails) => {
    return clothingRetails.type === type;
  });
};
//Hàm render sản phẩm đã lọc
const renderFilter = (arrProduct, type) => {
  let arrFilter = Filter(arrProduct, type);
  let content = "";
  // getEle("tabProduct").innerHTML = "";
  arrFilter.map((clothingRetails, index) => {
    content += `

            <div class="col-3 float-left">
                <img class="img-fluid" src="${clothingRetails.imgSrc_jpg}">
                <h4>${clothingRetails.name}</h4>
                <button class="btn btn-success" id="${clothingRetails.type}_${index}"  style="width:100%"  onclick="clickThuDo('${clothingRetails.id}')">Thử đồ</button>
            </div>
    
            `;
  });

  getEle("idProduct").innerHTML = content;
};

//lấy ds menutab hiện thị ra bảng từ mockapi

const goiDaTaMenuTab = () => {
  danhMucChon
    .layDanhMucChon()
    .then((result) => {
      hienThiDataMenuTab.renderMenuTab(result.data);
      console.log(result.data);
      getEle("tabTopClothes").addEventListener("click", () =>
        renderFilter(mangProduct, "topclothes")
      );
      getEle("tabBotClothes").addEventListener("click", () =>
        renderFilter(mangProduct, "botclothes")
      );
      getEle("tabShoes").addEventListener("click", () =>
        renderFilter(mangProduct, "shoes")
      );
      getEle("tabHandBags").addEventListener("click", () =>
        renderFilter(mangProduct, "handbags")
      );
      getEle("tabNecklaces").addEventListener("click", () =>
        renderFilter(mangProduct, "necklaces")
      );
      getEle("tabHairStyle").addEventListener("click", () =>
        renderFilter(mangProduct, "hairstyle")
      );
      getEle("tabBackground").addEventListener("click", () =>
        renderFilter(mangProduct, "background")
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
goiDaTaMenuTab();

//Tạo hàm click để Thử đồ
const clickThuDo = (id) => {
  danhMucSp
    .layDataMoiSp(id)
    .then((result) => {
      let productItem = result.data;
      switch (productItem.type) {
        case "topclothes":
          document.querySelector(
            ".bikinitop"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "botclothes":
          document.querySelector(
            ".bikinibottom"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "shoes":
          document.querySelector(
            ".feet"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "handbags":
          document.querySelector(
            ".handbag"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "necklaces":
          document.querySelector(
            ".necklace"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "hairstyle":
          document.querySelector(
            ".hairstyle"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "background":
          document.querySelector(
            ".background"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//Đưa hàm clickThuDo vào window
window.clickThuDo = clickThuDo;
