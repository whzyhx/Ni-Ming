function d(){return player.data}
addLayer("data",{
    symbol: "data",
    position: 2,
    startData(){return{
            unlocked: true,
		    points: new ExpantaNum(0),
            xiuxi: new ExpantaNum(0),

            guajishijian:zero,

            shengqituzhitoukui:zero,shengqituzhiyifu:zero,shengqituzhikuzi:zero,shengqituzhixuezi:zero,
            jihuoshengqitoukui:zero,jihuoshengqiyifu:zero,jihuoshengqikuzi:zero,jihuoshengqixuezi:zero,
            shengqihexin:zero,

            cigeng:one,

            lingqi:zero,lingqihuoqu:zero,jingjiedengji:zero,
            touruqingtongzhuangbei:zero,
            tourubaiyingzhuangbei:zero,
            touruhuangjinzhuangbei:zero,
            touruchongwudan:zero,
            tourucaijue:zero,
            tourulongwenjia:zero,
            jindutiao_lingqi:zero,
            jingjiemingcheng:[
                '<text style="color:cyan">炼气期</text> 1阶',
                '<text style="color:cyan">炼气期</text> 2阶',
                '<text style="color:cyan">炼气期</text> 3阶',
                '<text style="color:cyan">炼气期</text> 4阶',
                '<text style="color:cyan">炼气期</text> 5阶',
                '<text style="color:cyan">炼气期</text> 6阶',
                '<text style="color:cyan">炼气期</text> 7阶',
                '<text style="color:cyan">炼气期</text> 8阶',
                '<text style="color:cyan">炼气期</text> 9阶',
                '<text style="color:cyan">炼气期</text> 10阶',
                '<text style="color:brown">筑基期</text> 1阶',
                '<text style="color:brown">筑基期</text> 2阶',
                '<text style="color:brown">筑基期</text> 3阶',
                '<text style="color:brown">筑基期</text> 4阶',
                '<text style="color:brown">筑基期</text> 5阶',
                '<text style="color:brown">筑基期</text> 6阶',
                '<text style="color:brown">筑基期</text> 7阶',
                '<text style="color:brown">筑基期</text> 8阶',
                '<text style="color:brown">筑基期</text> 9阶',
                '<text style="color:brown">筑基期</text> 10阶',
                '<text style="color:gold">金丹期</text> 1阶',
                '<text style="color:gold">金丹期</text> 2阶',
                '<text style="color:gold">金丹期</text> 3阶',
                '<text style="color:gold">金丹期</text> 4阶',
                '<text style="color:gold">金丹期</text> 5阶',
                '<text style="color:gold">金丹期</text> 6阶',
                '<text style="color:gold">金丹期</text> 7阶',
                '<text style="color:gold">金丹期</text> 8阶',
                '<text style="color:gold">金丹期</text> 9阶',
                '<text style="color:gold">金丹期</text> 10阶',
                '<text style="color:purple">元婴期</text> 1阶',
                '<text style="color:purple">元婴期</text> 2阶',
                '<text style="color:purple">元婴期</text> 3阶',
                '<text style="color:purple">元婴期</text> 4阶',
                '<text style="color:purple">元婴期</text> 5阶',
                '<text style="color:purple">元婴期</text> 6阶',
                '<text style="color:purple">元婴期</text> 7阶',
                '<text style="color:purple">元婴期</text> 8阶',
                '<text style="color:purple">元婴期</text> 9阶',
                '<text style="color:purple">元婴期</text> 10阶',
                '<text style="color:orange">分神期</text> 1阶',
                '<text style="color:orange">分神期</text> 2阶',
                '<text style="color:orange">分神期</text> 3阶',
                '<text style="color:orange">分神期</text> 4阶',
                '<text style="color:orange">分神期</text> 5阶',
                '<text style="color:orange">分神期</text> 6阶',
                '<text style="color:orange">分神期</text> 7阶',
                '<text style="color:orange">分神期</text> 8阶',
                '<text style="color:orange">分神期</text> 9阶',
                '<text style="color:orange">分神期</text> 10阶',
            ],
            jingjiexuyao:[
                10,20,30,40,50,60,70,80,90,100,
                100,200,300,400,500,600,700,800,900,1000,
                1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,
                10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,
                100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000,
                1000000,2000000,3000000,4000000,5000000,6000000,7000000,8000000,9000000,10000000,
            ],
            jingjieshuxing:[
                1.00,1.03,1.06,1.09,1.12,1.15,1.18,1.21,1.24,1.27,
                1.30,1.35,1.40,1.45,1.50,1.55,1.60,1.65,1.70,1.75,
                1.80,1.88,1.96,2.04,2.12,2.20,2.28,2.36,2.44,2.52,
                2.60,2.70,2.80,2.90,3.00,3.10,3.20,3.30,3.40,3.50,
                3.60,3.75,3.90,4.05,4.20,4.35,4.50,4.65,4.80,4.95,
                5.10,5.30,5.50,5.70,5.90,6.10,6.30,6.50,6.70,6.90,
            ],

            tongtiantajisha1:zero,tongtiantajisha2:zero,tongtiantajisha3:zero,tongtiantajisha4:zero,
            tongtiantajisha5:zero,tongtiantajisha6:zero,tongtiantajisha7:zero,tongtiantajisha8:zero,
            tongtiantajisha9:zero,tongtiantajisha10:zero,tongtiantajisha11:zero,tongtiantajisha12:zero,
            tongtiantajisha13:zero,tongtiantajisha14:zero,tongtiantajisha15:zero,tongtiantajisha16:zero,
            shengdun1:zero,shengdun2:zero,shengdun3:zero,shengdun4:zero,
            shengjian1:zero,shengjian2:zero,shengjian3:zero,shengjian4:zero,
            shengjian5:zero,shengjian6:zero,shengjian7:zero,shengjian8:zero,
            shengjian9:zero,
            jihuodun1:zero,jihuodun2:zero,jihuodun3:zero,jihuodun4:zero,
            jihuodun:zero,
            jihuojian1:zero,jihuojian2:zero,jihuojian3:zero,jihuojian4:zero,
            jihuojian5:zero,jihuojian6:zero,jihuojian7:zero,jihuojian8:zero,
            jihuojian9:zero,
            jihuojian:zero,

            yuanbao:zero,chongxicishu:zero,


            pifu_xingqisi:zero,choujiangcishu:zero,
            pifu_kejin:zero,choujiangcishu1:zero,


            gongji: two,gongjibeishu: one,
            shengmingnw: ten,shengmingmx: ten,shengmingbeishu: one,
            shengminghuifu: one,shengminghuifubeishu: one,
            fangyu: one,fangyubeishu: one,
            zhanli: one,
            qiege: zero,qiegebeishu: one,
            jinbi: zero,
            dengji: zero,jingyan: zero,xuqiu: ten,
            qingtongzhuangbei: zero,baiyingzhuangbei: zero,huangjinzhuangbei: zero,


            haskilled11: zero,haskilled12: zero,haskilled13: zero,haskilled14: zero,
            haskilled21: zero,haskilled22: zero,haskilled23: zero,
            haskilled31: zero,haskilled32: zero,haskilled33: zero,haskilled34: zero,
            haskilled41: zero,haskilled42: zero,haskilled43: zero,haskilled44: zero,
            haskilled51: zero,haskilled52: zero,haskilled53: zero,haskilled54: zero,haskilled55: zero,haskilled56: zero,haskilled57: zero,
            lastjipin10:zero,
            last2: zero,last4: zero,last6: zero,last8: zero,last10:zero,
            last12: zero,last14: zero,last16: zero,last18: zero,last20:zero,


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


            huangjin1nw: zero,huangjin1mx: zero,huangjin1shuzhi: zero,
            huangjin2nw: zero,huangjin2mx: zero,huangjin2shuzhi: zero,
            huangjin3nw: zero,huangjin3mx: zero,huangjin3shuzhi: zero,
            huangjin4nw: zero,huangjin4mx: zero,huangjin4shuzhi: zero,
            havehuangjintaozhuang1: zero,havehuangjintaozhuang2: zero,havehuangjintaozhuang3: zero,havehuangjintaozhuang4: zero,havehuangjintaozhuang5: zero,
            
            
            chongwudan: zero,chongwudengji: zero,chongwudanxuqiu: two,
            
            
            jiesuotujian1: zero,jiesuotujian2: zero,jiesuotujian33333: zero,
            jiesuotujian4:zero,jiesuotujian5:zero,jiesuotujian6:zero,
            jiesuotujian7:zero,jiesuotujian8:zero,jiesuotujian9:zero,
            jiesuotujian10:zero,jiesuotujian11:zero,jiesuotujian12:zero,
            moxue: zero,moxuexuqiu:n(100),moxuejiejing:zero,moxuejiejingxuqiu:one,cuitidengji:zero,
            moqiruti:zero,moqirutijianshao:new ExpantaNum(0.1),debuff1:one,


            killall:zero,hunqidengji:zero,hunqinw:zero,hunqimx:zero,uu:zero,

            
            zidongguajichacao:one,zongxuqiu:zero,
            guajibeishu:one,dulibeishu:one,


            player_pos_x:[n(1),n(1)],player_pos_y:[n(1),n(1)],guaiwu_x:[[],[]],guaiwu_y:[[],[]],
            szx:[n(5),n(7)],szy:[n(5),n(7)],
            cannot_x:[
                [],
                [n(2),n(2),n(2),n(2),n(2),n(2),n(3),n(4),n(4),n(4),n(4),n(5),n(5),n(6),n(6),n(6),n(6),n(6)],
            ],
            cannot_y:[
                [],
                [n(1),n(2),n(3),n(4),n(5),n(6),n(6),n(2),n(3),n(4),n(6),n(2),n(6),n(2),n(3),n(4),n(5),n(6)],
            ],
            nwt:zero,
            guaiwuxue:[n(50000),n(2500000)],guaiwugong:[n(20000),n(200000)],guaiwufang:[n(2000),n(20000)],

            
            caijue:zero,jihuocaijue:zero,
            longwenjia:zero,jihuolongwenjia:zero,
            shidufen:zero,caijuecuidudengji:zero,
            fumoshu:zero,longwenjiafumodengji:zero,


            baoshicanpian:zero,
            qingtong1baoshi:zero,qingtong2baoshi:zero,qingtong3baoshi:zero,qingtong4baoshi:zero,
            baiying1baoshi:zero,baiying2baoshi:zero,baiying3baoshi:zero,baiying4baoshi:zero,
            huangjin1baoshi:zero,huangjin2baoshi:zero,huangjin3baoshi:zero,huangjin4baoshi:zero,
            onejixuejingshi:zero,twojixuejingshi:zero,threejixuejingshi:zero,
            onejihongjingshi:zero,twojihongjingshi:zero,threejihongjingshi:zero,
            onejilanjingshi:zero,twojilanjingshi:zero,threejilanjingshi:zero,
            onejilvjingshi:zero,twojilvjingshi:zero,threejilvjingshi:zero,

            yumao:zero,chibangdengji:zero,yumaoxuqiu:n(15),
            chibangshuxing:[
                1.00,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,
                1.10,1.12,1.14,1.16,1.18,1.20,1.22,1.24,1.26,1.28,
                1.30,1.33,1.36,1.39,1.42,1.45,1.48,1.51,1.54,1.57,
                1.60,1.64,1.68,1.72,1.76,1.80,1.84,1.88,1.92,1.96,
                2.00,2.05,2.10,2.15,2.20,2.25,2.30,2.35,2.40,2.45,
            ],
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
        if(hasMilestone("t",5))
        {
            d().cigeng=n(2)
        }
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
        d().moqiruti=d().moqiruti.sub(d().moqirutijianshao.mul(diff).mul(d().hunqimx.div(100).add(1)))
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
                if(d().dengji.gte(15000))d().xuqiu=n(300000000)
                if(d().dengji.gte(20000))d().xuqiu=n(500000000)
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
            canClick(){return d().moxue.gte(d().moxuexuqiu.root(d().cigeng)) && d().moxuejiejing.gte(d().moxuejiejingxuqiu)},
            onClick(){
                if(d().moxue.lte(d().moxuexuqiu.root(d().cigeng)) || d().moxuejiejing.lte(d().moxuejiejingxuqiu.sub(0.01)))
                {
                    return ""
                }
                d().moxue=d().moxue.sub(d().moxuexuqiu.root(d().cigeng))
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
                if(hasMilestone("t",1))
                {
                    d().moxuejiejingxuqiu=d().moxuejiejingxuqiu.div(2)
                }
                if(hasMilestone("t",3))
                {
                    d().moxuejiejingxuqiu=d().moxuejiejingxuqiu.div(2)
                }
                if(hasMilestone("t",4))
                {
                    d().moxuejiejingxuqiu=d().moxuejiejingxuqiu.div(2)
                }
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
            effectDescription: `解锁图鉴和称号`,
            unlocked(){return hasMilestone("m",1)},
            done() {return d().dengji.gte(50)},
        },
        3: {
            requirementDescription: "Lv.100",
            effectDescription: `解锁VIP和SVIP`,
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
            requirementDescription: "Lv.1200",
            effectDescription: `解锁翅膀`,
            unlocked(){return hasMilestone("m",7)},
            done() {return d().dengji.gte(1200)},
        },
        9: {
            requirementDescription: "Lv.1500",
            effectDescription: `解锁副本-通天塔和圣器`,
            unlocked(){return hasMilestone("m",8)},
            done() {return d().dengji.gte(1500)},
        },
        10: {
            requirementDescription: "Lv.2000",
            effectDescription: `解锁修为`,
            unlocked(){return hasMilestone("m",9)},
            done() {return d().dengji.gte(2000)},
        },
        11: {
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
                function() { return '你有 ' + format(d().huangjinzhuangbei) + ' 黄金装备' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().chongwudan) + ' 宠物丹' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().yumao) + ' 羽毛' },
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
            ["display-text",
                function() { return '你有 ' + format(d().longwenjia) + ' 龙纹甲' },
                { "color": "white", "font-size": "28px",}
            ],
            "blank",
            ["display-text",
                function() { return '你有 ' + format(d().shengdun1) + ' 圣盾碎片-1' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengdun2) + ' 圣盾碎片-2' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengdun3) + ' 圣盾碎片-3' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengdun4) + ' 圣盾碎片-4' },
                { "color": "white", "font-size": "28px",}
            ],
            "blank",
            ["display-text",
                function() { return '你有 ' + format(d().shengjian1) + ' 圣剑碎片-1' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian2) + ' 圣剑碎片-2' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian3) + ' 圣剑碎片-3' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian4) + ' 圣剑碎片-4' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian5) + ' 圣剑碎片-5' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian6) + ' 圣剑碎片-6' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian7) + ' 圣剑碎片-7' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian8) + ' 圣剑碎片-8' },
                { "color": "white", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengjian9) + ' 圣剑碎片-9' },
                { "color": "white", "font-size": "28px",}
            ],
            "blank",
            ["display-text",
                function() { return '你有 ' + format(d().shengqituzhitoukui) + ' 圣器图纸-头盔' },
                { "color": "lime", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengqituzhiyifu) + ' 圣器图纸-衣服' },
                { "color": "lime", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengqituzhikuzi) + ' 圣器图纸-裤子' },
                { "color": "lime", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengqituzhixuezi) + ' 圣器图纸-靴子' },
                { "color": "lime", "font-size": "28px",}
            ],
            ["display-text",
                function() { return '你有 ' + format(d().shengqihexin) + ' 圣器核心' },
                { "color": "lime", "font-size": "28px",}
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
                    function() { return '你有' + format(d().moxue)+'点魔血(+'+format((hasUpgrade("vip",241)?d().shengminghuifu.add(1).div(10):n(0)))+'点/秒)'},
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
                    function() { return '下一次淬体需要' + format(d().moxuexuqiu.root(d().cigeng))+'点魔血'},
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
    branches:['j','c','b'],
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
    branches:['j',"f"],
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
        return kouxue.max(0.001)
    },
    countxiaodui(){
        var x=zero
        x=x.add(layers.z.need(3000000,5000000,100000).mul(5))
        x=x.add(layers.z.need(6000000,10000000,200000).mul(5))
        x=x.add(layers.z.need(15000000,20000000,200000).mul(5))
        x=x.add(layers.z.need(30000000,50000000,200000).mul(5))
        return x
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
    canget12(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.999)
    },
    canget12string(){
        var x=zero
        x=x.add(d().last12)
        if(x.gte(1))
        {
            return "是"
        }
        else
        {
            return "否"
        }
    },
    canget14(){
        var x=zero
        x=x.add(Math.random())
        return x.gte(0.8)
    },
    canget14string(){
        var x=zero
        x=x.add(d().last14)
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
                return '鸡<br>5血 1攻 1防<br>掉落:1经验 1金币<br>当前扣血:'+format(layers.z.need(5,1,1))+'点'//<br>已击杀:'+format(d().haskilled11)+'次'
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
                return '鹿<br>20血 5攻 2防<br>掉落:3经验 2金币<br><text style="color:white">(20%)1青铜装备</text><br>当前扣血:'+format(layers.z.need(20,5,2))+'点<br>上次是否获得物品:'+layers.z.canget2string()+''//<br>已击杀:'+format(d().haskilled12)+'次'
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
                return '稻草人<br>100血 30攻 5防<br>掉落:5经验 10金币<br>当前扣血:'+format(layers.z.need(100,30,5))+'点'//<br>已击杀:'+format(d().haskilled13)+'次'
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
                return '多钩猫<br>500血 100攻 20防<br>掉落:50经验 100金币<br><text style="color:white">(20%)1宠物丹</text><br>当前扣血:'+format(layers.z.need(500,100,20))+'点<br>上次是否获得物品:'+layers.z.canget4string()+''//<br>已击杀:'+format(d().haskilled14)+'次'
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
                return '经验猪宝宝<br>1W血 100攻 1防<br>掉落:500经验<br>当前扣血:'+format(layers.z.need(10000,100,1))+'点'//<br>已击杀:'+format(d().haskilled21)+'次'
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
                return '经验猪头人<br>10W血 1000攻 1防<br>掉落:3000经验<br>当前扣血:'+format(layers.z.need(100000,1000,1))+'点'//<br>已击杀:'+format(d().haskilled22)+'次'
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
                return '经验猪魔<br>100W血 10000攻 1防<br>掉落:50000经验<br>当前扣血:'+format(layers.z.need(1000000,10000,1))+'点'//<br>已击杀:'+format(d().haskilled23)+'次'
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
                return '蝙蝠<br>1000血 300攻 50防<br>掉落:75经验 150金币<br>当前扣血:'+format(layers.z.need(1000,300,50))+'点'//<br>已击杀:'+format(d().haskilled31)+'次'
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
                return '黑色恶蛆<br>1500血 500攻 70防<br>掉落:100经验 200金币<br><text style="color:white">(20%)1白银装备</text><br>当前扣血:'+format(layers.z.need(1500,500,70))+'点<br>上次是否获得物品:'+layers.z.canget6string()+''//<br>已击杀:'+format(d().haskilled32)+'次'
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
                return '低级杂魔兵<br>3000血 1000攻 150防<br>掉落:200经验 400金币<br><text style="color:orange">(10%)1魔血结晶</text><br>当前扣血:'+format(layers.z.need(3000,1000,150))+'点<br>上次是否获得物品:'+layers.z.canget8string()+''//<br>已击杀:'+format(d().haskilled33)+'次<br><text style="color:purple">DEBUFF:1层魔气入体</text>'
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
                    return '<text style="color:purple">极品·红野猪</text><br>10000血 3000攻 300防<br>掉落:500经验 1000金币<br><text style="color:orange">(10%)裁决</text><br>当前扣血:'+format(layers.z.need(10000,3000,300))+'点<br>上次是否获得物品:'+layers.z.canget10string()+''//<br>已击杀:'+format(d().haskilled34)+'次'
                }
                return '红野猪<br>10000血 3000攻 300防<br>掉落:500经验 1000金币<br><text style="color:orange">(0.1%)裁决</text><br>当前扣血:'+format(layers.z.need(10000,3000,300))+'点<br>上次是否获得物品:'+layers.z.canget10string()+''//<br>已击杀:'+format(d().haskilled34)+'次'
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
                return '岩石巨人<br>5W血 1W攻 1500防<br>掉落:1000经验 1500金币<br>当前扣血:'+format(layers.z.need(50000,10000,1500))+'点'//<br>已击杀:'+format(d().haskilled41)+'次'
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
                return '宝石巨人<br>10W血 2W攻 3000防<br>掉落:2000经验 3000金币<br><text style="color:pink">1宝石残片</text><br>当前扣血:'+format(layers.z.need(100000,20000,3000))+'点'//<br>已击杀:'+format(d().haskilled42)+'次'
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
        43: {
            display() {
                return '秃鹫<br>15W血 5W攻 5000防<br>掉落:3000经验 5000金币<br><text style="color:grey">半根鸟毛</text><br>当前扣血:'+format(layers.z.need(150000,50000,5000))+'点'//<br>已击杀:'+format(d().haskilled43)+'次'
            },
            unlocked(){return d().haskilled42.gte(1)},
            style(){return {"height":"125px","width":"160px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(150000,50000,5000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(150000,50000,5000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(150000,50000,5000))
                d().baoshicanpian=d().baoshicanpian.add(1)
                d().jingyan=d().jingyan.add(2000)
                d().jinbi=d().jinbi.add(3000)
                d().yumao=d().yumao.add(0.5)
                d().haskilled43=d().haskilled43.add(1)
                d().killall=d().killall.add(1)
            }
        },
        44: {
            display() {
                return '<text style="color":"gold">黄金巨人</text><br>30W血 5W攻 2W防<br>掉落:5000经验 10000金币<br>当前扣血:'+format(layers.z.need(300000,50000,20000))+'点<br><text style="color:gold">(0.1%)龙纹甲</text><br>上次是否获得物品:'+layers.z.canget12string()+''//<br>已击杀:'+format(d().haskilled44)+'次'
            },
            style() {return {'height':'200px','width':'200px'}},
            unlocked(){return d().haskilled43.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(300000,50000,20000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(300000,50000,20000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(300000,50000,20000))
                d().jingyan=d().jingyan.add(5000)
                d().jinbi=d().jinbi.add(10000)
                d().haskilled44=d().haskilled44.add(1)
                if(layers.z.canget12()){
                    d().last12=n(1)
                    d().longwenjia=d().longwenjia.add(1)
                }
                else{
                    d().last12=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        51: {
            display() {
                return '祖玛守卫<br>80W血 10W攻 4W防<br>掉落:1W经验 1.5W金币<br><text style="color:gold">(20%)黄金装备</text><br>当前扣血:'+format(layers.z.need(800000,100000,40000))+'点<br>上次是否获得物品:'+layers.z.canget14string()+''//<br>已击杀:'+format(d().haskilled51)+'次'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled44.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(800000,100000,40000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(800000,100000,40000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(800000,100000,40000))
                d().jingyan=d().jingyan.add(10000)
                d().jinbi=d().jinbi.add(15000)
                d().haskilled51=d().haskilled51.add(1)
                if(layers.z.canget14()){
                    d().last14=n(1)
                    d().huangjinzhuangbei=d().huangjinzhuangbei.add(1)
                }
                else{
                    d().last14=n(0)
                }
                d().killall=d().killall.add(1)
            }
        },
        52: {
            display() {
                return '中级杂魔兵<br>150W血 20W攻 5W防<br>掉落:2W经验 3W金币<br><text style="color:orange">5魔血结晶</text><br>当前扣血:'+format(layers.z.need(1500000,200000,50000))+'点'//<br>已击杀:'+format(d().haskilled52)+'次<br><text style="color:purple">DEBUFF:10层魔气入体</text>'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled51.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(1500000,200000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(1500000,200000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(1500000,200000,50000))
                d().jingyan=d().jingyan.add(20000)
                d().jinbi=d().jinbi.add(30000)
                d().haskilled52=d().haskilled52.add(1)
                d().moqiruti=d().moqiruti.add(10)
                d().moxuejiejing=d().moxuejiejing.add(5)
                d().killall=d().killall.add(1)
            }
        },
        53: {
            display() {
                return '祖玛刀兵<br>300W血 500W攻 10W防<br>掉落:2.5W经验 4W金币<br><text style="color:lime">1圣器图纸-头盔</text><br>当前扣血:'+format(layers.z.need(3000000,5000000,100000))+'点'//<br>已击杀:'+format(d().haskilled53)+'次'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled52.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(3000000,5000000,100000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(3000000,5000000,100000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(3000000,5000000,100000))
                d().jingyan=d().jingyan.add(25000)
                d().jinbi=d().jinbi.add(40000)
                d().haskilled53=d().haskilled53.add(1)
                d().killall=d().killall.add(1)
                d().shengqituzhitoukui=d().shengqituzhitoukui.add(1)
            }
        },
        54: {
            display() {
                return '祖玛弓兵<br>600W血 1000W攻 20W防<br>掉落:3W经验 5W金币<br><text style="color:lime">1圣器图纸-衣服</text><br>当前扣血:'+format(layers.z.need(6000000,10000000,200000))+'点'//<br>已击杀:'+format(d().haskilled54)+'次'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled53.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(6000000,10000000,200000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(6000000,10000000,200000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(6000000,10000000,200000))
                d().jingyan=d().jingyan.add(30000)
                d().jinbi=d().jinbi.add(50000)
                d().haskilled54=d().haskilled54.add(1)
                d().killall=d().killall.add(1)
                d().shengqituzhiyifu=d().shengqituzhiyifu.add(1)
            }
        },
        55: {
            display() {
                return '祖玛斧兵<br>1500W血 2000W攻 20W防<br>掉落:5W经验 7W金币<br><text style="color:lime">1圣器图纸-裤子</text><br>当前扣血:'+format(layers.z.need(15000000,20000000,200000))+'点'//<br>已击杀:'+format(d().haskilled55)+'次'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled54.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(15000000,20000000,200000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(15000000,20000000,200000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(15000000,20000000,200000))
                d().jingyan=d().jingyan.add(50000)
                d().jinbi=d().jinbi.add(70000)
                d().haskilled55=d().haskilled55.add(1)
                d().killall=d().killall.add(1)
                d().shengqituzhikuzi=d().shengqituzhikuzi.add(1)
            }
        },
        56: {
            display() {
                return '祖玛枪兵<br>3000W血 5000W攻 20W防<br>掉落:10W经验 10W金币<br><text style="color:lime">1圣器图纸-靴子</text><br>当前扣血:'+format(layers.z.need(30000000,50000000,200000))+'点'//<br>已击杀:'+format(d().haskilled56)+'次'
            },
            style() {return {'height':'125px','width':'160px'}},
            unlocked(){return d().haskilled54.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.need(30000000,50000000,200000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(30000000,50000000,200000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(30000000,50000000,200000))
                d().jingyan=d().jingyan.add(100000)
                d().jinbi=d().jinbi.add(100000)
                d().haskilled56=d().haskilled56.add(1)
                d().killall=d().killall.add(1)
                d().shengqituzhixuezi=d().shengqituzhixuezi.add(1)
            }
        },
        57: {
            display() {
                return '祖玛小队<br>包含:<br>5只祖玛刀兵,5只祖玛弓兵<br>5只祖玛斧兵,5只祖玛枪兵<br>掉落:50W经验 50W金币<br><text style="color:lime">1圣器核心</text><br>当前扣血:'+format(layers.z.countxiaodui())+'点'//<br>已击杀:'+format(d().haskilled57)+'次'
            },
            style() {return {'height':'200px','width':'200px'}},
            unlocked(){return d().haskilled55.gte(1)},
            canClick(){return d().shengmingnw.gte(layers.z.countxiaodui())},
            onClick(){
                if(d().shengmingnw.lte(layers.z.countxiaodui()))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.countxiaodui())
                d().jingyan=d().jingyan.add(500000)
                d().jinbi=d().jinbi.add(500000)
                d().haskilled57=d().haskilled57.add(1)
                d().killall=d().killall.add(1)
                d().shengqihexin=d().shengqihexin.add(1)
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
                    ["row", [ ["clickable", 41],["clickable", 42],["clickable", 43],]],
                    ["row", [ ["clickable", 44],]]
				]
			},
			"祖玛神殿":{
                unlocked(){return d().haskilled44.gte(1)},
				content:[
                    ["row", [ ["clickable", 51],["clickable", 52],["clickable", 53],]],
                    ["row", [ ["clickable", 54],["clickable", 55],["clickable", 56],]],
                    ["row", [ ["clickable", 57],]]
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
addLayer("f",{
    symbol: "副本",
    position: 2,
    startData(){return{
            unlocked: true,
		    points: new ExpantaNum(0),
        }
    },
    tooltip(){return ""},
    color: "cyan",
    resource: "副本",
    type: "none",
    requires:new ExpantaNum(1e308),
    exponent:1,
    baseAmount(){return player.points},
    baseResource:"点数",
    gainMult() {
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() {
        var exp = new ExpantaNum(1)
        return exp
    },
    clickables: {
        11: {
            display() {
                return '1层通天<br><text style="color:darkblue">1 圣盾碎片-1</text><br>200W血 10W攻 8000防<br>当前扣血:'+format(layers.z.need(2000000,100000,8000))+'点'//<br>已击杀:'+format(d().tongtiantajisha1)+'次'
            },
            unlocked(){return true},
            style(){return {"height":"125px","width":"800px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(2000000,100000,8000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(2000000,100000,8000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(2000000,100000,8000))
                d().shengdun1=d().shengdun1.add(1)
                d().tongtiantajisha1=d().tongtiantajisha1.add(1)
                d().killall=d().killall.add(1)
            }
        },
        12: {
            display() {
                return '2层通天<br><text style="color:darkblue">1 圣盾碎片-2</text><br>250W血 12.5W攻 15000防<br>当前扣血:'+format(layers.z.need(2500000,125000,15000))+'点'//<br>已击杀:'+format(d().tongtiantajisha2)+'次'
            },
            unlocked(){return d().tongtiantajisha1.gte(1)},
            style(){return {"height":"125px","width":"750px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(2500000,125000,15000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(2500000,125000,15000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(2500000,100000,15000))
                d().shengdun2=d().shengdun2.add(1)
                d().tongtiantajisha2=d().tongtiantajisha2.add(1)
                d().killall=d().killall.add(1)
            }
        },
        13: {
            display() {
                return '3层通天<br><text style="color:darkblue">1 圣盾碎片-3</text><br>350W血 17.5W攻 25000防<br>当前扣血:'+format(layers.z.need(3500000,175000,25000))+'点'//<br>已击杀:'+format(d().tongtiantajisha3)+'次'
            },
            unlocked(){return d().tongtiantajisha2.gte(1)},
            style(){return {"height":"125px","width":"700px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(3500000,175000,25000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(3500000,175000,25000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(3500000,175000,25000))
                d().shengdun3=d().shengdun3.add(1)
                d().tongtiantajisha3=d().tongtiantajisha3.add(1)
                d().killall=d().killall.add(1)
            }
        },
        14: {
            display() {
                return '4层通天<br><text style="color:darkblue">1 圣盾碎片-4</text><br>500W血 25W攻 50000防<br>当前扣血:'+format(layers.z.need(5000000,250000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha4)+'次'
            },
            unlocked(){return d().tongtiantajisha3.gte(1)},
            style(){return {"height":"125px","width":"650px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(5000000,250000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(5000000,250000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(5000000,250000,50000))
                d().shengdun4=d().shengdun4.add(1)
                d().tongtiantajisha4=d().tongtiantajisha4.add(1)
                d().killall=d().killall.add(1)
            }
        },
        21: {
            display() {
                return '5层通天<br><text style="color:maroon">1 圣剑碎片-1</text><br>600W血 30W攻 50000防<br>当前扣血:'+format(layers.z.need(6000000,300000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha5)+'次'
            },
            unlocked(){return d().tongtiantajisha4.gte(1)},
            style(){return {"height":"125px","width":"600px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(6000000,300000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(6000000,300000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(6000000,300000,50000))
                d().shengjian1=d().shengjian1.add(1)
                d().tongtiantajisha5=d().tongtiantajisha5.add(1)
                d().killall=d().killall.add(1)
            }
        },
        22: {
            display() {
                return '6层通天<br><text style="color:maroon">1 圣剑碎片-2</text><br>700W血 35W攻 50000防<br>当前扣血:'+format(layers.z.need(7000000,350000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha6)+'次'
            },
            unlocked(){return d().tongtiantajisha5.gte(1)},
            style(){return {"height":"125px","width":"550px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(7000000,350000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(7000000,350000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(7000000,350000,50000))
                d().shengjian2=d().shengjian2.add(1)
                d().tongtiantajisha6=d().tongtiantajisha6.add(1)
                d().killall=d().killall.add(1)
            }
        },
        23: {
            display() {
                return '7层通天<br><text style="color:maroon">1 圣剑碎片-3</text><br>800W血 40W攻 50000防<br>当前扣血:'+format(layers.z.need(8000000,400000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha7)+'次'
            },
            unlocked(){return d().tongtiantajisha6.gte(1)},
            style(){return {"height":"125px","width":"500px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(8000000,400000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(8000000,400000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(8000000,400000,50000))
                d().shengjian3=d().shengjian3.add(1)
                d().tongtiantajisha7=d().tongtiantajisha7.add(1)
                d().killall=d().killall.add(1)
            }
        },
        24: {
            display() {
                return '8层通天<br><text style="color:maroon">1 圣剑碎片-4</text><br>900W血 45W攻 50000防<br>当前扣血:'+format(layers.z.need(9000000,450000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha8)+'次'
            },
            unlocked(){return d().tongtiantajisha7.gte(1)},
            style(){return {"height":"125px","width":"450px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(9000000,450000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(9000000,450000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(9000000,450000,50000))
                d().shengjian4=d().shengjian4.add(1)
                d().tongtiantajisha8=d().tongtiantajisha8.add(1)
                d().killall=d().killall.add(1)
            }
        },
        25: {
            display() {
                return '9层通天<br><text style="color:maroon">1 圣剑碎片-5</text><br>1000W血 50W攻 50000防<br>当前扣血:'+format(layers.z.need(10000000,500000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha9)+'次'
            },
            unlocked(){return d().tongtiantajisha8.gte(1)},
            style(){return {"height":"125px","width":"400px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(10000000,500000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(10000000,500000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(10000000,500000,50000))
                d().shengjian5=d().shengjian5.add(1)
                d().tongtiantajisha9=d().tongtiantajisha9.add(1)
                d().killall=d().killall.add(1)
            }
        },
        26: {
            display() {
                return '10层通天<br><text style="color:maroon">1 圣剑碎片-6</text><br>1200W血 60W攻 50000防<br>当前扣血:'+format(layers.z.need(12000000,600000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha10)+'次'
            },
            unlocked(){return d().tongtiantajisha9.gte(1)},
            style(){return {"height":"125px","width":"350px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(12000000,600000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(12000000,600000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(12000000,600000,50000))
                d().shengjian6=d().shengjian6.add(1)
                d().tongtiantajisha10=d().tongtiantajisha10.add(1)
                d().killall=d().killall.add(1)
            }
        },
        27: {
            display() {
                return '11层通天<br><text style="color:maroon">1 圣剑碎片-7</text><br>1400W血 70W攻 50000防<br>当前扣血:'+format(layers.z.need(14000000,700000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha11)+'次'
            },
            unlocked(){return d().tongtiantajisha10.gte(1)},
            style(){return {"height":"125px","width":"300px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(14000000,700000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(14000000,700000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(14000000,700000,50000))
                d().shengjian7=d().shengjian7.add(1)
                d().tongtiantajisha11=d().tongtiantajisha11.add(1)
                d().killall=d().killall.add(1)
            }
        },
        28: {
            display() {
                return '12层通天<br><text style="color:maroon">1 圣剑碎片-8</text><br>1700W血 85W攻 50000防<br>当前扣血:'+format(layers.z.need(17000000,850000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha12)+'次'
            },
            unlocked(){return d().tongtiantajisha11.gte(1)},
            style(){return {"height":"125px","width":"250px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(17000000,850000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(17000000,850000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(17000000,850000,50000))
                d().shengjian8=d().shengjian8.add(1)
                d().tongtiantajisha12=d().tongtiantajisha12.add(1)
                d().killall=d().killall.add(1)
            }
        },
        29: {
            display() {
                return '13层通天<br><text style="color:maroon">1 圣剑碎片-9</text><br>2000W血 100W攻 50000防<br>当前扣血:'+format(layers.z.need(20000000,1000000,50000))+'点'//<br>已击杀:'+format(d().tongtiantajisha13)+'次'
            },
            unlocked(){return d().tongtiantajisha12.gte(1)},
            style(){return {"height":"125px","width":"200px"}},
            canClick(){return d().shengmingnw.gte(layers.z.need(20000000,1000000,50000))},
            onClick(){
                if(d().shengmingnw.lte(layers.z.need(20000000,1000000,50000)))
                {
                    return ""
                }
                d().shengmingnw=d().shengmingnw.sub(layers.z.need(20000000,1000000,50000))
                d().shengjian9=d().shengjian9.add(1)
                d().tongtiantajisha13=d().tongtiantajisha13.add(1)
                d().killall=d().killall.add(1)
            }
        },
    },
    tabFormat: {
        "通天塔": {
            buttonStyle(){return {"color":"red","border-color":"red"}},
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
                ["row", [ ["clickable", 29]]],
                ["row", [ ["clickable", 28]]],
                ["row", [ ["clickable", 27]]],
                ["row", [ ["clickable", 26]]],
                ["row", [ ["clickable", 25]]],
                ["row", [ ["clickable", 24]]],
                ["row", [ ["clickable", 23]]],
                ["row", [ ["clickable", 22]]],
                ["row", [ ["clickable", 21]]],
                ["row", [ ["clickable", 14]]],
                ["row", [ ["clickable", 13]]],
                ["row", [ ["clickable", 12]]],
                ["row", [ ["clickable", 11]]],
            ],
        },
    },
    row: 1,
    layerShown(){return d().dengji.gte(1500)},
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
        var x=zero
        if(d().haveqingtongtaozhuang5.lte(0.5))
        {
            x=n(1000)
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
        }
        if(d().havebaiyingtaozhuang5.lte(0.5))
        {   
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
        }
        if(d().havehuangjintaozhuang5.lte(0.5))
        {
            x=n(1000)
            x=x.min(d().huangjin1mx)
            x=x.min(d().huangjin2mx)
            x=x.min(d().huangjin3mx)
            x=x.min(d().huangjin4mx)
            if(x.gte(60) && d().havehuangjintaozhuang1.lte(0))
            {
                d().havehuangjintaozhuang1=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.05)
                d().fangyubeishu=d().fangyubeishu.mul(1.05)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                d().gongji=d().gongji.mul(1.05)
                d().fangyu=d().fangyu.mul(1.05)
                d().shengmingmx=d().shengmingmx.mul(1.05)
                d().shengminghuifu=d().shengminghuifu.mul(1.05)
            }
            if(x.gte(80) && d().havehuangjintaozhuang2.lte(0))
            {
                d().havehuangjintaozhuang2=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.05)
                d().fangyubeishu=d().fangyubeishu.mul(1.05)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                d().gongji=d().gongji.mul(1.05)
                d().fangyu=d().fangyu.mul(1.05)
                d().shengmingmx=d().shengmingmx.mul(1.05)
                d().shengminghuifu=d().shengminghuifu.mul(1.05)
            }
            if(x.gte(90) && d().havehuangjintaozhuang3.lte(0))
            {
                d().havehuangjintaozhuang3=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.05)
                d().fangyubeishu=d().fangyubeishu.mul(1.05)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                d().gongji=d().gongji.mul(1.05)
                d().fangyu=d().fangyu.mul(1.05)
                d().shengmingmx=d().shengmingmx.mul(1.05)
                d().shengminghuifu=d().shengminghuifu.mul(1.05)
            }
            if(x.gte(95) && d().havehuangjintaozhuang4.lte(0))
            {
                d().havehuangjintaozhuang4=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.05)
                d().fangyubeishu=d().fangyubeishu.mul(1.05)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                d().gongji=d().gongji.mul(1.05)
                d().fangyu=d().fangyu.mul(1.05)
                d().shengmingmx=d().shengmingmx.mul(1.05)
                d().shengminghuifu=d().shengminghuifu.mul(1.05)
            }
            if(x.gte(100) && d().havehuangjintaozhuang5.lte(0))
            {
                d().havehuangjintaozhuang5=n(1)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
                d().shengmingmx=d().shengmingmx.mul(1.1)
                d().shengminghuifu=d().shengminghuifu.mul(1.1)
            }
        }
    },
    tooltip(){return ""},
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
        2: {
            direction: RIGHT,
            width: 300,
            height: 20,
            fillStyle(){return {"background-color":"purple"}},
            unlocked(){return d().jihuolongwenjia.gte(1) && d().dengji.gte(750)},
            display(){return `附魔等级 `+format(d().longwenjiafumodengji)+' / 100'},
            progress() { return d().longwenjiafumodengji.div(100) },
        },
    },
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
        31: {
            display() {
                return `洗炼黄金剑<br>当前数值:`+format(d().huangjin1nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().huangjinzhuangbei.gte(1) && d().jinbi.gte(100000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.2).mul(100).floor().min(100)
                d().huangjin1nw=x
                d().huangjin1mx=d().huangjin1mx.max(x)
                d().gongji=d().gongji.sub(d().huangjin1shuzhi)
                d().huangjin1shuzhi=n(10000).div(100).mul(d().huangjin1mx).mul(d().gongjibeishu)
                d().gongji=d().gongji.add(d().huangjin1shuzhi)
                d().huangjinzhuangbei=d().huangjinzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(100000)
            }
        },
        32: {
            display() {
                return `洗炼黄金护手<br>当前数值:`+format(d().huangjin2nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().huangjinzhuangbei.gte(1) && d().jinbi.gte(100000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.2).mul(100).floor().min(100)
                d().huangjin2nw=x
                d().huangjin2mx=d().huangjin2mx.max(x)
                d().fangyu=d().fangyu.sub(d().huangjin2shuzhi)
                d().huangjin2shuzhi=n(1500).div(100).mul(d().huangjin2mx).mul(d().fangyubeishu)
                d().fangyu=d().fangyu.add(d().huangjin2shuzhi)
                d().huangjinzhuangbei=d().huangjinzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(100000)
            }
        },
        33: {
            display() {
                return `洗炼黄金甲<br>当前数值:`+format(d().huangjin3nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().huangjinzhuangbei.gte(1) && d().jinbi.gte(100000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.2).mul(100).floor().min(100)
                d().huangjin3nw=x
                d().huangjin3mx=d().huangjin3mx.max(x)
                d().shengmingmx=d().shengmingmx.sub(d().huangjin3shuzhi)
                d().huangjin3shuzhi=n(50000).div(100).mul(d().huangjin3mx).mul(d().shengmingbeishu)
                d().shengmingmx=d().shengmingmx.add(d().huangjin3shuzhi)
                d().huangjinzhuangbei=d().huangjinzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(100000)
            }
        },
        34: {
            display() {
                return `洗炼黄金靴<br>当前数值:`+format(d().huangjin4nw)
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().huangjinzhuangbei.gte(1) && d().jinbi.gte(100000)},
            onClick(){
                var x=zero
                x=x.add(Math.random()).add(0.01).pow(1.2).mul(100).floor().min(100)
                d().huangjin4nw=x
                d().huangjin4mx=d().huangjin4mx.max(x)
                d().shengminghuifu=d().shengminghuifu.sub(d().huangjin4shuzhi)
                d().huangjin4shuzhi=n(800).div(100).mul(d().huangjin4mx).mul(d().shengminghuifubeishu)
                d().shengminghuifu=d().shengminghuifu.add(d().huangjin4shuzhi)
                d().huangjinzhuangbei=d().huangjinzhuangbei.sub(1)
                d().jinbi=d().jinbi.sub(100000)
            }
        },
        's11': {
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
        's12': {
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
        's21': {
            display() {
                return `激活-<text style="color:orange">龙纹甲</text><br>需要:1000W金币<br><text style="color:green">生命倍数x2</text><br>`+(d().jihuolongwenjia.gte(1)?"(已激活)":"未激活")
            },
            style(){
                if(d().jihuolongwenjia.gte(1))
                {
                    return {"background-color":"gold","border-color":"blue","border-width":"5px","height":"125px"}
                }
                return {"background-color":"red","border-color":"blue","border-width":"5px","height":"125px"}
            },
            unlocked(){return true},
            canClick(){return d().longwenjia.gte(1) && d().jinbi.gte(10000000) && d().jihuolongwenjia.lte(0)},
            onClick(){
                d().longwenjia=d().longwenjia.sub(1)
                d().jinbi=d().jinbi.sub(10000000)
                d().jihuolongwenjia=n(1)
                d().shengmingbeishu=d().shengmingbeishu.mul(2)
                d().shengmingmx=d().shengmingmx.mul(2)
            }
        },
        's22': {
            display() {
                return '附魔<br>消耗:1附魔书<br>每次附魔,独立提升1%的生命恢复'
            },
            style(){
                return {"border-color":"purple","border-width":"5px","background-color":"black","color":"purple","width":"100px","height":"100px"}
            },
            unlocked(){return d().dengji.gte(750)},
            canClick(){return d().fumoshu.gte(1) && d().longwenjiafumodengji.lte(n(99.1))},
            onClick(){
                d().fumoshu=d().fumoshu.sub(1)
                d().longwenjiafumodengji=d().longwenjiafumodengji.add(1)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.01)
                d().shengminghuifu=d().shengminghuifu.mul(1.01)
            }
        },
        'sq11': {
            display() {
                if(d().jihuodun1.gte(1))
                {
                    return `<h1>┌`
                }
                return `激活 盾碎片-1<br>需要:<br>50 圣盾碎片-1<br>效果:<text style="color:blue">防御倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuodun1.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengdun1.gte(50) && d().jihuodun1.lte(1)},
            onClick(){
                d().shengdun1=d().shengdun1.sub(50)
                d().jihuodun1=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
            }
        },
        'sq12': {
            display() {
                if(d().jihuodun2.gte(1))
                {
                    return `<h1>┐`
                }
                return `激活 盾碎片-2<br>需要:<br>50 圣盾碎片-2<br>效果:<text style="color:blue">防御倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuodun2.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengdun2.gte(50) && d().jihuodun2.lte(1)},
            onClick(){
                d().shengdun2=d().shengdun2.sub(50)
                d().jihuodun2=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
            }
        },
        'sq13': {
            display() {
                if(d().jihuodun3.gte(1))
                {
                    return `<h1>└`
                }
                return `激活 盾碎片-3<br>需要:<br>50 圣盾碎片-3<br>效果:<text style="color:blue">防御倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuodun3.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengdun3.gte(50) && d().jihuodun3.lte(1)},
            onClick(){
                d().shengdun3=d().shengdun3.sub(50)
                d().jihuodun3=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
            }
        },
        'sq14': {
            display() {
                if(d().jihuodun4.gte(1))
                {
                    return `<h1>┘`
                }
                return `激活 盾碎片-4<br>需要:<br>50 圣盾碎片-4<br>效果:<text style="color:blue">防御倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuodun4.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengdun4.gte(50) && d().jihuodun4.lte(1)},
            onClick(){
                d().shengdun4=d().shengdun4.sub(50)
                d().jihuodun4=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.1)
                d().fangyu=d().fangyu.mul(1.1)
            }
        },
        'sq21': {
            display() {
                if(d().jihuojian1.gte(1))
                {
                    return `<h1>^`
                }
                return `激活 剑碎片-1<br>需要:<br>50 圣剑碎片-1<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian1.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian1.gte(50) && d().jihuojian1.lte(1)},
            onClick(){
                d().shengjian1=d().shengjian1.sub(50)
                d().jihuojian1=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq22': {
            display() {
                if(d().jihuojian2.gte(1))
                {
                    return `<h1>|`
                }
                return `激活 剑碎片-2<br>需要:<br>50 圣剑碎片-2<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian2.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian2.gte(50) && d().jihuojian2.lte(1)},
            onClick(){
                d().shengjian2=d().shengjian2.sub(50)
                d().jihuojian2=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq23': {
            display() {
                if(d().jihuojian3.gte(1))
                {
                    return `<h1>|`
                }
                return `激活 剑碎片-3<br>需要:<br>50 圣剑碎片-3<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian3.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian3.gte(50) && d().jihuojian3.lte(1)},
            onClick(){
                d().shengjian3=d().shengjian3.sub(50)
                d().jihuojian3=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq24': {
            display() {
                if(d().jihuojian4.gte(1))
                {
                    return `<h1>|`
                }
                return `激活 剑碎片-4<br>需要:<br>50 圣剑碎片-4<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian4.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian4.gte(50) && d().jihuojian4.lte(1)},
            onClick(){
                d().shengjian4=d().shengjian4.sub(50)
                d().jihuojian4=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq25': {
            display() {
                if(d().jihuojian5.gte(1))
                {
                    return `<h1>|`
                }
                return `激活 剑碎片-5<br>需要:<br>50 圣剑碎片-5<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian5.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian5.gte(50) && d().jihuojian5.lte(1)},
            onClick(){
                d().shengjian5=d().shengjian5.sub(50)
                d().jihuojian5=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq26': {
            display() {
                if(d().jihuojian6.gte(1))
                {
                    return `<h1>——`
                }
                return `激活 剑碎片-6<br>需要:<br>50 圣剑碎片-6<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian6.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian6.gte(50) && d().jihuojian6.lte(1)},
            onClick(){
                d().shengjian6=d().shengjian6.sub(50)
                d().jihuojian6=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq27': {
            display() {
                if(d().jihuojian7.gte(1))
                {
                    return `<h1>——`
                }
                return `激活 剑碎片-7<br>需要:<br>50 圣剑碎片-7<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian7.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian7.gte(50) && d().jihuojian7.lte(1)},
            onClick(){
                d().shengjian7=d().shengjian7.sub(50)
                d().jihuojian7=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq28': {
            display() {
                if(d().jihuojian8.gte(1))
                {
                    return `<h1>——`
                }
                return `激活 剑碎片-8<br>需要:<br>50 圣剑碎片-8<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian8.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian8.gte(50) && d().jihuojian8.lte(1)},
            onClick(){
                d().shengjian8=d().shengjian8.sub(50)
                d().jihuojian8=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq29': {
            display() {
                if(d().jihuojian9.gte(1))
                {
                    return `<h1>||<br>└┘`
                }
                return `激活 剑碎片-9<br>需要:<br>50 圣剑碎片-9<br>效果:<text style="color:red">攻击倍数x1.1`
            },
            unlocked(){return true},
            style(){
                if(d().jihuojian9.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengjian9.gte(50) && d().jihuojian9.lte(1)},
            onClick(){
                d().shengjian9=d().shengjian9.sub(50)
                d().jihuojian9=n(2)
                d().gongjibeishu=d().gongjibeishu.mul(1.1)
                d().gongji=d().gongji.mul(1.1)
            }
        },
        'sq31': {
            display() {
                if(d().jihuoshengqitoukui.gte(1))
                {
                    return `<h1>头盔`
                }
                return `激活 圣器-头盔<br>需要:<br>500 圣器图纸-头盔<br>100 圣器核心<br>效果:<text style="color:green">生命倍数x1.5`
            },
            unlocked(){return true},
            style(){
                if(d().jihuoshengqitoukui.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengqituzhitoukui.gte(500) && d().jihuoshengqitoukui.lte(1) && d().shengqihexin.gte(100)},
            onClick(){
                d().shengqituzhitoukui=d().shengqituzhitoukui.sub(500)
                d().shengqihexin=d().shengqihexin.sub(100)
                d().jihuoshengqitoukui=n(2)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.5)
                d().shengmingmx=d().shengmingmx.mul(1.5)
            }
        },
        'sq32': {
            display() {
                if(d().jihuoshengqiyifu.gte(1))
                {
                    return `<h1>衣服`
                }
                return `激活 圣器-衣服<br>需要:<br>500 圣器图纸-衣服<br>100 圣器核心<br>效果:<text style="color:blue">防御倍数x1.5`
            },
            unlocked(){return true},
            style(){
                if(d().jihuoshengqiyifu.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengqituzhiyifu.gte(500) && d().jihuoshengqiyifu.lte(1) && d().shengqihexin.gte(100)},
            onClick(){
                d().shengqituzhiyifu=d().shengqituzhiyifu.sub(500)
                d().shengqihexin=d().shengqihexin.sub(100)
                d().jihuoshengqiyifu=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.5)
                d().fangyu=d().fangyu.mul(1.5)
            }
        },
        'sq33': {
            display() {
                if(d().jihuoshengqikuzi.gte(1))
                {
                    return `<h1>裤子`
                }
                return `激活 圣器-裤子<br>需要:<br>500 圣器图纸-裤子<br>100 圣器核心<br>效果:<text style="color:blue">防御倍数x1.5`
            },
            unlocked(){return true},
            style(){
                if(d().jihuoshengqikuzi.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengqituzhikuzi.gte(500) && d().jihuoshengqikuzi.lte(1) && d().shengqihexin.gte(100)},
            onClick(){
                d().shengqituzhikuzi=d().shengqituzhikuzi.sub(500)
                d().shengqihexin=d().shengqihexin.sub(100)
                d().jihuoshengqikuzi=n(2)
                d().fangyubeishu=d().fangyubeishu.mul(1.5)
                d().fangyu=d().fangyu.mul(1.5)
            }
        },
        'sq34': {
            display() {
                if(d().jihuoshengqixuezi.gte(1))
                {
                    return `<h1>靴子`
                }
                return `激活 圣器-靴子<br>需要:<br>500 圣器图纸-靴子<br>100 圣器核心<br>效果:<text style="color:green">生命倍数x1.5`
            },
            unlocked(){return true},
            style(){
                if(d().jihuoshengqixuezi.gte(1))
                {
                    return {"height":"125px","width":"125px","background-color":"lime"}
                }
                return {"height":"125px","width":"125px"}
            },
            canClick(){return d().shengqituzhixuezi.gte(500) && d().jihuoshengqixuezi.lte(1) && d().shengqihexin.gte(100)},
            onClick(){
                d().shengqituzhixuezi=d().shengqituzhixuezi.sub(500)
                d().shengqihexin=d().shengqihexin.sub(100)
                d().jihuoshengqixuezi=n(2)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.5)
                d().shengminghuifu=d().shengminghuifu.mul(1.5)
            }
        },
        'bs11': {
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
        'bs12': {
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
        'bs13': {
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
        'bs21': {
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
        'bs22': {
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
        'bs23': {
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
        'bs31': {
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
        'bs32': {
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
        'bs33': {
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
        'bs41': {
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
        'bs42': {
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
        'bs43': {
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
        'bs211': {
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
        'bs212': {
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
        'bs213': {
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
        'bs221': {
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
        'bs222': {
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
        'bs223': {
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
        'bs231': {
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
        'bs232': {
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
        'bs233': {
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
        'bs241': {
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
        'bs242': {
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
        'bs243': {
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
        'bs311': {
            display() {
                return `合成1级红晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().huangjin1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejihongjingshi=d().onejihongjingshi.add(1)
                if(d().huangjin1baoshi.lte(n(0.1)))
                {
                    d().huangjin1baoshi=n(1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.05)
                    d().gongji=d().gongji.mul(1.05)
                }
            }
        },
        'bs312': {
            display() {
                return `合成2级红晶石<br>消耗10一级红晶石`
            },
            unlocked(){return d().huangjin1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejihongjingshi.gte(10)},
            onClick(){
                d().onejihongjingshi=d().onejihongjingshi.sub(10)
                d().twojihongjingshi=d().twojihongjingshi.add(1)
                if(d().huangjin1baoshi.lte(n(1.1)))
                {
                    d().huangjin1baoshi=n(2)
                    d().gongjibeishu=d().gongjibeishu.div(1.05)
                    d().gongjibeishu=d().gongjibeishu.mul(1.1)
                    d().gongji=d().gongji.div(1.05)
                    d().gongji=d().gongji.mul(1.1)
                }
            }
        },
        'bs313': {
            display() {
                return `合成3级红晶石<br>消耗10二级红晶石`
            },
            unlocked(){return d().huangjin1mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojihongjingshi.gte(10)},
            onClick(){
                d().twojihongjingshi=d().twojihongjingshi.sub(10)
                d().threejihongjingshi=d().threejihongjingshi.add(1)
                if(d().huangjin1baoshi.lte(n(2.1)))
                {
                    d().huangjin1baoshi=n(3)
                    d().gongjibeishu=d().gongjibeishu.div(1.1)
                    d().gongjibeishu=d().gongjibeishu.mul(1.2)
                    d().gongji=d().gongji.div(1.1)
                    d().gongji=d().gongji.mul(1.2)
                }
            }
        },
        'bs321': {
            display() {
                return `合成1级蓝晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().huangjin2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilanjingshi=d().onejilanjingshi.add(1)
                if(d().huangjin2baoshi.lte(n(0.1)))
                {
                    d().huangjin2baoshi=n(1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.05)
                    d().fangyu=d().fangyu.mul(1.05)
                }
            }
        },
        'bs322': {
            display() {
                return `合成2级蓝晶石<br>消耗10一级蓝晶石`
            },
            unlocked(){return d().huangjin2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilanjingshi.gte(10)},
            onClick(){
                d().onejilanjingshi=d().onejilanjingshi.sub(10)
                d().twojilanjingshi=d().twojilanjingshi.add(1)
                if(d().huangjin2baoshi.lte(n(1.1)))
                {
                    d().huangjin2baoshi=n(2)
                    d().fangyubeishu=d().fangyubeishu.div(1.05)
                    d().fangyubeishu=d().fangyubeishu.mul(1.1)
                    d().fangyu=d().fangyu.div(1.05)
                    d().fangyu=d().fangyu.mul(1.1)
                }
            }
        },
        'bs323': {
            display() {
                return `合成3级蓝晶石<br>消耗10二级蓝晶石`
            },
            unlocked(){return d().huangjin2mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilanjingshi.gte(10)},
            onClick(){
                d().twojilanjingshi=d().twojilanjingshi.sub(10)
                d().threejilanjingshi=d().threejilanjingshi.add(1)
                if(d().huangjin2baoshi.lte(n(2.1)))
                {
                    d().huangjin2baoshi=n(3)
                    d().fangyubeishu=d().fangyubeishu.div(1.1)
                    d().fangyubeishu=d().fangyubeishu.mul(1.2)
                    d().fangyu=d().fangyu.div(1.1)
                    d().fangyu=d().fangyu.mul(1.2)
                }
            }
        },
        'bs331': {
            display() {
                return `合成1级绿晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().huangjin3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejilvjingshi=d().onejilvjingshi.add(1)
                if(d().huangjin3baoshi.lte(n(0.1)))
                {
                    d().huangjin3baoshi=n(1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.05)
                }
            }
        },
        'bs332': {
            display() {
                return `合成2级绿晶石<br>消耗10一级绿晶石`
            },
            unlocked(){return d().huangjin3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejilvjingshi.gte(10)},
            onClick(){
                d().onejilvjingshi=d().onejilvjingshi.sub(10)
                d().twojilvjingshi=d().twojilvjingshi.add(1)
                if(d().huangjin3baoshi.lte(n(1.1)))
                {
                    d().huangjin3baoshi=n(2)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.05)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                    d().shengmingmx=d().shengmingmx.div(1.05)
                    d().shengmingmx=d().shengmingmx.mul(1.1)
                }
            }
        },
        'bs333': {
            display() {
                return `合成3级绿晶石<br>消耗10二级绿晶石`
            },
            unlocked(){return d().huangjin3mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojilvjingshi.gte(10)},
            onClick(){
                d().twojilvjingshi=d().twojilvjingshi.sub(10)
                d().threejilvjingshi=d().threejilvjingshi.add(1)
                if(d().huangjin3baoshi.lte(n(2.1)))
                {
                    d().huangjin3baoshi=n(3)
                    d().shengmingbeishu=d().shengmingbeishu.div(1.1)
                    d().shengmingbeishu=d().shengmingbeishu.mul(1.2)
                    d().shengmingmx=d().shengmingmx.div(1.1)
                    d().shengmingmx=d().shengmingmx.mul(1.2)
                }
            }
        },
        'bs341': {
            display() {
                return `合成1级血晶石<br>消耗5宝石残片`
            },
            unlocked(){return d().huangjin4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().baoshicanpian.gte(5)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(5)
                d().onejixuejingshi=d().onejixuejingshi.add(1)
                if(d().huangjin4baoshi.lte(n(0.1)))
                {
                    d().huangjin4baoshi=n(1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.05)
                }
            }
        },
        'bs342': {
            display() {
                return `合成2级血晶石<br>消耗10一级血晶石`
            },
            unlocked(){return d().huangjin4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().onejixuejingshi.gte(10)},
            onClick(){
                d().onejixuejingshi=d().onejixuejingshi.sub(10)
                d().twojixuejingshi=d().twojixuejingshi.add(1)
                if(d().huangjin4baoshi.lte(n(1.1)))
                {
                    d().huangjin4baoshi=n(2)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.05)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                    d().shengminghuifu=d().shengminghuifu.div(1.05)
                    d().shengminghuifu=d().shengminghuifu.mul(1.1)
                }
            }
        },
        'bs343': {
            display() {
                return `合成3级血晶石<br>消耗10二级血晶石`
            },
            unlocked(){return d().huangjin4mx.gte(100)},
            style(){return {"height":"100px","width":"100px"}},
            canClick(){return d().twojixuejingshi.gte(10)},
            onClick(){
                d().twojixuejingshi=d().twojixuejingshi.sub(10)
                d().threejixuejingshi=d().threejixuejingshi.add(1)
                if(d().huangjin4baoshi.lte(n(2.1)))
                {
                    d().huangjin4baoshi=n(3)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.div(1.1)
                    d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.2)
                    d().shengminghuifu=d().shengminghuifu.div(1.1)
                    d().shengminghuifu=d().shengminghuifu.mul(1.2)
                }
            }
        },
    },
    microtabs:{
        装备:{
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
            黄金: {
                content:["blank",
                ["display-text",
                    function() { return '每次洗炼消耗1黄金装备和100000金币,数值按最大的计算<br>注意:黄金级装备的洗炼比白银级更加困难'},
                    { "color": "white", "font-size": "20px",}
                ],
                ["display-text",
                    function() { return '黄金套装1:所有黄金装备系数>=60%,所有属性倍数x1.05(独立计算)'},
                    { "color": function() {
                        if(d().havehuangjintaozhuang1.gte(1))
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
                    function() { return '黄金套装2:所有黄金装备系数>=80%,所有属性倍数x1.05(独立计算)'},
                    { "color": function() {
                        if(d().havehuangjintaozhuang2.gte(1))
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
                    function() { return '黄金套装3:所有黄金装备系数>=90%,所有属性倍数x1.05(独立计算)'},
                    { "color": function() {
                        if(d().havehuangjintaozhuang3.gte(1))
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
                    function() { return '黄金套装4:所有黄金装备系数>=95%,所有属性倍数x1.05(独立计算)'},
                    { "color": function() {
                        if(d().havehuangjintaozhuang4.gte(1))
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
                    function() { return '黄金套装5:所有黄金装备系数>=100%,所有属性倍数x1.1(独立计算)'},
                    { "color": function() {
                        if(d().havehuangjintaozhuang5.gte(1))
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
                    function() { return '你有' + format(d().huangjinzhuangbei)+'件黄金装备'},
                    { "color": "gold", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '你有' + format(d().jinbi)+'金币'},
                    { "color": "gold", "font-size": "24px",}
                ],
                "blank",
                ["display-text",
                    function() { return '黄金剑系数:' + format(d().huangjin1mx)+'%'},
                    { "color": "red", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '攻击+' + format(d().huangjin1shuzhi)},
                    { "color": "red", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '黄金护手系数:' + format(d().huangjin2mx)+'%'},
                    { "color": "blue", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '防御+' + format(d().huangjin2shuzhi)},
                    { "color": "blue", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '黄金甲系数:' + format(d().huangjin3mx)+'%'},
                    { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '生命+' + format(d().huangjin3shuzhi)},
                    { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '黄金靴系数:' + format(d().huangjin4mx)+'%'},
                    { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                    function() { return '生命恢复+' + format(d().huangjin4shuzhi)},
                    { "color": "green", "font-size": "24px",}
                ],
                "blank",
                ["row", [ ["clickable", 31],["clickable", 32],["clickable", 33],["clickable", 34],]],
                ],
            },
        },
        圣器:{
            圣盾:{
                buttonStyle(){return {"border-color":"lime"}},
                content:[
                    "blank",
                    ["row",[["clickable",'sq11'],["clickable",'sq12'],]],
                    ["row",[["clickable",'sq13'],["clickable",'sq14'],]],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["display-text",
                        function() { 
                            if(d().jihuodun.gte(1))
                            {
                                return '<text style="color:blue">圣盾 效果:防御倍数x1.5(已激活)'
                            }
                            return '<text style="color:white">圣盾 效果:防御倍数x1.5(未激活)'
                        },
                        {"font-size": "28px",}
                    ],
                ],
            },
            圣剑:{
                buttonStyle(){return {"border-color":"lime"}},
                content:[
                    "blank",
                    ["row",[["clickable",'sq21']]],
                    ["row",[["clickable",'sq22'],["clickable",'sq23'],]],
                    ["row",[["clickable",'sq24'],["clickable",'sq25'],]],
                    ["row",[["clickable",'sq26'],["clickable",'sq27'],["clickable",'sq28'],]],
                    ["row",[["clickable",'sq29']]],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ["display-text",
                        function() { 
                            if(d().jihuojian.gte(1))
                            {
                                return '<text style="color:red">圣剑 效果:攻击倍数x1.5(已激活)'
                            }
                            return '<text style="color:white">圣剑 效果:攻击倍数x1.5(未激活)'
                        },
                        {"font-size": "28px",}
                    ],
                ],
            },
            套装:{
                buttonStyle(){return {"border-color":"lime"}},
                content:[
                    "blank",
                    ["row",[["clickable",'sq31'],"blank","blank","blank","blank",["clickable",'sq32']]],
                    "blank",
                    "blank",
                    ["row",[["clickable",'sq33'],"blank","blank","blank","blank",["clickable",'sq34']]],
                ],
            },
        },
        宝石:{
            青铜: {
                buttonStyle(){return {"border-color":"pink"}},
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
                            ["clickable",'bs11'],["clickable",'bs12'],["clickable",'bs13'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '青铜护手 : '+(d().qingtong2baoshi.gte(3)?'防御+20%':d().qingtong2baoshi.gte(2)?'防御+10%':d().qingtong2baoshi.gte(1)?'防御+5%':"防御+0%")},{ "color": "blue", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs21'],["clickable",'bs22'],["clickable",'bs23'],
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
                            ["clickable",'bs31'],["clickable",'bs32'],["clickable",'bs33'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '青铜靴 : '+(d().qingtong4baoshi.gte(3)?'生命恢复+20%':d().qingtong4baoshi.gte(2)?'生命恢复+10%':d().qingtong4baoshi.gte(1)?'生命恢复+5%':"生命恢复+0%")},{ "color": "green", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs41'],["clickable",'bs42'],["clickable",'bs43'],
                        ]],
                        ]
            },
            白银: {
                buttonStyle(){return {"border-color":"pink"}},
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
                            ["clickable",'bs211'],["clickable",'bs212'],["clickable",'bs213'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '白银护手 : '+(d().baiying2baoshi.gte(3)?'防御+20%':d().baiying2baoshi.gte(2)?'防御+10%':d().baiying2baoshi.gte(1)?'防御+5%':"防御+0%")},{ "color": "blue", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs221'],["clickable",'bs222'],["clickable",'bs223'],
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
                            ["clickable",'bs231'],["clickable",'bs232'],["clickable",'bs233'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '白银靴 : '+(d().baiying4baoshi.gte(3)?'生命恢复+20%':d().baiying4baoshi.gte(2)?'生命恢复+10%':d().baiying4baoshi.gte(1)?'生命恢复+5%':"生命恢复+0%")},{ "color": "green", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs241'],["clickable",'bs242'],["clickable",'bs243'],
                        ]],
                        ]
            },
            黄金: {
                buttonStyle(){return {"border-color":"pink"}},
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
                            ["display-text",function() { return '黄金剑 : '+(d().huangjin1baoshi.gte(3)?'攻击+20%':d().huangjin1baoshi.gte(2)?'攻击+10%':d().huangjin1baoshi.gte(1)?'攻击+5%':"攻击+0%")},{ "color": "red", "font-size": "28px",}],
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            ["clickable",'bs311'],["clickable",'bs312'],["clickable",'bs313'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '黄金护手 : '+(d().huangjin2baoshi.gte(3)?'防御+20%':d().huangjin2baoshi.gte(2)?'防御+10%':d().huangjin2baoshi.gte(1)?'防御+5%':"防御+0%")},{ "color": "blue", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs321'],["clickable",'bs322'],["clickable",'bs323'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '黄金甲 : '+(d().huangjin3baoshi.gte(3)?'生命+20%':d().huangjin3baoshi.gte(2)?'生命+10%':d().huangjin3baoshi.gte(1)?'生命+5%':"生命+0%")},{ "color": "green", "font-size": "28px",}],
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            "blank",
                            ["clickable",'bs331'],["clickable",'bs332'],["clickable",'bs333'],
                        ]],
                        ["row",
                        [
                            ["display-text",function() { return '黄金靴 : '+(d().huangjin4baoshi.gte(3)?'生命恢复+20%':d().huangjin4baoshi.gte(2)?'生命恢复+10%':d().huangjin4baoshi.gte(1)?'生命恢复+5%':"生命恢复+0%")},{ "color": "green", "font-size": "28px",}],
                            "blank",
                            ["clickable",'bs341'],["clickable",'bs342'],["clickable",'bs343'],
                        ]],
                        ]
            },
        }
    },
    tabFormat: {
        装备:{
            content:[
                ["microtabs","装备",{'border-width':'0px'}],
            ]
        },
        宝石:{
            unlocked(){return d().dengji.gte(900)},
            buttonStyle(){return {"border-color":"pink"}},
            content:[
                ["microtabs","宝石",{'border-width':'0px'}],
            ]
        },
        神兵:{
            unlocked(){return d().dengji.gte(500)},
            buttonStyle(){return {"border-color":"blue"}},
            content:[
                ["display-text",
                function() { return '你有'+format(d().caijue)+'把裁决'},
                { "color": "gold", "font-size": "24px",}
                ],
                ["display-text",
                function() { return '你有'+format(d().longwenjia)+'件龙纹甲'},
                { "color": "gold", "font-size": "24px",}
                ],
                ["display-text",
                function() { return '你有'+format(d().shidufen)+'尸毒粉'},
                { "color": "green", "font-size": "24px",}
                ],
                ["display-text",
                function() { return '你有'+format(d().fumoshu)+'附魔书'},
                { "color": "purple", "font-size": "24px",}
                ],
                "blank",
                "blank",
                "blank",
                ["row",[["clickable",'s11'],["bar",1],["clickable",'s12'],]],
                ["row",[["clickable",'s21'],["bar",2],["clickable",'s22'],]],
            ]
        },
        圣器:{
            unlocked(){return d().dengji.gte(1500)},
            buttonStyle(){return {"border-color":"lime"}},
            content:[
                ["microtabs","圣器",{'border-width':'0px'}],
            ]
        },
    },
    row: 2,
    layerShown(){return d().dengji.gte(5)},
})
addLayer("c",{ 
    symbol: "宠物", 
    position: 1,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    branches:['cb'],
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
        33: {
            display() {
                if(d().jiesuotujian9.gte(1))
                {
                    return `解锁图鉴九<br>需求:200羽毛<br>效果:生命倍数x1.1<br>已解锁`
                }
                return `解锁图鉴九<br>需求:200羽毛<br>效果:生命倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian9.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().yumao.gte(200) && d().jiesuotujian9.lte(0)},
            onClick(){
                d().baoshicanpian=d().baoshicanpian.sub(200)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                d().shengmingmx=d().shengmingmx.mul(1.1)
                d().jiesuotujian9=n(1)
            }
        },
        41: {
            display() {
                if(d().jiesuotujian10.gte(1))
                {
                    return `解锁图鉴十<br>需求:1件龙纹甲<br>效果:生命倍数x1.1<br>已解锁`
                }
                return `解锁图鉴十<br>需求:1件龙纹甲<br>效果:生命倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian10.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().longwenjia.gte(1) && d().jiesuotujian10.lte(0)},
            onClick(){
                d().longwenjia=d().longwenjia.sub(1)
                d().shengmingbeishu=d().shengmingbeishu.mul(1.1)
                d().shengmingmx=d().shengmingmx.mul(1.1)
                d().jiesuotujian10=n(1)
            }
        },
        42: {
            display() {
                if(d().jiesuotujian11.gte(1))
                {
                    return `解锁图鉴十一<br>需求:50附魔书<br>效果:生命恢复倍数x1.1<br>已解锁`
                }
                return `解锁图鉴十一<br>需求:50附魔书<br>效果:生命恢复倍数x1.1<br>未解锁`
            },
            style() {
                if(d().jiesuotujian11.lte(0))
                {
                    return {'height':'150px','width':'150px'}
                }
                return {'height':'150px','width':'150px','background-color':'green'}
            },
            unlocked(){return true},
            canClick(){return d().fumoshu.gte(50) && d().jiesuotujian11.lte(0)},
            onClick(){
                d().fumoshu=d().fumoshu.sub(50)
                d().shengminghuifubeishu=d().shengminghuifubeishu.mul(1.1)
                d().shengminghuifu=d().shengminghuifu.mul(1.1)
                d().jiesuotujian11=n(1)
            }
        },
    },
    milestones: {
        0:{
            requirementDescription: "初出茅庐(1W战力)",
            effectDescription: `挂机倍数额外x1.1(不受软上限影响)`,
            done() {return d().zhanli.gte(10000)},
        },
        1:{
            requirementDescription: "一知半解(5W战力)",
            effectDescription: `挂机倍数额外x1.2(不受软上限影响)<br>魔血结晶需求/2`,
            unlocked(){return hasMilestone("t",0)},
            done() {return d().zhanli.gte(50000)},
        },
        2:{
            requirementDescription: "炉火纯青(10W战力)",
            effectDescription: `挂机倍数额外x1.3(不受软上限影响)`,
            unlocked(){return hasMilestone("t",1)},
            done() {return d().zhanli.gte(100000)},
        },
        3:{
            requirementDescription: "登堂入室(20W战力)",
            effectDescription: `挂机倍数额外x1.4(不受软上限影响)<br>魔血结晶需求/2`,
            unlocked(){return hasMilestone("t",2)},
            done() {return d().zhanli.gte(200000)},
        },
        4:{
            requirementDescription: "名扬四海(50W战力)",
            effectDescription: `魔血结晶需求/2`,
            unlocked(){return hasMilestone("t",3)},
            done() {return d().zhanli.gte(500000)},
        },
        5:{
            requirementDescription: "登峰造极(100W战力)",
            effectDescription: `魔血需求开2次根`,
            unlocked(){return hasMilestone("t",4)},
            done() {return d().zhanli.gte(1000000)},
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
                    ["row", [ ["clickable", 41],["clickable", 42],["clickable", 43],]],
                ],
        },
        称号: {
            content:["blank",
                    ["display-text",
                        function() { return '每一个称号都记录着你的事迹,世人将永远敬仰你' },
                        { "color": "white", "font-size": "28px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    "milestones",
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
        if(hasUpgrade("vip",253)){x=x.add(layers.z.need(150000,50000,5000))}
        if(hasUpgrade("vip",254)){x=x.add(layers.z.need(300000,50000,20000))}
        if(hasUpgrade("vip",261)){x=x.add(layers.z.need(800000,100000,40000))}
        if(hasUpgrade("vip",15)){x=x.div(2)}
        d().zongxuqiu=x
        if(d().zongxuqiu.lte(n(0)))
        {
            d().guajibeishu=n(1)
        }
        else
        {
            d().guajibeishu=d().shengminghuifu.div(d().zongxuqiu)
        }
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
        d().dulibeishu=one
        if(hasMilestone("t",0))
        {
            d().dulibeishu=d().dulibeishu.mul(1.1)
        }
        if(hasMilestone("t",1))
        {
            d().dulibeishu=d().dulibeishu.mul(1.2)
        }
        if(hasMilestone("t",2))
        {
            d().dulibeishu=d().dulibeishu.mul(1.3)
        }
        if(hasMilestone("t",3))
        {
            d().dulibeishu=d().dulibeishu.mul(1.4)
        }
        d().guajibeishu=d().guajibeishu.mul(d().dulibeishu)
        d().guajishijian=d().guajishijian.add(diff)
        if(hasUpgrade("vip",241))
        {
            d().moxue=d().moxue.add(d().shengminghuifu.add(1).div(10).mul(diff))
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
            if(d().killall.gte(d().hunqidengji.add(1).mul(500)))
            {
                d().hunqidengji=d().hunqidengji.add(1)
                d().killall=d().killall.sub(d().hunqidengji.add(1).mul(500))
            }
            else if(layers.m.clickables[11].canClick())
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
        16:{
            fullDisplay(){
                return "VIP6<br>效果1:额外增加一枚挂机插槽<br>效果2:额外增加一枚挂机插槽<br>需要:8888W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(88880000)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
                d().zidongguajichacao=d().zidongguajichacao.add(1)
            },
            canAfford(){
                return d().jinbi.gte(88880000)
            },
            style(){return {"height":"125px"}},
            unlocked(){return hasUpgrade("vip",15)},
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
        253:{
            fullDisplay(){
                return "自动挂机<br>巢穴-秃鹫<br><br>需要:1000W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(10000000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(10000000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        254:{
            fullDisplay(){
                return "自动挂机<br>巢穴-黄金巨人<br><br>需要:2000W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(20000000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(20000000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        261:{
            fullDisplay(){
                return "自动挂机<br>祖玛神殿-祖玛守卫<br><br>需要:5000W金币"
            },
            onPurchase(){
                d().jinbi=d().jinbi.sub(50000000)
                d().zidongguajichacao=d().zidongguajichacao.sub(1)
            },
            canAfford(){
                return d().jinbi.gte(50000000) && d().zidongguajichacao.gte(1)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        241:{
            fullDisplay(){
                return "自动转化魔血<br><br>需要:30000金币"
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
        if(d().guajibeishu.div(d().dulibeishu).gte(20))
        {
            return "(已达三次软上限)"
        }
        if(d().guajibeishu.div(d().dulibeishu).gte(10))
        {
            return "(已达二次软上限)"
        }
        if(d().guajibeishu.div(d().dulibeishu).gte(3))
        {
            return "(已达软上限)"
        }
        return ""
    },
    clickables:{
        11: {
            display() {
                return '领取收益'
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
            canClick(){return true},
            onClick(){
                if(hasUpgrade("vip",211))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled11=d().haskilled11.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",212))
                {
                    d().qingtongzhuangbei=d().qingtongzhuangbei.add(n(0.2).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(3).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(2).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled12=d().haskilled12.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",213))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(5).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(10).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled13=d().haskilled13.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",214))
                {
                    d().chongwudan=d().chongwudan.add(n(0.2).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(50).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(100).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled14=d().haskilled14.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",221))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(500).mul(d().guajishijian).mul(d().guajibeishu))
                    // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled21=d().haskilled21.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",222))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(3000).mul(d().guajishijian).mul(d().guajibeishu))
                    // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled22=d().haskilled22.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",223))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(50000).mul(d().guajishijian).mul(d().guajibeishu))
                    // if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled23=d().haskilled23.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",231))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(75).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(150).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled31=d().haskilled31.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",232))
                {
                    d().baiyingzhuangbei=d().baiyingzhuangbei.add(n(0.2).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(100).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(200).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled32=d().haskilled32.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",234))
                {
                    d().caijue=d().caijue.add(n(0.001).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(500).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled34=d().haskilled34.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",251))
                {
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(1000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(1500).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled41=d().haskilled41.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",252))
                {
                    d().baoshicanpian=d().baoshicanpian.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(2000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(3000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled42=d().haskilled42.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",253))
                {
                    d().yumao=d().yumao.add(n(0.5).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(3000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(5000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled43=d().haskilled43.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",254))
                {
                    d().longwenjia=d().longwenjia.add(n(0.001).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(5000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(10000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled44=d().haskilled44.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                if(hasUpgrade("vip",261))
                {
                    d().huangjinzhuangbei=d().huangjinzhuangbei.add(n(0.2).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",11))d().jingyan=d().jingyan.add(n(10000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",12))d().jinbi=d().jinbi.add(n(15000).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().haskilled51=d().haskilled51.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                    if(hasUpgrade("vip",13))d().killall=d().killall.add(n(1).mul(d().guajishijian).mul(d().guajibeishu))
                }
                d().guajishijian=n(0)
            }
        },
    },
    tabFormat: {
        VIP: {
            content:["blank",
                    ["display-text",
                        function() { return '还在等什么,少年,想要变强,那就氪金币吧!!!' },
                        { "color": "gold", "font-size": "28px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["upgrade", 11],["upgrade", 12],["upgrade", 13],["upgrade", 14],["upgrade", 15],]],
                    ["row", [ ["upgrade", 16],["upgrade", 17],["upgrade", 18],["upgrade", 19],]],
                ],
        },
        自动化: {
            content:[            
                    ["row", [ ["infobox", "lore"]]],
                    "blank",
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
                    ["display-text",
                        function() { return '你当前挂机了'+format(d().guajishijian)+'秒' },
                        { "color": "white", "font-size": "20px",}
                    ],
                    "blank",
                    "blank",
                    ["row", [ ["clickable", 11],]],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["upgrade", 243],["upgrade", 241],["upgrade", 242],]],
                    ["row", [ ["upgrade", 211],["upgrade", 212],["upgrade", 213],["upgrade", 214],]],
                    ["row", [ ["upgrade", 221],["upgrade", 222],["upgrade", 223],]],
                    ["row", [ ["upgrade", 231],["upgrade", 232],["upgrade", 234],]],
                    ["row", [ ["upgrade", 251],["upgrade", 252],["upgrade", 253],["upgrade", 254],]],
                    ["row", [ ["upgrade", 261],["upgrade", 262],["upgrade", 263],["upgrade", 264],]],
                ],
        },
    },
    row: "side",
    layerShown(){return d().dengji.gte(100)},
})
addLayer("svip",{ 
    symbol: "SVIP", 
    position: 1,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "orange",
    resource: "SVIP",
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
            title: "重洗说明",
            body() { return "<h3>重洗会让你的VIP重置<br>但并不会返还金币,请慎重考虑" },
        },
    },
    tooltip(){return ""},
    upgrades:{
        11:{
            fullDisplay(){
                return "SVIP1<br>给你一次重洗的机会<br>需要:8.88元宝"
            },
            onPurchase(){
                d().yuanbao=d().yuanbao.sub(8.88)
                d().chongxicishu=d().chongxicishu.add(1)
            },
            canAfford(){
                return d().yuanbao.gte(8.88)
            },
            style(){return {"height":"125px"}},
            unlocked(){return true},
        },
        12:{
            fullDisplay(){
                return "SVIP2<br>再来一次重洗<br>需要:88.8元宝"
            },
            onPurchase(){
                d().yuanbao=d().yuanbao.sub(88.8)
                d().chongxicishu=d().chongxicishu.add(1)
            },
            canAfford(){
                return d().yuanbao.gte(88.8)
            },
            style(){return {"height":"125px"}},
            unlocked(){return hasUpgrade("svip",11)},
        },
    },
    clickables:{
        11: {
            display() {
                return `一键回收青铜装备<br>单价:0.01元宝`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().yuanbao=d().yuanbao.add(d().qingtongzhuangbei.div(100))
                d().qingtongzhuangbei=n(0)
            }
        },
        12: {
            display() {
                return `一键回收白银装备<br>单价:0.02元宝`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().yuanbao=d().yuanbao.add(d().baiyingzhuangbei.div(50))
                d().baiyingzhuangbei=n(0)
            }
        },
        13: {
            display() {
                return `一键回收白银装备<br>单价:0.05元宝`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().yuanbao=d().yuanbao.add(d().huangjinzhuangbei.div(20))
                d().huangjinzhuangbei=n(0)
            }
        },
        14: {
            display() {
                return `一键回收裁决<br>单价:5元宝`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().yuanbao=d().yuanbao.add(d().caijue.mul(5))
                d().caijue=n(0)
            }
        },
        15: {
            display() {
                return `一键回收龙纹甲<br>单价:10元宝`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return true},
            onClick(){
                d().yuanbao=d().yuanbao.add(d().longwenjia.mul(10))
                d().longwenjia=n(0)
            }
        },
        66666: {
            display() {
                return `<text style="color:red">重洗</text>`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().chongxicishu.gte(1)},
            onClick(){
                d().chongxicishu=d().chongxicishu.sub(1)
                layerDataReset('vip',[])
            }
        },
    },
    tabFormat: {
        SVIP: {
            content:["blank",
                    ["display-text",
                        function() { return '还在等什么,少年,想要变强,那就氪元宝吧!!!' },
                        { "color": "orange", "font-size": "28px",}
                    ],
                    "blank",
                    ["display-text",
                        function() { return '你还可以重洗'+format(d().chongxicishu)+'次' },
                        { "color": "white", "font-size": "24px",}
                    ],
                    "blank",
                    ["row", [ ["clickable", 66666],]],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["upgrade", 11],["upgrade", 12],]],
                ],
        },
        回收: {
            content:["blank",
                    ["display-text",
                        function() { return '你有'+format(d().yuanbao)+'<text style="color:orange">元宝</text>' },
                        {"font-size": "28px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row", [ ["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],]],
                ],
        },
    },
    row: "side",
    layerShown(){return d().dengji.gte(100)},
})
function walkto(x,y){
    var tt=d().nwt
    var xx=n(x)
    var yy=n(y)
    d().player_pos_x[tt]=n(xx)
    d().player_pos_y[tt]=n(yy)
    var isM=n(100)
    var xxx=zero
    for(var i=0,len=d().guaiwu_x[tt].length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu_x[tt][i]).abs().add(yy.sub(d().guaiwu_y[tt][i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(i)
            break
        }
    }
    if(isM.lte(99))
    {
        var tmp=d().guaiwu_x[tt][d().guaiwu_x[[tt]].length-1]
        d().guaiwu_x[tt][d().guaiwu_x[tt].length-1]=d().guaiwu_x[tt][isM]
        d().guaiwu_x[tt][isM]=tmp
        tmp=d().guaiwu_y[tt][d().guaiwu_y[tt].length-1]
        d().guaiwu_y[tt][d().guaiwu_y[tt].length-1]=d().guaiwu_y[tt][isM]
        d().guaiwu_y[tt][isM]=tmp
        d().guaiwu_x[tt].pop()
        d().guaiwu_y[tt].pop()
        d().shengmingnw=d().shengmingnw.sub(layers.z.need(d().guaiwuxue[tt],d().guaiwugong[tt],d().guaiwufang[tt]))
        if(tt.lte(n(0.5)))
        {
            var xxxxx=zero
            xxxxx=xxxxx.add(Math.random())
            if(xxxxx.gte(0.5))
            {
                d().shidufen=d().shidufen.add(1)
            }
        }
        if(tt.gte(n(0.5)))
        {
            var xxxxx=zero
            xxxxx=xxxxx.add(Math.random())
            if(xxxxx.gte(0.5))
            {
                d().fumoshu=d().fumoshu.add(1)
            }
        }
    }
    return ""
}
function canwalk(x,y,ned){
    var tt=d().nwt
    var xx=n(x)
    var yy=n(y)
    var nd=n(ned)
    var isM=zero
    var xxx=zero
    for(var i=0,len=d().cannot_x[tt].length;i<len;i++)
    {
        xxx=xx.sub(d().cannot_x[tt][i]).abs().add(yy.sub(d().cannot_y[tt][i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(2)
            break
        }
    }
    if(isM.gte(1))
    {
        return false
    }
    isM=zero
    for(var i=0,len=d().guaiwu_x[tt].length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu_x[tt][i]).abs().add(yy.sub(d().guaiwu_y[tt][i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(2)
            break
        }
    }
    xxx=d().player_pos_x[tt].sub(xx).abs().add(d().player_pos_y[tt].sub(yy).abs())
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
    var tt=d().nwt
    var xx=n(x)
    var yy=n(y)
    var isM=zero
    var xxx=zero
    for(var i=0,len=d().cannot_x[tt].length;i<len;i++)
    {
        xxx=xx.sub(d().cannot_x[tt][i]).abs().add(yy.sub(d().cannot_y[tt][i]).abs())
        if(xxx.lte(n(0.001)))
        {
            isM=n(1)
            break
        }
    }
    if(isM.gte(1))
    {
        return {"background-color":"black","height":"75px","width":"75px","transition-duration":"0s"}
    }
    var xxx=d().player_pos_x[tt].sub(xx).abs().add(d().player_pos_y[tt].sub(yy).abs())
    if(xxx.lte(n(0.001)))
    {
        return {"background-color":"red","height":"75px","width":"75px","transition-duration":"0s"}
    }
    isM=zero
    for(var i=0,len=d().guaiwu_x[tt].length;i<len;i++)
    {
        xxx=xx.sub(d().guaiwu_x[tt][i]).abs().add(yy.sub(d().guaiwu_y[tt][i]).abs())
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
    var xxx=d().player_pos_x[tt].sub(xx).abs().add(d().player_pos_y[tt].sub(yy).abs())
    if(xxx.lte(1))
    {
        return {"background-color":"green","height":"75px","width":"75px","transition-duration":"0s"}
    }
    return {"background-color":"white","height":"75px","width":"75px","transition-duration":"0s"}
}
function walkup(){
    var tt=d().nwt
    if(d().player_pos_x[tt].lte(0))
    {
        return ""
    }
    walkto(d().player_pos_x[tt].sub(1),d().player_pos_y[tt])
}
function walkdown(){
    var tt=d().nwt
    if(d().player_pos_x[tt].gte(d().szx[tt]))
    {
        return ""
    }
    walkto(d().player_pos_x[tt].add(1),d().player_pos_y[tt])
}
function walkleft(){
    var tt=d().nwt
    if(d().player_pos_y[tt].lte(0))
    {
        return ""
    }
    walkto(d().player_pos_x[tt],d().player_pos_y[tt].sub(1))
}
function walkright(){
    var tt=d().nwt
    if(d().player_pos_y[tt].gte(d().szy[d().nwt]))
    {
        return ""
    }
    walkto(d().player_pos_x[tt],d().player_pos_y[tt].add(1))
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
        lore1: {
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
            黑色:障碍物<br>
            <text style="color:orange">橘色</text>:怪物的位置<br>
            掉落:每只骷髅有50%几率掉落1附魔书` },
        },
    },
    tooltip(){return ""},
    hotkeys: [
        {
            key: "w", 
            description: "w:向上",
            onPress() {
                if(d().player_pos_x[d().nwt].lte(1))
                {
                    return ""
                }
                if(canwalk(d().player_pos_x[d().nwt].sub(1),d().player_pos_y[d().nwt],layers.z.need(d().guaiwuxue[d().nwt],d().guaiwugong[d().nwt],d().guaiwufang[d().nwt])))
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
                if(d().player_pos_x[d().nwt].gte(d().szx[d().nwt]))
                {
                    return ""
                }
                if(canwalk(d().player_pos_x[d().nwt].add(1),d().player_pos_y[d().nwt],layers.z.need(d().guaiwuxue[d().nwt],d().guaiwugong[d().nwt],d().guaiwufang[d().nwt])))
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
                if(d().player_pos_y[d().nwt].lte(1))
                {
                    return ""
                }
                if(canwalk(d().player_pos_x[d().nwt],d().player_pos_y[d().nwt].sub(1),layers.z.need(d().guaiwuxue[d().nwt],d().guaiwugong[d().nwt],d().guaiwufang[d().nwt])))
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
                if(d().player_pos_y[d().nwt].gte(d().szy[d().nwt]))
                {
                    return ""
                }
                if(canwalk(d().player_pos_x[d().nwt],d().player_pos_y[d().nwt].add(1),layers.z.need(d().guaiwuxue[d().nwt],d().guaiwugong[d().nwt],d().guaiwufang[d().nwt])))
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
                var tt=d().nwt
                if(n(d().guaiwu_x[tt].length).gte(1))
                {
                    return ""
                }
                for(var i=0;i<5;i++)
                {
                    var xx=one
                    xx=xx.div(d().szx[tt])
                    xx=xx.add(Math.random())
                    xx=xx.mul(d().szx[tt])
                    xx=xx.floor()
                    xx=xx.min(d().szx[tt])
                    var yy=one
                    yy=yy.div(d().szy[tt])
                    yy=yy.add(Math.random())
                    yy=yy.mul(d().szy[tt])
                    yy=yy.floor()
                    yy=yy.min(d().szy[tt])
                    var isM=zero
                    var xxx=zero
                    for(var j=0,len=d().cannot_x[tt].length;j<len;j++)
                    {
                        xxx=xx.sub(d().cannot_x[tt][j]).abs().add(yy.sub(d().cannot_y[tt][j]).abs())
                        if(xxx.lte(n(0.001)))
                        {
                            isM=n(2)
                            break
                        }
                    }
                    if(isM.gte(1))
                    {
                        continue
                    }
                    d().guaiwu_x[tt].push(xx)
                    d().guaiwu_y[tt].push(yy)
                }
            },
            unlocked() {return d().dengji.gte(750)}
        },
    ],
    clickables:{
        11111: {
            display() {return `切换至秘境0`},
            style(){return {'height':"125px"}},
            unlocked(){return true},
            canClick(){return d().nwt.gte(n(0.5))},
            onClick(){d().nwt=n(0)}
        },
        11112: {
            display() {return `刷新怪物`},
            style(){return {'height':"125px"}},
            unlocked(){return true},
            canClick(){return d().guaiwu_x[d().nwt].length<=0},
            onClick(){
                var tt=d().nwt
                if(n(d().guaiwu_x[tt].length).gte(1))
                {
                    return ""
                }
                for(var i=0;i<5;i++)
                {
                    var xx=one
                    xx=xx.div(d().szx[tt])
                    xx=xx.add(Math.random())
                    xx=xx.mul(d().szx[tt])
                    xx=xx.floor()
                    xx=xx.min(d().szx[tt])
                    var yy=one
                    yy=yy.div(d().szy[tt])
                    yy=yy.add(Math.random())
                    yy=yy.mul(d().szy[tt])
                    yy=yy.floor()
                    yy=yy.min(d().szy[tt])
                    var isM=zero
                    var xxx=zero
                    for(var j=0,len=d().cannot_x[tt].length;j<len;j++)
                    {
                        xxx=xx.sub(d().cannot_x[tt][j]).abs().add(yy.sub(d().cannot_y[tt][j]).abs())
                        if(xxx.lte(n(0.001)))
                        {
                            isM=n(2)
                            break
                        }
                    }
                    if(isM.gte(1))
                    {
                        continue
                    }
                    d().guaiwu_x[tt].push(xx)
                    d().guaiwu_y[tt].push(yy)
                }
            }
        },
        21111: {
            display() {return `切换至秘境1`},
            style(){return {'height':"125px"}},
            unlocked(){return true},
            canClick(){return d().nwt.lte(n(0.5))},
            onClick(){d().nwt=n(1)}
        },
        21112: {
            display() {return `刷新怪物`},
            style(){return {'height':"125px"}},
            unlocked(){return true},
            canClick(){return d().guaiwu_x[d().nwt].length<=0},
            onClick(){
                var tt=d().nwt
                if(n(d().guaiwu_x[tt].length).gte(1))
                {
                    return ""
                }
                for(var i=0;i<5;i++)
                {
                    var xx=one
                    xx=xx.div(d().szx[tt])
                    xx=xx.add(Math.random())
                    xx=xx.mul(d().szx[tt])
                    xx=xx.floor()
                    xx=xx.min(d().szx[tt])
                    var yy=one
                    yy=yy.div(d().szy[tt])
                    yy=yy.add(Math.random())
                    yy=yy.mul(d().szy[tt])
                    yy=yy.floor()
                    yy=yy.min(d().szy[tt])
                    var isM=zero
                    var xxx=zero
                    for(var j=0,len=d().cannot_x[tt].length;j<len;j++)
                    {
                        xxx=xx.sub(d().cannot_x[tt][j]).abs().add(yy.sub(d().cannot_y[tt][j]).abs())
                        if(xxx.lte(n(0.001)))
                        {
                            isM=n(2)
                            break
                        }
                    }
                    if(isM.gte(1))
                    {
                        continue
                    }
                    d().guaiwu_x[tt].push(xx)
                    d().guaiwu_y[tt].push(yy)
                }
            }
        },
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
        211: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(1,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,1)}
        },
        212: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(1,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,2)}
        },
        213: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(1,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,3)}
        },
        214: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(1,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,4)}
        },
        215: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(1,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,5)}
        },
        216: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(1,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,6)}
        },
        217: {
            display() {return ``},
            style(){return ggttstyle(n(1),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(1,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(1,7)}
        },
        221: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(2,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,1)}
        },
        222: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(2,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,2)}
        },
        223: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(2,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,3)}
        },
        224: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(2,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,4)}
        },
        225: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(2,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,5)}
        },
        226: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(2,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,6)}
        },
        227: {
            display() {return ``},
            style(){return ggttstyle(n(2),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(2,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(2,7)}
        },
        231: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(3,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,1)}
        },
        232: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(3,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,2)}
        },
        233: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(3,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,3)}
        },
        234: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(3,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,4)}
        },
        235: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(3,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,5)}
        },
        236: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(3,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,6)}
        },
        237: {
            display() {return ``},
            style(){return ggttstyle(n(3),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(3,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(3,7)}
        },
        241: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(4,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,1)}
        },
        242: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(4,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,2)}
        },
        243: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(4,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,3)}
        },
        244: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(4,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,4)}
        },
        245: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(4,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,5)}
        },
        246: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(4,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,6)}
        },
        247: {
            display() {return ``},
            style(){return ggttstyle(n(4),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(4,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(4,7)}
        },
        251: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(5,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,1)}
        },
        252: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(5,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,2)}
        },
        253: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(5,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,3)}
        },
        254: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(5,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,4)}
        },
        255: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(5,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,5)}
        },
        256: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(5,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,6)}
        },
        257: {
            display() {return ``},
            style(){return ggttstyle(n(5),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(5,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(5,7)}
        },
        261: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(6,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,1)}
        },
        262: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(6,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,2)}
        },
        263: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(6,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,3)}
        },
        264: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(6,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,4)}
        },
        265: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(6,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,5)}
        },
        266: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(6,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,6)}
        },
        267: {
            display() {return ``},
            style(){return ggttstyle(n(6),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(6,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(6,7)}
        },
        271: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(1))},
            unlocked(){return true},
            canClick(){return canwalk(7,1,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,1)}
        },
        272: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(2))},
            unlocked(){return true},
            canClick(){return canwalk(7,2,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,2)}
        },
        273: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(3))},
            unlocked(){return true},
            canClick(){return canwalk(7,3,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,3)}
        },
        274: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(4))},
            unlocked(){return true},
            canClick(){return canwalk(7,4,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,4)}
        },
        275: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(5))},
            unlocked(){return true},
            canClick(){return canwalk(7,5,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,5)}
        },
        276: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(6))},
            unlocked(){return true},
            canClick(){return canwalk(7,6,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,6)}
        },
        277: {
            display() {return ``},
            style(){return ggttstyle(n(7),n(7))},
            unlocked(){return true},
            canClick(){return canwalk(7,7,layers.z.need(2500000,200000,20000))},
            onClick(){walkto(7,7)}
        },
    },
    tabFormat: {
        '秘境-僵尸洞':{
                unlocked(){return (d().caijuecuidudengji.lte(n(99.5)) || d().jiesuotujian7.lte(0.5) || d().longwenjiafumodengji.lte(n(99.5)) || d().jiesuotujian11.lte(0.5))},
                content:[
                    ["row",[["infobox","lore"]]],
                    ["display-text",
                        function() { return '你当前的坐标X:'+format(d().player_pos_x[0])+',Y:'+format(d().player_pos_y[0]) },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '你当前在秘境'+format(d().nwt) },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '当前拥有'+format(d().shidufen)+'尸毒粉'},
                        { "color": "green", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '当前还剩'+format(d().guaiwu_x[0].length)+'只僵尸'},
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
                    "blank",
                    ["row",[["clickable",11111],["clickable",11112],]],
                ],
        },
        '秘境-地穴':{
                unlocked() { return d().longwenjiafumodengji.lte(n(99.5)) || d().jiesuotujian11.lte(0.5)},
                content:[
                    ["row",[["infobox","lore1"]]],
                    ["display-text",
                        function() { return '你当前的坐标X:'+format(d().player_pos_x[1])+',Y:'+format(d().player_pos_y[1]) },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '你当前在秘境'+format(d().nwt) },
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '当前拥有'+format(d().fumoshu)+'附魔书'},
                        { "color": "green", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '当前还剩'+format(d().guaiwu_x[1].length)+'只骷髅'},
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '骷髅属性:250W血,20W攻,2W防'},
                        { "color": "white", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '你当前的生命为' + format(d().shengmingnw) + '点(+' + format(d().shengminghuifu) +'点/秒)'},
                        { "color": "green", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '当前扣血:'+format(layers.z.need(2500000,200000,20000))+'点'},
                        { "color": "green", "font-size": "24px",}
                    ],
                    "blank",
                    "blank",
                    ["row",[["clickable",211],["clickable",212],["clickable",213],["clickable",214],["clickable",215],["clickable",216],["clickable",217],]],
                    ["row",[["clickable",221],["clickable",222],["clickable",223],["clickable",224],["clickable",225],["clickable",226],["clickable",227],]],
                    ["row",[["clickable",231],["clickable",232],["clickable",233],["clickable",234],["clickable",235],["clickable",236],["clickable",237],]],
                    ["row",[["clickable",241],["clickable",242],["clickable",243],["clickable",244],["clickable",245],["clickable",246],["clickable",247],]],
                    ["row",[["clickable",251],["clickable",252],["clickable",253],["clickable",254],["clickable",255],["clickable",256],["clickable",257],]],
                    ["row",[["clickable",261],["clickable",262],["clickable",263],["clickable",264],["clickable",265],["clickable",266],["clickable",267],]],
                    ["row",[["clickable",271],["clickable",272],["clickable",273],["clickable",274],["clickable",275],["clickable",276],["clickable",277],]],
                    "blank",
                    ["row",[["clickable",21111],["clickable",21112],]],
            ],
        }
    },
    row: 2,
    layerShown(){return d().dengji.gte(750) && (d().caijuecuidudengji.lte(n(99.5)) || d().jiesuotujian7.lte(0.5) || d().longwenjiafumodengji.lte(n(99.5)) || d().jiesuotujian11.lte(0.5))},
})
addLayer("cb",{ 
    symbol: "翅膀", 
    position: 3,
    startData() { return {
        unlocked: true, 
		points: new ExpantaNum(0),
    }},
    color: "grey",
    resource: "翅膀",
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
        if(d().chibangdengji.gte(40))
        {
            d().yumaoxuqiu=n(150)
        }
        else if(d().chibangdengji.gte(30))
        {
            d().yumaoxuqiu=n(100)
        }
        else if(d().chibangdengji.gte(20))
        {
            d().yumaoxuqiu=n(60)
        }
        else if(d().chibangdengji.gte(10))
        {
            d().yumaoxuqiu=n(35)
        }
        
    },
    demo(leve)
    {
        let leveVal = ''
        for(let i=0;i<=39;i++)
        {
            if (d().chibangdengji.lte(i))
            {
                const leve=(i + '').split('')
                if(leve.length<=1)
                {
                    leveVal=`洁白之翼 0阶${leve[0]}星`
                }
                else
                {
                    if(leve[0]==1)
                    {
                        leveVal=`<text style="color:gold">圣洁之翼</text> ${leve[0]}阶${leve[1]}星`
                    }
                    else if(leve[0]==2)
                    {
                        leveVal=`<text style="color:red">烈火之翼</text> ${leve[0]}阶${leve[1]}星`
                    }
                    else if(leve[0]==3)
                    {
                        leveVal=`<text style="color:blue">玄冰之翼</text> ${leve[0]}阶${leve[1]}星`
                    }
                }
            }
            if(i==leve)
            {
                break
            }
        }
        return leveVal
    },
    clickables:{
        11: {
            display() {
                if(d().chibangdengji.gte(39))
                {
                    return `已达该版本最高上限`
                }
                return `升级翅膀`
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().yumao.gte(d().yumaoxuqiu) && d().chibangdengji.lte(n(38.5))},
            onClick(){
                if(d().yumao.lte(d().yumaoxuqiu.sub(0.1)))
                {
                    return ""
                }
                d().yumao=d().yumao.sub(d().yumaoxuqiu)
                d().chibangdengji=d().chibangdengji.add(1)
                var x=n(d().chibangshuxing[d().chibangdengji.sub(1)])
                var y=n(d().chibangshuxing[d().chibangdengji])

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
        12: {
            display() {
                return '金币抽奖!<br>已经抽了'+format(d().choujiangcishu)+'次<br>抽一次要1W金币<br>中奖率:1%%'
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().jinbi.gte(10000) && d().pifu_xingqisi.lte(0)},
            onClick(){
                d().jinbi=d().jinbi.sub(10000)
                var x=zero
                x=x.add(Math.random())
                if(x.gte(0.9999))
                {
                    d().pifu_xingqisi=n(2)
                }
                d().choujiangcishu=d().choujiangcishu.add(1)
            }
        },
        13: {
            display() {
                return '元宝抽奖!<br>已经抽了'+format(d().choujiangcishu1)+'次<br>抽一次要5元宝<br>中奖率:1%'
            },
            unlocked(){return true},
            style(){return {"height":"125px"}},
            canClick(){return d().yuanbao.gte(5) && d().pifu_kejin.lte(0)},
            onClick(){
                d().yuanbao=d().yuanbao.sub(5)
                var x=zero
                x=x.add(Math.random())
                if(x.gte(0.99))
                {
                    d().pifu_kejin=n(2)
                }
                d().choujiangcishu1=d().choujiangcishu1.add(1)
            }
        },
    },
    tabFormat: {
        翅膀: {
            content:["blank",
                    ["display-image",()=>{
                        if(d().chibangdengji.lte(9))
                        {
                            return 'js/images/chibang1.png'
                        }
                        if(d().chibangdengji.lte(19))
                        {
                            return 'js/images/chibang2.png'
                        }
                        if(d().chibangdengji.lte(29))
                        {
                            return 'js/images/chibang3.png'
                        }
                        if(d().chibangdengji.lte(39))
                        {
                            return 'js/images/chibang4.png'
                        }
                        if(d().chibangdengji.lte(49))
                        {
                            return 'js/images/chibang5.png'
                        }
                    }, {maxWidth:'50%',maxHeight:'50%',position: 'relative'}],
                    "blank",
                    ["display-text",
                        function() { return layers.cb.demo(d().chibangdengji)},
                        { "font-size": "30px",}
                    ],
                    "blank",
                    ["display-text",
                        function() { return '你的翅膀给你所有属性提供'+format(n(d().chibangshuxing[d().chibangdengji]))+'x倍的加成'},
                        { "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '下级将提供'+format(n(d().chibangshuxing[d().chibangdengji.add(1)]))+'x倍的加成'},
                        { "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '你现在有 ' + format(d().yumao) + ' 羽毛' },
                        { "color": "grey", "font-size": "24px",}
                    ],
                    ["display-text",
                        function() { return '下一次升级需要 ' + format(d().yumaoxuqiu) + ' 羽毛' },
                        { "color": "grey", "font-size": "24px",}
                    ],
                    "blank",
                    "blank",
                    "blank",
                    ["row",[["clickable",11]]],
                ],
        },
        皮肤: {
            content:["blank",
                    "blank",
                    "blank",
                    ["row",[["clickable",12],["clickable",13],]],
                    "blank",
                    "blank",
                    "blank",
                    "blank",
                    ///////////////////////
                    ["row",
                    [
                    ["display-image",()=>{
                        if(d().pifu_xingqisi.gte(1))
                        {
                            return 'js/images/chibangxingqisi.png'
                        }
                        return ''
                    }, {maxWidth:'50%',maxHeight:'50%',position: 'relative'}],
                    "blank",
                    "blank",
                    ["display-text",
                        function() {
                            if(d().pifu_xingqisi.gte(1))
                            {
                                return `<text style="color:gold">限定皮肤-疯狂星期四</text> 已激活`
                            }
                            return '???尚未激活'
                        },
                        {"font-size": "28px",}],
                    ]
                    ],
                    /////////////////////
                    "blank",
                    ["row",
                    [
                    ["display-image",()=>{
                        if(d().pifu_kejin.gte(1))
                        {
                            return 'js/images/chibangkejin.png'
                        }
                        return ''
                    }, {maxWidth:'50%',maxHeight:'50%',position: 'relative'}],
                    "blank",
                    "blank",
                    ["display-text",
                        function() {
                            if(d().pifu_kejin.gte(1))
                            {
                                return `<text style="color:orange">稀有皮肤-氪金之翼</text> 已激活`
                            }
                            return '???尚未激活'
                        },
                        {"font-size": "28px",}],
                    ]
                    ],
                ],
        },
    },
    row: 3,
    layerShown(){return d().dengji.gte(1200)},
})
// addLayer("ghost1",{ 
//     symbol: "翅膀", 
//     position: 1,
//     startData() { return {
//         unlocked: true, 
// 		points: new ExpantaNum(0),
//     }},
//     color: "grey",
//     resource: "翅膀",
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
//     clickables:{
//     },
//     tabFormat: {
//     },
//     row: 4,
//     layerShown(){return "ghost"},
// })