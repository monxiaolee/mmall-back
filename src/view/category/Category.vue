<template>
<div>
    <h1>品类管理</h1>
    <Button style="margin: 10px 0;" type="primary" @click="addCategory">添加分类</Button>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <Button @click="handleSelectAll(true)">全选</Button>
    <Button @click="handleSelectAll(false)">取消全选</Button>
</div>
</template>
<script>
import axios from 'axios'
let qs = require('qs')
export default {
  name: 'Category',
  data () {
      return {
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '品类ID',
                    key: 'categoryId'
                },
                {
                    title: '品类名称',
                    key: 'categoryName'
                },
                {
                    title: '操作',
                    key: 'operation'
                }
            ],
            data1: []
            // data1: [
            //     {
            //         categoryId: '10021',
            //         categoryName: '测试品类',
            //         operation: '删除'
            //     }
            // ],
            
      }
  },
  methods: {
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
      },
      getCategoryList () {
          axios.get('/manage/caterogy/get_category.do').then((response) => {
            let tempData = []
            let tempObj = {}
            tempData = response.data.data
            tempData.forEach((item) => {
                // console.log(item)
                tempObj.categoryId = item.id
                tempObj.categoryName = item.name
                tempObj.operation = '删除'
                
                this.data1.push(tempObj)
            })
            // this.data1.push(tempObj)
            console.log(this.data1)
            
          }).catch(function(error) {
            console.log(error)
          })
      },
      addCategory () {
          axios.post('/manage/caterogy/add_category.do', qs.stringify({ categoryName: '绿植', parentId: '0' })).then((response) => {
            console.log(response)
          }).catch((error) => {
              console.log(error)
          })
        //   添加分类
      }
  },
  mounted () {
      this.getCategoryList()
  }
}
</script>

