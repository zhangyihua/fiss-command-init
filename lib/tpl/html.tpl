<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!--meta start-->
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="email=no" />
    <meta name="format-detection" content="address=no;">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="keywords" content="keyword1,keyword2,..." />
    <meta name="description" content="description content" />
    <!--meta end -->

    <title>${#title#}</title>
    
    <!-- 注：客户端页面不需要此设置 -->
    <link rel="apple-touch-icon-precomposed" href="http://img.58cdn.com.cn/m58/img/icon58b.png" />
    <!-- 注：客户端页面不需要此设置 -->
    <link rel="apple-touch-startup-image" href="http://img.58cdn.com.cn/m58/img/icon58b.png" />

</head>
<body>
	
	<% if: ${#useEsl=true#} %>
		<script src="http://j2.58cdn.com.cn/olympia/js/lib/esl_zepto_load.min.js"></script>
	<% /if %>
</body>
</html>
