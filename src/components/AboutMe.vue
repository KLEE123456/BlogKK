<template>
  <div class="aboutMe">
      <div class="myPhoto">
          <img src="../assets/aboutMe.jpg" alt="_blank">
      </div>
      <div class="myInfo">
          <div class="infoHeader">
              <h5>关于我</h5>
          </div>
          <div class="infoCnt">
              <p>
                  KLEE,一个有集体责任心，懂得团体协作的一个人。能够吃苦耐劳，善于学习和钻研，能够在规定的时间内完成公司给我的任务。
              </p>
              <br>
              <p>
                  热爱看直播、听音乐、看电影、跑步、和朋友一起打打游戏...
              </p>
          </div>
          <div class="infoTag">
              <el-tag type="primary" effect="plain">跑步</el-tag>
              <el-tag type="primary" effect="plain">音乐</el-tag>
              <el-tag type="primary" effect="plain">桌球</el-tag>
              <el-tag type="primary" effect="plain">编程</el-tag>
          </div>
          <div class="infoTchTag">
              <el-tag type="danger" effect="plain">HTML5</el-tag>
              <el-tag type="danger" effect="plain">JAVA</el-tag>
              <el-tag type="danger" effect="plain">MYSQL</el-tag>
              <el-tag type="danger" effect="plain">CSS3</el-tag>
          </div>
          <div class="infoLink">
              <a href="https://github.com/KLEE123456" target="">
                    <img src="../assets/githubIcon.gif" alt="_blank" width="40px" height="40px">
              </a>
              <div>
                   <el-popover
                    placement="right"
                    width="172"
                    trigger="hover">
                    <img src="../assets/WeChat.png" alt="_blank" width="150px" height="150px">
                    <el-button slot="reference" type="success" round size="mini" plain color="white">
                        <img src="../assets/wechatIcon.gif" alt="_blank" width="40px" height="40px">
                    </el-button>
              </el-popover>
              </div>
              <div>
                   <el-popover
                    placement="right"
                    width="172"
                    trigger="hover">
                    <img src="../assets/qq.jpg" alt="_blank" width="150px" height="150px">
                    <el-button slot="reference" type="success" round size="mini" plain color="white">
                        <img src="../assets/QQIcon.gif" alt="_blank" width="40px" height="40px">
                    </el-button>
              </el-popover>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .aboutMe{
        width: 80%;
        height: 600px;
        margin: 0 auto;
        padding: 10px 0px;
        display: flex;
        justify-content: space-around;
        .myPhoto{
            width: 70%;
            height: 580px;
            border: 2px solid gainsboro;
            padding: 10px 10px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
            }
        }
        .myInfo{
            width: 26%;
            height:400px;
            border: 2px solid gainsboro;
            .infoHeader{
                width: 100%;
                height: 60px;
                border-bottom: 2px solid gainsboro;
                padding: 0 10px;
                line-height: 60px;
            }
            .infoCnt{
                width: 100%;
                height: 180px;
                border-bottom: 2px solid gainsboro;
                padding: 10px 10px;
            }
            .infoTag,.infoTchTag{
                width: 100%;
                height: 50px;
                border-bottom: 2px solid gainsboro;
                padding: 10px 10px;
                display: flex;
                justify-content: space-around;
            }
            .infoLink{
                width: 100%;
                height: 60px;
                padding: 10px 10px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                img{
                    border-radius: 5px;
                }
            }
        }
    }
</style>