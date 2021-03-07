<template>
    <div class="footer">
        <div class="fTop">
            <div class="WeChat">
                <img src="../assets/WeChat.png" alt="" width="40%" height="60%">
            </div>
            <div class="newBlog"> 
                <h3>最新博客</h3>
                <br>
                <p>用户故事(User Story)</p>
                <p>用户故事(User Story)</p> 
                <p>用户故事(User Story)</p>
            </div>
            <div class="callMe">
                <h3>联系我</h3>
                <br>
                <p>Email：1075490587@qq.com</p>
                <p>QQ：1075490587</p>
            </div>
            <div class="myself">
                <h3>SugaryLee</h3>
                <br>
                <p>
                    这个是我的个人博客，欢迎来到我的博客，<br>
                    该博客主要分享技术、生活、以及个人的闲言
                </p>
            </div>
        </div>
        <div class="fBtm">
            <p><span>Copyright&copy;&nbsp;2021-2022&nbsp;KLee&nbsp;Designed&nbsp;by&nbsp;KLee</span></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        height: 350px;
        width: 100%;
        background-color: #39393b;
    }
    .fTop{
        width: 100%;
        height: 250px;
        padding: 50px 50px;
        color: white;
        box-sizing: border-box;
    }
    .fBtm{
        width: 60%;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        line-height: 100px;
        border-top: 1px solid rgba(221, 217, 217,0.4);
    }
    .WeChat,.newBlog,.callMe{
        width: 20%;
        height: 100%;
        float: left;
        border-right: 1px solid rgba(221, 217, 217,0.4);
    }
    .myself{
        width: 35%;
        height: 100%;
        float: left;
    }
    .WeChat{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .newBlog,.callMe,.myself{
        text-align: center;
        padding: 30px 0px;
    }
    p{
        font-family: "宋体";
        font-size: 15px;
        color: rgb(221, 217, 217);
    }
    h3{
        font-family: "宋体";
    }
</style>