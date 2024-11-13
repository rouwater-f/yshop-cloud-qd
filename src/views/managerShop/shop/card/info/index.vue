<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- 搜索 -->
        <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />
        <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
          <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-date-picker
          v-model="query.createTime"
          :default-time="['00:00:00','23:59:59']"
          type="daterange"
          range-separator=":"
          size="small"
          class="date-item"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="createTimeStart"
          end-placeholder="createTimeEnd"
        />
        <el-date-picker
          v-model="query.expiryDate"
          :default-time="['00:00:00','23:59:59']"
          type="daterange"
          range-separator=":"
          size="small"
          class="date-item"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="expiryDateStart"
          end-placeholder="expiryDateEnd"
        />
        <rrOperation :crud="crud" />
      </div>
      <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
      <crudOperation :permission="permission" />
      <!--表单组件-->
      <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="类型名称" prop="cardName">
            <div class="acea-row">
              <el-select v-model="form.temp_id"  class="mr20" :disabled="true">
                <el-option v-for="(item,index) in templateList" :value="item.id" :key="index" :label="item.name">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="类型ID" prop="categoryId">
            未设置字典，请手动设置 Select
          </el-form-item>
          <el-form-item label="是否激活" prop="isActive">
            <el-radio v-for="item in dict.card_status" :key="item.id" v-model="form.isActive" :label="item.value">{{ item.label }}</el-radio>
          </el-form-item>
          <el-form-item label="创建日期" prop="createTime">
            <el-date-picker v-model="form.createTime" type="datetime" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="截止日期" prop="expiryDate">
            <el-date-picker v-model="form.expiryDate" type="datetime" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="金额" prop="balance">
            <el-input v-model="form.balance" style="width: 370px;" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="crud.cancelCU">取消</el-button>
          <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
        </div>
      </el-dialog>
      <!--表格渲染-->
      <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
        <el-table-column type="selection" width="55" />
        <el-table-column v-if="columns.visible('cardCode')" prop="cardCode" label="卡密" />
        <el-table-column v-if="columns.visible('cardName')" prop="cardName" label="类型名称" />
        <el-table-column v-if="columns.visible('categoryId')" prop="categoryId" label="类型ID" />
        <el-table-column v-if="columns.visible('isActive')" prop="isActive" label="是否激活">
          <template slot-scope="scope">
            {{ dict.label.card_status[scope.row.isActive] }}
          </template>
        </el-table-column>
        <el-table-column v-if="columns.visible('createTime')" prop="createTime" label="创建日期">
          <template slot-scope="scope">
            <span>{{ parseTime(scope.row.createTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column v-if="columns.visible('expiryDate')" prop="expiryDate" label="截止日期">
          <template slot-scope="scope">
            <span>{{ parseTime(scope.row.expiryDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column v-if="columns.visible('usedByUserId')" prop="usedByUserId" label="用户ID" />
        <el-table-column v-if="columns.visible('tenantId')" prop="tenantId" label="租户ID" />
        <el-table-column v-if="columns.visible('id')" prop="id" label="卡片ID" />
        <el-table-column v-if="columns.visible('balance')" prop="balance" label="金额" />
        <el-table-column v-permission="['admin','yxCardInfo:edit','yxCardInfo:del']" label="操作" width="150px" align="center">
          <template slot-scope="scope">
            <udOperation
              :data="scope.row"
              :permission="permission"
            />
          </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <pagination />
    </div>
  </div>
</template>

<script>
import crudYxCardInfo from '@/api/yxCardInfo'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
import MaterialList from "@/components/material";

// crud交由presenter持有
const defaultCrud = CRUD({ title: 'card', url: 'mall-debug/yxCardInfo', sort: 'id,desc', crudMethod: { ...crudYxCardInfo }})
const defaultForm = { cardCode: null, cardName: null, categoryId: null, isActive: null, createTime: null, expiryDate: null, usedByUserId: null, tenantId: null, id: null, balance: null }
export default {
  name: 'YxCardInfo',
  components: { pagination, crudOperation, rrOperation, udOperation ,MaterialList},
  mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
  dicts: ['card_status'],
  data() {
    return {

      permission: {
        add: ['admin', 'yxCardInfo:add'],
        edit: ['admin', 'yxCardInfo:edit'],
        del: ['admin', 'yxCardInfo:del']
      },
      rules: {
        cardName: [
          { required: true, message: '类型名称不能为空', trigger: 'blur' }
        ],
        categoryId: [
          { required: true, message: '类型ID不能为空', trigger: 'blur' }
        ],
        isActive: [
          { required: true, message: '是否激活不能为空', trigger: 'blur' }
        ],
        createTime: [
          { required: true, message: '创建日期不能为空', trigger: 'blur' }
        ],
        expiryDate: [
          { required: true, message: '截止日期不能为空', trigger: 'blur' }
        ],
        balance: [
          { required: true, message: '金额不能为空', trigger: 'blur' }
        ]
      },
      queryTypeOptions: [
        { key: 'cardCode', display_name: '卡密' },
        { key: 'cardName', display_name: '类型名称' },
        { key: 'categoryId', display_name: '类型ID' },
        { key: 'isActive', display_name: '是否激活' },
        { key: 'usedByUserId', display_name: '用户ID' },
        { key: 'tenantId', display_name: '租户ID' },
        { key: 'id', display_name: '卡片ID' },
        { key: 'balance', display_name: '金额' }
      ]
    }
  },
  watch: {
  },
  methods: {
    // 获取数据前设置好接口地址
    [CRUD.HOOK.beforeRefresh]() {
      const query = this.query
      if (query.type && query.value) {
        this.crud.params[query.type] = query.value
      }else{
        delete this.crud.params.cardCode
        delete this.crud.params.cardName
        delete this.crud.params.categoryId
        delete this.crud.params.isActive
        delete this.crud.params.usedByUserId
        delete this.crud.params.tenantId
        delete this.crud.params.id
        delete this.crud.params.balance
      }
      return true
    }, // 新增与编辑前做的操作
    [CRUD.HOOK.afterToCU](crud, form) {
    },
  }
}



</script>

<style scoped>
  .table-img {
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
</style>
