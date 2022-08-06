let modInfo = {
	name: "传奇",
	id: "chuan_qi_Ni_Ming",
	author: "Ni_Ming",
	pointsName: "时间",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 48,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.8",
	name: "",
}

let changelog = `<h1>计算公式:</h1><br><h3>
			伤害=攻击/防御+切割<br>
			战力=(攻击x防御x生命x生命恢复)开四次方<br>
			每次升级增加2点攻击,10点生命上限,0.2防御,0.1生命蕙复<br>
			切割伤害不受防御影响<br>
			每次淬体相当于10次升级所带来的增益<br>
			淬体所需魔血每级x1.01,所需魔血结晶每25级+1<br>
			淬魂所需击杀次数每级+5,初始为5次<br></h3>
			<br>
			<h1>效果</h1><br>
			每层<text style="color:red">魔气入体</text>会让你的防御x0.99
			<br>
			<br>
			<h1>更新日志<br></h1>
			<br><h3>v0.1.8<br></h3>
			- 增加秘境-地穴<br>
			- 增加龙纹甲<br>
			- 增加对应图鉴<br>
			- 增加附魔书<br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第十六只怪物—————巢穴-<text style="color:gold">黄金巨人</text>!!!<br>
			<br><h3>v0.1.7<br></h3>
			- 增加副本<br>
			- 增加通天塔<br>
			- 开放四层通天塔<br>
			- 增加圣器<br>
			- 增加圣盾<br>
			- 增加<text style="color:red">烈火之翼</text><br>
			- 增加<text style="color:orange">稀有皮肤-氪金之翼</text><br>
			<br><h3>v0.1.6<br></h3>
			- 增加翅膀系统<br>
			- 增加<text style="color:grey">羽毛</text><br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第十五只怪物—————巢穴-秃鹫!!!<br>
			- 增加SVIP1<br>
			- 增加重洗<br>
			- 增加回收<br>
			<br><h3>v0.1.5<br></h3>
			- 增加宝石系统<br>
			- 增加<text style="color:pink">宝石残片</text><br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第十二只怪物—————巢穴-岩石巨人!!!<br>
			- 增加这个游戏的第十三只怪物—————巢穴-宝石巨人!!!<br>
			- 增加这个游戏的第十四只怪物—————经验地图-经验猪魔!!!<br>
			- 增加自动挂机-矿洞-红野猪<br>
			- 增加自动挂机-巢穴-岩石巨人<br>
			- 增加自动挂机-巢穴-宝石巨人<br>
			- 增加自动挂机-经验地图-经验猪魔<br>
			<br><h3>v0.1.4<br></h3>
			<text style="color:green">- 新增 - 秘境系统!!!</text><br>
			- 增加淬毒<br>
			- 增加尸毒粉<br>
			- 增加对应图鉴<br>
			<br><h3>v0.1.3<br></h3>
			- 将魂器洗炼公式从10调整至5x(魂器等级+1)<br>
			- 增加神兵系统<br>
			- 增加<text style="color:gold">神兵-裁决</text><br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第十只怪物—————矿洞-红野猪!!!<br>
			- 增加这个游戏的第十一只怪物(稀有)—————矿洞-极品红野猪!!!<br>
			<br><h3>v0.1.2<br></h3>
			- 增加自动升级<br>
			- 增加自动炼体<br>
			- 增加自动淬魂<br>
			- 增加挂机倍数(更高效的挂机)<br>
			- 修复一些bug,优化一些公式,增加一些上限<br>
			- 总得来说:优化了游戏体验<br>
			<br><h3>v0.1.1<br></h3>
			- 增加淬魂系统<br>
			<br><h3>v0.1.0<br></h3>
			- 增加自动挂机(为了解放双手/ll/ll/ll)<br>
			<br><h3>v0.0.6<br></h3>
			<text style="color:red">- 增加状态-魔气入体</text><br>
			- 增加淬体系统<br>
			- 增加物品-魔血<br>
			- 增加对应图鉴<br>
			- 增加物品-魔血结晶<br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第九只怪物—————矿洞-低级杂魔兵!!!<br>
			<br><h3>v0.0.5<br></h3>
			- 增加白银装备<br>
			- 增加对应图鉴<br>
			- 增加这个游戏的第七只怪物—————经验地图-经验猪头人!!!<br>
			- 增加这个游戏的第八只怪物—————矿洞-黑色恶蛆!!!<br>
			<br><h3>v0.0.4<br></h3>
			- 增加VIP1<br>
			- 增加图鉴<br>
			- 增加这个游戏的第五只怪物—————经验地图-经验猪宝宝!!!<br>
			- 增加这个游戏的第六只怪物—————矿洞-蝙蝠!!!<br>
			<br><h3>v0.0.3<br></h3>
			- 增加切割<br>
			- 增加宠物<br>
			- 增加这个游戏的第四只怪物—————新手村-多钩猫!!!<br>
			<br><h3>v0.0.2<br></h3>
			- 增加这个游戏的第三只怪物—————新手村-稻草人!!!<br>
			<br><h3>v0.0.1<br></h3>
			- 增加青铜装备<br>
			- 增加倍数<br>
			- 增加这个游戏的第二只怪物—————新手村-鹿!!!<br>
			<br><h3>v0.0.0<br></h3>
			- 增加面板<br>
			- 增加战斗<br>
			- 增加这个游戏的第一只怪物—————新手村-鸡!!!<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(0)
	let gain = new ExpantaNum(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	`如果游玩过程中遇到困惑,请查看更新日志,谢谢<br>
	如果你觉得这个游戏不好玩,可以玩一玩辉影神秘精心制作的混乱时空<br>`
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}