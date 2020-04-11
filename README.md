# project1说明文档
19302010068 万欣芸

- [GitHub](https://github.com/19302010068/SOFT130002_project1)
- [GitHub Pages](https://19302010068.github.io/SOFT130002_project1)

## 项目完成情况
### 首页
- 网站名和站点导航使用了背景图像。
- 热门图片的布局与其他页面的类似，此处为了页面效果，图片说明只有一行就溢出。
- 页脚比其他页面多出一个我的github账号链接。
### 浏览页
- select二级联动通过js+css实现，html文件中预先写好了各个country/region选项对应的城市选择器，country/region改变时显示相应的城市选择器，其他的display: none。
- 筛选出的图片展示为inline-block，没有额外的摆列限制。
- 当前结果页码加粗、增大字号。
### 搜索页
- 和之前的页面差不多。
### 上传界面
- 用一个普通按钮click一个display: none的文件上传控件。
- 未上传图片时页面上只有这个按钮，提醒用户先传图片，上传完成后显示图片和表单其余内容。
- 考虑到用户上传的图片可能会比较宽，因此让图片最大宽度不超出表单区域。
- 图片描述用了一个较大的textarea，鼓励用户多写一点。这个控件右边框默认对齐上方控件，可以调整大小。
### 我的照片
- 两个按钮作为图标，放在图片标题的右边。
### 我的收藏
- 点击图标可以在收藏和不收藏状态之间切换。
### 登陆页面
- 由于这个页面很可能非常短，为了避免footer出现在页面中间位置，main的高度设为至少80vh（其他页面也都有这个设定）。
### 注册界面
- 邮箱输入框会自动检查email格式。
### 图片详情页
- 用了多个内容tag，国家和城市合并显示。
- 以上几项和拍摄者都有超链接。
- 已收藏数量和收藏按钮合并。
- 收藏按钮实际上是一个可以切换状态的img叠在了一个像素级精确的按钮上。

## Bonus
### 更复杂的图片处理
- 图片裁剪：先放缩图片，将较短边调整为期望值，再让图片居中。
- 以主页的最后一张图为例
  - 图片长大于宽，因此标记为.landscape；外包div用来裁剪它。
    ``` html
    <div class="landscape"><a href="9498388516.html"><img src="../../img/medium/9498388516.jpg" alt="9498388516"></a></div>
    ```
  - 相应的css，这里我的目标大小是200x200。
    ``` css
    .portrait, .landscape
    {
        display: inline-block;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
    
    .landscape img
    {
        height: 200px;
    }
    ```
  - 因为负边距没法用auto，所以只能手动计算。图片原始大小是640x480，调整后是266.6667x200，负边距取取超出200部分的一半。
    ``` css
    #six-photos>article:first-of-type>div img,
    #six-photos>article:nth-of-type(3)>div img,
    #six-photos>article:last-of-type>div img
    {
        margin-left: -33px;
    }
    ```
### 响应式布局
- 网页整体采用流式布局，边栏、控件等设为固定宽度，基本能够实现目标。因此没有用到媒体查询。
- 上传界面中，通过js实现了在改变窗口大小时，较大的图片始终占满表单宽度。此页的textarea也有类似的设计。
### 界面美观
- 部分超链接、按钮有:hover和:active的样式。
- 其他见具体网页。