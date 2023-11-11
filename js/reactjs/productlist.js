class Dl extends React.Component {
  render() {
    const productName = this.props.productInfo1.productName;
    return /*#__PURE__*/React.createElement("dl", null, /*#__PURE__*/React.createElement("dt", null, productName), /*#__PURE__*/React.createElement("dd", null, this.props.productInfo1.productPrice));
  }
}
class P_a extends React.Component {
  render() {
    const productNo = this.props.productInfo.productNo;
    const productName = this.props.productInfo.productName;
    const productClass = "product_" + productNo + "_photo photo";
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "product"
    }, /*#__PURE__*/React.createElement("div", {
      className: productClass
    }, /*#__PURE__*/React.createElement("span", {
      className: "blind"
    }, productName)), /*#__PURE__*/React.createElement(Dl, {
      productInfo1: this.props.productInfo
    }));
  }
}
class P_div extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "line_focus"
    }, /*#__PURE__*/React.createElement("div", {
      className: "line1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "line2"
    }));
  }
}
class P_li extends React.Component {
  render() {
    const productInfo = this.props.productInfo;
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(P_a, {
      productInfo: productInfo
    }), /*#__PURE__*/React.createElement(P_div, null));
  }
}
class P_list extends React.Component {
  render() {
    const productList = this.props.productList;
    const rows = productList.map((row, index) => {
      return /*#__PURE__*/React.createElement(P_li, {
        productInfo: row,
        key: index
      });
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, rows);
  }
}
const productList = [{
  productNo: '01',
  productName: '21P 아라비카 셀렉션 캡슐커피',
  productPrice: "17,100원"
}, {
  productNo: '02',
  productName: '일리 X7.1 캡슐커피머신 [블랙]',
  productPrice: "17,2000원"
}, {
  productNo: '03',
  productName: '일리 Y3.3 캡슐커피머신 [화이트]',
  productPrice: "17,3000원"
}, {
  productNo: '04',
  productName: '일리 X7.1 캡슐커피머신 [레드]',
  productPrice: "17,4000원"
}, {
  productNo: '05',
  productName: '일리 X7.1 캡슐커피머신 [화이트]',
  productPrice: "17,5000원"
}, {
  productNo: '06',
  productName: '일리 Y3.3 캡슐커피머신 [라이트블루]',
  productPrice: "17,6000원"
}];

// export default p_a;
// export default p_div;
// export default p_li;

ReactDOM.render( /*#__PURE__*/React.createElement(P_list, {
  productList: productList
}), document.querySelector('#productBox .product_area .product_list'));