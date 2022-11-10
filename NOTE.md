网易云音乐API地址
https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi






由于接口做了缓存处理 ( 缓存 2 分钟,不缓存数据极容易引起网易服务器高频 ip 错误 , 可在 app.js 设置 , 可能会导致登录后获取不到 cookie), 相同的 url 会在两分钟内只向网易服务器发一次请求 , 如果遇到不需要缓 存结果的接口 , 可在请求 url 后面加一个时间戳参数使 url 不同 , 例子 : /simi/playlist?id=347230&timestamp=1503019930000 (之所以加入缓存机制是因为项目早期没有缓存机制，很多 issues 都是报 IP 高频，请按自己需求改造缓存中间件(app.js)，源码不复杂)

图片加上 ?param=宽y高 可控制图片尺寸，如
http://p4.music.126.net/JzNK4a5PjjPIXAgVlqEc5Q==/109951164154280311.jpg?param=200y200
http://p4.music.126.net/JzNK4a5PjjPIXAgVlqEc5Q==/109951164154280311.jpg?param=50y50

分页接口返回字段里有more,more 为 true 则为有下一页




# 歌手
- 热门歌手 /top/artists?offset=0&limit=30
说明 : 调用此接口 , 可获取热门歌手数据
可选参数 : limit: 取出数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0

- 歌手分类列表: /artist/list?type=1&area=96&initial=b&offset=(页数 -1)*30
limit : 返回数量 , 默认为 30
offset : 偏移数量，用于分页 ,  如 :(页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
initial: 按首字母索引查找参数,如 initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b
type 取值:-1:全部 1:男歌手 2:女歌手 3:乐队
area 取值: -1:全部 7华语 96欧美 8:日本 16韩国 0:其他

- 歌手热门 50 首歌曲: /artist/top/song?id=6452
id : 歌手 id

- 歌手全部歌曲: /artist/songs?id=6452
id : 歌手 id
可选参数 :
order : hot ,time 按照热门或者时间排序
limit: 取出歌单数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

- 获取歌手单曲 /artists?id=6452
说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
必选参数 : id: 歌手 id, 可由搜索接口获得

- 获取歌手 mv /artist/mv?id=6452
说明 : 调用此接口 , 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064
必选参数 : id: 歌手 id, 可由搜索接口获得

- 获取歌手专辑 /artist/album?id=6452&limit=5 ( 周杰伦 )
说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
必选参数 : id: 歌手 id
可选参数 : limit: 取出数量 , 默认为 30
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0

- 获取歌手描述 /artist/desc?id=6452 ( 周杰伦 )
说明 : 调用此接口 , 传入歌手 id, 可获得歌手描述
必选参数 : id: 歌手 id

- 获取歌手详情 /artist/detail?id=11972054 (Billie Eilish)
说明 : 调用此接口 , 传入歌手 id, 可获得获取歌手详情
必选参数 : id: 歌手 id

- 获取相似歌手 /simi/artist?id=6452 ( 对应和周杰伦相似歌手 )
说明 : 调用此接口 , 传入歌手 id, 可获得相似歌手
必选参数 : id: 歌手 id


- 歌手粉丝 /artist/fans?id=2116&limit=10&offset=0
说明 : 调用此接口 , 传入歌手 id, 可获取歌手粉丝 必选参数 : id : 歌手 id

- 歌手粉丝数量 /artist/follow/count?id=2116
说明 : 调用此接口 , 传入歌手 id, 可获取歌手粉丝数量
必选参数 : id : 歌手 id
可选参数 : limit: 取出粉丝数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*10, 其中 10 为 limit 的值


# 歌单
- 歌单分类： /playlist/catlist

- 热门歌单分类：/playlist/hot

- 推荐歌单 /personalized?limit=1
说明 : 调用此接口 , 可获取推荐歌单
可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)

- 歌单 ( 网友精选碟 ):/top/playlist?limit=10&order=new
可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
limit: 取出歌单数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值

- 精品歌单标签列表 /playlist/highquality/tags

- 获取精品歌单：/top/playlist/highquality?before=1503639064232&limit=3
可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
limit: 取出歌单数量 , 默认为 50
before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据

- 获取歌单详情：/playlist/detail?id=24381616
说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
必选参数 : id : 歌单 id

- 获取歌单所有歌曲：/playlist/track/all?id=24381616&limit=10&offset=1
说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲
必选参数 : id : 歌单 id
可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
可选参数 : offset : 默认值为0

- 歌单评论 /comment/playlist?id=705123491
必选参数 : id: 歌单 id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)

- 获取相似歌单 /simi/playlist?id=347230 ( 对应 ' 光辉岁月 ' 相似歌单 )
说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单
必选参数 : id: 歌曲 id


# 获取音乐播放地址
- 获取音乐 url：/song/url?id=33894312 /song/url?id=405998841,33894312
说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
必选参数 : id : 音乐 id
可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推

- 获取音乐 url - 新版 /song/url/v1?id=33894312&level=exhigh /song/url/v1?id=405998841,33894312&level=lossless
说明 : 使用注意事项同上
必选参数 : id : 音乐 id  level: 播放音质等级, 分为 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res

- 获取客户端歌曲下载 url   /song/download/url
说明 : 使用 /song/url 接口获取的是歌曲试听 url, 但存在部分歌曲在非 VIP 账号上可以下载无损音质而不能试听无损音质, 使用此接口可使非 VIP 账号获取这些歌曲的无损音频
必选参数 : id : 音乐 id (仅支持单首歌曲)
可选参数 : br : 码率, 默认设置了 999000 即最大码率, 如果要 320k 则可设置为 320000, 其他类推


# 获取歌词
- 获取歌词 /lyric?id=33894312
必选参数 : id: 音乐 id




# 搜索
- 搜索： /cloudsearch?keywords=海阔天空
说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
必选参数 : keywords : 关键词
可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)

- 默认搜索关键词 /search/default

- 热搜列表(详细) /search/hot/detail





# 歌曲

- 推荐新音乐 /personalized/newsong
说明 : 调用此接口 , 可获取推荐新音乐
可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)

- 新歌速递 /top/song?type=96
必选参数 :type: 地区类型 id,对应以下:全部:0 华语:7 欧美:96 日本:8 韩国:16

- 网易云首页数据 /homepage/block/page

- 歌曲评论 /comment/music?id=186016&limit=1
必选参数 : id: 音乐 id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)

- 获取歌曲详情 /song/detail?ids=347230,/song/detail?ids=347230,347231
说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
必选参数 : ids: 音乐 id, 如 ids=347230
返回字段的详情：https://neteasecloudmusicapi.vercel.app/#/?id=获取歌曲详情





# 专辑
- 获取专辑内容 /album?id=32311
说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
必选参数 : id: 专辑 id

- 专辑动态信息 /album/detail/dynamic?id=32311
说明 : 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
必选参数 : id: 专辑 id






# MV
- 全部 mv /mv/all?area=港台
说明 : 调用此接口 , 可获取全部 mv
可选参数 :
area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
order: 排序,可选值为上升最快,最热,最新,不填则为上升最快
limit: 取出数量 , 默认为 30
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0


- 最新 mv /mv/first?limit=10
说明 : 调用此接口 , 可获取最新 mv
可选参数 : area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
可选参数 : limit: 取出数量 , 默认为 30

- 网易出品 mv /mv/exclusive/rcmd?limit=10
说明 : 调用此接口 , 可获取网易出品 mv
可选参数 : limit: 取出数量 , 默认为 30
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0

- 推荐 mv /personalized/mv
说明 : 调用此接口 , 可获取推荐 mv

- 相似 mv /simi/mv?mvid=5436712
说明 : 调用此接口 , 传入 mvid 可获取相似 mv
必选参数 : mvid: mv id

- mv 评论 /comment/mv?id=5436712
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
必选参数 : id: mv id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)


- mv 排行 /top/mv?limit=10
说明 : 调用此接口 , 可获取 mv 排行
可选参数 : limit: 取出数量 , 默认为 30
area: 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0

- 获取 mv 数据 /mv/detail?mvid=5436712
说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
必选参数 : mvid: mv 的 id

获取 mv 点赞转发评论数数据 /mv/detail/info?mvid=5436712
说明 : 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
必选参数 : mvid: mv 的 id

- mv 地址 /mv/url?id=5436712 /mv/url?id=10896407&r=1080
说明 : 调用此接口 , 传入 mv id,可获取 mv 播放地址
必选参数 : id: mv id
可选参数 : r: 分辨率,默认 1080,可从 /mv/detail 接口获取分辨率列表



# 视频 /video/group/list
- 获取视频标签列表
说明 : 调用此接口 , 可获取视频标签列表

- 获取视频分类列表 /video/category/list
说明 : 调用此接口 , 可获取视频分类列表


- 获取视频标签/分类下的视频 /video/group?id=9104
说明 : 调用此接口 , 传入标签/分类id,可获取到相关的视频,分页参数只能传入 offset
必选参数 : id: videoGroup 的 id
可选参数 : offset: 默认 0

- 获取全部视频列表 /video/timeline/all
说明 : 调用此接口,可获取视频分类列表,分页参数只能传入 offset
可选参数 : offset: 默认 0

- 获取推荐视频  /video/timeline/recommend?offset=10
说明 : 调用此接口, 可获取推荐视频,分页参数只能传入 offset
可选参数 : offset: 默认 0

- 相关视频  /related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D
说明 : 调用此接口 , 可获取相关视频
必选参数 : id: 视频 的 id

- 视频详情  /video/detail?id=89ADDE33C0AAE8EC14B99F6750DB954D
说明 : 调用此接口 , 可获取视频详情
必选参数 : id: 视频 的 id

- 获取视频点赞转发评论数数据 /video/detail/info?vid=89ADDE33C0AAE8EC14B99F6750DB954D
说明 : 调用此接口 , 传入 vid ( 视频 id ) , 可获取对应视频点赞转发评论数数据 必选参数 : vid: 视频 id

- 获取视频播放地址 /video/url?id=89ADDE33C0AAE8EC14B99F6750DB954D
说明 : 调用此接口 , 传入视频 id,可获取视频播放地址
必选参数 : id: 视频 的 id



# 榜单
- 所有榜单 /toplist
说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist

- 排行榜详情 /top/list?id=2809577409
说明: 请使用歌单详情接口,传入排行榜 id 获取排行榜详情数据(排行榜也是歌单的一种)
说明 : 调用此接口 , 传入榜单 id, 可获取不同排行榜数据(v3.34.0 之后不再支持 idx 参数)
必选参数 : id: 榜单 id,通过所有榜单接口获取

- 所有榜单内容摘要 /toplist/detail
说明 : 调用此接口,可获取所有榜单内容摘要

- 歌手榜 /toplist/artist?type=1
说明 : 调用此接口 , 可获取排行榜中的歌手榜
可选参数 :type : 地区 1: 华语 2: 欧美 3: 韩国 4: 日本


# 电台

- 推荐电台 /personalized/djprogram
说明 : 调用此接口 , 可获取推荐电台

- 电台 banner /dj/banner
说明 : 调用此接口,可获取电台 banner

- 电台个性推荐 /dj/personalize/recommend?limit=5
说明 : 调用此接口,可获取电台个性推荐列表 可选参数 :
limit : 返回数量,默认为 6,总条数最多 6 条

- 热门电台 /dj/hot
说明 : 调用此接口,可获取热门电台
可选参数 :
limit : 返回数量 , 默认为 30
offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 接口地址 : /dj/hot

- 电台 - 付费精品 /dj/toplist/pay?limit=30
说明 : 调用此接口,可获取付费精品电台
可选参数 :
limit : 返回数量 , 默认为 100 (不支持 offset)=

- 电台 - 24 小时节目榜 /dj/program/toplist/hours?limit=1
说明 : 调用此接口,可获取 24 小时节目榜
可选参数 :
limit : 返回数量 , 默认为 100 (不支持 offset)

- 电台 - 24 小时主播榜 /dj/toplist/hours?limit=30
说明 : 调用此接口,可获取 24 小时主播榜
可选参数 :
limit : 返回数量 , 默认为 100 (不支持 offset)

- 电台 - 主播新人榜 /dj/toplist/newcomer?limit=30
说明 : 调用此接口,可获取主播新人榜
可选参数 :
limit : 返回数量 , 默认为 100 (不支持 offset)

- 电台 - 最热主播榜 /dj/toplist/popular?limit=30
说明 : 调用此接口,可获取最热主播榜
可选参数 :
limit : 返回数量 , 默认为 100 (不支持 offset)

- 电台 - 类别热门电台
可选参数 :
limit : 返回数量 , 默认为 30
offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
cateId: 类别 id,可通过 /dj/category/recommend 接口获取
调用例子 : /dj/radio/hot?cateId=2001(创作|翻唱) /dj/radio/hot?cateId=10002 (3D|电子)

- 电台 - 付费精选 /dj/paygift?limit=10&offset=20
说明 : 可以获取付费精选的电台列表 , 传入 limit 和 offset 可以进行分页
可选参数 :
limit : 返回数量 , 默认为 30
offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0

- 电台 - 节目详情 /dj/program/detail?id=1367665101
说明 : 调用此接口传入电台节目 id,可获得电台节目详情
必选参数 : id: 电台节目 的 id

- 电台节目评论 /comment/dj?id=794062371
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 ( 不需要登录 )
必选参数 : id: 电台节目的 id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)





# 曲风
- 曲风列表 /style/list
说明: 调用此接口获取曲风列表及其对应的 tagId

- 曲风详情 /style/detail?tagId=1000
说明: 调用此接口可以获取该曲风的描述信息
必选参数: tagId: 曲风 ID

- 曲风-歌曲  /style/song?tagId=1000 /style/song?tagId=1010&sort=1
说明: 调用此接口可以获取该曲风对应的歌曲
必选参数: tagId: 曲风 ID
可选参数 : size : 返回数量 , 默认为 20
cursor : 返回数据的 cursor, 默认为 0 , 传入上一次返回结果的 cursor,将会返回下一页的数据
sort: 排序方式，0: 按热度排序，1: 按时间排序

- 曲风-专辑 /style/album?tagId=1000 /style/album?tagId=1010&sort=1
说明: 调用此接口可以获取该曲风对应的专辑
必选参数: tagId: 曲风 ID
可选参数 : size : 返回数量 , 默认为 20
cursor : 返回数据的 cursor, 默认为 0 , 传入上一次返回结果的 cursor,将会返回下一页的数据
sort: 排序方式，0: 按热度排序，1: 按时间排序

- 曲风-歌单 /style/playlist?tagId=1000
说明: 调用此接口可以获取该曲风对应的歌单
必选参数: tagId: 曲风 ID
可选参数 : size : 返回数量 , 默认为 20
cursor : 返回数据的 cursor, 默认为 0 , 传入上一次返回结果的 cursor,将会返回下一页的数据

- 曲风-歌手 /style/artist?tagId=1000
说明: 调用此接口可以获取该曲风对应的歌手
必选参数: tagId: 曲风 ID
可选参数 : size : 返回数量 , 默认为 20
cursor : 返回数据的 cursor, 默认为 0 , 传入上一次返回结果的 cursor,将会返回下一页的数据



# 首页
- banner /banner, /banner?type=2
说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
可选参数 :
type:资源类型,对应以下类型,默认为 0 即 PC
0: pc
1: android
2: iphone
3: ipad




- 歌曲相关视频 /mlog/music/rcmd
说明： 可以调用此接口获取歌曲相关视频 (区别于 MV)， 有些歌曲没有 MV 但是有用户上传的与此歌曲相关的 Mlog。 此功能仅在 网易云音乐 APP 上存在。
请注意：此接口偶尔会在相关视频后返回不相关视频，请合理使用。
必选参数 : songid : 歌曲 ID
可选参数 : mvid : 如果定义，此 mvid 对应的 MV 将会作为第一个返回。 limit : 取出的 Mlog 数量, 不包含第一个 mvid


- 获取 mlog 播放地址 /mlog/url?id=a1qOVPTWKS1ZrK8
说明 : 调用此接口 , 传入 mlog id, 可获取 mlog 播放地址
必选参数 : id : mlog id
可选参数 : res: 分辨率 , 默认为 1080

- 将 mlog id 转为视频 id  /mlog/to/video?id=a1qOVPTWKS1ZrK8
说明 : 调用此接口 , 传入 mlog id, 可获取 video id，然后通过video/url 获取播放地址
必选参数 : id : mlog id






