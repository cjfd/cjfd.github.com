<template>
    <el-table
        :data="tableData"
        style="width: 100%"
        height="550">
        <el-table-column
            prop="date"
            label="日期"
            width="200">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="200">
        </el-table-column>
        <el-table-column
            prop="amount"
            label="申请金额"
            width="200">
        </el-table-column>
        <el-table-column
            prop="level"
            label="贫困水平"
            width="250">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="联系方式"
            width="300">
        </el-table-column>
        <el-table-column
            prop="status"
            label="申请状态"
            width="200">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        methods:{
            getlist: function () {
                console.log('123456789');
                this.$axios(
                    {
                        method:"get",
//            url:"list/api/user/villager_information",
                        url:"/api/user/villager_information",

//            data: data,
                        dataType:'json',
                        headers: {
                            'Content-Type': 'villager_information/json'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
//            if(response.data.code){
//              alert('申请成功!');
//            }
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
                tableData: [{
                    date: '2018.6.1',
                    name: '阿尔',
                    amount: '10000',
                    level: '一级贫困',
                    phone: '13325512451',
                    status: '通过',
                },
                    {
                        date: '2018.6.15',
                        name: '王小二',
                        amount: '20000',
                        level: '二级贫困',
                        phone: '13325512451',
                        status: '通过',
                    },
//          {
//            date: '2018.6.16',
//            name: '王赏酥',
//            amount: '20000',
//            level: '二级贫困',
//            phone: '13325524513',
//            status: '通过',
//          },{
//            date: '2018.6.18',
//            name: '宁德玛',
//            amount: '10000',
//            level: '二级贫困',
//            phone: '13325512522',
//            status: '通过',
//          },
//          {
//            date: '2018.6.18',
//            name: '王守望',
//            amount: '10000',
//            level: '二级贫困',
//            phone: '13325512522',
//            status: '通过',
//          },
//          {
//            date: '2018.6.20',
//            name: '苏斯秒',
//            amount: '10000',
//            level: '二级贫困',
//            phone: '13325512522',
//            status: '通过',
//          },
//          {
//            date: '2018.6.23',
//            name: '灵惜艾',
//            amount: '10000',
//            level: '二级贫困',
//            phone: '13325512522',
//            status: '通过',
//          },
//          {
//            date: '2018.6.24',
//            name: '黄希',
//            amount: '10000',
//            level: '二级贫困',
//            phone: '13325512522',
//            status: '通过',
//          },
                ]
            }
        }
    }
</script>
