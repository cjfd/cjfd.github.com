<template>
    <el-form ref="form" :model="sizeForm" label-width="90px" size="mini">
        <el-form-item label="家庭住址" prop="address">
            <el-input v-model="sizeForm.address" style="width:580px"></el-input>
        </el-form-item>
        <el-form-item label="户主姓名" prop="name">
            <el-input v-model="sizeForm.name" style="width:580px"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
            <el-input v-model="sizeForm.phone" style="width:580px"></el-input>
        </el-form-item>
        <el-form-item label="银行账号" prop="bank">
            <el-input v-model="sizeForm.bank" style="width:580px"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="card">
            <el-input v-model="sizeForm.card" style="width:580px"></el-input>
        </el-form-item>
        <!--<el-form-item label="申请时间" >-->
            <!--<el-col :span="11">-->
                <!--<el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width:580px"></el-date-picker>-->
            <!--</el-col>-->
        <!--</el-form-item>-->
        <el-form-item label="致贫原因" prop="type">
            <el-radio-group v-model="sizeForm.type" style="width:780px">
                <el-radio border label="因病" ></el-radio>
                <el-radio border label="因残" ></el-radio>
                <el-radio border label="因学" ></el-radio>
                <el-radio border label="因灾" ></el-radio>
                <el-radio border label="交通落后" ></el-radio>
                <el-radio border label="缺资金" ></el-radio>
                <el-radio border label="缺技术" ></el-radio>
                <el-radio border label="其它" ></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="贫困户属性" prop="resource">
            <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="贫困户"></el-radio>
                <el-radio border label="低保户"></el-radio>
                <el-radio border label="五保户"></el-radio>
                <el-radio border label="低保贫困户"></el-radio>
                <el-radio border label="一般农民"></el-radio>
            </el-radio-group>
        </el-form-item>
        <h4>主要家庭成员信息（户主信息也需填入）：</h4>
        <p>成员一</p>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="姓名 ">
                <el-input v-model="family[0].name"  style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="family[0].sex"  style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="family[0].card"  style="width: 400px"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="与户主关系 ">
                <el-input v-model="family[0].relation"  style="width:150px"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="family[0].nation"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="文化程度">
                <el-input v-model="family[0].education"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="健康状况">
                <el-input v-model="family[0].health"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-input v-model="family[0].career"  style="width: 170px"></el-input>
            </el-form-item>
        </el-form>

        <p>成员二</p>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="姓名 ">
                <el-input v-model="family[1].name"  style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="family[1].sex"  style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="family[1].card"  style="width: 400px"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="与户主关系 ">
                <el-input v-model="family[1].relation"  style="width:150px"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="family[1].nation"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="文化程度">
                <el-input v-model="family[1].education"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="健康状况">
                <el-input v-model="family[1].health"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-input v-model="family[1].career"  style="width: 170px"></el-input>
            </el-form-item>
        </el-form>

        <p>成员三</p>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="姓名 ">
                <el-input v-model="family[2].name"  style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="family[2].sex"  style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="family[2].card"  style="width: 400px"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="与户主关系 ">
                <el-input v-model="family[2].relation"  style="width:150px"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="family[2].nation"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="文化程度">
                <el-input v-model="family[2].education"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="健康状况">
                <el-input v-model="family[2].health"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-input v-model="family[2].career"  style="width: 170px"></el-input>
            </el-form-item>
        </el-form>

        <p>成员四</p>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="姓名 ">
                <el-input v-model="family[3].name"  style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="family[3].sex"  style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="family[3].card"  style="width: 400px"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true"  class="demo-form-inline" label-width="100px">
            <el-form-item label="与户主关系 ">
                <el-input v-model="family[3].relation"  style="width:150px"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                <el-input v-model="family[3].nation"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="文化程度">
                <el-input v-model="family[3].education"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="健康状况">
                <el-input v-model="family[3].health"  style="width: 150px"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-input v-model="family[3].career"  style="width: 170px"></el-input>
            </el-form-item>
        </el-form>
        <el-form-item size="large">
            <el-button type="primary" @click="submitForm('sizeForm')">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>

</template>


<script>
    export default {
        data() {
            return {
                sizeForm: {
                    address:'',
                    name: '',
                    phone:'',
                    bank:'',
                    card:'',
                    // date1: '',
                    type:'',
                    resource: ''
                },
                family:[
                    {
                        name:'张三',
                        sex:'',
                        card:'',
                        relation:'',
                        nation:'',
                        education:'',
                        career:'',
                        health:''
                    },
                    {
                        name:'张三',
                        sex:'',
                        card:'',
                        relation:'',
                        nation:'',
                        education:'',
                        career:'',
                        health:''
                    },
                    {
                        name:'张三',
                        sex:'',
                        card:'',
                        relation:'',
                        nation:'',
                        education:'',
                        career:'',
                        health:''
                    },
                    {
                        name:'张三',
                        sex:'',
                        card:'',
                        relation:'',
                        nation:'',
                        education:'',
                        career:'',
                        health:''
                    }
                ]
            };
        },
        methods: {
            submitForm(formName) {
                // localStorage.setItem('ms_username',this.sizeForm.address);
                // localStorage.setItem('ms_user',JSON.stringify(this.sizeForm));
                // console.log(JSON.stringify(this.sizeForm));
                this.$http.post('/api/user/identity_verify',JSON.stringify(this.sizeForm))
                    .then((response) =>{
                        if(response.data == 200){
                            console.log('submit!');
                        }else{
                            console.log('submit failed!!');
                        }
                    })
            }
        }
    };
</script>


<style>

</style>
