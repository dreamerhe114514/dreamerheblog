var hotreview = {
    switchCommentBarrage:function() {
      document.querySelector(".comment-barrage")&&($(".comment-barrage").is(":visible")?($(".comment-barrage").hide(),$(".menu-commentBarrage-text").text("显示热评"),document.querySelector("#consoleCommentBarrage").classList.remove("on"),localStorage.setItem("commentBarrageSwitch","false")):$(".comment-barrage").is(":hidden")&&($(".comment-barrage").show(),$(".menu-commentBarrage-text").text("关闭热评"),document.querySelector("#consoleCommentBarrage").classList.add("on"),localStorage.removeItem("commentBarrageSwitch"))),
      rm.hideRightMenu()
    },
    scrollTo: function(e) {
      const t = document.getElementById(e);
      if (t) {
        const e = t.getBoundingClientRect().top + window.pageYOffset - 80,
        o = window.pageYOffset,
        n = e - o;
        let a = null;
        window.requestAnimationFrame((function e(t) {
          a || (a = t);
          const i = t - a,
          l = (c = Math.min(i / 0, 1)) < .5 ? 2 * c * c: (4 - 2 * c) * c - 1;
          var c;
          window.scrollTo(0, o + n * l),
          i < 600 && window.requestAnimationFrame(e)
        }))
      }
    },
  }
  
  // 热评弹窗跳转
  fetch('/article.json')
  .then(res => res.json())
  .then(articleData => {
    const urls = Object.keys(articleData);

    fetch('{envId}', {
      method: "POST",
      body: JSON.stringify({ "event": "GET_RECENT_COMMENTS", "accessToken": "{YOUR_TOKEN}", "includeReply": true, "pageSize": -1 }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(({ data }) => {
        let totalComments = 0;
        data.forEach(item => {
          totalComments++;
        });
        const commentElement = document.querySelector('.length-num.icat-pc-comment');
        if (commentElement) {
          commentElement.innerText = totalComments;
        }
        const commentElements = document.querySelector('.length-num.icat-pe-comment');
        if (commentElements) {
          commentElements.innerText = totalComments;
        }
        console.log('本站Twikoo总评论数:', totalComments);
      });
  });

// 总评论数量
