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
  productName: '코피1',
  productPrice: "1000원"
}, {
  productNo: '02',
  productName: '코피2',
  productPrice: "2000원"
}, {
  productNo: '03',
  productName: '코피3',
  productPrice: "3000원"
}, {
  productNo: '04',
  productName: '코피4',
  productPrice: "4000원"
}, {
  productNo: '05',
  productName: '다방커피1',
  productPrice: "5000원"
}, {
  productNo: '06',
  productName: '스벅커피1',
  productPrice: "6000원"
}];

// export default p_a;
// export default p_div;
// export default p_li;

ReactDOM.render( /*#__PURE__*/React.createElement(P_list, {
  productList: productList
}), document.querySelector('#productBox .product_area .product_list'));