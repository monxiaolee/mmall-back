<template>
  <div>
    <h1>商品页面</h1>
    <span @click="addCategory">添加商品类别</span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  methods: {
    addCategory () {
      axios.post('/manage/caterogy/add_category.do', { categoryName: '窗帘', parentId: '0' }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
