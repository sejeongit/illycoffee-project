import HtmlParser from 'react-html-parser'

class Ph_part extends React.Component {
    render(){
        const phTitle = this.props.ours.title;
        const phDesc = HtmlParser(this.props.ours.desc);
        const phClass = "ph_part ph_part_0"+this.props.idx; // key값은 가져오면 undefined 출력
        return (
            <div className={phClass}>
                <dl>
                <dt>{phTitle}</dt>
                <dd>{phDesc}</dd>
                </dl>
            </div>
        );
    }
}

class H2 extends React.Component {
    render(){
      return <h2 class="headline">our philosophy</h2>;
    }
}

class Ph_innerwrap extends React.Component {
    render(){
        const ours = this.props.ours;
        const columns = ours.map((column, index) => {
            return (
                <Ph_part ours={column} idx={index+1} key={index}></Ph_part>
            );
        });
        return <div class="innerwrap ph_part_innerwrap clearfix">
            <H2></H2>
            {columns}
        </div>;
    }
}

const ours = [
    {
        'title':'mission',
        'desc':'일리는 완벽한 한 잔의 커피, 즉 오감과 마음으로 모두 즐길 수 있는 한 잔의 커피를 개발하는 데 계속적으로 헌신하고 있습니다. 한 잔의 커피는 단지 음료가 아니라 마음을 따뜻하게 하는 순간이기 때문입니다.'
    },{
            'title':'vision',
            'desc':'우리의 꿈은 특별한 커피 문화를 전세계 시장에 보급하는 것입니다. 우리의 꿈은 최고급 원두로 시작하여 한잔의 커피로 여러분의 오감과 마음을 즐겁게 하는 것으로 완성됩니다.'
    },{
            'title':'values',
            'desc':'<span>Ethics</span>. 우리는 투명성, 지속 가능성 및 인력 개발에 대한 약속을 통해 시간이 지남에 따라 우수한 이해관계 가치를 공유할 수 있습니다.<br /><span>Excellence</span>. 우리는 고객의 요구와 소망을 항상 만족시키기 위해 매우 훌륭하고 아름다운 경험과 제품을 창출합니다.'
    }
];

ReactDOM.render(<Ph_innerwrap ours={ours}/>, document.querySelector('#listBox'));