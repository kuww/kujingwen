import React from 'react';

class Cc extends React.Component {
    render() {
        return ( 
        	<div className="tit">
					<div className="tit_top">
						<a href="#"><img src="../img/no_login.jpg" /></a>
						<p className="top_one">Hi,欢迎来到京东!</p>
						<p className="top_two"><span>登录</span><span>注册</span></p>
					</div>
					<div className="tit_two">
						<a href="#">新人福利</a>
						<a href="#">PLUS会员</a>
					</div>
					<div className="tit_three">
						<div className="top_news">
							<div className="news_one">
								<a href="#">促销</a>
								<a href="#">公告</a>
								<a href='#'>更多</a>
							</div>
							<div className="news_two">
								<ul>
									<li><a href="#">家电巅峰品牌盛典</a></li>
									<li><a href="#">京东秋季拍卖会低至1元起</a></li>
									<li><a href="#">租房租车享信用免押金</a></li>
									<li><a href="#">五星双人自助低至299元</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="tit_four">
						<ul>
							<li>
								<a href="#"><span>惠</span><i className="huifei"></i><span>话费</span></a>
							</li>
							<li><a href="#"><i className="jipiao"></i><span>机票</span></a></li>
							<li><a href="#"><i className="jiudian"></i><span>酒店</span></a></li>
							<li><a href="#"><i className="youxi"></i><span>游戏</span></a></li>
							<li><a href="#"><i className="qiyegou"></i><span>企业购</span></a></li>
							<li><a href="#"><i className="jiayouka"></i><span>加油卡</span></a></li>
							<li>
								<a href="#"><span>减</span><i className="dianyingpiao"></i><span>电影票</span></a>
							</li>
							<li><a href="#"><i className="jhuochepiao"></i><span>火车票</span></a></li>
							<li><a href="#"><i className="zhongchou"></i><span>众筹</span></a></li>
							<li><a href="#"><i className="licai"></i><span>理财</span></a></li>
							<li><a href="#"><i className="lipinka"></i><span>礼品卡</span></a></li>
							<li><a href="#"><i className="baitiao"></i><span>白条</span></a></li>
						</ul>
					</div>
				</div>
        )
    }
}


export default Cc;