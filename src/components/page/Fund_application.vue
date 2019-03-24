
<template>
    <div class="signin-wrap">

    <span>
    <!--<h1>资金申请</h1>-->
    <a>身份证号：</a>
        <!--<input class="test-input2" type="text" placeholder="请输入姓名" v-model="name">-->
      <el-input class="test-input2" v-model="userid" placeholder="请输入内容"></el-input>
        <!--<div class="block">-->
    <a>申请时间：</a>
    <el-date-picker
        v-model="time"
        type="datetime"
        placeholder="选择日期时间">
    </el-date-picker>
        <!--</div>-->
    </span>
        <br><br>

        <div>
            <a>申请原因：</a>
            <el-input class="test-input3" v-model="reason" placeholder="请输入内容"></el-input><br><br>
        </div>
        <div  >
            <a>贫困户属性（单选）：</a>
            <input class="radio2" type="radio"  value="5000" v-model="picked" style="width:15px;height:15px">
            <label >一级贫困</label>
            <input class="radio2" type="radio"  value="4000" v-model="picked" style="width:15px;height:15px">
            <label >二级贫困</label>
            <input class="radio2" type="radio"  value="3000" v-model="picked" style="width:15px;height:15px">
            <label >三级贫困</label>
            <input class="radio2" type="radio"  value="2000" v-model="picked" style="width:15px;height:15px">
            <label >四级贫困</label>
            <input class="radio2" type="radio"  value="1000" v-model="picked" style="width:15px;height:15px">
            <label >五级贫困</label>

        </div><br>


        <div class="kuang">
            扶贫项目补助资金的补助标准如下：<br><br><br>

            （一）一级贫困：5000<br><br>
            （二）二级贫困：4000<br><br>
            （三）三级贫困：3000<br><br>
            （四）四级贫困：2000<br><br>
            （五）五级贫困：1000
        </div><br>
        <div class="center">
            <!--<button @click="greet">申请</button>-->
            <el-button type="success" @click="onSubmit">申请</el-button>
        </div>
    </div>

</template>

<style>
    .signin-wrap{text-align:center;}
    .kuang{
        border:2px solid #a1a1a1 ;
        padding:100px 40px;
        background:#dddddd;
        width:600px;
        border-radius:25px;
        margin-left: auto;
        margin-right: auto;}
    .test-input2{display:inline-block; width:200px; height:30px; line-height:40px;  }
    .test-input3{display:inline-block; width:510px; height:30px; line-height:40px;  }

</style>


<script>
    export default {
        data () {
            return {
                userid:'',
                time: '',
                reason:'',
                picked:'',
            };
        },
        methods:{
            onSubmit() {
                console.log(this.time);
                let data ={
                    id_number:this.userid,
                    time:this.time,
                    apply_reason:this.reason,
                    apply_level: this.picked,
                };
                this.$axios(
                    {
                        method:"post",
//          url:"list/api/user/fund_apply_info_submit",
                        url:"/list/api/user/fund_apply_info_submit",
                        data:data,
                        dataTpye:'json',
                        header:{
                            'Content-Tpye':'application/json',
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
        }
    }
</script>
