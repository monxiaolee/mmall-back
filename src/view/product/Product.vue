<template>
  <div>
    <h1>商品管理</h1>
    <Button style="margin: 10px 0;" type="primary" @click="addProductModel = true">添加分类</Button>
    <Table border ref="selection" :columns="columns" :data="data1"></Table>

    <Modal
        v-model="addProductModel"
        title="添加商品"
        width="80%"
        @on-ok="onSubmit"
        @on-cancel="cancel">
        
        <Row>

          <Form :model="addProductFormItem" :label-width="100">
            <Col span="12">
              <FormItem label="商品名称">
                  <Input v-model="addProductFormItem.name" placeholder="商品名称"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="商品描述">
                  <Input v-model="addProductFormItem.productDesc" placeholder="商品描述"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="商品分类">
                  <Select v-model="addProductFormItem.productCategory">
                    <Option value="0">0</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                  </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="商品价格">
                  <Input v-model="addProductFormItem.productPrice" placeholder="商品价格"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="商品库存">
                  <Input v-model="addProductFormItem.productInventory" placeholder="商品库存"></Input>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="商品图片">
                <!-- <Input v-model="addProductFormItem.productPicture" placeholder="商品图片"></Input> -->
                <Upload action="http://127.0.0.1:8088/mall/manage/product/save.do">
                  <Button icon="ios-cloud-upload-outline">上传文件</Button>
                </Upload>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="商品详情">
                <!-- :id 后边跟的是个变量表达式 -->
                <simditor :id="addProductSimditor" :options="options" @change="change"></simditor>
              </FormItem>
            </Col>
          </Form>

        </Row>

    </Modal>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
let qs = require('qs')

// import $ from 'jquery'
// import from 'simple-module'
import Simditor from '@/components/simditor/simditor'
export default {
  data () {
    return {
      addProductSimditor: 'addProductSimditor',
      addProductModel: false,
      addProductFormItem: {
        name: '',
        productDesc: '',
        productCategory: '',
        productPrice: '',
        productInventory: ''
      },
      columns: [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: 'ID',
            key: 'id'
        },
        {
            title: '信息',
            key: 'info'
        },
        {
            title: '价格',
            key: 'price'
        },
        {
            title: '状态',
            key: 'status'
        },
        {
            title: '操作',
            key: 'operation'
        }
      ],
      data1: [
        {
            id: '10021',
            info: '信息内容不知道是啥',
            price: '150元',
            status: '已发货',
            operation: '删除'
        }
      ],
      options: {
        placeHolder: 'this is placeHolder',
        toolbarFloat: false,
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment',
        ],
        pasteImage:true,
        upload:{
          url : 'http://127.0.0.1:8088/mall/manage/product/save.do', //文件上传的接口地址
          params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
          fileKey: 'file', //服务器端获取文件数据的参数名
          connectionCount: 3,
          leaveConfirm: '正在上传文件'
        }
      }
    }
  },
  methods: {
    // addCategory () {
    //   axios.post('/manage/caterogy/add_category.do', qs.stringify({ categoryName: '窗帘', parentId: '0' })).then(function (response) {
    //     console.log(response)
    //   }).catch(function (error) {
    //     console.log(error)
    //   })
    // },
    addProduct () {
      console.log("添加商品~")
    },
    ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    },
    onSubmit () {
      let product = {
        name: this.addProductFormItem.name,
        productDesc: this.addProductFormItem.productDesc,
        productCategory: this.addProductFormItem.productCategory,
        productPrice: this.addProductFormItem.productPrice,
        productInventory: this.addProductFormItem.productInventory
      }
      axios.post('/manage/product/save.do', qs.stringify(product)).then((response) => {
        console.log(response)
      }).catch((error) => {
          console.log(error)
      })
    },
    change (val) {
      // 以html格式获取simditor的正文内容
      console.log(val)
    }
  },
  components: {
    Simditor
  }
}
</script>
