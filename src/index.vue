<template>
<div>
  <div>
    <div style="margin-top:20px;margin-bottom:20px">
      <text @click="testScroller" style="text-align:center">scroller测试</text>
    </div>
    <div style="margin-top:20px;margin-bottom:20px">
      <text @click="testTextArea" style="text-align:center">textarea测试</text>
    </div>
    <div style="margin-top:20px;margin-bottom:20px">
      <text @click="testBindingX" style="text-align:center">bindingX测试</text>
    </div>
  </div>
  <text class="text">当前weex sdk的版本：{{object.weexVersion}}</text>
  <scroller>
    <text>没有点击事件：</text>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="(img, index) in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
    <!-- <div class="slider" style="position:absolute;top:0;left:0;" @click="onclick"></div> -->
    <text>有点击事件：</text>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="(img, index) in imageList" @click="onclick(index)">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
  </scroller>

</div>
</template>

<style scoped>
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>

<script>
  const modal = weex.requireModule("modal");

  const getUrl = function (bundleUrl, filePath) {
    var nativeBase;
    console.log(bundleUrl)
    nativeBase = bundleUrl.split('dist')[0] + 'dist/'

    if (WXEnvironment.platform == 'Web') {
      let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
      return 'http:' + matches[0] + filePath.replace('.js', '.html')
    }

    return nativeBase + filePath
  }
    /**
   * 页面跳转助手
   * @param {String} param  文件名
   */
  const goPage = (param) => {
    const navigator = weex.requireModule('navigator')
    let path = `components/${param}.js`
    //点击事件处理，页面跳转并传参：传递参数page
    var url = getUrl(weex.config.bundleUrl, path)
    navigator.push({
      url: url
    })
  }

  export default {
    data () {
      return {
        object: WXEnvironment,
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'}
        ],
        onclick (index) {
          modal.toast({
            message: `当前是第${index+1}张图片`
          })
        },
        testScroller () {
          goPage("scroller");
        },
        testTextArea () {
          goPage("textarea");
        },
        testBindingX () {
          goPage("bindingX");
        }
      }
    }
  }
</script>