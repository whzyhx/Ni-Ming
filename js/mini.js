// addLayer("xw",{ 
//     symbol: "修为", 
//     position: 0,
//     startData() { return {
//         unlocked: true, 
// 		points: new ExpantaNum(0),

//         qian:zero,qianbeishu:n(5),

//         jinlingqi:zero,jinlingqihuoqu:zero,
//         huolingqi:zero,huolingqihuoqu:zero,

//         wayicikuang:n(1),jinbeishu:n(1),
//         yinbaoyici:n(1),huobeishu:n(1),

//         xiaciwakuang:zero,xiacishijian:n(5),

//         unlock_jin_qian:zero,unlock_jin_wajueji:zero,
//         unlock_huo_ranliao:zero,

//         kuanggong_num:zero,kuanggong_price:n(2),
//         wajueji_num:zero,wajueji_price:n(50),

//         ranliaonw:zero,ranliaomx:n(5),ranliaobeishu:n(1),
//     }},
//     color: "magenta",
//     resource: "修为",
//     type: "normal",
//     requires:new ExpantaNum(1e308),
//     exponent:1,
//     baseAmount(){return player.points},
//     baseResource:"想法",
//     gainMult() { 
//         mult = new ExpantaNum(1)
//         return mult
//     },
//     gainExp() { 
//         var exp = new ExpantaNum(1)
//         return exp
//     },
//     tooltip(){return ""},
//     update(diff)
//     {
//         xx().jinlingqi=xx().jinlingqi.add(xx().jinlingqihuoqu.mul(diff))
//         xx().huolingqi=xx().huolingqi.add(xx().huolingqihuoqu.mul(diff))
//         xx().xiaciwakuang=xx().xiaciwakuang.sub(n(1).mul(diff)).max(0)
//         xx().ranliaonw=xx().ranliaonw.div(n(1.1).pow(diff)).max(0.001)
//     },
//     bars: {
//         1: {
//             direction: RIGHT,
//             width: 300,
//             height: 20,
//             fillStyle(){return {"background-color":"brown"}},
//             unlocked(){return true},
//             display(){return `燃料 `+format(xx().ranliaonw)+' / '+format(xx().ranliaomx)},
//             progress() { return xx().ranliaonw.div(100).div(xx().ranliaomx) },
//         },
//     },
//     clickables: {
//         11: {
//             display() {
//                 return '挖矿<br>当前可以获得'+format(xx().wayicikuang.mul(xx().jinbeishu))+'点金灵气'
//             },
//             unlocked(){return true},
//             style(){return {"height":"125px"}},
//             canClick(){return xx().xiaciwakuang.lte(n(0.001))},
//             onClick(){
//                 xx().jinlingqi=xx().jinlingqi.add(xx().wayicikuang.mul(xx().jinbeishu))
//                 xx().xiaciwakuang=xx().xiacishijian
//             }
//         },
//         12: {
//             display() {
//                 return '转化<br>当前可以获得'+format(xx().jinlingqi.div(xx().qianbeishu))+'块钱'
//             },
//             unlocked(){return xx().unlock_jin_qian.gte(0.5)},
//             style(){return {"height":"125px"}},
//             canClick(){return true},
//             onClick(){
//                 xx().qian=xx().qian.add(xx().jinlingqi.div(xx().qianbeishu))
//                 xx().jinlingqi=n(0)
//             }
//         },
//         21: {
//             display() {
//                 return '招募-矿工<br>效果:每秒获得0.5金灵气<br>手动挖矿基础金灵气获取+1<br>当前拥有'+format(xx().kuanggong_num)+'名矿工<br><br>花费:'+format(xx().kuanggong_price)+'块钱'
//             },
//             unlocked(){return xx().unlock_jin_qian.gte(0.5)},
//             style(){return {"height":"125px",'width':"175px"}},
//             canClick(){return xx().qian.gte(xx().kuanggong_price)},
//             onClick(){
//                 xx().qian=xx().qian.sub(xx().kuanggong_price)
//                 xx().kuanggong_num=xx().kuanggong_num.add(1)
//                 xx().kuanggong_price=xx().kuanggong_price.mul(1.2)
//                 xx().jinlingqihuoqu=xx().jinlingqihuoqu.add(0.5)
//                 xx().wayicikuang=xx().wayicikuang.add(1)
//             }
//         },
//         22: {
//             display() {
//                 return '购买-挖掘机<br>效果:每秒获得5金灵气<br>手动挖矿基础金灵气获取+10<br>当前拥有'+format(xx().wajueji_num)+'台挖掘机<br><br>花费:'+format(xx().wajueji_price)+'块钱'
//             },
//             unlocked(){return xx().unlock_jin_wajueji.gte(0.5)},
//             style(){return {"height":"125px",'width':"175px"}},
//             canClick(){return xx().qian.gte(xx().wajueji_price)},
//             onClick(){
//                 xx().qian=xx().qian.sub(xx().wajueji_price)
//                 xx().wajueji_num=xx().wajueji_num.add(1)
//                 xx().wajueji_price=xx().wajueji_price.mul(1.1)
//                 xx().jinlingqihuoqu=xx().jinlingqihuoqu.add(5)
//                 xx().wayicikuang=xx().wayicikuang.add(10)
//             }
//         },
//         31: {
//             display() {
//                 return '引爆<br>引爆一台挖掘机<br>当前可以获得'+format(xx().yinbaoyici.mul(xx().huobeishu))+'点火灵气'
//             },
//             unlocked(){return true},
//             style(){return {"height":"125px"}},
//             canClick(){return xx().wajueji_num.gte(n(1))},
//             onClick(){
//                 xx().huolingqi=xx().huolingqi.add(xx().yinbaoyici.mul(xx().huobeishu))
//                 xx().wajueji_num=xx().wajueji_num.sub(1)
//                 xx().wajueji_price=xx().wajueji_price.div(1.1)
//                 xx().jinlingqihuoqu=xx().jinlingqihuoqu.sub(5)
//                 xx().wayicikuang=xx().wayicikuang.sub(10)
//             }
//         },
//         32: {
//             display() {
//                 return '加油<br>把一点火灵气转化成燃料'
//             },
//             unlocked(){return true},
//             style(){return {"height":"125px"}},
//             canClick(){return xx().huolingqi.gte(n(1))},
//             onClick(){
//                 xx().huolingqi=xx().huolingqi.sub(1)
//                 xx().ranliaonw=xx().ranliaonw.add(1).min(xx().ranliaomx)
//             }
//         },
//     },
//     upgrades:{
//         11:{
//             fullDisplay(){
//                 return "凝聚<br>用一些金灵气凝聚一把更好的钻头<br>效果:基础金灵气获取+1<br><br>花费:5金灵气"
//             },
//             onPurchase(){
//                 xx().jinlingqi=xx().jinlingqi.sub(5)
//                 xx().wayicikuang=xx().wayicikuang.add(1)
//             },
//             canAfford(){
//                 return xx().jinlingqi.gte(5)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return true},
//         },
//         12:{
//             fullDisplay(){
//                 return "抗磨<br>用金灵气加固钻头<br>效果:挖矿间隔-1<br><br>花费:10金灵气"
//             },
//             onPurchase(){
//                 xx().jinlingqi=xx().jinlingqi.sub(10)
//                 xx().xiacishijian=xx().xiacishijian.sub(1)
//             },
//             canAfford(){
//                 return xx().jinlingqi.gte(10)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",11)},
//         },
//         13:{
//             fullDisplay(){
//                 return "钱<br>你想到自己可以用金灵气来赚钱!<br>效果:解锁子面板-钱<br><br>花费:20金灵气"
//             },
//             onPurchase(){
//                 xx().jinlingqi=xx().jinlingqi.sub(20)
//                 xx().unlock_jin_qian=n(1)
//             },
//             canAfford(){
//                 return xx().jinlingqi.gte(20)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",12)},
//         },
//         14:{
//             fullDisplay(){
//                 return "双钻头<br>两只手各拿一个钻头!<br>效果:手动挖矿效率翻倍<br><br>花费:40金灵气"
//             },
//             onPurchase(){
//                 xx().jinlingqi=xx().jinlingqi.sub(40)
//                 xx().jinbeishu=xx().jinbeishu.mul(2)
//             },
//             canAfford(){
//                 return xx().jinlingqi.gte(40)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",13)},
//         },
//         21:{
//             fullDisplay(){
//                 return "研究-挖掘机<br>你现在可以购买挖掘机了<br><br>花费:100金灵气"
//             },
//             onPurchase(){
//                 xx().jinlingqi=xx().jinlingqi.sub(100)
//                 xx().unlock_jin_wajueji=n(2)
//             },
//             canAfford(){
//                 return xx().jinlingqi.gte(100)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",14)},
//         },
//         211:{
//             fullDisplay(){
//                 return "爆破钻头<br>用一些火灵气给你的钻头附魔<br>效果:手动挖矿效率翻倍<br><br>花费:5火灵气"
//             },
//             onPurchase(){
//                 xx().huolingqi=xx().huolingqi.sub(5)
//                 xx().jinbeishu=xx().jinbeishu.mul(2)
//             },
//             canAfford(){
//                 return xx().huolingqi.gte(5)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return true},
//         },
//         212:{
//             fullDisplay(){
//                 return "思维火花<br>用火灵气强化你的大脑!<br>效果:解锁组合升级<br><br>花费:10火灵气"
//             },
//             onPurchase(){
//                 xx().huolingqi=xx().huolingqi.sub(10)
//             },
//             canAfford(){
//                 return xx().huolingqi.gte(10)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",211)},
//         },
//         213:{
//             fullDisplay(){
//                 return "燃料<br>金灵气和火灵气的混合!<br>效果:解锁燃料<br><br>花费:20火灵气 10000金灵气"
//             },
//             onPurchase(){
//                 xx().huolingqi=xx().huolingqi.sub(20)
//                 xx().jinlingqi=xx().jinlingqi.sub(10000)
//                 xx().unlock_huo_ranliao=n(2)
//             },
//             canAfford(){
//                 return xx().huolingqi.gte(20) && xx().jinlingqi.gte(10000)
//             },
//             style(){return {"height":"125px"}},
//             unlocked(){return hasUpgrade("xw",212)},
//         },
//     },
//     milestones: {
//     },
// 	microtabs:{
//         "金":{
// 			"挖矿":{
// 				content:[
//                     "blank",
//                     ["display-text",
//                         function() { return '距离下次挖矿还剩'+format(xx().xiaciwakuang)+'秒'},
//                         { "color": "white", "font-size": "20px",}
//                     ],
//                     "blank",
//                     ["row",[["clickable",11],]]
// 				]
// 			},
//             "升级":{
// 				content:[
//                     "blank",
//                     ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14],]],
//                     ["row",[["upgrade",21],]],
// 				]
//             },
//             "钱":{
//                 unlocked(){return xx().unlock_jin_qian.gte(0.5)},
// 				content:[
//                     "blank",
//                     ["display-text",
//                         function() { return '你有'+format(xx().qian)+'块钱'},
//                         { "color": "gold", "font-size": "20px",}
//                     ],
//                     "blank",
//                     ["row",[["clickable",12],]],
//                     "blank",
//                     "blank",
//                     "blank",
//                     "blank",
//                     ["row",[["clickable",21],]],
//                     "blank",
//                     ["row",[["clickable",22],]],
// 				]
//             }
// 		},
//         "火":{
// 			"引爆":{
// 				content:[
//                     "blank",
//                     ["row",[["clickable",31],]]
// 				]
// 			},
//             "升级":{
// 				content:[
//                     "blank",
//                     ["row",[["upgrade",211],["upgrade",212],["upgrade",213],]],
// 				]
//             },
//             "燃料":{
// 				content:[
//                     "blank",
//                     ["row",[["bar",1],]],
//                     "blank",
//                     ["display-text",
//                         function() { return '你每秒损失10%的燃料'},
//                         { "color": "white", "font-size": "20px",}
//                     ],
//                     "blank",
//                     ["row",[["clickable",32],]]
// 				]
//             },
// 		},
// 	},
//     tabFormat: {
//         金: {
//             content:["blank",
//                     ["display-text",
//                         function() { return '你有'+format(xx().jinlingqi)+'点金灵气(+'+format(xx().jinlingqihuoqu)+'点/秒)'},
//                         { "color": "gold", "font-size": "24px",}
//                     ],
//                     "blank",
//                     "blank",
//                     ["microtabs","金",{'border-width':'0px'}],
//                 ],
//         },
//         火: {
//             unlocked(){return hasUpgrade('xw',21)},
//             content:["blank",
//                     ["display-text",
//                         function() { return '你有'+format(xx().huolingqi)+'点火灵气(+'+format(xx().huolingqihuoqu)+'点/秒)'},
//                         { "color": "red", "font-size": "24px",}
//                     ],
//                     "blank",
//                     "blank",
//                     ["microtabs","火",{'border-width':'0px'}],
//                 ],
//         },
//     },
//     row: 5,
//     layerShown(){return d().dengji.gte(2000)},
// })
addLayer("xw",{
    symbol: "修为", 
    position: 0,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "magenta",
    resource: "修为",
    type: "normal",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount(){return player.points},
    baseResource:"想法",
    gainMult() { 
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { 
        var exp = new ExpantaNum(1)
        return exp
    },
    tooltip(){return ""},
    update(diff){
        d().jindutiao_lingqi=d().jindutiao_lingqi.add(diff)
        if(d().jindutiao_lingqi.gte(5.001))
        {
            var x=d().jindutiao_lingqi.div(5).floor()
            d().jindutiao_lingqi=d().jindutiao_lingqi.sub(n(5).mul(x))
            d().lingqi=d().lingqi.add(d().lingqihuoqu.mul(x))
        }
    },
    bars: {
        1: {
            direction: RIGHT,
            width: 300,
            height: 20,
            fillStyle(){return {"background-color":"cyan"}},
            unlocked(){return true},
            display(){return `时间 `+format(d().jindutiao_lingqi)+' / 5.00'},
            progress() { return d().jindutiao_lingqi.div(5) },
        },
    },
    clickables:{
        11: {
            display() {
                if(d().jingjiedengji.gte(n(48.5)))
                {
                    return `已达该版本上限`
                }
                return '破境'
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().jingjiedengji.lte(n(48.5)) && d().lingqi.gte(d().jingjiexuyao[d().jingjiedengji])},
            onClick(){
                d().lingqi=d().lingqi.sub(d().jingjiexuyao[d().jingjiedengji])
                d().jingjiedengji=d().jingjiedengji.add(1)

                var x=n(d().jingjieshuxing[d().jingjiedengji.sub(1)])
                var y=n(d().jingjieshuxing[d().jingjiedengji])

                d().gongjibeishu=d().gongjibeishu.div(x)
                d().qiegebeishu=d().qiegebeishu.div(x)
                d().fangyubeishu=d().fangyubeishu.div(x)
                d().shengmingbeishu=d().shengmingbeishu.div(x)
                d().shengminghuifubeishu=d().shengminghuifubeishu.div(x)
                d().gongji=d().gongji.div(x)
                d().qiege=d().qiege.div(x)
                d().fangyu=d().fangyu.div(x)
                d().shengmingmx=d().shengmingmx.div(x)
                d().shengminghuifu=d().shengminghuifu.div(x)

                d().gongjibeishu=d().gongjibeishu.mul(y)
                d().qiegebeishu=d().qiegebeishu.mul(y)
                d().fangyubeishu=d().fangyubeishu.mul(y)
                d().shengmingbeishu=d().shengmingbeishu.mul(y)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(y)
                d().gongji=d().gongji.mul(y)
                d().qiege=d().qiege.mul(y)
                d().fangyu=d().fangyu.mul(y)
                d().shengmingmx=d().shengmingmx.mul(y)
                d().shengminghuifu=d().shengminghuifu.mul(y)
            }
        },
        21: {
            display() {
                return `一键放入-青铜装备`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().touruqingtongzhuangbei=d().touruqingtongzhuangbei.add(d().qingtongzhuangbei)
                d().qingtongzhuangbei=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
        22: {
            display() {
                return `一键放入-白银装备`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().tourubaiyingzhuangbei=d().tourubaiyingzhuangbei.add(d().baiyingzhuangbei)
                d().baiyingzhuangbei=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
        23: {
            display() {
                return `一键放入-黄金装备`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().touruhuangjinzhuangbei=d().touruhuangjinzhuangbei.add(d().huangjinzhuangbei)
                d().huangjinzhuangbei=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
        24: {
            display() {
                return `一键放入-宠物丹`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().touruchongwudan=d().touruchongwudan.add(d().chongwudan)
                d().chongwudan=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
        25: {
            display() {
                return `一键放入-裁决`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().tourucaijue=d().tourucaijue.add(d().caijue)
                d().caijue=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
        26: {
            display() {
                return `一键放入-龙纹甲`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().tourulongwenjia=d().tourulongwenjia.add(d().longwenjia)
                d().longwenjia=n(0)
                var x=one
                x=x.add(d().tourucaijue)
                x=x.add(d().tourulongwenjia)
                x=x.mul(d().touruqingtongzhuangbei.pow(0.2).add(1))
                x=x.mul(d().tourubaiyingzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruhuangjinzhuangbei.pow(0.2).add(1))
                x=x.mul(d().touruchongwudan.pow(0.2).add(1))
                d().lingqihuoqu=x
            }
        },
    },
    upgrades:{
        11:{
            fullDisplay(){
                return "激活-<text style='color:cyan'>聚灵阵</text><br><br>消耗:1E金钱"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(1e8)
                d().lingqihuoqu=n(1)
            },
            canAfford(){
                return d().jinbi.gte(1e8)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
    },
    milestones: {
    },
	microtabs:{
	},
    tabFormat: {
        主界面:{
            content:[
                "blank",
                ["display-text",
                    function() { return '你共有'+format(d().lingqi)+'点灵气'},
                    { "color": "cyan", "font-size": "28px",}
                ],
                "blank",
                "blank",
                ["display-image",()=>{
                    return 'js/images/julingzhen1.png'
                }, {maxWidth:'100%',maxHeight:'100%',position: 'relative'}],
                "blank",
                ["row",[["bar",1],]],
                ["display-text",
                    function() { return '你每5秒获取'+format(d().lingqihuoqu)+'点灵气'},
                    { "color": "cyan", "font-size": "20px",}
                ],
                "blank",
                "blank",
                "blank",
                "blank",
                ["row",[["upgrade",11],]],
            ]
        },
        境界:{
            content:[
                "blank",
                ["display-image",()=>{
                    if(d().jingjiedengji.lte(9))
                    {
                        return 'js/images/lianqi.png'
                    }
                    if(d().jingjiedengji.lte(19))
                    {
                        return 'js/images/zhuji.png'
                    }
                    if(d().jingjiedengji.lte(29))
                    {
                        return 'js/images/jindan.png'
                    }
                    if(d().jingjiedengji.lte(39))
                    {
                        return 'js/images/yuanying.png'
                    }
                    if(d().jingjiedengji.lte(49))
                    {
                        return 'js/images/fenshen.png'
                    }
                }, {maxWidth:'100%',maxHeight:'100%',position: 'relative'}],
                "blank",
                ["display-text",
                    function() { return d().jingjiemingcheng[d().jingjiedengji]},
                    {"font-size": "24px",}
                ],
                "blank",
                ["display-text",
                    function() { return '下一级需要'+format(d().jingjiexuyao[d().jingjiedengji])+'点灵气'},
                    { "color": "cyan", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前倍数:'+format(d().jingjieshuxing[d().jingjiedengji])+'x'},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '下一级倍数:'+format(d().jingjieshuxing[d().jingjiedengji.add(1)])+'x'},
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row",[["clickable",11],]],
            ]
        },
        建造:{
            unlocked(){return hasUpgrade("xw",11)},
            content:[
                "blank",
                ["display-text",
                    function() { return '当前已经投入'+format(d().touruqingtongzhuangbei)+'件青铜装备,给你的灵气吸收效率x'+format(d().touruqingtongzhuangbei.pow(0.2).add(1))},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前已经投入'+format(d().tourubaiyingzhuangbei)+'件白银装备,给你的灵气吸收效率x'+format(d().tourubaiyingzhuangbei.pow(0.2).add(1))},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前已经投入'+format(d().touruhuangjinzhuangbei)+'件黄金装备,给你的灵气吸收效率x'+format(d().touruhuangjinzhuangbei.pow(0.2).add(1))},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前已经投入'+format(d().touruchongwudan)+'颗宠物丹,给你的灵气吸收效率x'+format(d().touruchongwudan.pow(0.2).add(1))},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前已经投入'+format(d().tourucaijue)+'把裁决,给你的基础灵气吸收效率+'+format(d().tourucaijue)},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '当前已经投入'+format(d().tourulongwenjia)+'件龙纹甲,给你的基础灵气吸收效率+'+format(d().tourulongwenjia)},
                    { "color": "white", "font-size": "20px",}
                ],
                "blank",
                "blank",
                "blank",
                "blank",
                ["row",[["clickable",21],["clickable",22],["clickable",23],["clickable",24],]],
                ["row",[["clickable",25],["clickable",26],]],
            ]
        }
    },
    row: 5,
    layerShown(){return d().dengji.gte(2000)},
})