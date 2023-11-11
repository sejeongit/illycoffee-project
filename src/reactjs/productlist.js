class Dl extends React.Component {
    render(){
        const productName = this.props.productInfo1.productName;
        return (
            <dl>
                <dt>{productName}</dt>
                <dd>{this.props.productInfo1.productPrice}</dd>
            </dl>
        );
    }
}

class P_a extends React.Component {
    render() {
        const productNo = this.props.productInfo.productNo;
        const productName = this.props.productInfo.productName;
        const productClass = "product_"+productNo+"_photo photo";
        return (<a href="#" className="product">
                    <div className={productClass}>
                        <span className="blind">{productName}</span>
                    </div>
                    <Dl productInfo1={this.props.productInfo} ></Dl>
                </a>);
    }
}


class P_div extends React.Component {
    render() {
        return (
            <div className="line_focus">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        );
    }
}


class P_li extends React.Component {
    render() {
        const productInfo = this.props.productInfo;        
        return <li>
                    <P_a productInfo={productInfo}></P_a>
                    <P_div></P_div>
                </li>;
    }
}

class P_list extends React.Component {
    render(){
        const productList = this.props.productList;
        const rows = productList.map((row, index) => {
            return (
                <P_li productInfo={row} key={index}></P_li>
            );
        });
        return <>{rows}</>;
    }
}

const productList = [
    {productNo:'01',productName:'21P 아라비카 셀렉션 캡슐커피',productPrice:"17,100원"},
    {productNo:'02',productName:'일리 X7.1 캡슐커피머신 [블랙]',productPrice:"17,2000원"},
    {productNo:'03',productName:'일리 Y3.3 캡슐커피머신 [화이트]',productPrice:"17,3000원"},
    {productNo:'04',productName:'일리 X7.1 캡슐커피머신 [레드]',productPrice:"17,4000원"},
    {productNo:'05',productName:'일리 X7.1 캡슐커피머신 [화이트]',productPrice:"17,5000원"},
    {productNo:'06',productName:'일리 Y3.3 캡슐커피머신 [라이트블루]',productPrice:"17,6000원"}
];

// export default p_a;
// export default p_div;
// export default p_li;

ReactDOM.render(<P_list productList={productList}/>, document.querySelector('#productBox .product_area .product_list'));

