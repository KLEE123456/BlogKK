<template>
    <div class="bDetail">
        <div class="dtHeader">
             <div><el-avatar :size="40" :src="require('../../assets/birds.jpg')"></el-avatar></div>
             <div class="author">KLEE</div>
             <div class="upDate"><i class="el-icon-date"></i>2020-03-07</div>
             <div class="el-icon-view">123</div>
        </div>
        <div class="dtPhoto">
             <img src="../../assets/detailPhoto.jpg" alt="_blank">
        </div>
        <div class="dtContent">
            <div class="textLogo">
                <el-tag type="danger" size="mini" color="white">转载</el-tag>
            </div>
            <div class="textCnt">
                <div class="title">
                    <h2>移动端web应用锚点设计</h2>
                </div>
                <div class="cnt">
                    <p>火车缓缓启动---雨才回过神来坐下，随意的看了看坐在对面的人，那个貌似东北的人就是刚才帮雨放行李的高个子男士。那个戴着眼镜悠闲自在且有几分稳重和成熟，微笑的男士貌似南方人。原来两人是同伴，貌似东北人的男士一直站着望着窗外总是好奇的问过不停，戴着眼镜不回答问题的男士还是悠然自得微笑着，时不时的看一眼雨，他似乎慈眉善眼，和颜悦色，雨避开了他的眼光，雨不知道他们是从哪来又要到哪里去。</p>
                    <h2>雨</h2>
                    <p>雨明白了他们是从“紫禁城”第一次来到鱼米之乡，他们的好奇的问题非常简单，就是来自窗外那些世外桃源，山外有山，古木参天的美景。雨印象最深最有趣最幼稚的问题是；农民收获稻谷后就会将稻草搭成一个个塔，他们不知那是干嘛的，雨念在刚才帮她放行李的份上用不标准的普通话给他们作解释，一路都望着窗外，说的都是山城的习俗，风景。</p>
                    <h2>雨</h2>
                    <p>雨明白了他们是从“紫禁城”第一次来到鱼米之乡，他们的好奇的问题非常简单，就是来自窗外那些世外桃源，山外有山，古木参天的美景。雨印象最深最有趣最幼稚的问题是；农民收获稻谷后就会将稻草搭成一个个塔，他们不知那是干嘛的，雨念在刚才帮她放行李的份上用不标准的普通话给他们作解释，一路都望着窗外，说的都是山城的习俗，风景。</p>
                    <h2>雨</h2>
                    <p>雨明白了他们是从“紫禁城”第一次来到鱼米之乡，他们的好奇的问题非常简单，就是来自窗外那些世外桃源，山外有山，古木参天的美景。雨印象最深最有趣最幼稚的问题是；农民收获稻谷后就会将稻草搭成一个个塔，他们不知那是干嘛的，雨念在刚才帮她放行李的份上用不标准的普通话给他们作解释，一路都望着窗外，说的都是山城的习俗，风景。</p>
                    <h2>雨</h2>
                    <p>雨明白了他们是从“紫禁城”第一次来到鱼米之乡，他们的好奇的问题非常简单，就是来自窗外那些世外桃源，山外有山，古木参天的美景。雨印象最深最有趣最幼稚的问题是；农民收获稻谷后就会将稻草搭成一个个塔，他们不知那是干嘛的，雨念在刚才帮她放行李的份上用不标准的普通话给他们作解释，一路都望着窗外，说的都是山城的习俗，风景。</p>
                </div>
            </div>
        </div>
        <div class="dtTag">
            <el-tag type="success">方法论</el-tag>
        </div>
        <div class="dtMoneny">
            <el-popover
                placement="right"
                width="155"
                trigger="click">
                <img src="../../assets/money.jpg" alt="_blank">
                <el-button slot="reference" type="danger" round size="mini" plain>赞赏</el-button>
            </el-popover>
        </div>
        <div class="dtBlogInfo">
            <div class="infoList">
                <ul>
                    <li>作者:张三(联系作者)</li>
                    <li>发布时间：2021-03-07</li>
                    <li>自由转载-非商用-非衍生-保持署名(创意共享3.0许可证)</li>
                    <li>个人转载：请在文末添加作者微信</li>
                </ul>
            </div>
            <div class="infoWX">
                <img src="../../assets/WeChat.png" alt="_blank">
            </div>
        </div>
        <div class="dtComment">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="评论内容">
                    <el-input type="textarea" v-model="form.cnt"></el-input>
                </el-form-item>
                 <el-form-item label="昵称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">评论</el-button>
                </el-form-item>
                </el-form>
        </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        form: {
          cnt: '',
          name: '',
          email: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang="less" scoped>
    .bDetail{
        width: 55%;
        min-height: 150px;
        border: 2px solid gainsboro;
        border-radius: 4px;
        margin: 0 auto;
    }
    .dtHeader{
        width: 100%;
        height: 50px;
        border-bottom: 2px solid gainsboro;
    }
    .dtPhoto{
        width: 100%;
        height: 500px;
        padding: 10px 10px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }
    }
    .dtHeader{
        display: flex;
        align-items: center;
    }
    .upDate,.el-icon-view{
        padding: 0px 10px;
        font-size: 10px;
        color: grey;
    }
    .author{
        padding: 0px 10px;
        font-size: 10px;
        color: #41B883;
    }
    .dtContent{
        position: relative;
    }
    .textLogo{
        position: absolute;
        right: 0px;
        margin: 10px 10px;
    }
    .textCnt{
        width: 100%;
        min-height: 50px;
        h2{
            margin: 10px 0px;
        }
    }
    .title{
        width: 300px;
        height: 50px;
        margin: 0 auto;
        text-align: center;
    }
    .cnt{
        width: 90%;
        margin: 0 auto;
        p{
            line-height: 25px;
        }
    }
    .dtTag{
        width: 90%;
        margin: 20px auto;
    }
    .dtMoneny{
        width: 90%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
    }
    .dtBlogInfo{
        width: 100%;
        height: 180px;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #e6f0e1;
    }
    .infoList{
        width: 60%;
        height: 120px;
        display: flex;
        align-items:center;
        justify-content: center;
        line-height: 25px;
        font-family: "宋体";
        font-size: 14px;
    }
    .infoWX{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .dtComment{
        min-height: 50px;
        margin: 50px 5px;
    }
</style>