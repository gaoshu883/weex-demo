<template>
    <div class="item-container">
			<scroller
			ref="container"
			:show-scrollbar="false">
				<div style="position:relative">
					<div :style="{height:headerHeight+metaHeight.top+'px'}" ref="hold"></div><!-- 占位 -->

					<div class="topbox">
						<div v-if="show" class="public_align public_direction">
							<input v-model="defaultName" class="name_input" autofocus=true ref="input"></input>
							<text style="color:white;" @click="updateName">确定</text>
						</div>
					</div>
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
      <div :style="[headerStyle2, baseStyle]" ref="headerBar" >
        <div class="public_srcl public_align public_direction">
          <text ref="weather" class="public_srcltopy">············</text>
          <div class="public_srcltopy1"></div>
        </div>
      </div>
			<!-- 用户头像+昵称 -->
			<div
			v-if="isSupportsEB"
			class="per_top public_direction public_align"
			ref="imgTop"
			:style="{top:headerHeight+'px'}"
			@click="onclick">
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
          nickName: "我的姓名是xxx"
        },
        headerStyle2: {
          width: "750px",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(255, 255, 255, 0)"
        },
				lists: [1, 2, 3, 4, 5, 6, 7, 8],
				metaHeight: {            // 当前页面元素几个重要的高度元数据
					top: 180,              // 用户信息条高度
					bottom: 264            // 用户信息条下方区域高度
        },
				weatherWidth: 0,         // 天气组件的宽度
        userPanelWidth: 0,       // 用户头像和用户昵称总长
        headerHeight: headerStyle(true).height,
        paddingTop: headerStyle(true).paddingTop,
				baseStyle: headerStyle(),
				show: false,
				defaultName: '',
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
			updateName () {
				if (!this.defaultName) {
					return modal.toast({
						message: "请输入姓名"
					});
				}
				this.userInfoModel.nickName = this.defaultName;
				this.$refs.input.blur();
				this.show = false;
			},
			onclick () {
				this.show = true;
			},
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
				let weather = this.$refs.weather;

				// 宽度
				let minWidth = this.userPanelWidth*0.5;
				let varyWidth = `${this.weatherWidth}+y*(${this.userPanelWidth*0.5-this.weatherWidth})/${this.limitDis}`
				let widthExp = `y>${this.limitDis}?${minWidth}:(y<0?${this.weatherWidth}:${varyWidth})`

				let bindingResult = BindingX.bind({
					eventType: 'scroll',
					anchor: scroller.ref,
					props: [
						// 用户信息条缩放
						{
							element:imgTop.ref,
							property:'transform.scale',
							expression:{
								origin: 'y>140?0.5:(y<0?1:(1-y/280))'
							},
							config: {
								transformOrigin: "left center"
							}
						},
						// 用户信息条移动
						{
							element:imgTop.ref,
							property:'transform.translateY',
							expression:{
								origin: `y>${this.limitDis}?-${this.limitDis}:0-y`
							}
						},
						// 天气模块位移
						{
							element:weather.ref,
							property:'transform.translateY',
							expression:{
								origin: 'y>0?(0-y):0'
							}
						},
						// 天气模块透明度
						{
							element: weather.ref,
							property: "opacity",
							expression: {
								origin: `1-y/${this.limitDis}`
							}
						},
						// 宽度
						{
							element: weather.ref,
							property: "width",
							expression: {
								origin: widthExp
							}
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
			this.defaultName = "我的姓名是xxx"
		},
		mounted () {
			setTimeout(() => {
				this.launchAnimate();
			}, 20);
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
		background-color: #008cee;
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
		background-color: #008cee;
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
		justify-content: center;
		align-items: center;
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
		height: 100px;
		line-height: 100px;
		color: #ffffff;
    background-color: green;
	}
  .public_srcltopy1 {
    flex: 1;
    height: 100px;
    background-color: yellow;
  }
	.name_input {
		margin-right: 32px;
		margin-left: 32px;
		width: 400px;
		height: 60px;
		background-color: white;
	}
</style>