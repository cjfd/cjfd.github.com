
<template>
    <div>
        <div>
            <el-table
                :data="tabledata"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="申请日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="申请人"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="level"
                    label="申请等级"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="money"
                    label="申请金额">
                </el-table-column>
                <el-table-column
                    prop="station1"
                    label="申请状态">
                </el-table-column>
                <el-table-column
                    prop="station2"
                    label="资金下发状态">
                </el-table-column>
            </el-table></div>

        <div>
            <h4>申请结果查询</h4>
            <el-steps :active="active" finish-status="success">
                <el-step title="个 人 申 请"></el-step>
                <el-step title="村 级 审 核"></el-step>
                <el-step title="镇 级 审 核"></el-step>
                <el-step title="县 级 审 核"></el-step>
                <el-step title="市 级 审 核"></el-step>
                <el-step title="审 级 通 过"></el-step>
            </el-steps>
            <!--<el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
        </div>

        <!--<div class="signin-wrap">-->
        <!--<el-progress type="circle" :percentage="100"status="success" color="#67C23A"  >村 委 审 核</el-progress>-->
        <!--<el-progress type="circle" :percentage="90"status="success" color="#409EFF">镇 委 审 核</el-progress>-->
        <!--<el-progress type="circle" :percentage="80" color="#F56C6C"></el-progress>-->
        <!--<el-progress type="circle" :percentage="0" status="exception" color="#8e71c7"></el-progress>-->
        <!--<el-progress type="circle" :percentage="0" status="exception" color="#E6A23C"></el-progress>-->
        <!--</div>-->
    </div>
</template>

<style>

    .signin-wrap{text-align:center;}

</style>

<script>
    export default {
        methods: {
            greet: function (event) {
                console.log(this.subname+' '+this.data.checkedNames);
                this.$axios(
                    {
                        method:"get",
//            url:"list/api/user/fund/research",
                        url:"api/user/fund/research",

                        data: data,
                        dataType:'json',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        if(response.data.code){
                            alert('申请成功!');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        data() {
            return {
                active: 3,
                tabledata: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    level:'一级',
                    money: 5000 ,
                    station1:'通过',
                    station2:'已下发',

                }]
            }
        },
//    test(){
//      console.log("123");
//    }
//    methods: {
//      next() {
//        if (this.active++ > 90) this.active = 0;
//      }
//    }
    }
</script>
