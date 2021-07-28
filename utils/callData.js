class HienThiDataMenuTab {
  renderMenuTab(mangMenuTab) {
    let content = "";

    mangMenuTab.map((tab, index) => {
      content += `
            <li class="nav-item" role="presentation">
            <a class="nav-link" id="${tab.tabName}" data-toggle="pill" href="#idProduct" role="tab" aria-controls="pills-home" aria-selected="true" >${tab.showName}</a>
          </li>
            
            `;
    });
    document.getElementById('idMenuTab').innerHTML=content;
  }
}
export default HienThiDataMenuTab

