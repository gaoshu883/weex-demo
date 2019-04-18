<template>
  <div class="wrapper">
    <input class="input" type="number" placeholder="请输入数字"/>
    <textarea
    class="textarea"
    @input="oninput"
    @change="onchange"
    @focus="onfocus"
    @blur="onblur"
    :max-length="10"></textarea>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')

  export default {
    methods: {
      oninput (event) {
        console.log('oninput:', event.value)
      },
      onchange (event) {
        console.log('onchange:', event.value)
      },
      onfocus (event) {
        console.log('onfocus:', event.value)
      },
      onblur (event) {
        console.log('onblur:', event.value)
      }
    }
  }
</script>

<style>
.input {
  width: 300px;
  height: 60px;
  font-size: 32px;
}
  .textarea {
    font-size: 32px;
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
</style>