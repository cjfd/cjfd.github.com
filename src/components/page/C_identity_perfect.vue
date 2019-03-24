<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 村委</el-breadcrumb-item>
                <el-breadcrumb-item>身份完善</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="姓名" style="width:580px">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.sex" placeholder="请选择" style="width:500px">
                            <el-option key="man" label="男" value="man"></el-option>
                            <el-option key="woman" label="女" value="woman"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="身份证号" style="width:580px">
                        <el-input v-model="form.card"></el-input>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width:500px"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="城市级联">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <!--<el-form-item label="多选框">-->
                        <!--<el-checkbox-group v-model="form.type">-->
                            <!--<el-checkbox label="步步高" name="type"></el-checkbox>-->
                            <!--<el-checkbox label="小天才" name="type"></el-checkbox>-->
                            <!--<el-checkbox label="imoo" name="type"></el-checkbox>-->
                        <!--</el-checkbox-group>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="单选框">-->
                        <!--<el-radio-group v-model="form.resource">-->
                            <!--<el-radio label="步步高"></el-radio>-->
                            <!--<el-radio label="小天才"></el-radio>-->
                            <!--<el-radio label="imoo"></el-radio>-->
                        <!--</el-radio-group>-->
                    <!--</el-form-item>-->
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="证件上传">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="/api/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                options:[
                    {
                        value: 'fuzhou',
                        label: '福州市',
                        children: [
                            {
                                value: 'gulouqu',
                                label: '鼓楼区',
                                children: [
                                    {
                                        value: 'dongjie',
                                        label: '东街街道'
                                    },
                                    {
                                        value: 'wufengjiedao',
                                        label: '五凤街道'
                                    },
                                    {
                                        value: 'huadajiedao',
                                        label: '五凤街道'
                                    },
                                    {
                                        value: 'antaijiedao',
                                        label: '华大街道'
                                    },
                                    {
                                        value: 'shuibujiedao',
                                        label: '水部街道'
                                    },
                                    {
                                        value: 'wenquanjiedao',
                                        label: '温泉街道'
                                    },
                                    {
                                        value: 'gudongjiedao',
                                        label: '鼓东街道'
                                    },
                                    {
                                        value: 'guxijiedao',
                                        label: '鼓西街道'
                                    }

                                ]
                            },
                            {
                                value: 'jinanqu',
                                label: '晋安区',
                                children: [
                                    {
                                        value: 'wangzhuangjiedao',
                                        label: '王庄街道'
                                    },
                                    {
                                        value: 'chayuanjiedao',
                                        label: '茶园街道'
                                    },
                                    {
                                        value: 'xiangyuanjiedao',
                                        label: '象园街道'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ningde',
                        label: '宁德市',
                        children: [
                            {
                                value: 'anqianjiedao',
                                label: '山前街道',
                            },
                            {
                                value: 'gutianxian',
                                label: '古田县',
                                children: [
                                    {
                                        value: 'chengdongjiedao',
                                        label: '城东街道'
                                    },
                                    {
                                        value: 'chengxijiedao',
                                        label: '城西街道'
                                    },
                                    {
                                        value: 'xinchengzhen',
                                        label: '新城镇'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    sex:'',
                    region: '',
                    date1: '',
                    card: '',
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>
