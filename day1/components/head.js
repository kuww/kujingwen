import React from 'react';

class Head extends React.Component{
	render(){
		return(
			<header>
				<div className="z-neirong">
					<div className="z-top">
						<div className="z-cap">
							<span className="iconfont icon-weizhi"></span>
							<span>北京</span>
							<span>您好,请登录<time style={{color:'red'}}>免费注册</time></span>
						</div>
						<div className="lis">
							<ul>
								<li><span>|</span><a href="">我的订单</a><span>|</span></li>
								<li><a href="">我的京东</a><span>|</span></li>
								<li><a href="">京东会员</a><span>|</span></li>
								<li><a href="">企业采购</a><span>|</span></li>
								<li><a href="">客户服务</a><span>|</span></li>
								<li><a href="">网站导航</a><span>|</span></li>
								<li><a href="">手机京东</a></li>
							</ul>
						</div>
					</div>
					<div className="z-cont">
					    <div className="put">
							<input type="text"/>
							<div className="zxj iconfont icon-zhaoxiangji1"></div>
							<button><p className="iconfont icon-search2"></p></button>
							<div className="z-gw">
								<p style={{color:"red"}}><span className="iconfont icon-gouwuche" >　</span><span>加入购物车</span></p>
							</div>
							<div className="z-img">
								<img src="//img13.360buyimg.com/da/jfs/t8134/96/275929731/3270/12ae247a/59a51cafN0fec6121.png"/>
							</div>
						</div>
						<div className="liss">
							<ul >
								<li><a href="" style={{color:"red"}}>春节抢票</a></li>
								<li><a href="">智能数码</a></li>
								<li><a href="">农资绿植</a></li>
								<li><a href="">施华洛</a></li>
								<li><a href="">巅峰盛典</a></li>
								<li><a href="">珍珠胸针</a></li>
								<li><a href="">洗面奶</a></li>
								<li><a href="">圣诞礼物</a></li>
								<li><a href="">鱼竿</a></li>
							</ul>
						</div>
					</div>
					<div className="z-btm">
						<ul className='z-btm-lis'>
							<li><a href="">秒杀</a></li>
							<li><a href="">优惠券</a></li>
							<li><a href="">闪购</a></li>
							<li><a href="">拍卖</a></li>
							<li><a href="">京东服饰</a></li>
							<li><a href="">京东超市</a></li>
							<li><a href="">生鲜</a></li>
							<li><a href="">全球购</a></li>
							<li><a href="">京东金融</a></li>
						</ul>
						<div className="shihua">
							<img src="//img30.360buyimg.com/da/jfs/t12544/113/1630946209/4539/f781240/5a24c792N563594af.png"/>
						</div>
					</div>
					<div className="logo">
						<img src = "//misc.360buyimg.com/mtd/pc/index/home/images/logo.v3.jpg"/>
					</div>
				</div>
			</header>
		)
	}
}
export default Head;