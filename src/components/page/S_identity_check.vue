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
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="申请人"
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="money"
                    label="审核进度">
                </el-table-column>
                <!--<el-table-column-->
                <!--prop="station1"-->
                <!--label="申请状态">-->
                <!--</el-table-column>-->
                <el-table-column
                    prop="station2"
                    label="身份审核状态">
                </el-table-column>
            </el-table></div>


        <!--<div>-->
        <!--<button @click="greet">查看</button>-->
        <!--</div>-->
    </div>
</template>

<style>
    .signin-wrap{text-align:center;}
</style>

<script>
    export default {
        methods: {
            getlist: function (event) {
                console.log('123456');
                this.$axios(
                    {
                        method:"get",
//          url:"list/api/user/villager_information/research",
                        url:"api/user/villager_information/research",
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
        mounted:function(){
            this.getlist();
        },

        data() {
            return {
                active: 3,
                tabledata: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    money: '1/5 ',
                    station1:'通过',
                    station2:'待定',
                }]
            }
        },


    }
</script>
