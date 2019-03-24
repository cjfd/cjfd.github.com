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
                    <el-form-item label="身份证号">
                        <span>{{ props.row.userid }}</span>
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
            label="申请地区"
            prop="address">
        </el-table-column>
        <!--<el-table-column-->
        <!--label="描述"-->
        <!--prop="desc">-->
        <!--</el-table-column>-->
        <el-table-column
            label="操作"
            prop="desc">
            <div slot-scope="scope">
                <el-button type="text" size="small"  @click="handleClick">通过</el-button>
                <el-button type="text" size="small"  @click="handleClick1">不通过</el-button>
            </div>
        </el-table-column>
    </el-table>

    <!--<button type="text" size="small"  @click="greet">通过</button>-->

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
                this.status=1;
                console.log(this.status);
                let data = {
                    status: this.status,
                };
                this.$axios(
                    {
                        method:"post",
                        url:"/api/user/id_review",
                        data: data,
                        dataType:'json',
                        headers: {
                            'Content-Type': 'idapproval/json'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        if(response.data.code==1){
                            alert('成功!');
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
                this.$axios.get("/api/user/poor_info_search_all")
                //        this.$axios.get("list//api/user/poor_info_search_all")

                //        this.$axios(
                //          {
                //            method:"get",
                //            url:"list/api/user/poor_info_search_all",
                //            data: data,
                //            dataType:'json',
                //            headers: {
                //              'Content-Type': 'villager_information/json'
                //            }
                //          })
                    .then(function (response) {
                        console.log(response);
                        for(var i=0; i<3 ; i++){
                            _this.tableData5[i].name=response.data[i].household_name,
                                _this.tableData5[i].address=response.data[i].address,
                                _this.tableData5[i].account=response.data[i].bank_account,
                                _this.tableData5[i].account=response.data[i].bank_account,
                                _this.tableData5[i].phone=response.data[i].phone_number,
                                _this.tableData5[i].account=response.data[i].bank_account,
                                _this.tableData5[i].time=response.data[i].apply_time
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
                status:0,    //0就是为通过，1为通过
                tableData5: [{
                    time: '2018.06.07',
                    name: 'alalin2',
                    account:'26431513465234562562',
                    address: '福大真北路',
                    phone: '123123123',
                    userid:'afgsasfgasfga',
                }, {
                    time: '2018.06.08',
                    name: 'alalin2',
                    account:'26431513465234562562',
                    address: '福大',
                    phone: '123123123',
                    userid:'afgsasfgasfga',
                }],

            }
        },

//    watch:{
//      status:function () {
//        this.status = 1;
//      }
//    }
    }
</script>
