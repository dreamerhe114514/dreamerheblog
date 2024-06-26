var postCommentElement = document.getElementById("post-comment");
if (postCommentElement) {
var commentBarrageConfig = {
	//同时最多显示弹幕数
	maxBarrage: 5,
	//弹幕显示间隔时间ms
	barrageTime: 4000,
	//twikoo部署地址腾讯云的为环境ID
	twikooUrl: "https://twikoo.dreamerhe.cn/",
	//token获取见上方
	accessToken: "315e5395ec6747988f4e115ce9615aa2",
	pageUrl: window.location.pathname,
	barrageTimer: [],
	barrageList: [],
	barrageIndex: 0,
	dom: document.querySelector('.comment-barrage'),
}

var commentInterval = null;
var hoverOnCommentBarrage = false;

$(".comment-barrage").hover(function() {
  hoverOnCommentBarrage = true;
  console.log("热评悬浮");
}, function() {
  hoverOnCommentBarrage = false;
  console.log("停止悬浮");
});

function initCommentBarrage(){
	// console.log("开始创建热评")

	var data = JSON.stringify({
		"event": "COMMENT_GET",
		"commentBarrageConfig.accessToken": commentBarrageConfig.accessToken,
		"url": commentBarrageConfig.pageUrl
	});
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.addEventListener("readystatechange", function() {
		if(this.readyState === 4) {
		commentBarrageConfig.barrageList = commentLinkFilter(JSON.parse(this.responseText).data);
		commentBarrageConfig.dom.innerHTML = '';
		}
	});
	xhr.open("POST", commentBarrageConfig.twikooUrl);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(data);


  clearInterval(commentInterval);
  commentInterval = null;

  commentInterval = setInterval(()=>{
    if(commentBarrageConfig.barrageList.length && !hoverOnCommentBarrage){
      popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]);
      commentBarrageConfig.barrageIndex += 1;
      commentBarrageConfig.barrageIndex %= commentBarrageConfig.barrageList.length;
    }
    if((commentBarrageConfig.barrageTimer.length > (commentBarrageConfig.barrageList.length > commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)) && !hoverOnCommentBarrage){
      removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())
    }
  },commentBarrageConfig.barrageTime)
}
function commentLinkFilter(data){
	data.sort((a,b)=>{
		return a.created - b.created;
	})
	let newData = [];
	data.forEach(item=>{
		newData.push(...getCommentReplies(item));
	});
	return newData;
}
function getCommentReplies(item){
	if(item.replies){
		let replies = [item];
		item.replies.forEach(item=>{
			replies.push(...getCommentReplies(item));
		})
		return replies;
	}else{
		return [];
	}
}
function popCommentBarrage(data){
	let barrage = document.createElement('div');
	let width = commentBarrageConfig.dom.clientWidth;
	let height = commentBarrageConfig.dom.clientHeight;
	barrage.className = 'comment-barrage-item'
	barrage.innerHTML = `
		<div class="barrageHead">
      		<a class="barrageTitle" href="javascript:hotreview.scrollTo('post-comment')"">热评</a>
			<div class="barrageNick">${data.nick}</div>
			<img class="barrageAvatar" src="https://cravatar.cn/avatar/${data.mailMd5}"/>
			<a class="comment-barrage-close" href="javascript:hotreview.switchCommentBarrage()"><i class="iconfont icat-close"></i></a>
		</div>
		<a class="barrageContent" href="javascript:hotreview.scrollTo('${data.id}');">${data.comment}</a>
	`
	commentBarrageConfig.barrageTimer.push(barrage);
	commentBarrageConfig.dom.append(barrage);
}
function removeCommentBarrage(barrage){
	barrage.className = 'comment-barrage-item out';
	setTimeout(()=>{
		commentBarrageConfig.dom.removeChild(barrage);
	},1000)
}



// 自动隐藏
document.addEventListener('scroll',btf.throttle(function(){
    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //可见区域顶部高度
    var visibleTop = window.scrollY;
    // 获取翻页按钮容器
    var pagination = document.querySelector('.comment-barrage');
    // 获取位置监测容器，此处采用评论区
    var eventlistner = document.getElementById('post-comment');
    if (eventlistner&&pagination){
    var centerY = eventlistner.offsetTop+(eventlistner.offsetHeight/2);
    if(document.body.clientWidth > 768){
      if(centerY>visibleBottom){
        pagination.style.bottom = '40px';
      }else{
        pagination.style.bottom = '-200px';
      }
    }
  }
  }, 200))

initCommentBarrage();

document.addEventListener('pjax:send', function(){
  clearInterval(commentInterval);
});

} else {
	console.log("Dreamerhe提醒您：此页面没有评论！");
}

// 热评弹窗函数