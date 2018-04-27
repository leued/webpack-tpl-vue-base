<template>
  	<div class="hello">
    <el-row>
  		<el-select v-model="value" filterable placeholder="请选择">
  		    <el-option
  		      v-for="item in options"
  		      :key="item.value"
  		      :label="item.label"
  		      :value="item.value">
  		    </el-option>
  		</el-select>
      <el-button plain type="primary" @click="getData" v-loading.fullscreen.lock="fullscreenLoading">检索</el-button>
    </el-row>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%" align="center">
      <el-table-column
        prop="show_status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="name"
        label="订单名称">
      </el-table-column>
      <el-table-column
        prop="advertiser_name"
        label="广告主">
      </el-table-column>
      <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'test',
  data () {
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        },{
          value: '选项6',
          label: '重庆小面'
        }],
        value: '',
        tableData: [],
        fullscreenLoading: false
      }
  },
  methods: {
    getData: function(){
      var me = this;
      me.fullscreenLoading = true;
      Vue.axios.get('http://ued.beta.scloud.letv.cn:8181/fangzhou/orders/list', {
        params: { 
          orderName: me.value
        }
      },{}).then((response) => {
        me.tableData = response.data.data.list;
        me.fullscreenLoading = false;
      });
    }
  },
  created(){
    this.getData();
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
