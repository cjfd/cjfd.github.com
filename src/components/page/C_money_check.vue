<template>
    <el-table
        :data="tableData5"
        style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="申请人">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="地区">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="联系方式">
                        <span>{{ props.row.phone }}</span>
                    </el-form-item>
                    <el-form-item label="申请时间">
                        <span>{{ props.row.time}}</span>
                    </el-form-item>
                    <el-form-item label="银行号">
                        <span>{{ props.row.account }}</span>
                    </el-form-item>
                    <!--<el-form-item label="店铺地址">-->
                    <!--<span>{{ props.row.address }}</span>-->
                    <!--</el-form-item>-->
                    <el-form-item label="...">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
            label="申请时间"
            prop="time">
        </el-table-column>
        <el-table-column
            label="申请人"
            prop="name">
        </el-table-column>
        <el-table-column
            label="申请金额"
            prop="money">
        </el-table-column>
        <el-table-column
            label="村级审核"
            prop="status">
        </el-table-column>
        <el-table-column
            label="乡/镇级审核"
            prop="review_level1">
        </el-table-column>
        <el-table-column
            label="县级审核"
            prop="review_level1">
        </el-table-column>
        <el-table-column
            label="操作"
            prop="desc">
            <template slot-scope="scope">
                <el-button  type="text" size="small" @click="handleClick(scope.row)">通过</el-button>
                <el-button type="text" size="small" @click="handleClick1">不通过</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        methods: {
            handleClick(row) {
                row.status ='通过';
                console.log(row.status);
                console.log(row.apply_id);
                this.$axios.get('/api/user/fund_review?apply_id=' + row.apply_id + '&apply_review_status=' + row.status

//        this.$axios.get('/list/list//api/user/fund_review?apply_id=' + row.apply_id + '&apply_review_status=' + row.status
//          params: {
//            ID: row.status,
//            ID2: row.apply_id,
//          }
                )

                    .then(function (response) {
                        console.log(response);
                        if(response.data.code){
                            alert('通过!');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            handleClick1(row) {
                this.status=0;
                console.log(this.status);
            },
            getlist : function () {
                console.log('123456789');
                let _this = this;
//        this.$axios(
//          {
//            method:"get",
//            url:"list/list//api/user/villager_information",
////            data: data,
//            dataType:'json',
//            headers: {
//              'Content-Type': 'villager_information/json'
//            }
//          })
//        this.$axios.get("list/list//api/user/fund_apply_info_all")
                this.$axios.get("/api/user/fund_apply_info_all")

                    .then(function (response) {
                        console.log(response);
                        for(var i=0; i<3 ; i++){
                            _this.tableData5[i].time=response.data[i].time,
                                _this.tableData5[i].apply_id = response.data[i].apply_id;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        },

        mounted:function () {
            this.getlist();
        },
        data() {
            return {
                tableData5: [{
                    time: '2018.06.07',
                    name: '陈价悉',
                    account:'26431513465234562562',
                    address: '福建省永泰县洋中村',
                    phone: '123123123',
                    reason:'afgsasfgasfga',
                    money:'20000',
                    status:'通过',
                    apply_id:'123',
                    review_level1:'通过',
                }, {
                    time: '2018.06.08',
                    name: '西门寻',
                    account:'26431513465234562562',
                    address: '福建省永泰县洋中村',
                    phone: '123123123',
                    reason:'afgsasfgasfga',
                    money:'60000',
                    status:'通过',
                    apply_id:'123',
                    review_level1:'通过',
                },
                    {
                        time: '2018.06.08',
                        name: '宁宇中',
                        account:'26431513465234562562',
                        address: '福大路',
                        phone: '123123123',
                        reason:'afgsasfgasfga',
                        money:'10000',
                        status:'通过',
                        apply_id:'123',
                        review_level1:'通过',
                    },
                    {
                        time: '2018.06.08',
                        name: '新马兰',
                        account:'26431513465234562562',
                        address: '福大路',
                        phone: '123123123',
                        reason:'afgsasfgasfga',
                        money:'50000',
                        status:'通过',
                        apply_id:'123',
                        review_level1:'通过',
                    },
                    {
                        time: '2018.06.08',
                        name: '工藤新',
                        account:'26431513465234562562',
                        address: '福大路',
                        phone: '123123123',
                        reason:'afgsasfgasfga',
                        money:'30000',
                        status:'通过',
                        apply_id:'123',
                        review_level1:'通过',}
                ]
            }
        }
    }
</script>
