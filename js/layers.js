function d(){return player.data}
addLayer("data",{
    symbol: "data",
    position: 2,
    startData(){return{
            unlocked: true,
		    points: new ExpantaNum(0),
            xiuxi: new ExpantaNum(0),
            gongji: two,gongjibeishu: one,
            shengmingnw: ten,shengmingmx: ten,shengmingbeishu: one,
            shengminghuifu: one,shengminghuifubeishu: one,
            fangyu: one,fangyubeishu: one,
            zhanli: one,
            qiege: zero,qiegebeishu: one,
            jinbi: zero,
            dengji: zero,jingyan: zero,xuqiu: ten,
            qingtongzhuangbei: zero,baiyingzhuangbei: zero,


            haskilled11: zero,haskilled12: zero,haskilled13: zero,haskilled14: zero,
            haskilled21: zero,haskilled22: zero,haskilled23: zero,
            haskilled31: zero,haskilled32: zero,haskilled33: zero,haskilled34: zero,
            haskilled41: zero,haskilled42: zero,haskilled43: zero,haskilled44: zero,
            lastjipin10:zero,
            last2: zero,last4: zero,last6: zero,last8: zero,last10:zero,


            qingtong1nw: zero,qingtong1mx: zero,qingtong1shuzhi: zero,
            qingtong2nw: zero,qingtong2mx: zero,qingtong2shuzhi: zero,
            qingtong3nw: zero,qingtong3mx: zero,qingtong3shuzhi: zero,
            qingtong4nw: zero,qingtong4mx: zero,qingtong4shuzhi: zero,
            haveqingtongtaozhuang1: zero,haveqingtongtaozhuang2: zero,haveqingtongtaozhuang3: zero,haveqingtongtaozhuang4: zero,haveqingtongtaozhuang5: zero,
            
            
            baiying1nw: zero,baiying1mx: zero,baiying1shuzhi: zero,
            baiying2nw: zero,baiying2mx: zero,baiying2shuzhi: zero,
            baiying3nw: zero,baiying3mx: zero,baiying3shuzhi: zero,
            baiying4nw: zero,baiying4mx: zero,baiying4shuzhi: zero,
            havebaiyingtaozhuang1: zero,havebaiyingtaozhuang2: zero,havebaiyingtaozhuang3: zero,havebaiyingtaozhuang4: zero,havebaiyingtaozhuang5: zero,
            
            
            chongwudan: zero,chongwudengji: zero,chongwudanxuqiu: two,
            
            
            jiesuotujian1: zero,jiesuotujian2: zero,jiesuotujian33333: zero,
            jiesuotujian4:zero,jiesuotujian5:zero,jiesuotujian6:zero,
            jiesuotujian7:zero,jiesuotujian8:zero,jiesuotujian9:zero,
            moxue: zero,moxuexuqiu:n(100),moxuejiejing:zero,moxuejiejingxuqiu:one,cuitidengji:zero,
            moqiruti:zero,moqirutijianshao:new ExpantaNum(0.1),debuff1:one,


            killall:zero,hunqidengji:zero,hunqinw:zero,hunqimx:zero,uu:zero,

            
            zidongguajichacao:one,zongxuqiu:zero,
            guajibeishu:one,


            player_pos1_x:one,player_pos1_y:one,guaiwu1_x:[],guaiwu1_y:[],

            
            caijue:zero,jihuocaijue:zero,
            shidufen:zero,caijuecuidudengji:zero,


            baoshicanpian:zero,
            qingtong1baoshi:zero,qingtong2baoshi:zero,qingtong3baoshi:zero,qingtong4baoshi:zero,
            baiying1baoshi:zero,baiying2baoshi:zero,baiying3baoshi:zero,baiying4baoshi:zero,
            onejixuejingshi:zero,twojixuejingshi:zero,threejixuejingshi:zero,
            onejihongjingshi:zero,twojihongjingshi:zero,threejihongjingshi:zero,
            onejilanjingshi:zero,twojilanjingshi:zero,threejilanjingshi:zero,
            onejilvjingshi:zero,twojilvjingshi:zero,threejilvjingshi:zero,
        }
    },
    color: "red",
    resource: "状态",
    type: "none",
    requires:new ExpantaNum(1),
    exponent:1,
    baseAmount(){return player.points},
    baseResource:"广告",
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() {
        var exp = new ExpantaNum(1)
        return exp
    },
    layerShown(){return false},
})
addLayer("m",{  
    symbol: "面板", 
    position: 0,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "white",
    resource: "面板",
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
    update(diff){
        if(d().killall.gte(1000))
        {
            d().uu=n(1)
        }
        var x=one
        x=x.mul(d().gongji)
        x=x.mul(d().shengmingmx)
        x=x.mul(d().fangyu)
        x=x.mul(d().shengminghuifu)
        x=x.root(4)
        d().zhanli=x
        d().shengmingnw=d().shengmingnw.add(d().shengminghuifu.mul(diff))
        d().shengmingnw=d().shengmingnw.min(d().shengmingmx)
        if(d().dengji.gte(10))d().xuqiu=n(30)
        if(d().dengji.gte(15))d().xuqiu=n(50)
        if(d().dengji.gte(20))d().xuqiu=n(100)
        if(d().dengji.gte(50))d().xuqiu=n(500)
        if(d().dengji.gte(100))d().xuqiu=n(1000)
        if(d().dengji.gte(200))d().xuqiu=n(3000)
        if(d().dengji.gte(300))d().xuqiu=n(5000)
        if(d().dengji.gte(500))d().xuqiu=n(10000)
        if(d().dengji.gte(1000))d().xuqiu=n(100000)
        if(d().dengji.gte(2000))d().xuqiu=n(300000)
        if(d().dengji.gte(2500))d().xuqiu=n(500000)
        if(d().dengji.gte(3000))d().xuqiu=n(1000000)
        if(d().dengji.gte(3500))d().xuqiu=n(2000000)
        if(d().dengji.gte(4000))d().xuqiu=n(5000000)
        if(d().dengji.gte(5000))d().xuqiu=n(10000000)
        if(d().dengji.gte(6000))d().xuqiu=n(20000000)
        if(d().dengji.gte(6500))d().xuqiu=n(25000000)
        if(d().dengji.gte(7000))d().xuqiu=n(30000000)
        if(d().dengji.gte(8000))d().xuqiu=n(50000000)
        if(d().dengji.gte(10000))d().xuqiu=n(100000000)
        if(d().moqiruti.gte(d().moqirutijianshao.mul(diff).mul(d().hunqimx.div(100).add(1))))
        {
            d().moqiruti=d().moqiruti.sub(d().moqirutijianshao.mul(diff).mul(d().hunqimx.div(100).add(1)))
        }
        d().moqiruti=d().moqiruti.max(0)
        x=new ExpantaNum(0.99)
        d().debuff1=x.pow(d().moqiruti)
    },
    tooltip(){return ""},
    clickables: {
        11: {
            display() {
                return `升级`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().jingyan.gte(d().xuqiu)},
            onClick(){
                if(d().jingyan.lte(d().xuqiu))
                {
                    return ""
                }
                d().jingyan=d().jingyan.sub(d().xuqiu)
                d().dengji=d().dengji.add(1)
                var x=two
                x=x.mul(d().gongjibeishu)
                d().gongji=d().gongji.add(x)
                x=new ExpantaNum(0.2)
                x=x.mul(d().fangyubeishu)
                d().fangyu=d().fangyu.add(x)
                x=new ExpantaNum(0.1)
                x=x.mul(d().shengminghuifubeishu)
                d().shengminghuifu=d().shengminghuifu.add(x)
                x=new ExpantaNum(10)
                x=x.mul(d().shengmingbeishu)
                d().shengmingmx=d().shengmingmx.add(x)
            }
        },
        21: {
            display() {
                return `魔血灌体<br>疯狂锻炼,直到耗尽最后一丝体力<br>作为回报,你的生命被提炼成了魔血`
            },
            style(){return {"height":"130px","width":"130px","color":"purple","background-color":"red","border-color":"purple","border-width":"5px"}},
            unlocked(){return true},
            canClick(){return true},
            onClick(){
                var x=d().shengmingnw
                x=x.div(10)
                d().shengmingnw=n(1)
                d().moxue=d().moxue.add(x)
            }
        },
        22: {
            display() {
                return `淬体<br>用魔血冲击魔血结晶,爆发出的力量让你的体魄更加强大`
            },
            style(){return {"height":"130px","width":"130px","color":"orange","background-color":"purple","border-color":"orange","border-width":"5px"}},
            unlocked(){return true},
            canClick(){return d().moxue.gte(d().moxuexuqiu) && d().moxuejiejing.gte(d().moxuejiejingxuqiu)},
            onClick(){
                if(d().moxue.lte(d().moxuexuqiu) || d().moxuejiejing.lte(d().moxuejiejingxuqiu.sub(0.01)))
                {
                    return ""
                }
                d().moxue=d().moxue.sub(d().moxuexuqiu)
                d().moxuejiejing=d().moxuejiejing.sub(d().moxuejiejingxuqiu)
                d().cuitidengji=d().cuitidengji.add(1)
                var x=two
                x=x.mul(10)
                x=x.mul(d().gongjibeishu)
                d().gongji=d().gongji.add(x)
                x=new ExpantaNum(0.2)
                x=x.mul(10)
                x=x.mul(d().fangyubeishu)
                d().fangyu=d().fangyu.add(x)
                x=new ExpantaNum(0.1)
                x=x.mul(10)
                x=x.mul(d().shengminghuifubeishu)
                d().shengminghuifu=d().shengminghuifu.add(x)
                x=new ExpantaNum(10)
                x=x.mul(10)
                x=x.mul(d().shengmingbeishu)
                d().shengmingmx=d().shengmingmx.add(x)
                d().moxuexuqiu=d().moxuexuqiu.mul(1.01)
                d().moxuejiejingxuqiu=d().cuitidengji.add(1).div(25).ceil()
            }
        },
        31: {
            display() {
                return '洗炼魂器<br>每次洗炼消耗'+format(d().hunqidengji.add(1).mul(5))+'击杀次数<br>洗炼到当前最大值后,魂器等级+1<br>当前数值:'+format(d().hunqinw)
            },
            style(){return {"height":"125px","width":"225px","color":"blue","background-color":"#BCC6CC","border-color":"blue","border-width":"5px"}},
            unlocked(){return true},
            canClick(){return d().killall.gte(d().hunqidengji.add(1).mul(5))},
            onClick(){
                if(d().killall.lte(d().hunqidengji.add(1).mul(5)))
                {
                    return ""
                }
                var x=zero
                x=x.add(Math.random())
                x=x.mul(100).add(1).floor().min(100)
                d().hunqinw=x.add(d().hunqidengji.mul(100))
                d().hunqimx=d().hunqimx.max(d().hunqinw)
                if(x.gte(99.9))
                {
                    d().hunqidengji=d().hunqidengji.add(1)
                }
                d().killall=d().killall.sub(d().hunqidengji.add(1).mul(5))
            }
        },
    },
    milestones: {
        0: {
            requirementDescription: "Lv.5",
            effectDescription: `解锁装备`,
            done() {return d().dengji.gte(5)},
        },
        1: {
            requirementDescription: "Lv.20",
            effectDescription: `解锁宠物`,
            unlocked(){return hasMilestone("m",0)},
            done() {return d().dengji.gte(20)},
        },
        2: {
            requirementDescription: "Lv.50",
            effectDescription: `解锁图鉴`,
            unlocked(){return hasMilestone("m",1)},
            done() {return d().dengji.gte(50)},
        },
        3: {
            requirementDescription: "Lv.100",
            effectDescription: `解锁VIP`,
            unlocked(){return hasMilestone("m",2)},
            done() {return d().dengji.gte(100)},
        },
        4: {
            requirementDescription: "Lv.200",
            effectDescription: `解锁淬体`,
            unlocked(){return hasMilestone("m",3)},
            done() {return d().dengji.gte(200)},
        },
        5: {
            requirementDescription: "Lv.500",
            effectDescription: `解锁神兵`,
            unlocked(){return hasMilestone("m",4)},
            done() {return d().dengji.gte(500)},
        },
        6: {
            requirementDescription: "Lv.750",
            effectDescription: `解锁秘境`,
            unlocked(){return hasMilestone("m",5)},
            done() {return d().dengji.gte(750)},
        },
        7: {
            requirementDescription: "Lv.900",
            effectDescription: `解锁宝石`,
            unlocked(){return hasMilestone("m",6)},
            done() {return d().dengji.gte(900)},
        },
        8: {
            requirementDescription: "千人斩",
            effectDescription: `解锁淬魂`,
            unlocked(){return true},
            done() {return d().killall.gte(1000)},
        },
    },
    tabFormat: {
        属性: {
            content:["blank",
            ["display-text",
                function() { return '战力:' + format(d().zhanli)},
                { "color": "white", "font-size": "30px",}
            ],
            ["display-text",
                function() { return '攻击:' + format(d().gongji)},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '攻击倍数:' + format(d().gongjibeishu) + 'x'},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '防御:' + format(d().fangyu)},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '防御倍数:' + format(d().fangyubeishu) + 'x'},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '当前生命:' + format(d().shengmingnw)},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命上限:' + format(d().shengmingmx)},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命倍数:' + format(d().shengmingbeishu) + 'x'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命回复:' + format(d().shengminghuifu) + '点/秒'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命回复倍数:' + format(d().shengminghuifubeishu) + 'x'},
                { "color": "green", "font-size": "24px",}
            ],
            "blank",
            ["display-text",
                function() { return '切割伤害:' + format(d().qiege)},
                { "color": "purple", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '切割倍数:' + format(d().qiegebeishu)+'x'},
                { "color": "purple", "font-size": "24px",}
            ],
            "blank",
            ["display-text",
                function() { return '你有' + format(d().jinbi) + '金币'},
                { "color": "gold", "font-size": "24px",}
            ],
            ],
        },
        等级: {
            content:["blank",
        ["display-text",
            function() { return '你当前是 ' + format(d().dengji) + ' 级' },
            { "color": "white", "font-size": "28px",}
        ],
        ["display-text",
            function() { return '你现在有 ' + format(d().jingyan) + ' 点经验' },
            { "color": "white", "font-size": "28px",}
        ],
        ["display-text",
            function() { return '下一次升级需要 ' + format(d().xuqiu) + ' 点经验' },
            { "color": "white", "font-size": "28px",}
        ],
        "blank",
        "blank",
        "blank",
        ["row", [ ["clickable", 11],]],
        "blank",
        "blank",
        "blank",
        "milestones",
    ],
        },
        背包: {
            content:["blank",
            ["display-text",
                function() { return '你有 ' + format(d().qingtongzhuangbei) + ' 青铜装备' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().baiyingzhuangbei) + ' 白银装备' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().chongwudan) + ' 宠物丹' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().moxue) + ' 魔血' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().moxuejiejing) + ' 魔血结晶' },
                { "color": "white", "font-size": "28px",}
            ],
            "blank",
            ["display-text",
                function() { return '你有 ' + format(d().caijue) + ' 裁决' },
                { "color": "white", "font-size": "28px",}
            ],
        ],
        },
        淬体: {
            unlocked(){return d().dengji.gte(200)},
            buttonStyle(){return {"color":"red","border-color":"red"}},
            content:[
                ["display-text",
                    function() { return '当前生命:' + format(d().shengmingnw)},
                    { "color": "red", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你有' + format(d().moxue)+'点魔血(+'+format((hasUpgrade("vip",241)?d().shengminghuifu.add(1).root(2):n(0)))+'点/秒)'},
                    { "color": "purple", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你有' + format(d().moxuejiejing)+'块魔血结晶'},
                    { "color": "orange", "font-size": "24px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row", [ ["clickable", 21],]],
                "blank",
                "blank",
                "blank",
                ["display-text",
                    function() { return '你当前已经淬体了' + format(d().cuitidengji)+'次'},
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '下一次淬体需要' + format(d().moxuexuqiu)+'点魔血'},
                    { "color": "purple", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '下一次淬体需要' + format(d().moxuejiejingxuqiu)+'块魔血结晶'},
                    { "color": "orange", "font-size": "24px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row", [ ["clickable", 22],]],
            ],
        },
        淬魂: {
            unlocked(){return d().uu.gte(1)},
            buttonStyle(){return {"color":"blue","border-color":"blue"}},
            content:[
                ["display-text",
                    function() { return '浴血让你无所畏惧'},
                    { "color": "red", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你还有' + format(d().killall)+'次击杀数'},
                    { "color": "blue", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你的魂器当前是' + format(d().hunqidengji)+'级'},
                    { "color": "purple", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你的魂器当前洗炼的属性范围是' + format(d().hunqidengji.mul(100))+'~'+format(d().hunqidengji.add(1).mul(100))+'点'},
                    { "color": "blue", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你的魂器让你的负面状态以' + format(d().hunqimx.div(100).add(1))+'倍的速度消散'},
                    { "color": "blue", "font-size": "24px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row", [ ["clickable", 31],]],
            ],
        },
    },
    row: 1,
    branches:['j'],
    layerShown(){return true},
})
addLayer("z",{
    symbol: "战斗",
    position: 1,
    startData(){return{
            unlocked: true,
		    points: new ExpantaNum(0),
        }
    },
    tooltip(){return ""},
    color: "red",
    resource: "战斗",
    type: "none",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount(){return player.points},
    baseResource:"点数",
    branches:['j'],
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() {
        var exp = new ExpantaNum(1)
        return exp
    },
    need(xe,gng,fng){
        var xue=n(xe)
        var gong=n(gng)
        var fang=n(fng)
        var tm=xue.div(d().gongji.div(fang).add(d().qiege)).ceil()
        var kouxue=tm.mul(gong.div(d().fangyu.mul(d().debuff1)))
        return kouxue
    },
    canget2(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.8)
    },
    canget2string(){
        var x=zero
        x=x.add(player.data.last2)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    canget4(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.8)
    },
    canget4string(){
        var x=zero
        x=x.add(player.data.last4)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    canget6(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.8)
    },
    canget6string(){
        var x=zero
        x=x.add(player.data.last6)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    canget8(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.9)
    },
    canget8string(){
        var x=zero
        x=x.add(player.data.last8)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    canget10_1(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.999)
    },
    canget10_2(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.9)
    },
    canget10string(){
        var x=zero
        x=x.add(d().last10)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    clickables: {
        11: {
            display() {
                return '鸡<br>5血 1攻 1防<br>掉落:1经验 1金币<br>当前扣血:'+format(layers.z.need(5,1,1))+'点<br>已击杀:'+format(d().haskilled11)+'次'
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(5,1,1))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(5,1,1)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(5,1,1))
                d().jingyan=d().jingyan.add(1)
                d().jinbi=d().jinbi.add(1)
                d().haskilled11=d().haskilled11.add(1)
                d().killall=d().killall.add(1)
            }
        },
        12: {
            display() {
                return '鹿<br>20血 5攻 2防<br>掉落:3经验 2金币<br><text style="color:white">(20%)1青铜装备</text><br>当前扣血:'+format(layers.z.need(20,5,2))+'点<br>上次是否获得物品:'+layers.z.canget2string()+'<br>已击杀:'+format(d().haskilled12)+'次'
            },
            style(){return {"width":"150px","height":"125px"}},
            unlocked(){return d().haskilled11.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(20,5,2))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(20,5,2)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(20,5,2))
                d().jingyan=d().jingyan.add(3)
                d().jinbi=d().jinbi.add(2)
                d().haskilled12=d().haskilled12.add(1)
                if(layers.z.canget2()){
                    d().last2=n(1)
                    d().qingtongzhuangbei=d().qingtongzhuangbei.add(1)
                }
                else{
                    d().last2=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        13: {
            display() {
                return '稻草人<br>100血 30攻 5防<br>掉落:5经验 10金币<br>当前扣血:'+format(layers.z.need(100,30,5))+'点<br>已击杀:'+format(d().haskilled13)+'次'
            },
            unlocked(){return d().haskilled12.gte(1)},
            style(){return {"height":"125px","width":"125px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(100,30,5))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(100,30,5)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(100,30,5))
                d().jingyan=d().jingyan.add(5)
                d().jinbi=d().jinbi.add(10)
                d().haskilled13=d().haskilled13.add(1)
                d().killall=d().killall.add(1)
            }
        },
        //style() {return {'height':'175px','width':'175px'}},
        14: {
            display() {
                return '多钩猫<br>500血 100攻 20防<br>掉落:50经验 100金币<br><text style="color:white">(20%)1宠物丹</text><br>当前扣血:'+format(layers.z.need(500,100,20))+'点<br>上次是否获得物品:'+layers.z.canget4string()+'<br>已击杀:'+format(d().haskilled14)+'次'
            },
            style() {return {'height':'200px','width':'200px'}},
            unlocked(){return d().haskilled13.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(500,100,20))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(500,100,20)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(500,100,20))
                d().jingyan=d().jingyan.add(50)
                d().jinbi=d().jinbi.add(100)
                d().haskilled14=d().haskilled14.add(1)
                if(layers.z.canget4()){
                    d().last4=n(1)
                    d().chongwudan=d().chongwudan.add(1)
                }
                else{
                    d().last4=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        21: {
            display() {
                return '经验猪宝宝<br>1W血 100攻 1防<br>掉落:500经验<br>当前扣血:'+format(layers.z.need(10000,100,1))+'点<br>已击杀:'+format(d().haskilled21)+'次'
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(10000,100,1))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(10000,100,1)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(10000,100,1))
                d().jingyan=d().jingyan.add(500)
                d().haskilled21=d().haskilled21.add(1)
                d().killall=d().killall.add(1)
            }
        },
        22: {
            display() {
                return '经验猪头人<br>10W血 1000攻 1防<br>掉落:3000经验<br>当前扣血:'+format(layers.z.need(100000,1000,1))+'点<br>已击杀:'+format(d().haskilled22)+'次'
            },
            style(){return {"height":"125px"}},
            unlocked(){return d().haskilled21.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(100000,1000,1))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(100000,1000,1)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(100000,1000,1))
                d().jingyan=d().jingyan.add(3000)
                d().haskilled22=d().haskilled22.add(1)
                d().killall=d().killall.add(1)
            }
        },
        23: {
            display() {
                return '经验猪魔<br>100W血 10000攻 1防<br>掉落:50000经验<br>当前扣血:'+format(layers.z.need(1000000,10000,1))+'点<br>已击杀:'+format(d().haskilled23)+'次'
            },
            style(){return {"height":"125px","width":"150px"}},
            unlocked(){return d().haskilled22.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(1000000,10000,1))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(1000000,10000,1)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(1000000,10000,1))
                d().jingyan=d().jingyan.add(50000)
                d().haskilled23=d().haskilled23.add(1)
                d().killall=d().killall.add(1)
            }
        },
        31: {
            display() {
                return '蝙蝠<br>1000血 300攻 50防<br>掉落:75经验 150金币<br>当前扣血:'+format(layers.z.need(1000,300,50))+'点<br>已击杀:'+format(d().haskilled31)+'次'
            },
            unlocked(){return true},
            style(){return {"height":"125px","width":"145px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(1000,300,50))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(1000,300,50)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(1000,300,50))
                d().jingyan=d().jingyan.add(75)
                d().jinbi=d().jinbi.add(150)
                d().haskilled31=d().haskilled31.add(1)
                d().killall=d().killall.add(1)
            }
        },
        32: {
            display() {
                return '黑色恶蛆<br>1500血 500攻 70防<br>掉落:100经验 200金币<br><text style="color:white">(20%)1白银装备</text><br>当前扣血:'+format(layers.z.need(1500,500,70))+'点<br>上次是否获得物品:'+layers.z.canget6string()+'<br>已击杀:'+format(d().haskilled32)+'次'
            },
            style(){return {"width":"150px","height":"125px"}},
            unlocked(){return d().haskilled31.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(1500,500,70))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(1500,500,70)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(1500,500,70))
                d().jingyan=d().jingyan.add(100)
                d().jinbi=d().jinbi.add(200)
                d().haskilled32=d().haskilled32.add(1)
                if(layers.z.canget6()){
                    d().last6=n(1)
                    d().baiyingzhuangbei=d().baiyingzhuangbei.add(1)
                }
                else{
                    d().last6=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        33: {
            display() {
                return '低级杂魔兵<br>3000血 1000攻 150防<br>掉落:200经验 400金币<br><text style="color:orange">(10%)1魔血结晶</text><br>当前扣血:'+format(layers.z.need(3000,1000,150))+'点<br>上次是否获得物品:'+layers.z.canget8string()+'<br>已击杀:'+format(d().haskilled33)+'次<br>DEBUFF:1层魔气入体'
            },
            style(){return {"width":"150px","height":"125px"}},
            unlocked(){return d().haskilled32.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(3000,1000,150))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(3000,1000,150)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(3000,1000,150))
                d().jingyan=d().jingyan.add(200)
                d().jinbi=d().jinbi.add(400)
                d().haskilled33=d().haskilled33.add(1)
                if(layers.z.canget8()){
                    d().last8=n(1)
                    d().moxuejiejing=d().moxuejiejing.add(1)
                }
                else{
                    d().last8=n(0)
                }
                d().moqiruti=d().moqiruti.add(1)
                d().killall=d().killall.add(1)
            }
        },
        34: {
            display() {
                if(d().lastjipin10.gte(1))
                {
                    return '<text style="color:purple">极品·红野猪</text><br>10000血 3000攻 300防<br>掉落:500经验 1000金币<br>当前扣血:'+format(layers.z.need(10000,3000,300))+'点<br><text style="color:orange">(10%)裁决</text><br>上次是否获得物品:'+layers.z.canget10string()+'<br>已击杀:'+format(d().haskilled34)+'次'
                }
                return '红野猪<br>10000血 3000攻 300防<br>掉落:500经验 1000金币<br>当前扣血:'+format(layers.z.need(10000,3000,300))+'点<br><text style="color:orange">(0.1%)裁决</text><br>上次是否获得物品:'+layers.z.canget10string()+'<br>已击杀:'+format(d().haskilled34)+'次'
            },
            style() {return {'height':'200px','width':'200px'}},
            unlocked(){return d().haskilled33.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(10000,3000,300))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(10000,3000,300)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(10000,3000,300))
                d().jingyan=d().jingyan.add(500)
                d().jinbi=d().jinbi.add(1000)
                d().haskilled34=d().haskilled34.add(1)
                if(d().lastjipin10.lte(0))
                {
                    if(layers.z.canget10_1()){
                        d().last10=n(1)
                        d().caijue=d().caijue.add(1)
                    }
                    else{
                        d().last10=n(0)
                    }
                }
                else
                {
                    if(layers.z.canget10_2()){
                        d().last10=n(1)
                        d().caijue=d().caijue.add(1)
                    }
                    else{
                        d().last10=n(0)
                    }
                }
                var x=zero
                x=x.add(Math.random())
                if(x.gte(0.99))
                {
                    d().lastjipin10=n(1)
                }
                else
                {
                    d().lastjipin10=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        41: {
            display() {
                return '岩石巨人<br>5W血 1W攻 1500防<br>掉落:1000经验 1500金币<br>当前扣血:'+format(layers.z.need(50000,10000,1500))+'点<br>已击杀:'+format(d().haskilled41)+'次'
            },
            unlocked(){return d().haskilled34.gte(1)},
            style(){return {"height":"125px","width":"160px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(50000,10000,1500))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(50000,10000,1500)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(50000,10000,1500))
                d().jingyan=d().jingyan.add(1000)
                d().jinbi=d().jinbi.add(1500)
                d().haskilled41=d().haskilled41.add(1)
                d().killall=d().killall.add(1)
            }
        },
        42: {
            display() {
                return '宝石巨人<br>10W血 2W攻 3000防<br>掉落:2000经验 3000金币<br><text style="color:pink">1宝石残片</text><br>当前扣血:'+format(layers.z.need(100000,20000,3000))+'点<br>已击杀:'+format(d().haskilled42)+'次'
            },
            unlocked(){return d().haskilled41.gte(1)},
            style(){return {"height":"125px","width":"160px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(100000,20000,3000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(100000,20000,3000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(100000,20000,3000))
                d().baoshicanpian=d().baoshicanpian.add(1)
                d().jingyan=d().jingyan.add(2000)
                d().jinbi=d().jinbi.add(3000)
                d().haskilled42=d().haskilled42.add(1)
                d().killall=d().killall.add(1)
            }
        },
    },
	microtabs:{
        "一阶地图":{
			"新手村":{
				content:[
                    ["row", [ ["clickable", 11],["clickable", 12],["clickable", 13],]],
                    ["row", [ ["clickable", 14]]],
				]
			},
			"矿洞":{
                unlocked(){return d().haskilled14.gte(1)},
				content:[
                    ["row", [ ["clickable", 31],["clickable", 32],["clickable", 33],]],
                    ["row", [ ["clickable", 34],]],
				]
			},
			"巢穴":{
                unlocked(){return d().haskilled34.gte(1)},
				content:[
                    ["row", [ ["clickable", 41],["clickable", 42],]],
				]
			},
		},
	},
    tabFormat: {
        "一阶地图": {
            content:[
                ["display-text",
                    function() { return '你当前的生命为' + format(d().shengmingnw) + '点(+' + format(d().shengminghuifu) +'点/秒)'},
                    { "color": "green", "font-size": "28px",}
                ],
                ["display-text",
                    function() { return '你当前有' + format(d().moqiruti) + '层魔气入体(-'+format(d().moqirutijianshao.mul(d().hunqimx.div(100).add(1)))+'层/秒)'},
                    { "color": "purple", "font-size": "28px",}
                ],
                ["display-text",
                    function() { return '这让你的防御变为' + format(d().debuff1) + '倍'},
                    { "color": "purple", "font-size": "28px",}
                ],
                "blank",
                ["microtabs","一阶地图",{'border-width':'0px'}],
            ],
        },
        "经验地图": {
            unlocked(){return hasUpgrade("vip",11)},
            content:[
                ["display-text",
                    function() { return '你当前的生命为' + format(d().shengmingnw) + '点(+' + format(d().shengminghuifu) +'点/秒)'},
                    { "color": "green", "font-size": "28px",}
                ],
                ["display-text",
                    function() { return '你当前有' + format(d().moqiruti) + '层魔气入体(-'+format(d().moqirutijianshao.mul(d().hunqimx.div(100).add(1)))+'层/秒)'},
                    { "color": "purple", "font-size": "28px",}
                ],
                ["display-text",
                    function() { return '这让你的防御变为' + format(d().debuff1) + '倍'},
                    { "color": "purple", "font-size": "28px",}
                ],
                "blank",
                ["row", [ ["clickable", 21],["clickable", 22],["clickable", 23],]],
            ],
        },
    },
    row: 1,
    layerShown(){return true},
})
addLayer("b",{ 
    symbol: "装备", 
    position: 0,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "yellow",
    resource: "装备",
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
    update(diff){
        var x=n(1000)
        x=x.min(d().qingtong1mx)
        x=x.min(d().qingtong2mx)
        x=x.min(d().qingtong3mx)
        x=x.min(d().qingtong4mx)
        if(x.gte(60) && d().haveqingtongtaozhuang1.lte(0))
        {
            d().haveqingtongtaozhuang1=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(80) && d().haveqingtongtaozhuang2.lte(0))
        {
            d().haveqingtongtaozhuang2=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(90) && d().haveqingtongtaozhuang3.lte(0))
        {
            d().haveqingtongtaozhuang3=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(95) && d().haveqingtongtaozhuang4.lte(0))
        {
            d().haveqingtongtaozhuang4=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(100) && d().haveqingtongtaozhuang5.lte(0))
        {
            d().haveqingtongtaozhuang5=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.1)
            d().fangyubeishu=d().fangyubeishu.mul(1.1)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
            d().gongji=d().gongji.mul(1.1)
            d().fangyu=d().fangyu.mul(1.1)
            d().shengmingmx=d().shengmingmx.mul(1.1)
            d().shengminghuifu=d().shengminghuifu.mul(1.1)
        }
        x=n(1000)
        x=x.min(d().baiying1mx)
        x=x.min(d().baiying2mx)
        x=x.min(d().baiying3mx)
        x=x.min(d().baiying4mx)
        if(x.gte(60) && d().havebaiyingtaozhuang1.lte(0))
        {
            d().havebaiyingtaozhuang1=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(80) && d().havebaiyingtaozhuang2.lte(0))
        {
            d().havebaiyingtaozhuang2=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(90) && d().havebaiyingtaozhuang3.lte(0))
        {
            d().havebaiyingtaozhuang3=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(95) && d().havebaiyingtaozhuang4.lte(0))
        {
            d().havebaiyingtaozhuang4=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.05)
            d().fangyubeishu=d().fangyubeishu.mul(1.05)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
            d().gongji=d().gongji.mul(1.05)
            d().fangyu=d().fangyu.mul(1.05)
            d().shengmingmx=d().shengmingmx.mul(1.05)
            d().shengminghuifu=d().shengminghuifu.mul(1.05)
        }
        if(x.gte(100) && d().havebaiyingtaozhuang5.lte(0))
        {
            d().havebaiyingtaozhuang5=n(1)
            d().gongjibeishu=d().gongjibeishu.mul(1.1)
            d().fangyubeishu=d().fangyubeishu.mul(1.1)
            d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
            d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
            d().gongji=d().gongji.mul(1.1)
            d().fangyu=d().fangyu.mul(1.1)
            d().shengmingmx=d().shengmingmx.mul(1.1)
            d().shengminghuifu=d().shengminghuifu.mul(1.1)
        }
    },
    tooltip(){return ""},
    clickables: {
        11: {
            display() {
                return `洗炼青铜剑<br>当前数值:`+format(d().qingtong1nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().qingtongzhuangbei.gte(1) && d().jinbi.gte(20)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).mul(100).floor().min(100)
                d().qingtong1nw=x
                d().qingtong1mx=d().qingtong1mx.max(x)
                d().gongji=d().gongji.sub(d().qingtong1shuzhi)
                d().qingtong1shuzhi=n(30).div(100).mul(d().qingtong1mx).mul(d().gongjibeishu)
                d().gongji=d().gongji.add(d().qingtong1shuzhi)
                d().qingtongzhuangbei=d().qingtongzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(20)
            }
        },
        12: {
            display() {
                return `洗炼青铜护手<br>当前数值:`+format(d().qingtong2nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().qingtongzhuangbei.gte(1) && d().jinbi.gte(20)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).mul(100).floor().min(100)
                d().qingtong2nw=x
                d().qingtong2mx=d().qingtong2mx.max(x)
                d().fangyu=d().fangyu.sub(d().qingtong2shuzhi)
                d().qingtong2shuzhi=n(5).div(100).mul(d().qingtong2mx).mul(d().fangyubeishu)
                d().fangyu=d().fangyu.add(d().qingtong2shuzhi)
                d().qingtongzhuangbei=d().qingtongzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(20)
            }
        },
        13: {
            display() {
                return `洗炼青铜甲<br>当前数值:`+format(d().qingtong3nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().qingtongzhuangbei.gte(1) && d().jinbi.gte(20)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).mul(100).floor().min(100)
                d().qingtong3nw=x
                d().qingtong3mx=d().qingtong3mx.max(x)
                d().shengmingmx=d().shengmingmx.sub(d().qingtong3shuzhi)
                d().qingtong3shuzhi=n(150).div(100).mul(d().qingtong3mx).mul(d().shengmingbeishu)
                d().shengmingmx=d().shengmingmx.add(d().qingtong3shuzhi)
                d().qingtongzhuangbei=d().qingtongzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(20)
            }
        },
        14: {
            display() {
                return `洗炼青铜靴<br>当前数值:`+format(d().qingtong4nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().qingtongzhuangbei.gte(1) && d().jinbi.gte(20)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).mul(100).floor().min(100)
                d().qingtong4nw=x
                d().qingtong4mx=d().qingtong4mx.max(x)
                d().shengminghuifu=d().shengminghuifu.sub(d().qingtong4shuzhi)
                d().qingtong4shuzhi=n(3).div(100).mul(d().qingtong1mx).mul(d().shengminghuifubeishu)
                d().shengminghuifu=d().shengminghuifu.add(d().qingtong4shuzhi)
                d().qingtongzhuangbei=d().qingtongzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(20)
            }
        },
        21: {
            display() {
                return `洗炼白银剑<br>当前数值:`+format(d().baiying1nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().baiyingzhuangbei.gte(1) && d().jinbi.gte(1000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.1).mul(100).floor().min(100)
                d().baiying1nw=x
                d().baiying1mx=d().baiying1mx.max(x)
                d().gongji=d().gongji.sub(d().baiying1shuzhi)
                d().baiying1shuzhi=n(500).div(100).mul(d().baiying1mx).mul(d().gongjibeishu)
                d().gongji=d().gongji.add(d().baiying1shuzhi)
                d().baiyingzhuangbei=d().baiyingzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(1000)
            }
        },
        22: {
            display() {
                return `洗炼白银护手<br>当前数值:`+format(d().baiying2nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().baiyingzhuangbei.gte(1) && d().jinbi.gte(1000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.1).mul(100).floor().min(100)
                d().baiying2nw=x
                d().baiying2mx=d().baiying2mx.max(x)
                d().fangyu=d().fangyu.sub(d().baiying2shuzhi)
                d().baiying2shuzhi=n(60).div(100).mul(d().baiying2mx).mul(d().fangyubeishu)
                d().fangyu=d().fangyu.add(d().baiying2shuzhi)
                d().baiyingzhuangbei=d().baiyingzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(1000)
            }
        },
        23: {
            display() {
                return `洗炼白银甲<br>当前数值:`+format(d().baiying3nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().baiyingzhuangbei.gte(1) && d().jinbi.gte(1000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.1).mul(100).floor().min(100)
                d().baiying3nw=x
                d().baiying3mx=d().baiying3mx.max(x)
                d().shengmingmx=d().shengmingmx.sub(d().baiying3shuzhi)
                d().baiying3shuzhi=n(3000).div(100).mul(d().baiying3mx).mul(d().shengmingbeishu)
                d().shengmingmx=d().shengmingmx.add(d().baiying3shuzhi)
                d().baiyingzhuangbei=d().baiyingzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(1000)
            }
        },
        24: {
            display() {
                return `洗炼白银靴<br>当前数值:`+format(d().baiying4nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().baiyingzhuangbei.gte(1) && d().jinbi.gte(1000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.1).mul(100).floor().min(100)
                d().baiying4nw=x
                d().baiying4mx=d().baiying4mx.max(x)
                d().shengminghuifu=d().shengminghuifu.sub(d().baiying4shuzhi)
                d().baiying4shuzhi=n(30).div(100).mul(d().baiying1mx).mul(d().shengminghuifubeishu)
                d().shengminghuifu=d().shengminghuifu.add(d().baiying4shuzhi)
                d().baiyingzhuangbei=d().baiyingzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(1000)
            }
        },
    },
    tabFormat: {
        青铜: {
            content:["blank",
            ["display-text",
                function() { return '每次洗炼消耗1青铜装备和20金币,数值按最大的计算'},
                { "color": "white", "font-size": "20px",}
            ],
            ["display-text",
                function() { return '青铜套装1:所有青铜装备系数>=60%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().haveqingtongtaozhuang1.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '青铜套装2:所有青铜装备系数>=80%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().haveqingtongtaozhuang2.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '青铜套装3:所有青铜装备系数>=90%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().haveqingtongtaozhuang3.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '青铜套装4:所有青铜装备系数>=95%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().haveqingtongtaozhuang4.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '青铜套装5:所有青铜装备系数>=100%,所有属性倍数x1.1(独立计算)'},
                { "color": function() {
                    if(d().haveqingtongtaozhuang5.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '你有' + format(d().qingtongzhuangbei)+'件青铜装备'},
                { "color": "#467500", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '你有' + format(d().jinbi)+'金币'},
                { "color": "gold", "font-size": "24px",}
            ],
            "blank",
            ["display-text",
                function() { return '青铜剑系数:' + format(d().qingtong1mx)+'%'},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '攻击+' + format(d().qingtong1shuzhi)},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '青铜护手系数:' + format(d().qingtong2mx)+'%'},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '防御+' + format(d().qingtong2shuzhi)},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '青铜甲系数:' + format(d().qingtong3mx)+'%'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命+' + format(d().qingtong3shuzhi)},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '青铜靴系数:' + format(d().qingtong4mx)+'%'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命恢复+' + format(d().qingtong4shuzhi)},
                { "color": "green", "font-size": "24px",}
            ],
            "blank",
            ["row", [ ["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],]],
            ],
        },
        白银: {
            content:["blank",
            ["display-text",
                function() { return '每次洗炼消耗1白银装备和1000金币,数值按最大的计算<br>注意:白银级装备的洗炼比青铜级更加困难'},
                { "color": "white", "font-size": "20px",}
            ],
            ["display-text",
                function() { return '白银套装1:所有白银装备系数>=60%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().havebaiyingtaozhuang1.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '白银套装2:所有白银装备系数>=80%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().havebaiyingtaozhuang2.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '白银套装3:所有白银装备系数>=90%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().havebaiyingtaozhuang3.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '白银套装4:所有白银装备系数>=95%,所有属性倍数x1.05(独立计算)'},
                { "color": function() {
                    if(d().havebaiyingtaozhuang4.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '白银套装5:所有白银装备系数>=100%,所有属性倍数x1.1(独立计算)'},
                { "color": function() {
                    if(d().havebaiyingtaozhuang5.gte(1))
                    {
                        return "#FDD017"
                    }
                    else
                    {
                        return "black"
                    }
                }, "font-size": "20px",}
            ],
            ["display-text",
                function() { return '你有' + format(d().baiyingzhuangbei)+'件白银装备'},
                { "color": "#BCC6CC", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '你有' + format(d().jinbi)+'金币'},
                { "color": "gold", "font-size": "24px",}
            ],
            "blank",
            ["display-text",
                function() { return '白银剑系数:' + format(d().baiying1mx)+'%'},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '攻击+' + format(d().baiying1shuzhi)},
                { "color": "red", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '白银护手系数:' + format(d().baiying2mx)+'%'},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '防御+' + format(d().baiying2shuzhi)},
                { "color": "blue", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '白银甲系数:' + format(d().baiying3mx)+'%'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命+' + format(d().baiying3shuzhi)},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '白银靴系数:' + format(d().baiying4mx)+'%'},
                { "color": "green", "font-size": "24px",}
            ],
            ["display-text",
                function() { return '生命恢复+' + format(d().baiying4shuzhi)},
                { "color": "green", "font-size": "24px",}
            ],
            "blank",
            ["row", [ ["clickable", 21],["clickable", 22],["clickable", 23],["clickable", 24],]],
            ],
        },
    },
    row: 2,
    branches:["s","bs"],
    layerShown(){return d().dengji.gte(5)},
})
addLayer("bs",{ 
    symbol: "宝石", 
    position: 0,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "pink",
    resource: "装备",
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
    update(diff){
    },
    tooltip(){return ""},
    clickables: {
        11: {
            display() {
                return `合成1级红晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().qingtong1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejihongjingshi=d().onejihongjingshi.add(1)
                if(d().qingtong1baoshi.lte(n(0.1)))
                {
                    d().qingtong1baoshi=n(1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.05)
                    d().gongji=d().gongji.mul(1.05)
                }
            }
        },
        12: {
            display() {
                return `合成2级红晶石<br>消耗10一级红晶石`
            },
            unlocked(){return d().qingtong1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejihongjingshi.gte(10)},
            onClick(){
                d().onejihongjingshi=d().onejihongjingshi.sub(10)
                d().twojihongjingshi=d().twojihongjingshi.add(1)
                if(d().qingtong1baoshi.lte(n(1.1)))
                {
                    d().qingtong1baoshi=n(2)
                    d().gongjibeishu=d().gongjibeishu.div(1.05)
                    d().gongjibeishu=d().gongjibeishu.mul(1.1)
                    d().gongji=d().gongji.div(1.05)
                    d().gongji=d().gongji.mul(1.1)
                }
            }
        },
        13: {
            display() {
                return `合成3级红晶石<br>消耗10二级红晶石`
            },
            unlocked(){return d().qingtong1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojihongjingshi.gte(10)},
            onClick(){
                d().twojihongjingshi=d().twojihongjingshi.sub(10)
                d().threejihongjingshi=d().threejihongjingshi.add(1)
                if(d().qingtong1baoshi.lte(n(2.1)))
                {
                    d().qingtong1baoshi=n(3)
                    d().gongjibeishu=d().gongjibeishu.div(1.1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.2)
                    d().gongji=d().gongji.div(1.1)
                    d().gongji=d().gongji.mul(1.2)
                }
            }
        },
        21: {
            display() {
                return `合成1级蓝晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().qingtong2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilanjingshi=d().onejilanjingshi.add(1)
                if(d().qingtong2baoshi.lte(n(0.1)))
                {
                    d().qingtong2baoshi=n(1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.05)
                    d().fangyu=d().fangyu.mul(1.05)
                }
            }
        },
        22: {
            display() {
                return `合成2级蓝晶石<br>消耗10一级蓝晶石`
            },
            unlocked(){return d().qingtong2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilanjingshi.gte(10)},
            onClick(){
                d().onejilanjingshi=d().onejilanjingshi.sub(10)
                d().twojilanjingshi=d().twojilanjingshi.add(1)
                if(d().qingtong2baoshi.lte(n(1.1)))
                {
                    d().qingtong2baoshi=n(2)
                    d().fangyubeishu=d().fangyubeishu.div(1.05)
                    d().fangyubeishu=d().fangyubeishu.mul(1.1)
                    d().fangyu=d().fangyu.div(1.05)
                    d().fangyu=d().fangyu.mul(1.1)
                }
            }
        },
        23: {
            display() {
                return `合成3级蓝晶石<br>消耗10二级蓝晶石`
            },
            unlocked(){return d().qingtong2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilanjingshi.gte(10)},
            onClick(){
                d().twojilanjingshi=d().twojilanjingshi.sub(10)
                d().threejilanjingshi=d().threejilanjingshi.add(1)
                if(d().qingtong2baoshi.lte(n(2.1)))
                {
                    d().qingtong2baoshi=n(3)
                    d().fangyubeishu=d().fangyubeishu.div(1.1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.2)
                    d().fangyu=d().fangyu.div(1.1)
                    d().fangyu=d().fangyu.mul(1.2)
                }
            }
        },
        31: {
            display() {
                return `合成1级绿晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().qingtong3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilvjingshi=d().onejilvjingshi.add(1)
                if(d().qingtong3baoshi.lte(n(0.1)))
                {
                    d().qingtong3baoshi=n(1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.05)
                }
            }
        },
        32: {
            display() {
                return `合成2级绿晶石<br>消耗10一级绿晶石`
            },
            unlocked(){return d().qingtong3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilvjingshi.gte(10)},
            onClick(){
                d().onejilvjingshi=d().onejilvjingshi.sub(10)
                d().twojilvjingshi=d().twojilvjingshi.add(1)
                if(d().qingtong3baoshi.lte(n(1.1)))
                {
                    d().qingtong3baoshi=n(2)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.05)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                    d().shengmingmx=d().shengmingmx.div(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.1)
                }
            }
        },
        33: {
            display() {
                return `合成3级绿晶石<br>消耗10二级绿晶石`
            },
            unlocked(){return d().qingtong3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilvjingshi.gte(10)},
            onClick(){
                d().twojilvjingshi=d().twojilvjingshi.sub(10)
                d().threejilvjingshi=d().threejilvjingshi.add(1)
                if(d().qingtong3baoshi.lte(n(2.1)))
                {
                    d().qingtong3baoshi=n(3)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.2)
                    d().shengmingmx=d().shengmingmx.div(1.1)
                    d().shengmingmx=d().shengmingmx.mul(1.2)
                }
            }
        },
        41: {
            display() {
                return `合成1级血晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().qingtong4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejixuejingshi=d().onejixuejingshi.add(1)
                if(d().qingtong4baoshi.lte(n(0.1)))
                {
                    d().qingtong4baoshi=n(1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.05)
                }
            }
        },
        42: {
            display() {
                return `合成2级血晶石<br>消耗10一级血晶石`
            },
            unlocked(){return d().qingtong4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejixuejingshi.gte(10)},
            onClick(){
                d().onejixuejingshi=d().onejixuejingshi.sub(10)
                d().twojixuejingshi=d().twojixuejingshi.add(1)
                if(d().qingtong4baoshi.lte(n(1.1)))
                {
                    d().qingtong4baoshi=n(2)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.05)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                    d().shengminghuifu=d().shengminghuifu.div(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.1)
                }
            }
        },
        43: {
            display() {
                return `合成3级血晶石<br>消耗10二级血晶石`
            },
            unlocked(){return d().qingtong4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojixuejingshi.gte(10)},
            onClick(){
                d().twojixuejingshi=d().twojixuejingshi.sub(10)
                d().threejixuejingshi=d().threejixuejingshi.add(1)
                if(d().qingtong4baoshi.lte(n(2.1)))
                {
                    d().qingtong4baoshi=n(3)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.2)
                    d().shengminghuifu=d().shengminghuifu.div(1.1)
                    d().shengminghuifu=d().shengminghuifu.mul(1.2)
                }
            }
        },
        211: {
            display() {
                return `合成1级红晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().baiying1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejihongjingshi=d().onejihongjingshi.add(1)
                if(d().baiying1baoshi.lte(n(0.1)))
                {
                    d().baiying1baoshi=n(1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.05)
                    d().gongji=d().gongji.mul(1.05)
                }
            }
        },
        212: {
            display() {
                return `合成2级红晶石<br>消耗10一级红晶石`
            },
            unlocked(){return d().baiying1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejihongjingshi.gte(10)},
            onClick(){
                d().onejihongjingshi=d().onejihongjingshi.sub(10)
                d().twojihongjingshi=d().twojihongjingshi.add(1)
                if(d().baiying1baoshi.lte(n(1.1)))
                {
                    d().baiying1baoshi=n(2)
                    d().gongjibeishu=d().gongjibeishu.div(1.05)
                    d().gongjibeishu=d().gongjibeishu.mul(1.1)
                    d().gongji=d().gongji.div(1.05)
                    d().gongji=d().gongji.mul(1.1)
                }
            }
        },
        213: {
            display() {
                return `合成3级红晶石<br>消耗10二级红晶石`
            },
            unlocked(){return d().baiying1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojihongjingshi.gte(10)},
            onClick(){
                d().twojihongjingshi=d().twojihongjingshi.sub(10)
                d().threejihongjingshi=d().threejihongjingshi.add(1)
                if(d().baiying1baoshi.lte(n(2.1)))
                {
                    d().baiying1baoshi=n(3)
                    d().gongjibeishu=d().gongjibeishu.div(1.1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.2)
                    d().gongji=d().gongji.div(1.1)
                    d().gongji=d().gongji.mul(1.2)
                }
            }
        },
        221: {
            display() {
                return `合成1级蓝晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().baiying2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilanjingshi=d().onejilanjingshi.add(1)
                if(d().baiying2baoshi.lte(n(0.1)))
                {
                    d().baiying2baoshi=n(1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.05)
                    d().fangyu=d().fangyu.mul(1.05)
                }
            }
        },
        222: {
            display() {
                return `合成2级蓝晶石<br>消耗10一级蓝晶石`
            },
            unlocked(){return d().baiying2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilanjingshi.gte(10)},
            onClick(){
                d().onejilanjingshi=d().onejilanjingshi.sub(10)
                d().twojilanjingshi=d().twojilanjingshi.add(1)
                if(d().baiying2baoshi.lte(n(1.1)))
                {
                    d().baiying2baoshi=n(2)
                    d().fangyubeishu=d().fangyubeishu.div(1.05)
                    d().fangyubeishu=d().fangyubeishu.mul(1.1)
                    d().fangyu=d().fangyu.div(1.05)
                    d().fangyu=d().fangyu.mul(1.1)
                }
            }
        },
        223: {
            display() {
                return `合成3级蓝晶石<br>消耗10二级蓝晶石`
            },
            unlocked(){return d().baiying2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilanjingshi.gte(10)},
            onClick(){
                d().twojilanjingshi=d().twojilanjingshi.sub(10)
                d().threejilanjingshi=d().threejilanjingshi.add(1)
                if(d().baiying2baoshi.lte(n(2.1)))
                {
                    d().baiying2baoshi=n(3)
                    d().fangyubeishu=d().fangyubeishu.div(1.1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.2)
                    d().fangyu=d().fangyu.div(1.1)
                    d().fangyu=d().fangyu.mul(1.2)
                }
            }
        },
        231: {
            display() {
                return `合成1级绿晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().baiying3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilvjingshi=d().onejilvjingshi.add(1)
                if(d().baiying3baoshi.lte(n(0.1)))
                {
                    d().baiying3baoshi=n(1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.05)
                }
            }
        },
        232: {
            display() {
                return `合成2级绿晶石<br>消耗10一级绿晶石`
            },
            unlocked(){return d().baiying3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilvjingshi.gte(10)},
            onClick(){
                d().onejilvjingshi=d().onejilvjingshi.sub(10)
                d().twojilvjingshi=d().twojilvjingshi.add(1)
                if(d().baiying3baoshi.lte(n(1.1)))
                {
                    d().baiying3baoshi=n(2)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.05)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                    d().shengmingmx=d().shengmingmx.div(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.1)
                }
            }
        },
        233: {
            display() {
                return `合成3级绿晶石<br>消耗10二级绿晶石`
            },
            unlocked(){return d().baiying3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilvjingshi.gte(10)},
            onClick(){
                d().twojilvjingshi=d().twojilvjingshi.sub(10)
                d().threejilvjingshi=d().threejilvjingshi.add(1)
                if(d().baiying3baoshi.lte(n(2.1)))
                {
                    d().baiying3baoshi=n(3)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.2)
                    d().shengmingmx=d().shengmingmx.div(1.1)
                    d().shengmingmx=d().shengmingmx.mul(1.2)
                }
            }
        },
        241: {
            display() {
                return `合成1级血晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().baiying4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejixuejingshi=d().onejixuejingshi.add(1)
                if(d().baiying4baoshi.lte(n(0.1)))
                {
                    d().baiying4baoshi=n(1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.05)
                }
            }
        },
        242: {
            display() {
                return `合成2级血晶石<br>消耗10一级血晶石`
            },
            unlocked(){return d().baiying4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejixuejingshi.gte(10)},
            onClick(){
                d().onejixuejingshi=d().onejixuejingshi.sub(10)
                d().twojixuejingshi=d().twojixuejingshi.add(1)
                if(d().baiying4baoshi.lte(n(1.1)))
                {
                    d().baiying4baoshi=n(2)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.05)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                    d().shengminghuifu=d().shengminghuifu.div(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.1)
                }
            }
        },
        243: {
            display() {
                return `合成3级血晶石<br>消耗10二级血晶石`
            },
            unlocked(){return d().baiying4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojixuejingshi.gte(10)},
            onClick(){
                d().twojixuejingshi=d().twojixuejingshi.sub(10)
                d().threejixuejingshi=d().threejixuejingshi.add(1)
                if(d().baiying4baoshi.lte(n(2.1)))
                {
                    d().baiying4baoshi=n(3)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.2)
                    d().shengminghuifu=d().shengminghuifu.div(1.1)
                    d().shengminghuifu=d().shengminghuifu.mul(1.2)
                }
            }
        },
    },
    tabFormat: {
        青铜: {
            content:["blank",
                    ["display-text",
                        function() { return '装备评分达到100,可以解锁对应宝石槽位'},
                        { "color": "white", "font-size": "28px",}
                    ],
                    ["display-text",
                        function() { return '你拥有'+format(d().baoshicanpian)+'宝石残片'},
                        { "color": "pink", "font-size": "28px",}
                    ],
                    "blank",
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejihongjingshi)+' 一级红晶石, '+format(d().twojihongjingshi)+' 二级红晶石, '+format(d().threejihongjingshi)+' 三级红晶石'},
                        { "color": "red", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejilanjingshi)+' 一级蓝晶石, '+format(d().twojilanjingshi)+' 二级蓝晶石, '+format(d().threejilanjingshi)+' 三级蓝晶石'},
                        { "color": "blue", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejilvjingshi)+' 一级绿晶石, '+format(d().twojilvjingshi)+' 二级绿晶石, '+format(d().threejilvjingshi)+' 三级绿晶石'},
                        { "color": "green", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejixuejingshi)+' 一级血晶石, '+format(d().twojixuejingshi)+' 二级血晶石, '+format(d().threejixuejingshi)+' 三级血晶石'},
                        { "color": "green", "font-size": "20px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["row",
                    [
                        ["display-text",function() { return '青铜剑 : '+(d().qingtong1baoshi.gte(3)?'攻击+20%':d().qingtong1baoshi.gte(2)?'攻击+10%':d().qingtong1baoshi.gte(1)?'攻击+5%':"攻击+0%")},{ "color": "red", "font-size": "28px",}],
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        ["clickable",11],["clickable",12],["clickable",13],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '青铜护手 : '+(d().qingtong2baoshi.gte(3)?'防御+20%':d().qingtong2baoshi.gte(2)?'防御+10%':d().qingtong2baoshi.gte(1)?'防御+5%':"防御+0%")},{ "color": "blue", "font-size": "28px",}],
                        "blank",
                        ["clickable",21],["clickable",22],["clickable",23],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '青铜甲 : '+(d().qingtong3baoshi.gte(3)?'生命+20%':d().qingtong3baoshi.gte(2)?'生命+10%':d().qingtong3baoshi.gte(1)?'生命+5%':"生命+0%")},{ "color": "green", "font-size": "28px",}],
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        ["clickable",31],["clickable",32],["clickable",33],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '青铜靴 : '+(d().qingtong4baoshi.gte(3)?'生命恢复+20%':d().qingtong4baoshi.gte(2)?'生命恢复+10%':d().qingtong4baoshi.gte(1)?'生命恢复+5%':"生命恢复+0%")},{ "color": "green", "font-size": "28px",}],
                        "blank",
                        ["clickable",41],["clickable",42],["clickable",43],
                    ]],
                    ]
        },
        白银: {
            content:["blank",
                    ["display-text",
                        function() { return '装备评分达到100,可以解锁对应宝石槽位'},
                        { "color": "white", "font-size": "28px",}
                    ],
                    ["display-text",
                        function() { return '你拥有'+format(d().baoshicanpian)+'宝石残片'},
                        { "color": "pink", "font-size": "28px",}
                    ],
                    "blank",
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejihongjingshi)+' 一级红晶石, '+format(d().twojihongjingshi)+' 二级红晶石, '+format(d().threejihongjingshi)+' 三级红晶石'},
                        { "color": "red", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejilanjingshi)+' 一级蓝晶石, '+format(d().twojilanjingshi)+' 二级蓝晶石, '+format(d().threejilanjingshi)+' 三级蓝晶石'},
                        { "color": "blue", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejilvjingshi)+' 一级绿晶石, '+format(d().twojilvjingshi)+' 二级绿晶石, '+format(d().threejilvjingshi)+' 三级绿晶石'},
                        { "color": "green", "font-size": "20px",}
                    ],
                    ["display-text",
                        function() { return '你拥有 '+format(d().onejixuejingshi)+' 一级血晶石, '+format(d().twojixuejingshi)+' 二级血晶石, '+format(d().threejixuejingshi)+' 三级血晶石'},
                        { "color": "green", "font-size": "20px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["row",
                    [
                        ["display-text",function() { return '白银剑 : '+(d().baiying1baoshi.gte(3)?'攻击+20%':d().baiying1baoshi.gte(2)?'攻击+10%':d().baiying1baoshi.gte(1)?'攻击+5%':"攻击+0%")},{ "color": "red", "font-size": "28px",}],
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        ["clickable",211],["clickable",212],["clickable",213],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '白银护手 : '+(d().baiying2baoshi.gte(3)?'防御+20%':d().baiying2baoshi.gte(2)?'防御+10%':d().baiying2baoshi.gte(1)?'防御+5%':"防御+0%")},{ "color": "blue", "font-size": "28px",}],
                        "blank",
                        ["clickable",221],["clickable",222],["clickable",223],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '白银甲 : '+(d().baiying3baoshi.gte(3)?'生命+20%':d().baiying3baoshi.gte(2)?'生命+10%':d().baiying3baoshi.gte(1)?'生命+5%':"生命+0%")},{ "color": "green", "font-size": "28px",}],
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        "blank",
                        ["clickable",231],["clickable",232],["clickable",233],
                    ]],
                    ["row",
                    [
                        ["display-text",function() { return '白银靴 : '+(d().baiying4baoshi.gte(3)?'生命恢复+20%':d().baiying4baoshi.gte(2)?'生命恢复+10%':d().baiying4baoshi.gte(1)?'生命恢复+5%':"生命恢复+0%")},{ "color": "green", "font-size": "28px",}],
                        "blank",
                        ["clickable",241],["clickable",242],["clickable",243],
                    ]],
                    ]
        },
    },
    row: 3,
    layerShown(){return d().dengji.gte(900)},
})
addLayer("s",{ 
    symbol: "神兵", 
    position: 1,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "blue",
    resource: "神兵",
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
    bars: {
        1: {
            direction: RIGHT,
            width: 300,
            height: 20,
            fillStyle(){return {"background-color":"green"}},
            unlocked(){return d().jihuocaijue.gte(1) && d().dengji.gte(750)},
            display(){return `淬毒等级 `+format(d().caijuecuidudengji)+' / 100'},
            progress() { return d().caijuecuidudengji.div(100) },
        },
    },
    tooltip(){return ""},
    row: 3,
    clickables: {
        11: {
            display() {
                return `激活-<text style="color:gold">神兵·裁决</text><br>需要:10W金币<br><text style="color:red">攻击倍数x2</text><br>`+(d().jihuocaijue.gte(1)?"(已激活)":"未激活")
            },
            style(){
                if(d().jihuocaijue.gte(1))
                {
                    return {"background-color":"green","border-color":"blue","border-width":"5px","height":"125px"}
                }
                return {"border-color":"blue","border-width":"5px","height":"125px"}
            },
            unlocked(){return true},
            canClick(){return d().caijue.gte(1) && d().jinbi.gte(100000) && d().jihuocaijue.lte(0)},
            onClick(){
                d().caijue=d().caijue.sub(1)
                d().jinbi=d().jinbi.sub(100000)
                d().jihuocaijue=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(2)
                d().gongji=d().gongji.mul(2)
            }
        },
        12: {
            display() {
                return '淬毒<br>消耗:1尸毒粉<br>每次淬毒,独立提升1%的攻击'
            },
            style(){
                return {"border-color":"green","border-width":"5px","background-color":"black","color":"green","width":"100px","height":"100px"}
            },
            unlocked(){return d().dengji.gte(750)},
            canClick(){return d().shidufen.gte(1) && d().caijuecuidudengji.lte(n(99.1))},
            onClick(){
                d().shidufen=d().shidufen.sub(1)
                d().caijuecuidudengji=d().caijuecuidudengji.add(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.01)
                d().gongji=d().gongji.mul(1.01)
            }
        },
    },
    tabFormat:{
        主界面:{
            content:[
                ["display-text",
                function() { return '你有'+format(d().caijue)+'把裁决'},
                { "color": "gold", "font-size": "24px",}
                ],
                ["display-text",
                function() { return '你有'+format(d().shidufen)+'尸毒粉'},
                { "color": "green", "font-size": "24px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row",[["clickable",11],["bar",1],["clickable",12],]],
            ]
        }
    },
    layerShown(){return d().dengji.gte(500)},
})
addLayer("c",{ 
    symbol: "宠物", 
    position: 1,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "purple",
    resource: "宠物",
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
    update(diff){
        if(d().chongwudengji.gte(5))d().chongwudanxuqiu=n(5)
        if(d().chongwudengji.gte(10))d().chongwudanxuqiu=n(10)
        if(d().chongwudengji.gte(15))d().chongwudanxuqiu=n(20)
        if(d().chongwudengji.gte(20))d().chongwudanxuqiu=n(40)
        if(d().chongwudengji.gte(30))d().chongwudanxuqiu=n(50)
        if(d().chongwudengji.gte(50))d().chongwudanxuqiu=n(100)
        if(d().chongwudengji.gte(75))d().chongwudanxuqiu=n(200)
        if(d().chongwudengji.gte(100))d().chongwudanxuqiu=n(500)
        if(d().chongwudengji.gte(150))d().chongwudanxuqiu=n(1000)
        if(d().chongwudengji.gte(200))d().chongwudanxuqiu=n(3000)
        if(d().chongwudengji.gte(300))d().chongwudanxuqiu=n(5000)
        if(d().chongwudengji.gte(500))d().chongwudanxuqiu=n(10000)
    },
    tooltip(){return ""},
    clickables: {
        11: {
            display() {
                return `升级`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().chongwudan.gte(d().chongwudanxuqiu)},
            onClick(){
                d().chongwudan=d().chongwudan.sub(d().chongwudanxuqiu)
                d().chongwudengji=d().chongwudengji.add(1)
                var x=ten
                x=x.mul(d().qiegebeishu)
                d().qiege=d().qiege.add(x)
            }
        },
    },
    tabFormat: {
        等级: {
            content:["blank",
        ["display-text",
            function() { return '你的宠物当前是 ' + format(d().chongwudengji) + ' 级' },
            { "color": "white", "font-size": "28px",}
        ],
        ["display-text",
            function() { return '你现在有 ' + format(d().chongwudan) + ' 枚宠物丹' },
            { "color": "white", "font-size": "28px",}
        ],
        ["display-text",
            function() { return '下一次升级需要 ' + format(d().chongwudanxuqiu) + ' 枚宠物丹' },
            { "color": "white", "font-size": "28px",}
        ],
        "blank",
        ["display-text",
            function() { return '切割+' + format(d().qiege) + '点' },
            { "color": "purple", "font-size": "24px",}
        ],
        "blank",
        "blank",
        "blank",
        ["row", [ ["clickable", 11],]],
    ],
        },
    },
    row: 2,
    layerShown(){return d().dengji.gte(20)},
})
addLayer("t",{ 
    symbol: "图鉴", 
    position: 2,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "brown",
    resource: "图鉴",
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
    clickables: {
        11: {
            display() {
                if(d().jiesuotujian1.gte(1))
                {
                    return `解锁图鉴一<br>需求:100青铜装备<br>效果:攻击倍数x1.1<br>已解锁`
                }
                return `解锁图鉴一<br>需求:100青铜装备<br>效果:攻击倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian1.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().qingtongzhuangbei.gte(100) && d().jiesuotujian1.lte(0)},
            onClick(){
                d().qingtongzhuangbei=d().qingtongzhuangbei.sub(100)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
                d().jiesuotujian1=n(1)
            }
        },
        12: {
            display() {
                if(d().jiesuotujian2.gte(1))
                {
                    return `解锁图鉴二<br>需求:100宠物丹<br>效果:攻击倍数x1.1<br>已解锁`
                }
                return `解锁图鉴二<br>需求:100宠物丹<br>效果:攻击倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian2.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().chongwudan.gte(100) && d().jiesuotujian2.lte(0)},
            onClick(){
                d().chongwudan=d().chongwudan.sub(100)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
                d().jiesuotujian2=n(1)
            }
        },
        13: {
            display() {
                if(d().jiesuotujian33333.gte(1))
                {
                    return `解锁图鉴三<br>需求:100白银装备<br>效果:防御倍数x1.1<br>已解锁`
                }
                return `解锁图鉴三<br>需求:100白银装备<br>效果:防御倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian33333.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().baiyingzhuangbei.gte(100) && d().jiesuotujian33333.lte(0)},
            onClick(){
                d().baiyingzhuangbei=d().baiyingzhuangbei.sub(100)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
                d().jiesuotujian33333=n(1)
            }
        },
        21: {
            display() {
                if(d().jiesuotujian4.gte(1))
                {
                    return `解锁图鉴四<br>需求:5000魔血<br>效果:生命倍数x1.1<br>已解锁`
                }
                return `解锁图鉴四<br>需求:5000魔血<br>效果:生命倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian4.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().moxue.gte(5000) && d().jiesuotujian4.lte(0)},
            onClick(){
                d().moxue=d().moxue.sub(5000)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                d().shengmingmx=d().shengmingmx.mul(1.1)
                d().jiesuotujian4=n(1)
            }
        },
        22: {
            display() {
                if(d().jiesuotujian5.gte(1))
                {
                    return `解锁图鉴五<br>需求:50块魔血结晶<br>效果:生命恢复倍数x1.1<br>已解锁`
                }
                return `解锁图鉴五<br>需求:50块魔血结晶<br>效果:生命恢复倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian5.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().moxuejiejing.gte(50) && d().jiesuotujian5.lte(0)},
            onClick(){
                d().moxuejiejing=d().moxuejiejing.sub(50)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                d().shengminghuifu=d().shengminghuifu.mul(1.1)
                d().jiesuotujian5=n(1)
            }
        },
        23: {
            display() {
                if(d().jiesuotujian6.gte(1))
                {
                    return `解锁图鉴六<br>需求:1把裁决<br>效果:攻击倍数x1.1<br>已解锁`
                }
                return `解锁图鉴六<br>需求:1把裁决<br>效果:攻击倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian6.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().caijue.gte(1) && d().jiesuotujian6.lte(0)},
            onClick(){
                d().caijue=d().caijue.sub(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
                d().jiesuotujian6=n(1)
            }
        },
        31: {
            display() {
                if(d().jiesuotujian7.gte(1))
                {
                    return `解锁图鉴七<br>需求:50尸毒粉<br>效果:攻击倍数x1.1<br>已解锁`
                }
                return `解锁图鉴七<br>需求:50尸毒粉<br>效果:攻击倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian7.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().shidufen.gte(50) && d().jiesuotujian7.lte(0)},
            onClick(){
                d().shidufen=d().shidufen.sub(50)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
                d().jiesuotujian7=n(1)
            }
        },
        32: {
            display() {
                if(d().jiesuotujian8.gte(1))
                {
                    return `解锁图鉴八<br>需求:200宝石残片<br>效果:防御倍数x1.1<br>已解锁`
                }
                return `解锁图鉴八<br>需求:200宝石残片<br>效果:防御倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian8.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().baoshicanpian.gte(200) && d().jiesuotujian8.lte(0)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(200)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
                d().jiesuotujian8=n(1)
            }
        },
    },
    tabFormat: {
        图鉴: {
            content:["blank",
                    ["display-text",
                        function() { return '每一个图鉴都记录着你的汗水,它们将激励你变得更强' },
                        { "color": "white", "font-size": "28px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["clickable", 11],["clickable", 12],["clickable", 13],]],
                    ["row", [ ["clickable", 21],["clickable", 22],["clickable", 23],]],
                    ["row", [ ["clickable", 31],["clickable", 32],["clickable", 33],]],
                ],
        },
    },
    row: 3,
    layerShown(){return d().dengji.gte(50)},
})
addLayer("vip",{ 
    symbol: "VIP", 
    position: 0,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "gold",
    resource: "VIP",
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
    update(diff)
    {
        var x=zero
        if(hasUpgrade("vip",211)){x=x.add(layers.z.need(5,1,1))}
        if(hasUpgrade("vip",212)){x=x.add(layers.z.need(20,5,2))}
        if(hasUpgrade("vip",213)){x=x.add(layers.z.need(100,30,5))}
        if(hasUpgrade("vip",214)){x=x.add(layers.z.need(500,100,20))}
        if(hasUpgrade("vip",221)){x=x.add(layers.z.need(10000,100,1))}
        if(hasUpgrade("vip",222)){x=x.add(layers.z.need(100000,1000,1))}
        if(hasUpgrade("vip",223)){x=x.add(layers.z.need(1000000,10000,1))}
        if(hasUpgrade("vip",231)){x=x.add(layers.z.need(1000,300,50))}
        if(hasUpgrade("vip",232)){x=x.add(layers.z.need(1500,500,70))}
        if(hasUpgrade("vip",234)){x=x.add(layers.z.need(10000,3000,300))}
        if(hasUpgrade("vip",251)){x=x.add(layers.z.need(50000,10000,1500))}
        if(hasUpgrade("vip",252)){x=x.add(layers.z.need(100000,20000,3000))}
        if(hasUpgrade("vip",15)){x=x.div(2)}
        d().zongxuqiu=x
        d().guajibeishu=d().shengminghuifu.div(d().zongxuqiu)
        if(d().guajibeishu.gte(1))
        {
            d().guajibeishu=softcap(d().guajibeishu,n(3),0.1)
        }
        if(d().guajibeishu.gte(10))
        {
            d().guajibeishu=softcap(d().guajibeishu,n(10),0.3)
        }
        if(d().guajibeishu.gte(20))
        {
            d().guajibeishu=n(20).mul(d().guajibeishu.div(20).add(5).logBase(5))
        }
        if(hasUpgrade("vip",211))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled11=d().haskilled11.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",212))
        {
            d().qingtongzhuangbei=d().qingtongzhuangbei.add(n(0.2).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(3).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(2).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled12=d().haskilled12.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",213))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(5).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(10).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled13=d().haskilled13.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",214))
        {
            d().chongwudan=d().chongwudan.add(n(0.2).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(50).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(100).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled14=d().haskilled14.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",221))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(500).mul(diff).mul(d().guajibeishu))
            // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled21=d().haskilled21.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",222))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(3000).mul(diff).mul(d().guajibeishu))
            // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled22=d().haskilled22.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",223))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(50000).mul(diff).mul(d().guajibeishu))
            // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled23=d().haskilled23.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",231))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(75).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(150).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled31=d().haskilled31.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",232))
        {
            d().baiyingzhuangbei=d().baiyingzhuangbei.add(n(0.2).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(100).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(200).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled32=d().haskilled32.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",234))
        {
            d().caijue=d().caijue.add(n(0.001).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(500).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1000).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled34=d().haskilled34.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",251))
        {
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(1000).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1500).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled41=d().haskilled41.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",252))
        {
            d().baoshicanpian=d().baoshicanpian.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(2000).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(3000).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().haskilled42=d().haskilled42.add(n(1).mul(diff).mul(d().guajibeishu))
            if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(diff).mul(d().guajibeishu))
        }
        if(hasUpgrade("vip",241))
        {
            d().moxue=d().moxue.add(d().shengminghuifu.add(1).root(2).mul(diff))
        }
        if(hasUpgrade("vip",242))
        {
            if(layers.m.clickables[31].canClick())
            {
                layers.m.clickables[31].onClick()
            }
        }
        if(hasUpgrade("vip",243))
        {
            if(layers.m.clickables[11].canClick())
            {
                layers.m.clickables[11].onClick()
            }
        }
    },
    infoboxes: {
        lore: {
            title: "自动化说明",
            body() { return "<h3>自动挂机获取:<br>1.物品<br>2.经验(VIP1解锁)<br>3.金币(VIP2解锁)<br>4.击杀次数(VIP3解锁)" },
        },
    },
    tooltip(){return ""},
    upgrades:{
        11:{
            fullDisplay(){
                return "VIP1<br>效果1:解锁经验地图<br>效果2:额外增加一枚挂机插槽<br>需要:18888金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(18888)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(18888)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        12:{
            fullDisplay(){
                return "VIP2<br>效果1:挂机时可以获取金币<br>效果2:额外增加一枚挂机插槽<br>需要:38888金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(38888)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(38888)
            },
            style(){return {"height":"125px"}},
            unlocked(){return hasUpgrade("vip",11)},
        },
        13:{
            fullDisplay(){
                return "VIP3<br>效果1:挂机时可以获取击杀次数<br>效果2:额外增加一枚挂机插槽<br>需要:88888金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(88888)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(88888)
            },
            style(){return {"height":"125px"}},
            unlocked(){return hasUpgrade("vip",12)},
        },
        14:{
            fullDisplay(){
                return "VIP4<br>效果1:额外增加一枚挂机插槽<br>效果2:额外增加一枚挂机插槽<br>需要:888888金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(888888)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(888888)
            },
            style(){return {"height":"125px"}},
            unlocked(){return hasUpgrade("vip",13)},
        },
        15:{
            fullDisplay(){
                return "VIP5<br>效果1:额外增加一枚挂机插槽<br>赠送:技能-神圣护盾<br>效果:挂机所扣血/2<br>需要:888.8888W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(8888888)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(8888888)
            },
            style(){return {"height":"140px","width":"140px"}},
            unlocked(){return hasUpgrade("vip",14)},
        },
        211:{
            fullDisplay(){
                return "自动挂机<br>新手地图-鸡<br><br>需要:100金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(100)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(100) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        212:{
            fullDisplay(){
                return "自动挂机<br>新手地图-鹿<br><br>需要:200金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(200)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(200) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        213:{
            fullDisplay(){
                return "自动挂机<br>新手地图-稻草人<br><br>需要:300金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(300)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(300) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        214:{
            fullDisplay(){
                return "自动挂机<br>新手地图-多钩猫<br><br>需要:1000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(1000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(1000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        221:{
            fullDisplay(){
                return "自动挂机<br>经验地图-经验猪宝宝<br><br>需要:2000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(2000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(2000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        222:{
            fullDisplay(){
                return "自动挂机<br>经验地图-经验猪头人<br><br>需要:10000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(10000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(10000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        223:{
            fullDisplay(){
                return "自动挂机<br>经验地图-经验猪魔<br><br>需要:10W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(100000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(100000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        231:{
            fullDisplay(){
                return "自动挂机<br>矿洞-蝙蝠<br><br>需要:3000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(3000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(3000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        232:{
            fullDisplay(){
                return "自动挂机<br>矿洞-黑色恶蛆<br><br>需要:5000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(5000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(5000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        234:{
            fullDisplay(){
                return "自动挂机<br>矿洞-红野猪<br><br>需要:30000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(30000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(30000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        251:{
            fullDisplay(){
                return "自动挂机<br>巢穴-岩石巨人<br><br>需要:100W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(1000000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(1000000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        252:{
            fullDisplay(){
                return "自动挂机<br>巢穴-宝石巨人<br><br>需要:200W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(2000000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(2000000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        241:{
            fullDisplay(){
                return "自动炼体<br><br>需要:30000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(30000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(30000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        242:{
            fullDisplay(){
                return "自动淬魂<br><br>需要:30000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(30000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(30000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        243:{
            fullDisplay(){
                return "自动升级<br><br>需要:30000金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(30000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(30000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
    },
    stringstring(){
        if(d().guajibeishu.gte(20))
        {
            return "(已达三次软上限)"
        }
        if(d().guajibeishu.gte(10))
        {
            return "(已达二次软上限)"
        }
        if(d().guajibeishu.gte(3))
        {
            return "(已达软上限)"
        }
        return ""
    },
    tabFormat: {
        VIP: {
            content:["blank",
                    ["display-text",
                        function() { return '还在等什么,少年,想要变强,那就氪金吧!!!' },
                        { "color": "white", "font-size": "28px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["upgrade", 11],["upgrade", 12],["upgrade", 13],["upgrade", 14],["upgrade", 15],]],
                ],
        },
        自动化: {
            content:[            
                    ["row", [ ["infobox", "lore"]]],
                    "blank",
                    ["display-text",
                        function() { return '温馨提示:鉴于挂机系统的特殊性,自动化并不支持重洗<br>因此,选择之前请谨慎考虑' },
                        { "color": "red", "font-size": "32px",}
                    ],
                    ["display-text",
                        function() { return '你当前还剩余'+format(d().zidongguajichacao)+'个自动挂机插槽' },
                        { "color": "gold", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '你当前的挂机生命恢复需求为'+format(d().zongxuqiu)+'点' },
                        { "color": "red", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '而你当前的生命恢复为'+format(d().shengminghuifu)+'点<br>因此给你的挂机提供一个x'+format(d().guajibeishu)+'的倍数'+layers.vip.stringstring() },
                        { "color": "green", "font-size": "24px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["upgrade", 243],["upgrade", 241],["upgrade", 242],]],
                    ["row", [ ["upgrade", 211],["upgrade", 212],["upgrade", 213],["upgrade", 214],]],
                    ["row", [ ["upgrade", 221],["upgrade", 222],["upgrade", 223],]],
                    ["row", [ ["upgrade", 231],["upgrade", 232],["upgrade", 234],]],
                    ["row", [ ["upgrade", 251],["upgrade", 252],]],
                ],
        },
    },
    row: "side",
    layerShown(){return d().dengji.gte(100)},
})
function walkto(x,y){
    var xx=n(x)
    var yy=n(y)
    d().player_pos1_x=n(xx)
    d().player_pos1_y=n(yy)
    var isM=n(100)
    var xxx=zero
    for(var i=0,len=d().guaiwu1_x.length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu1_x[i]).abs().add(yy.sub(d().guaiwu1_y[i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(i)
            break
        }
    }
    if(isM.lte(99))
    {
        var tmp=d().guaiwu1_x[d().guaiwu1_x.length-1]
        d().guaiwu1_x[d().guaiwu1_x.length-1]=d().guaiwu1_x[isM]
        d().guaiwu1_x[isM]=tmp
        tmp=d().guaiwu1_y[d().guaiwu1_y.length-1]
        d().guaiwu1_y[d().guaiwu1_y.length-1]=d().guaiwu1_y[isM]
        d().guaiwu1_y[isM]=tmp
        d().guaiwu1_x.pop()
        d().guaiwu1_y.pop()
        d().shengmingnw=d().shengmingnw.sub(layers.z.need(50000,20000,2000))
        var xxxxx=zero
        xxxxx=xxxxx.add(Math.random())
        if(xxxxx.gte(0.5))
        {
            d().shidufen=d().shidufen.add(1)
        }
    }
    return ""
}
function canwalk(x,y,ned){
    var xx=n(x)
    var yy=n(y)
    var nd=n(ned)
    var isM=zero
    var xxx=zero
    for(var i=0,len=d().guaiwu1_x.length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu1_x[i]).abs().add(yy.sub(d().guaiwu1_y[i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(1)
            break
        }
    }
    xxx=d().player_pos1_x.sub(xx).abs().add(d().player_pos1_y.sub(yy).abs())
    if(isM.gte(1))
    {
        return d().shengmingnw.gte(nd) && xxx.lte(1)
    }
    else
    {
        return xxx.lte(1)
    }
}
function ggttstyle(x,y)
{
    var xx=n(x)
    var yy=n(y)
    var xxx=d().player_pos1_x.sub(xx).abs().add(d().player_pos1_y.sub(yy).abs())
    if(xxx.lte(n(0.001)))
    {
        return {"background-color":"red","height":"75px","width":"75px","transition-duration":"0s"}
    }
    var isM=zero
    for(var i=0,len=d().guaiwu1_x.length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu1_x[i]).abs().add(yy.sub(d().guaiwu1_y[i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(1)
            break
        }
    }
    if(isM.gte(1))
    {
        return {"background-color":"orange","height":"75px","width":"75px","transition-duration":"0s"}
    }
    var xxx=d().player_pos1_x.sub(xx).abs().add(d().player_pos1_y.sub(yy).abs())
    if(xxx.lte(1))
    {
        return {"background-color":"green","height":"75px","width":"75px","transition-duration":"0s"}
    }
    return {"background-color":"white","height":"75px","width":"75px","transition-duration":"0s"}
}
function walkup(){
    if(d().player_pos1_x.lte(0))
    {
        return ""
    }
    walkto(d().player_pos1_x.sub(1),d().player_pos1_y)
}
function walkdown(){
    if(d().player_pos1_x.gte(5))
    {
        return ""
    }
    walkto(d().player_pos1_x.add(1),d().player_pos1_y)
}
function walkleft(){
    if(d().player_pos1_y.lte(0))
    {
        return ""
    }
    walkto(d().player_pos1_x,d().player_pos1_y.sub(1))
}
function walkright(){
    if(d().player_pos1_y.gte(5))
    {
        return ""
    }
    walkto(d().player_pos1_x,d().player_pos1_y.add(1))
}
addLayer("j",{ 
    symbol: "秘境", 
    position: 1,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "green",
    resource: "秘境",
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
    infoboxes: {
        lore: {
            title: "秘境说明",
            body() { return `
            <h3>
            w:向上<br>
            s:向下<br>
            a:向左<br>
            d:向右<br>
            x:生成怪物(需打完当前所有怪物)<br>
            也可以点击以进行移动<br>
            <text style="color:red">红色</text>:玩家当前位置<br>
            <text style="color:green">绿色</text>:当前可以移动到的位置<br>
            白色:当前不可移动到的位置<br>
            <text style="color:orange">橘色</text>:怪物的位置<br>
            掉落:每只僵尸有50%几率掉落1尸毒粉` },
        },
    },
    tooltip(){return ""},
    hotkeys: [
        {
            key: "w", 
            description: "w:向上",
            onPress() {
                if(d().player_pos1_x.lte(1))
                {
                    return ""
                }
                if(canwalk(d().player_pos1_x.sub(1),d().player_pos1_y,layers.z.need(50000,20000,2000)))
                {
                    walkup()
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
        {
            key: "s", 
            description: "s:向下",
            onPress() {
                if(d().player_pos1_x.gte(5))
                {
                    return ""
                }
                if(canwalk(d().player_pos1_x.add(1),d().player_pos1_y,layers.z.need(50000,20000,2000)))
                {
                    walkdown()
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
        {
            key: "a", 
            description: "a:向左",
            onPress() {
                if(d().player_pos1_y.lte(1))
                {
                    return ""
                }
                if(canwalk(d().player_pos1_x,d().player_pos1_y.sub(1),layers.z.need(50000,20000,2000)))
                {
                    walkleft()
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
        {
            key: "d", 
            description: "d:向右",
            onPress() {
                if(d().player_pos1_y.gte(5))
                {
                    return ""
                }
                if(canwalk(d().player_pos1_x,d().player_pos1_y.add(1),layers.z.need(50000,20000,2000)))
                {
                    walkright()
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
        {
            key: "x", 
            description: "x:生成怪物(需打完当前所有怪物)",
            onPress() {
                if(n(d().guaiwu1_x.length).gte(1))
                {
                    return ""
                }
                for(var i=0;i<5;i++)
                {
                    var xx=zero
                    xx=xx.add(Math.random())
                    xx=xx.add(0.2)
                    xx=xx.mul(5)
                    xx=xx.floor()
                    xx=xx.min(5)
                    var yy=zero
                    yy=yy.add(Math.random())
                    yy=yy.add(0.2)
                    yy=yy.mul(5)
                    yy=yy.floor()
                    yy=yy.min(5)
                    d().guaiwu1_x.push(xx)
                    d().guaiwu1_y.push(yy)
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
    ],
    clickables:{
        11: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(1,1,layers.z.need(50000,20000,2000))},
            onClick(){walkto(1,1)}
        },
        12: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(1,2,layers.z.need(50000,20000,2000))},
            onClick(){walkto(1,2)}
        },
        13: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(1,3,layers.z.need(50000,20000,2000))},
            onClick(){walkto(1,3)}
        },
        14: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(1,4,layers.z.need(50000,20000,2000))},
            onClick(){walkto(1,4)}
        },
        15: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(1,5,layers.z.need(50000,20000,2000))},
            onClick(){walkto(1,5)}
        },
        21: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(2,1,layers.z.need(50000,20000,2000))},
            onClick(){walkto(2,1)}
        },
        22: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(2,2,layers.z.need(50000,20000,2000))},
            onClick(){walkto(2,2)}
        },
        23: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(2,3,layers.z.need(50000,20000,2000))},
            onClick(){walkto(2,3)}
        },
        24: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(2,4,layers.z.need(50000,20000,2000))},
            onClick(){walkto(2,4)}
        },
        25: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(2,5,layers.z.need(50000,20000,2000))},
            onClick(){walkto(2,5)}
        },
        31: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(3,1,layers.z.need(50000,20000,2000))},
            onClick(){walkto(3,1)}
        },
        32: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(3,2,layers.z.need(50000,20000,2000))},
            onClick(){walkto(3,2)}
        },
        33: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(3,3,layers.z.need(50000,20000,2000))},
            onClick(){walkto(3,3)}
        },
        34: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(3,4,layers.z.need(50000,20000,2000))},
            onClick(){walkto(3,4)}
        },
        35: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(3,5,layers.z.need(50000,20000,2000))},
            onClick(){walkto(3,5)}
        },
        41: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(4,1,layers.z.need(50000,20000,2000))},
            onClick(){walkto(4,1)}
        },
        42: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(4,2,layers.z.need(50000,20000,2000))},
            onClick(){walkto(4,2)}
        },
        43: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(4,3,layers.z.need(50000,20000,2000))},
            onClick(){walkto(4,3)}
        },
        44: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(4,4,layers.z.need(50000,20000,2000))},
            onClick(){walkto(4,4)}
        },
        45: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(4,5,layers.z.need(50000,20000,2000))},
            onClick(){walkto(4,5)}
        },
        51: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(5,1,layers.z.need(50000,20000,2000))},
            onClick(){walkto(5,1)}
        },
        52: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(5,2,layers.z.need(50000,20000,2000))},
            onClick(){walkto(5,2)}
        },
        53: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(5,3,layers.z.need(50000,20000,2000))},
            onClick(){walkto(5,3)}
        },
        54: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(5,4,layers.z.need(50000,20000,2000))},
            onClick(){walkto(5,4)}
        },
        55: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(5,5,layers.z.need(50000,20000,2000))},
            onClick(){walkto(5,5)}
        },
    },
    tabFormat: {
        '秘境-僵尸洞':{
            content:[
                ["row",[["infobox","lore"]]],
                ["display-text",
                    function() { return '你当前的坐标X:'+format(d().player_pos1_x)+',Y:'+format(d().player_pos1_y) },
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '当前拥有'+format(d().shidufen)+'尸毒粉'},
                    { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '当前还剩'+format(d().guaiwu1_x.length)+'只僵尸'},
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '僵尸属性:5W血,2W攻,2000防'},
                    { "color": "white", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你当前的生命为' + format(d().shengmingnw) + '点(+' + format(d().shengminghuifu) +'点/秒)'},
                    { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '当前扣血:'+format(layers.z.need(50000,20000,2000))+'点'},
                    { "color": "green", "font-size": "24px",}
                ],
                "blank",
                "blank",
                ["row",[["clickable",11],["clickable",12],["clickable",13],["clickable",14],["clickable",15],]],
                ["row",[["clickable",21],["clickable",22],["clickable",23],["clickable",24],["clickable",25],]],
                ["row",[["clickable",31],["clickable",32],["clickable",33],["clickable",34],["clickable",35],]],
                ["row",[["clickable",41],["clickable",42],["clickable",43],["clickable",44],["clickable",45],]],
                ["row",[["clickable",51],["clickable",52],["clickable",53],["clickable",54],["clickable",55],]],
            ],
        }
    },
    row: 2,
    layerShown(){return d().dengji.gte(750)},
})
addLayer("ghost1",{ 
    symbol: "ghost", 
    position: 3,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "black",
    resource: "ghost",
    type: "ghost",
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
    row: 3,
    layerShown(){return "ghost"},
})