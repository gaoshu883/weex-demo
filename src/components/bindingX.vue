<template>
    <div class="item-container">
			<scroller
			ref="container"
			:show-scrollbar="false"
			@scroll="commonScroll">
				<div style="position:relative">
					<div :style="{height:headerHeight+metaHeight.top+'px'}" ref="hold"></div><!-- 占位 -->

					<div class="topbox"></div>
					<div class="public_boxlistmm" ref="boxlist">
						<div class="pers_list">
              <div class="cell" v-for="(num, index) in lists">
                <div class="panel">
                  <text class="text">{{num}}</text>
                </div>
              </div>
						</div>

					</div>
				</div>
      </scroller>

			<!-- 头部绝对定位 -->
      <div :style="headerStyle2" ref="headerBar">
        <!-- 天气 -->
        <div ref="weather" class="public_srcl public_align public_direction">
          <text class="public_srcltopy">快快看看这里吧</text>
          <div class="public_srcltopy1"></div>
        </div>
      </div>
			<!-- 用户头像+昵称 -->
			<div
			v-if="isSupportsEB"
			class="per_top public_direction public_align"
			ref="imgTop"
			:style="{top:headerHeight+'px'}"
			@click="goPersonalInfo">
				<div class="per_topl">
					<image ref="avatar" class="per_toplimg" :src="userInfoModel.avatar" resize="cover"></image>
				</div>
				<text ref="nickname" class="per_topltext fontSele">{{userInfoModel.nickName || '请设置'}}</text>
			</div>
    </div>
</template>

<script>
	import BindingX from "weex-bindingx";
	const modal = weex.requireModule('modal');
  const dom =weex.requireModule('dom');
  let headerStyle = (isnumber = false) => {
    const isIPhoneX =  weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6' || weex.config.env.deviceModel === 'iPhone11,8' || weex.config.env.deviceModel === 'iPhone11,2' || weex.config.env.deviceModel === 'iPhone11,6' || weex.config.env.deviceModel === 'iPhone11,4');
    const isIOS = WXEnvironment.osName == 'iOS';
    let style = null;
    isnumber ? style = {
      paddingTop: 0,
      height: 100
    } : style = {
      paddingTop: 0,
      height: '100px'
    };
    if (isIOS) {
      isnumber ? style = {
        paddingTop: 40,
        height: 140
      } : style = {
        paddingTop: '40px',
        height: '140px'
      }
    }
    if (isIPhoneX) {
      isnumber ? style = {
        paddingTop: 88,
        height: 188
      } : style = {
        paddingTop: '88px',
        height: '188px'
      }
    }
    return style;
  }
  export default {
    data() {
      return {
        userInfoModel: {
          avatar: "https://placem.at/things?w=250&random=1",
          nickName: "测试名称"
        },
        headerStyle2: {
          width: "750px",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0)"
        },
				lists: [1, 2, 3, 4, 5],
				metaHeight: {            // 当前页面元素几个重要的高度元数据
					top: 180,              // 用户信息条高度
					bottom: 264            // 用户信息条下方区域高度
        },
				weatherWidth: 0,         // 天气组件的宽度
        userPanelWidth: 0,       // 用户头像和用户昵称总长
        headerHeight: headerStyle(true).height,
        paddingTop: headerStyle(true).paddingTop,
        tempWeatherWidth: 0,
				gesToken: 0,
				isSupportsEB: true       	// 是否兼容bindingX
      }
		},
		computed: {
			bgHeight () {
				let {top, bottom} = this.metaHeight;
				return top + bottom + this.headerHeight
			},
			// 滚动的临界距离(正值)
			limitDis () {
				return (this.metaHeight.top + this.headerHeight - this.paddingTop) / 2
			},
			// 滚动的临界距离2(正值)
			// 导航条背景变化的临界值
			limitDis2 () {
				let {top, bottom} = this.metaHeight;
				return top + bottom - 120
			}
		},
    methods:{
      getWeatherWidth () {
        return new Promise((resolve) => {
          if (!!this.tempWeatherWidth) {
            resolve(this.tempWeatherWidth);
          } else {
            let weather = this.$refs.weather;
            dom.getComponentRect(weather, ({result, size}) => {
              if (result) {
                this.tempWeatherWidth = Math.ceil(size.width);
                resolve(this.tempWeatherWidth);
              }
            })
          }
        })
      },
			/* ====新版===动效 start==== */
			// add at 2019-03-25  动效
			// update at 2019-04-01
			launchAnimate () {
				this.getWeatherWidth().then((width) => {
					this.weatherWidth = width;
					dom.getComponentRect(this.$refs.nickname, (nameRes) => {
						if (nameRes.result) {
							dom.getComponentRect(this.$refs.avatar, (avatarRes) => {
								if (avatarRes.result) {
									// 需要根据比例计算出真正的用户昵称长度
									let ratio = avatarRes.size.width / 120;
									this.userPanelWidth = Math.ceil(nameRes.size.width/ratio + 172); // 172--头像宽120+32+20
									console.log(`缩放比例${ratio},用户昵称区域宽度${nameRes.size.width},天气模块宽${this.weatherWidth}`)
									this.userAnimateBinding();
								}
							})
						}
					})
				})
			},
			userAnimateBinding () {
				if (!this.isSupportsEB) {
					return;
				}
				let scroller = this.$refs.container;        // scroller容器
				let imgTop = this.$refs.imgTop;             // 用户信息条
				let topbox = this.$refs.topbox;
				let nickname = this.$refs.nickname;
				let headerBar = this.$refs.headerBar;
				let {headerBg, weather, bottomLine, msgImage, headerBgMask2} = headerBar.$refs;

				// 通用表达式
				let opacityExp = `y>${this.limitDis}?(y-${this.limitDis})/(${this.limitDis2}-${this.limitDis}):0`  // 正向透明度
				let abOpacityExp = `y>${this.limitDis}?(y-${this.limitDis2})/(${this.limitDis}-${this.limitDis2}):1` // 反向透明度
				let colorExp = `y>${this.limitDis}?(y-${this.limitDis2})*255/(${this.limitDis}-${this.limitDis2}):255` // 颜色
				// 宽度
				let minWidth = this.userPanelWidth*0.5;
				let varyWidth = `${this.weatherWidth}+y*(${this.userPanelWidth*0.5-this.weatherWidth})/${this.limitDis}`
				let widthExp = `y>${this.limitDis}?${minWidth}:(y<0?${this.weatherWidth}:${varyWidth})`

				let bindingResult = BindingX.bind({
					eventType: 'scroll',
					anchor: scroller.ref,
					props: [
						{
							element: topbox.ref,
							property: "height",
							expression: `y>0?${this.bgHeight}:${this.bgHeight} - y`
						},
						{
							element:imgTop.ref,
							property:'transform.scale',
							expression:'y>140?0.5:(y<0?1:(1-y/280))',
							config: {
								transformOrigin: "left center"
							}
						},
						{
							element:imgTop.ref,
							property:'transform.translateY',
							expression:`y>${this.limitDis}?-${this.limitDis}:0-y`
						},
						// 导航条背景色
						{
							element: headerBg.ref,
							property: "background-color",
							expression: `rgba(255,255,255,${opacityExp})`
						},
						// 导航条背景
						{
							element: headerBgMask2.ref,
							property: "opacity",
							expression: abOpacityExp
						},
						// 消息中心图标
						{
							element: msgImage.ref,
							property: "opacity",
							expression: opacityExp
						},
						// 底线(貌似变化的有点僵硬)
						{
							element: bottomLine.ref,
							property: "opacity",
							expression: opacityExp
						},
						// 昵称
						{
							element: nickname.ref,
							property: "color",
							expression: `rgb(${colorExp},${colorExp},${colorExp})`
						},
						// 天气模块位移
						{
							element:weather.ref,
							property:'transform.translateY',
							expression:'y>0?(0-y):0'
						},
						// 天气模块透明度
						{
							element: weather.ref,
							property: "opacity",
							expression: `1-y/${this.limitDis}`
						},
						// 宽度
						{
							element: weather.ref,
							property: "width",
							expression: widthExp
						}
					]
				}, (e) => {
				});
				this.gesToken = bindingResult.token;
			},
			userAnimateBindingDestory(){
				if (!this.isSupportsEB) {
					return;
				}
				if (this.gesToken != 0) {
					BindingX.unbind({
						eventType: 'scroll',
						token: this.gesToken
					})
					this.gesToken = 0;
				}
			}
    },
		watch: {
			"userInfoModel.nickName" (newname, oldname) {
				console.log(`用户昵称修改啦旧名${oldname}，新名${newname}`)
				if (this.isSupportsEB) {
					let tm = setTimeout(() => {
						// 销毁动画
						this.userAnimateBindingDestory();
						console.log('动画启动');
						this.launchAnimate();
			      clearTimeout(tm);
					}, 20);
				}
			}
		},
		beforeDestroy(){
			this.userAnimateBindingDestory();
    },
    created () {
      this.userInfoModel.nickName = "我的姓名是xxx"
    }
  }
</script>
<style scoped>
	.public_align {
		align-items: center;
	}
	.public_direction {
		flex-direction: row
	}
	.item-container {
		width: 750px;
    background-color: #008cee;
	}
	.per_top {
		position: absolute;
		left: 0;
		width: 750px;
		justify-content: flex-start;
		padding-left: 32px;
		padding-top:30px;
		padding-bottom:30px;
	}
	.per_topl {
		width: 120px;
		height: 120px;
		border-bottom-right-radius: 100px;
		border-bottom-left-radius: 100px;
		border-top-right-radius: 100px;
		border-top-left-radius: 100px
	}
	.per_toplimg {
		width: 120px;
		height: 120px;
		border-bottom-right-radius: 100px;
		border-bottom-left-radius: 100px;
		border-top-right-radius: 100px;
		border-top-left-radius: 100px
	}
	.per_topltext {
		font-size: 44px;
		color: #ffffff;
		margin-left: 20px;
	}
	.pers_list {
		background-color: #ffffff;
		margin-top: 20px;
		width: 750px
	}
	.public_boxlistmm {
		background-color: #f5f5f5;
	}
	.topbox {
		height: 264px;
		justify-content: flex-end;
	}
	.topboxbg {
		position: absolute;
		top: 0;
		left: 0;
		width: 750px;
		background-color: #363483;
		overflow: hidden;
	}
	.topboxbg_inner {
		position: relative;
		background-image: linear-gradient(to left,rgba(207,64,32,0),rgba(207,64,32,1));
	}
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
  .public_srcl {
		height: 100px;
		padding-left: 32px;
	}
  .public_srcltopy {
		font-size: 40px;
		color: #9b9b9b;
    background-color: pink;
	}
  .public_srcltopy1 {
    flex: 1;
    height: 100px;
    background-color: yellow;
  }
</style>