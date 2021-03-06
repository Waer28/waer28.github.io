var MAP_DATA = {};
var MAP_DATA_INIT = {
	origin:{
		goHome:false,
		back:false,	
		place:{
			home:{
				name:'地洞',
				desc:'',
				dest:'home',
				quest:['origin_1'],
				show:true
			}
		}
	},
	home:{
		name:'地洞',
		buff:'dark_1',
		quest:['origin_2', 'guide_4'],
		back:false,
		goHome:false,
		outside:true,
		place:{
			bed:{
				name:'空地',
				desc:'清理出的一小片空地，勉强可以躺下。',
				dest:'bed',
				show:true
			},
			toBox:{
				name:'箱子',
				desc:'可以储存更多的东西。',
				dest:'box'
			},
			toWorkbench:{
				name:'锁住的门',
				desc:'似乎通往一个新房间，但暂时打不开。',
				dest:'work',
				quest:['workbench'],
				show:true
			},
			lab:{
				name:'实验室',
				desc:'研制精密度和技术要求较高的物品。',
				dest:'lab'
			},
			tech:{
				name:'坏的<br>旧电脑',
				desc:'无法开启的计算机，上面布满尘土。',
				dest:'tech',
				quest:['tech_1']
			},
			forge:{
				name:'熄灭的<br>熔炉',
				desc:'巨大的熔炉，暂时无法运作。',
				dest:'forge',
				quest:['forge_1', 'forge_2']
			},
			filter:{
				name:'过滤器',
				desc:'将脏水过滤为普通的水。',
				dest:'filter'
			},
			robot:{
				name:'无人机',
				desc:'设置和研究机器人的行动逻辑。',
				dest:'robot'
			},
			farm:{
				name:'农田',
				desc:'可以种植一些相对顽强的植物。',
				dest:'farm'
			},
			cook:{
				name:'炊具',
				desc:'经过烹饪的食物对身体更好。',
				dest:'cook'
			},
			well:{
				name:'水井',
				desc:'让你可以在家中采集地下水。',
				dest:'well'
			},
			toilet:{
				name:'卫生间',
				desc:'不能总是随地解决吧。',
				dest:'toilet'
			}
		}
	},
	farm:{
		name:'农田<span id="farmCap"></span>',	
		goHome:false,
		resource:{}
	},
	well:{
		name:'水井',
		goHome:false,
		resource:{
			water:{
				name:'水',
				get:{water:1},
				refresh:288,
				max:0,
				value:0,
				getall:true,
				energy:2
			}
		}
	},
	toilet:{
		name:'卫生间',
		goHome:false,
		resource:{
			gas_home:{
				name:'瓦斯',
				get:{gas:1},
				refresh:180,
				max:0,
				value:0,
				getall:true,
				energy:2,
				hide:true
			},
			manure_home:{
				name:'肥料',
				get:{manure:1},
				refresh:300,
				max:0,
				value:0,
				getall:true,
				energy:2,
				hide:true
			}
		}
	},
	outside:{
		name:'地图',
		quest:['guide_1'],
		back:false,
		place:{
			toTrade:{
				name:'旅行商队',
				desc:'可以与他们交易到你所需的资源。',
				dest:'trade',
				lastShow:new Date("2241/2/1 07:07:00")
			},
			moor:{
				name:'荒野',
				desc:'贫瘠的土地上生长着少量植物，小心游荡的变异昆虫。',
				dest:'moor',
				cost:0.5,
				show:true
			},
			cave:{
				name:'山洞',
				desc:'幽暗的洞口透露着危险的气息，偶尔会传出可怕的声音。',
				dest:'cave',
				cost:0.5,
				show:true
			},
			ruins:{
				name:'废墟',
				desc:'看样子曾是一座不小的城镇，现在只剩下杂草和碎石块。',
				dest:'ruins',
				cost:0.8
			},
			village:{
				name:'未知',
				desc:'',
				dest:'village',
				quest:['village'],
				cost:1.5
			},
			forest:{
				name:'丛林',
				desc:'茂密的树林中不知有什么在等待着。',
				dest:'forest',
				cost:1.5
			},
			desert:{
				name:'沙漠',
				desc:'无边的黄沙蚕食着苟延残喘的生命。',
				dest:'desert',
				cost:2
			}
		}
	},
	moor:{
		name:'荒野',
		back:false,
		quest:['guide_3'],
		resource:{
			tree:{
				name:'树',
				get:{wood:5},
				refresh:2400,
				max:25,
				value:20,
				energy:5,
				require:{axe:1}
			},
			wood:{
				name:'枯枝堆',
				get:{wood:2},
				refresh:4000,
				max:100,
				value:10,
				energy:4
			},
			grass:{
				name:'草丛',
				get:{hay:4},
				refresh:1200,
				max:50,
				value:30,
				energy:3
			},
			hippophae:{
				name:'沙荆丛',
				get:{hippophae:3},
				refresh:1500,
				max:30,
				value:10,
				energy:4
			}
		},
		trashRefresh:15000,
		trash:{
			wood:{amount:50, get:[1, 6, 80]},
			shit:{amount:80, get:[1, 6, 80]},
			thorn:{amount:30, get:[1, 3, 25]},
			herb:{amount:30, get:[1, 3, 25]},
			flower:{amount:50, get:[1,3, 50]}
		},
		enemy:{
			get:[1, 3],
			refresh:15000,
			exist:[],
			normal:{
				roach_1:50,
				mouse_1:20,
				bull_1:5
			},
			boss:{roach_2:{rate:5}, mouse_2:{rate:10}}
		}
	},
	cave:{
		name:'山洞',
		back:false,
		quest:['guide_2'],
		buff:"dark_1",
		resource:{
			ore:{
				name:'矿石',
				get:{ore:5},
				refresh:3600,
				max:50,
				value:20,
				energy:5,
				require:{pickaxe:1}
			},
			rareEarth:{
				name:'稀土矿物',
				get:{rareEarth:2},
				refresh:6400,
				max:20,
				value:5,
				energy:5,
				require:{pickaxe_2:4},
				hide:true
			},
			stone:{
				name:'石头堆',
				get:{stone:5},
				refresh:3000,
				max:100,
				value:50,
				energy:5
			},
			water:{
				name:'快干的泉眼',
				get:{water:7},
				refresh:4200,
				max:10,
				value:10,
				energy:10
			}
		},
		trash:{
			metal:{amount:20, get:[1, 3, 90]},
			bone:{amount:50, get:[1, 6, 70]},
			teeth:{amount:80, get:[1, 3, 75]}
		},
		enemy:{
			get:[1, 5],
			refresh:30000,
			exist:[],
			normal:{
				mouse_1:20,
				scorpion_1:40
			}
		},
		place:{
			shadow:{
				name:'阴影',
				desc:'山洞深处好像有什么东西。',
				dest:'shadow',
				quest:['cave_1'],
				show:true
			},
			cave_1_done:{
				name:'尸体',
				desc:'你敏锐地察觉到了阴影中的那具尸体。',
				dest:'cave_1_done',
				quest:['cave_1_done'],
				need:{perception:6},
				replace:'shadow',
				show:true
			},
			snake_1:{
				name:'巨蛇',
				desc:'角落里有一条变异的毒蛇，大得惊人。',
				dest:'snake_1',
				quest:['snake_1']
			},
			miner:{
				name:'矿工',
				desc:'普通的矿工。',
				dest:'miner',
				quest:['miner_2']
			}
		}
	},
	ruins:{
		name:'废墟',
		back:false,
		quest:[],
		resource:{
			water:{
				name:'污染的水井',
				get:{dirtyWater:7},
				refresh:1150,
				max:50,
				value:20,
				energy:7
			},
			peanut:{
				name:'荒废的田地',
				get:{peanut:2},
				refresh:15000,
				max:10,
				value:1,
				energy:5
			}
		},
		trash:{
			wood:{amount:100, get:[3, 6, 80]},
			metal:{amount:100, get:[3, 9, 70]},
			bottle:{amount:50, get:[2, 6, 50]},
			seed:{amount:80, get:[3, 11, 80]},
			patato:{amount:30, get:[1, 3, 30]},
			nucWaste:{amount:70, get:[5, 11, 10]}
		},
		place:{
			book:{
				name:'空房子',
				desc:'一间破旧的木屋，主人似乎离开了很久。',
				dest:'book',
				quest:['book', 'book_break'],
				show:true
			},
			farmer:{
				name:'空房子',
				desc:'一间破旧的木屋，主人似乎离开了很久。',
				dest:'farmer',
				quest:['farmer', 'farmer_break'],
				show:true
			},
			cave_guy:{
				name:'空房子',
				desc:'从地图上看，这好像就是山洞里那具尸体的家。',
				dest:'cave_guy',
				quest:['cave_guy', 'cave_guy_break'],
				show:true
			},
			cave_guy_done:{
				name:'隐藏地点',
				desc:'优秀的感知让你在最后一间空房子前发现了某种东西。',
				dest:'cave_guy_done',
				quest:['cave_guy_done'],
				need:{perception:7},
				show:true
			}
		}
	},
	village:{
		name:'村庄',
		back:false,
		quest:[],
		resource:{
			farm:{
				name:'农田',
				get:{seed:7},
				refresh:1500,
				max:50,
				value:10,
				energy:5
			},
			greens:{
				name:'菜地',
				get:{greens:5},
				refresh:3600,
				max:20,
				value:5,
				energy:5
			},
			peanut:{
				name:'花生田',
				get:{peanut:2},
				refresh:4200,
				max:10,
				value:4,
				energy:5
			}
		},
		trashRefresh:5600,
		trash:{
			seed:{amount:200, get:[3, 11, 80]},
			patato:{amount:40, get:[1, 3, 40]},
			part:{amount:30, get:[1, 6, 25]},
			bottle:{amount:40, get:[1, 6, 35]},
			cloth:{amount:20, get:[2, 7, 50]},
			leather:{amount:20, get:[2, 7, 50]}
		},
		enemy:{
			exist:[]
		},
		place:{
			villageman_1:{
				name:'村民',
				desc:'普通的村民。',
				dest:'villageman_1',
				quest:['villageman_1', 'robber', 'robber_repeat'],
				show:true
			},
			hunter:{
				name:'猎人',
				desc:'以狩猎为生的村民。',
				dest:'hunter',
				quest:['hunter'],
				show:true
			},
			oldman:{
				name:'老人',
				desc:'废土上发生的事情，他似乎见得多了。',
				dest:'oldman',
				quest:['toVault7'],
				show:true
			},
			junkman:{
				name:'拾荒者',
				desc:'他穿着破布拼成的脏衣服，面容憔悴。',
				dest:'junkman',
				quest:['junkman_1', 'junkman_2', 'junkman_3'],
				show:true
			},
			miner:{
				name:'矿工',
				desc:'他脸上仍惊魂未定，像是刚经历了什么不幸的事。',
				dest:'miner',
				quest:['miner_1'],
				show:true
			}
		}
	},
	forest:{
		name:'丛林',
		back:false,
		quest:[],
		resource:{
			tree:{
				name:'树',
				get:{wood:5},
				refresh:720,
				max:100,
				value:25,
				energy:5,
				require:{axe:1}
			},
			herb:{
				name:'草药丛',
				get:{herb:2},
				refresh:5000,
				max:10,
				value:10,
				energy:4
			},
			thorn:{
				name:'毒刺丛',
				get:{thorn:3},
				refresh:4000,
				max:10,
				value:10,
				energy:5
			},
			flower:{
				name:'花丛',
				get:{flower:2},
				refresh:2000,
				max:20,
				value:10,
				energy:4
			}
		},
		trashRefresh:4200,
		trash:{
			shit:{amount:80, get:[3, 6, 80]}
		},
		enemy:{
			get:[1, 3],
			refresh:20000,
			exist:[],
			normal:{
				wolf_1:30,
				mouse_2:40
			},
			boss:{tiger:{rate:10}}
		},
		place:{
			robber:{
				name:'强盗据点',
				desc:'',
				dest:'robber',
				show:true
			}
		}
	},
	robber:{
		name:'强盗据点',
		goHome:false,
		quest:[],
		trashRefresh:9000,
		trash:{
			cola:{amount:15, get:[1, 2, 80]},
			beer_1:{amount:30, get:[1, 2, 80]},
			liquid:{amount:10, get:[1, 2, 30]},
			dryMeat:{amount:20, get:[1, 5, 80]}
		},
		enemy:{
			get:[3, 5],
			refresh:15000,
			exist:[],
			normal:{
				robber_1:50
			}
		},
		place:{
			robber_boss:{
				name:'强盗头子',
				desc:'强盗们的首领。',
				dest:'robber_boss',
				quest:['robber_boss', 'robber_boss_2_done', 'robber_boss_repeat'],
				show:true
			}
		}
	},
	desert:{
		name:'沙漠',
		back:false,
		quest:[],
		buff:'desert',
		resource:{
			cactus:{
				name:'仙人掌',
				get:{cactus:5},
				refresh:2000,
				max:50,
				value:20,
				energy:5
			}
		},
		trash:{
			bone:{amount:30, get:[3, 5, 5]},
			hippophae:{amount:40, get:[2, 6, 30]}
		},
		enemy:{
			get:[1, 2],
			refresh:5000,
			exist:[],
			normal:{
				lizard_1:20
			}
		},
		place:{
			lizard:{
				name:'蜥蜴妖巢穴',
				desc:'住了一群蜥蜴妖的洞穴。',
				dest:'lizard'
			},
			vault7:{
				name:'未知',
				desc:'老人的地图上并未标明“宝藏”的具体位置。',
				dest:'vault7',
				quest:['vault7'],
				show:true
			},
			vault7_done:{
				name:'气密门',
				desc:'优秀的感知力让你发现了一扇沉重的圆盘形大门。',
				dest:'vault7',
				need:{perception:10},
				replace:'vault7',
				show:true
			},
			stationTown_2:{
				name:'未知',
				desc:'7号避难所终端里的资料显示，这个坐标点曾接收到他们的求救信号。',
				dest:'stationTown_2'
			},
			stationTown_1:{
				name:'电动门',
				desc:'月台镇附近一扇隐藏起来的大门，大概是另一个入口。',
				dest:'stationTown_1',
				quest:['stationTown_1_door']
			}
		}
	},
	vault7:{
		name:'7号避难所',
		goHome:false,
		quest:['vault7_done'],
		buff:'exposure_map',
		resource:{
			nucWaste:{
				name:'处理池',
				get:{nucWaste:5},
				refresh:4000,
				max:50,
				value:10,
				energy:5
			},
			elecWaste:{
				name:'回收场',
				get:{elecWaste:5},
				refresh:0,
				max:100,
				value:100,
				energy:5
			}
		},
		trash:{
			battery:{amount:50, get:[1, 6, 70]},
			nucBattery:{amount:30, get:[1, 6, 50]},
			cure:{amount:20, get:[1, 2, 40]},
			mentote:{amount:30, get:[1, 2, 50]},
			dope:{amount:30, get:[1, 2, 50]}
		},
		enemy:{
			get:[1, 4],
			refresh:30000,
			exist:[],
			normal:{
				ghoul_1_vault7:30,
				ghoul_2_vault7:15
			}
		},
		place:{
			cabinet:{
				name:'柜子',
				desc:'上了锁的柜子，不知道里面装着什么。',
				dest:'cabinet',
				quest:['cabinet'],
				show:true
			},
			safe:{
				name:'保险箱',
				desc:'严密的保险箱，也许里面有贵重物品。',
				dest:'safe',
				quest:['safe'],
				show:true
			},
			terminal:{
				name:'终端',
				desc:'一台运转良好的终端，避难所的事故没有影响到它。',
				dest:'terminal',
				quest:['terminal'],
				show:true
			}
		}
	},
	stationTown_2:{
		name:'月台镇2站',
		goHome:false,
		quest:['stationTown_2_done'],
		buff:'desert',
		resource:{
			things:{
				name:'杂物堆',
				get:{stone:8, metal:2},
				refresh:0,
				max:100,
				value:100,
				energy:5,
				require:{shovel:1}
			}
		},
		trash:{
			stone:{amount:200, get:[1, 8, 90]},
			metal:{amount:50, get:[1, 2, 75]},
			gasCan_2:{amount:50, get:[1, 2, 50]}
		},
		place:{
			ticketman:{
				name:'售票员',
				desc:'一个住在售票亭里的人，姑且叫作“售票员”。',
				dest:'ticketman',
				quest:['ticketman'],
				show:true
			},
			worker:{
				name:'挖掘者',
				desc:'一群拿着挖掘工具的人，他们住在几节生锈的地铁车厢内，无精打采。',
				dest:'worker',
				quest:['worker'],
				show:true
			},
			stationTown_1:{
				name:'上行隧道',
				desc:'通向上一个站台。',
				dest:'stationTown_1',
				quest:['stationTown_1'],
				show:true
			},
			stationTown_3:{
				name:'下行隧道',
				desc:'通向下一个站台。',
				dest:'stationTown_3',
				show:true
			}
		}
	},
	stationTown_1:{
		name:'月台镇1站',
		goHome:false,
		quest:[],
		buff:'desert',
		trashRefresh:11500,
		trash:{
			grease:{amount:15, get:[1, 2, 40]},
			wood:{amount:40, get:[1, 2, 30]},
			bottle:{amount:20, get:[1, 2, 80]},
			dryMeat:{amount:10, get:[1, 5, 30]}
		},
		enemy:{
			exist:[]
		},
		place:{
			fight:{
				name:'交战的人群',
				desc:'月台镇的两派居民发生了争斗，没有武器的一方显然占了下风，几乎是被单方面屠戮。',
				dest:'fight',
				quest:['stationTown_1_fight']
			},
			mayor:{
				name:'镇长',
				desc:'月台镇的镇长，一个戴眼镜的老头，镜片后的目光十分精明。',
				dest:'mayor',
				quest:['stationTown_1_mayor'],
				show:true
			},
			people:{
				name:'镇民',
				desc:'这些自诩头等座居民的人住在一节精心保养的地铁内，资源丰富，衣着光鲜，和另一批居民简直是天壤之别。',
				dest:'people',
				quest:['stationTown_1_people'],
				show:true
			},
			people_2:{
				name:'饥饿的镇民',
				desc:'从2号站和3号站过来的镇民，和1号站居民关系极其紧张。',
				dest:'people_2',
				quest:['stationTown_1_people_2']
			},
			trader:{
				name:'商人',
				desc:'一个路过此地的商人，在和这里的居民进行某种交易。看到你靠近，他们谨慎地停止了谈话。',
				dest:'trader',
				quest:['stationTown_1_trader'],
				show:true
			},
			the_man:{
				name:'面具人',
				desc:'他戴着一张没有五官的灰色面具，穿着长风衣静立在角落，与其他人格格不入，仿佛一个幻影。',
				dest:'the_man',
				quest:['the_man_none'],
				show:true
			}
		}
	},
	stationTown_3:{
		name:'月台镇3站',
		goHome:false,
		quest:['stationTown_3_done'],
		buff:'desert',
		resource:{
			things:{
				name:'杂物堆',
				get:{stone:8, metal:2},
				refresh:0,
				max:100,
				value:100,
				energy:5,
				require:{shovel:1}
			}
		},
		trash:{
			stone:{amount:200, get:[1, 8, 90]},
			metal:{amount:50, get:[1, 2, 75]}
		},
		place:{
			man_1:{
				name:'饥饿的镇民',
				desc:'他们看上去很久没有吃东西，饿得几乎说不出话。',
				dest:'man_1',
				quest:['stationTown_3'],
				show:true
			},
			man_2:{
				name:'伤员',
				desc:'一些受伤的的月台镇居民，身上布满恐怖的爪痕，没有妥善医治的伤口正在溃烂。',
				dest:'man_2',
				quest:['stationTown_3_cure'],
				show:true
			}
		}
	},
	lizard:{
		name:'蜥蜴妖巢穴',
		goHome:false,
		trashRefresh:5000,
		trash:{
			bone:{amount:40, get:[1, 2, 100]}
		},
		enemy:{
			get:[3, 5],
			refresh:30000,
			exist:[],
			normal:{
				lizard_1:20,
				lizard_2:10,
				lizard_3:3
			}
		},
		place:{
			lizard_quest:{
				name:'蜥蜴妖头领',
				desc:'一只高大的蜥蜴妖，骁勇善战。',
				quest:['lizard_quest'],
				show:true
			}
		}
	}
};

var QUEST_FINISHED = [];
var QUEST_DATA = {
	origin_1:{
		desc:'隐藏得很好的地洞，因为某些意外露出了洞口。',
		action:'进入',
		update:'MAP_DATA.home.name = "家";'
		+'toLoading(0.1, "home");'
	},
	origin_2:{
		done:true,
		dontload:true,
		after:'地下空间虽然阴暗狭窄，却是个不错的容身之处，可以暂时当作住所。<br>你在地洞里还找到一些杂物。',
		update:'getItem({metal:5, wood:10});'
		+'blink($("#bag .item[id=\'metal\']"), 1);'
		+'blink($("#bag .item[id=\'wood\']"), 1);'
	},
	guide_1:{
		done:true,
		dontload:true,
		after:'选择地点前往，注意来回都需要消耗时间。',
		update:'blink($("#map .place[id=\'moor\']"), 1);'
	},
	guide_2:{
		done:true,
		dontload:true,
		after:'山洞和地洞一样，黑暗会使理智持续减少。<br>时刻注意各项状态的改变，当出现<span class="badge" style="background-color:#CC3333;">!</span>标志时，说明存在特殊效果。',
		update:'blink($("#san"), 1);'
	},
	guide_3:{
		done:true,
		dontload:true,
		after:'你可以选择<span class="badBuffName">采集资源</span>，有些需要使用工具。'
		+'<br>也可以通过<span class="badBuffName">捡垃圾</span>收集地图上的杂物。'
		+'<br><span class="badBuffName">搜寻</span>可以找到此地的生物，它们是初期的主要食物来源。',
		afterTime:9000,
		update:'blink($("#map .res[id=\'grass\']"), 1);'
		+'setTimeout(function(){blink($("#map .moveBtn[id=\'trash\']"), 1);}, 3000);'
		+'setTimeout(function(){blink($("#map .moveBtn[id=\'search\']"), 1);}, 6000);'
	},
	guide_4:{
		done:true,
		dontload:true,
		after:'通过<span class="badBuffName">制作</span>可以制造简单工具或是设施。'
		+'<br>最好先记住制造所需的材料，再出门有目的地收集。'
		+'<br>有些地方需要特定工具才能进入。',
		afterTime:9000,
		update:'blink($("#map .btn[id=\'make\']"), 1);'
		+'setTimeout(function(){blink($("#map .place[id=\'toWorkbench\']"), 1);}, 6000);'
	},
	guide_5:{
		done:true,
		dontload:true,
		after:'在空地上<span class="badBuffName">睡觉</span>可以恢复精力，如果收集材料改善一下，恢复效果会更好。'
		+'<br>制作<span class="badBuffName">炊具</span>能让你获取质量更好的食品，有助于保持良好状态。',
		afterTime:7000,
		update:'blink($("#map .place[id=\'bed\']"), 1);'
		+'setTimeout(function(){blink($("#map .btn[id=\'make\']"), 1);}, 6000);'
	},
	guide_6:{
		done:true,
		dontload:true
	},
	workbench:{
		desc:'需要使用撬棍才能打开。',
		action:'打开',
		require:{crowbar:10},
		after:'在打开的新房间中找到了一些设施。'
		+'<br>你发现了<span class="badBuffName">工作台</span>，可以制造更多的工具和更强的武器来帮助生存。'
		+'<br>提升<span class="badBuffName">技术</span>值以解锁更多可制造物品，一般可以通过在实验室研究或阅读资料来提升。',
		update:'MAP_DATA.home.place.tech.show = true;'
		+'MAP_DATA.home.place.forge.show = true;'
		+'MAP_DATA.home.place.toWorkbench.name = "工作台";'
		+'MAP_DATA.home.place.toWorkbench.desc = "可以制造做工更复杂的物品。";'
		+'blink($("#map .place[id=\'toWorkbench\']"), 1);'
	},
	tech_1:{
		desc:'以你的技术还没法弄清问题的所在。（需求：技术25）',
		next:'tech_2',
		need:{tech:25}
	},
	tech_2:{
		desc:'经过检查，发现它的部分元件烧坏了，需要50份电子废料以从中寻找替代品来修复。',
		action:'修理',
		require:{elecWaste:50},
		after:'自检通过，启动成功。',
		update:'MAP_DATA.home.place.tech.name = "旧电脑";'
		+'MAP_DATA.home.place.tech.desc = "一台老旧的计算机，储存了一些有用的资料。";'
		+'if(!LOAD_FLAG){TOOL_DATA.compass_2.tech = 60;}'
	},
	forge_1:{
		desc:'熔炉的管道堵塞了，需要2把铲子和2把铁镐来疏通一下。',
		action:'疏通',
		require:{shovel:40, pickaxe:40},
		after:'在管道里找到一些东西。',
		update:'getItem({nucWaste:50});'
	},
	forge_2:{
		desc:'好像还是不能使用，以你的技术暂时无法弄清问题的所在。（需求：15）',
		next:'forge_3',
		need:{tech:15}
	},
	forge_3:{
		desc:'熔炉的反应堆还能使用，但需要进行预热，收集10份浓缩铀加到回收槽里试试。',
		action:'修理',
		require:{uranium:10},
		after:'现在可以用它来熔炼矿石了。',
		update:'MAP_DATA.home.place.forge.name = "熔炉";'
		+'MAP_DATA.home.place.forge.desc = "巨大的熔炉，用于熔炼矿石。";'
	},
	cave_1:{
		desc:'阴影处有什么东西，你需要用火照亮这里才能看见。',
		require:{buff:'light'},
		next:'cave_1_1'
	},
	cave_1_1:{
		desc:'角落里趟着一具尸体，身上有几件东西。<br>尸体身边刻着些模糊的字：请带回我的遗物。',
		action:'查看',
		after:'尸体身上有一张画在皮革上的地图，标明了一座小镇到这里的路线。<br>此外你好像惊动了什么……',
		update:'MAP_DATA.outside.place.ruins.show = true;'
		+'delete MAP_DATA.cave.place.shadow.show;'
		+'delete MAP_DATA.cave.place.cave_1_done.show;'
		+'getItem({dagger_cave:8, cave_body:1});'
		+'MAP_DATA.cave.place.snake_1.show = true;'
	},
	cave_1_done:{
		done:true,
		after:'尸体身上有一张画在皮革上的地图，标明了一座小镇到这里的路线。<br>此外你好像惊动了什么……',
		update:'MAP_DATA.outside.place.ruins.show = true;'
		+'delete MAP_DATA.cave.place.cave_1_done.show;'
		+'delete MAP_DATA.cave.place.shadow.show;'
		+'getItem({dagger_cave:8, cave_body:1});'
		+'MAP_DATA.cave.place.snake_1.show = true;'
	},
	snake_1:{
		desc:'巨蛇对着你吐出了火红的信子。',
		option:{
			snake_1_1:{action:'战斗'},
			snake_1_2:{action:'设置陷阱', need:{tech:20}}
		}
	},
	snake_1_1:{
		done:true,
		dontload:true,
		update:'BATTLE_OBJ.setEnemy("snake_1");'
		+'BATTLE_OBJ.setCallback(function(){'
		+'	  delete MAP_DATA.cave.place.snake_1.show;'
		+'});'
		+'toLoading(0.5, "battle");'
	},
	snake_1_2:{
		desc:'你可以利用陷阱来对付巨蛇，需要10份金属和10份零件。',
		action:'设置陷阱',
		require:{metal:10, part:10},
		after:'使用一个机智的陷阱杀死了巨蛇。',
		update:'getItem({snakeTeeth:1, meat:15});'
		+'delete MAP_DATA.cave.place.snake_1.show;'
	},
	book:{
		desc:'你搜索了木屋，里面损坏严重，没留下太多东西，只找到了一本生存手册。',
		action:'拾取',
		update:'getItem({book_1:1});'
	},
	book_break:{
		desc:'既然到处都是废墟，把这里拆了好像也没什么问题。<br>消耗：精力50',
		action:'拆除',
		update:'getItem({wood:100});'
		+'updateStatus("energy", -50);'
		+'delete MAP_DATA.ruins.place.book.show;'
	},
	farmer:{
		desc:'房间里有不少农具。<br>你找到了主人的日记，上面写有详细的种植经验。（技术+5，解锁:农田）',
		action:'拾取',
		after:'从遗留的痕迹上看，人们离开得很匆忙，像是往南边走了。',
		update:'getItem({hoe:20, axe: 20});'
		+'if(!LOAD_FLAG){PLAYER_STATUS.tech.value += 5;}'
		+'if($.inArray("farm", TOOL_FINISHED)==-1){TOOL_DATA.farm.show = true;}'
		+'if($.inArray("lab", TOOL_FINISHED)==-1){TOOL_DATA.lab.show = true;}'
		+'MAP_DATA.outside.place.village.show = true;'
	},
	farmer_break:{
		desc:'既然到处都是废墟，把这里拆了好像也没什么问题。<br>消耗：精力50',
		action:'拆除',
		update:'getItem({wood:60, metal:10, stone:30});'
		+'updateStatus("energy", -50);'
		+'delete MAP_DATA.ruins.place.farmer.show;'
	},
	cave_guy:{
		desc:'你决定将死者和他的匕首都安葬在屋前的空地里。',
		action:'埋葬',
		require:{dagger_cave:1, cave_body:1},
		clearItem:true,
		after:'挖坑时你在地里找到了一本书。',
		update:'getItem({book_cave:1});'
		+'delete MAP_DATA.ruins.place.cave_guy_done.show;'
	},
	cave_guy_done:{
		done:true,
		after:'你在房前的地里找到了一本被小心埋下的书。',
		update:'getItem({book_cave:1});'
		+'delete MAP_DATA.ruins.place.cave_guy_done.show;'
		+'MAP_DATA.ruins.place.cave_guy.quest.shift();'
	},
	cave_guy_break:{
		desc:'既然到处都是废墟，把这里拆了好像也没什么问题。<br>消耗：精力60',
		action:'拆除',
		update:'getItem({wood:50, glass:10, stone:20});'
		+'updateStatus("energy", -60);'
		+'delete MAP_DATA.ruins.place.cave_guy.show;'
	},
	village:{
		desc:'前路迢迢，你需要准备足够远行几天的资源。<br>收集40份水和20份土豆再上路。',
		action:'出发',
		require:{water:40, patato:20},
		after:'你发现了一个村庄。',
		update:'MAP_DATA.outside.place.village.name = "村庄";'
		+'MAP_DATA.outside.place.village.desc = "尽管物资并不丰富，却能在这里看到生机。";'
	},
	villageman_1:{
		desc:'人们先前生活的小镇遭到强盗洗劫，变成了废墟，无奈之下逃到这里。',
		action:'知道了',
		after:'据说强盗的老巢在丛林中，村民给你指出了丛林的方向。',
		update:'MAP_DATA.outside.place.forest.show = true;'
	},
	robber:{
		desc:'对于村民的遭遇，你打算：',
		option:{
			robber_1:{action:'消灭强盗'},
			robber_2:{action:'夺回物资'}
		}
	},
	robber_1:{
		desc:'村民要求你带回10个强盗[尸体]和强盗头子的[脑袋]作为证明。',
		action:'交付',
		require:{body:10, robber_head:1},
		after:'村民感谢你的义举。',
		update:'getItem({fur:70, meat:40, herb:60});'
		+'MAP_DATA.village.place.villageman_1.quest.shift();'
		+'if(MAP_DATA.robber.place.robber_boss.show){delete MAP_DATA.robber.place.robber_boss.show;}'
	},
	robber_2:{
		desc:'村民希望你从强盗那夺回80份水和40份肉干。',
		action:'交付',
		require:{water:80, dryMeat:40},
		after:'村民感谢你的义举。',
		update:'getItem({fur:70, greens:60, herb:60});'
		+'MAP_DATA.village.place.villageman_1.quest.shift();'
	},
	robber_repeat:{
		desc:'每杀5个强盗，把尸体带回来，村民就给你20个瓶盖。',
		action:'成交',
		require:{body:5},
		repeat:true,
		update:'getItem({cap:20});'
	},
	robber_boss:{
		desc:'你打算与强盗头子进行：',
		option:{
			robber_boss_1:{action:'战斗'},
			robber_boss_2:{action:'交流',need:{charm:6}},
			robber_boss_2_2:{action:'说服',random:true,ranType:'charm',chance:0.4,maxtry:3,tryed:0,fail:'robber_boss_1',after:'说服失败，强盗头子与你一言不合打了起来。'}
		}
	},
	robber_boss_1:{
		done:true,
		dontload:true,
		update:'BATTLE_OBJ.setEnemy("robber_2");'
		+'BATTLE_OBJ.setCallback(function(){'
		+'	  delete MAP_DATA.robber.place.robber_boss.show;'
		+'    if(MAP_DATA.village.enemy.exist.length==5){'
		+'        MAP_DATA.village.place.villageman_1.show = true;'
		+'        MAP_DATA.village.place.hunter.show = true;'
		+'        MAP_DATA.village.place.oldman.show = true;'
		+'        MAP_DATA.village.place.junkman.show = true;'
		+'        if(MAP_DATA.cave.place.miner.show == undefined){MAP_DATA.village.place.miner.show=true;}'
		+'        MAP_DATA.village.enemy.exist = [];}'
		+'    for(var position in QUEST_FINISHED){'
		+'        if(QUEST_FINISHED[position].toString() == ["robber_boss_2_1","null"].toString()){'
		+'        QUEST_FINISHED.splice(position, 1);}}'
		+'});'
		+'toLoading(0.5, "battle");'
	},
	robber_boss_2:{
		desc:'如果你愿意干掉所有逃走的村民，强盗头子会给你一笔丰厚的报酬。（任务要求：村民尸体5）',
		option:{
			robber_boss_1:{action:'战斗'},
			robber_boss_2_1:{action:'领取任务'}
		},
	},
	robber_boss_2_1:{
		done:true,
		after:'你与村庄进入敌对状态。',
		update:'MAP_DATA.robber.place.robber_boss.quest.shift();'
		+'delete MAP_DATA.village.place.villageman_1.show;'
		+'delete MAP_DATA.village.place.hunter.show;'
		+'delete MAP_DATA.village.place.oldman.show;'
		+'delete MAP_DATA.village.place.junkman.show;'
		+'if(MAP_DATA.village.place.miner.show){delete MAP_DATA.village.place.miner.show;}'
		+'MAP_DATA.village.enemy.exist.push("villageman");'
		+'MAP_DATA.village.enemy.exist.push("villageman");'
		+'MAP_DATA.village.enemy.exist.push("villageman");'
		+'MAP_DATA.village.enemy.exist.push("hunter");'
		+'MAP_DATA.village.enemy.exist.push("oldman");'
	},
	robber_boss_2_2:{
		done:true,
		after:'你用匪夷所思的谈话技巧说服强盗头子归还了村民的物资。',
		update:'getItem({water:80, dryMeat:40}, true);'
		+'MAP_DATA.robber.place.robber_boss.quest = ["robber_boss_repeat"];'
	},
	robber_boss_2_done:{
		desc:'你打算与强盗头子进行：',
		option:{
			robber_boss_1:{action:'战斗'},
			robber_boss_3:{action:'交付任务'}
		}
	},
	robber_boss_3:{
		desc:'将所有村民的尸体带给强盗头子。',
		action:'交付',
		require:{village_body:5},
		after:'合作愉快。',
		update:'getItem({cap:200, metal:300, jack:50, fur:200});'
		+'MAP_DATA.robber.place.robber_boss.quest = ["robber_boss_repeat"];'
	},
	robber_boss_repeat:{
		desc:'20个瓶盖，就卖给你15份毛皮和15份矿石。',
		action:'成交',
		require:{cap:20},
		repeat:true,
		update:'getItem({fur:15, ore:15});'
	},
	hunter:{
		desc:'猎人手上有25份毛皮，你可以用15份水与之交易。',
		action:'交易',
		require:{water:15},
		repeat:true,
		update:'getItem({fur:25});'
	},
	junkman_1:{
		desc:'拾荒者说，如果你肯给他5份肉干，他就把捡到的一箱宝贝给你。',
		action:'交换',
		require:{dryMeat:5},
		after:'他小心地捧出一个箱子，里面装满乱七八糟的东西。',
		update:'getItem({bottle:17, wire:29, glass:13, elecWaste:11});'
	},
	junkman_2:{
		desc:'拾荒者说，如果你肯再给他10份肉干，他还有更厉害的珍宝作为交换。',
		action:'交换',
		require:{dryMeat:10},
		after:'他搬给你一箱电子废料。',
		update:'getItem({elecWaste:50});'
	},
	junkman_3:{
		desc:'拾荒者看到你顿时兴奋起来。他说只要5份肉干，就能换到20份电子废料。',
		action:'交易',
		require:{dryMeat:5},
		repeat:true,
		update:'getItem({elecWaste:20});'
	},
	miner_1:{
		desc:'矿工们在山洞里采矿时被一条巨蛇袭击。如果有人干掉巨蛇，他们就能回去继续工作了。',
		action:'交付蛇牙',
		require:{snakeTeeth:1},
		update:'delete MAP_DATA.village.place.miner.show;'
		+'MAP_DATA.cave.place.miner.show = true;'
		+'if(MAP_DATA.cave.place.snake_1.show){delete MAP_DATA.cave.place.snake_1.show;}'
	},
	miner_2:{
		desc:'矿工们一般把矿石卖给商队，不过如果你愿意拿出12份土豆，他们也可以先卖给你。',
		action:'交易',
		require:{patato:12},
		repeat:true,
		update:'getItem({ore:18});'
	},
	toVault7:{
		desc:'老人说沙漠中有一处宝藏，但他需要5份皮革才能画出地图。<br>他很渴，而且缺乏营养，最好再给他10份沙拉和1份蔬菜汤。',
		action:'完成',
		require:{leather:5, salad:10, vegesoup:1},
		update:'getItem({map_vault7:1});'
		+'if(LOAD_FLAG){MAP_DATA.outside.place.desert.show = true;}'
		+'delete MAP_DATA.village.place.oldman.show;'
	},
	toVault7_map:{
		update:'if(LOAD_FLAG){MAP_DATA.outside.place.desert.show = true;}'	
	},
	vault7:{
		desc:'沙漠中确实存在着某个奇怪地点，你能感觉到，但要精确定位它需要制造一个感应器。',
		action:'探测',
		require:{radar_1:1},
		after:'你在沙丘之下发现了一扇气密门。',
		update:'MAP_DATA.desert.place.vault7.name = "气密门";'
		+'MAP_DATA.desert.place.vault7.desc = "一扇沉重的圆盘形大门。";'
	},
	vault7_done:{
		done:true,
		after:'你进入了一个废弃的避难所，反应堆已经损坏，到处都是辐射泄露。'
	},
	cabinet:{
		desc:'你需要一个开锁器来打开它。',
		action:'开锁',
		require:{unlocker:1},
		after:'你找到一些药品。',
		update:'delete MAP_DATA.vault7.place.cabinet.show;'
		+'getItem({radClear:4, steroid:1, mise:1});'
	},
	safe:{
		desc:'普通的开锁器对付不了保险箱，你得用上电子开锁器。',
		action:'开锁',
		require:{eUnlocker:5},
		after:'你找到了一个样式奇怪的头环和一块数据晶片。',
		update:'delete MAP_DATA.vault7.place.safe.show;'
		+'getItem({dataChip:1, headring:1});'
	},
	terminal:{
		desc:'需要通过验证才能使用。',
		option:{
			terminal_1:{action:'验证'},
			terminal_2:{action:'破解', need:{tech:100, agility:8}}
		}
	},
	terminal_1:{
		desc:'验证需要身份卡，它可能在那些僵尸中的某一个身上。',
		action:'验证',
		require:{key_vault7:1},
		after:'你在终端内找到一些资料，和一个电子地图坐标。',
		update:'getItem({bow_4_design:1, armor_4_design:1, log_vault7:1});'
		+'delete MAP_DATA.vault7.place.terminal.show;'
		+'MAP_DATA.desert.place.stationTown_2.show = true;'
	},
	terminal_2:{
		done:true,
		after:'你在终端内找到一些资料。',
		update:'getItem({bow_4_design:1, armor_4_design:1, log_vault7:1});'
		+'delete MAP_DATA.vault7.place.terminal.show;'
		+'MAP_DATA.desert.place.stationTown_2.show = true;'
	},
	stationTown_2_done:{
		done:true,
		after:'你进入了一段废弃多年的地铁隧道，这里有人居住，并把它改造成了小镇。',
		update:'MAP_DATA.desert.place.stationTown_2.name = "月台镇";'
		+'MAP_DATA.desert.place.stationTown_1.show = true;'
	},
	ticketman:{
		desc:'对方看上去不太欢迎你这个外来者。',
		option:{
			ticketman_1:{action:'关于求救信号', require:{log_vault7:1}},
			ticketman_2:{action:'贿赂', need:{charm:6}, hide:true}
		}
	},
	ticketman_1:{
		desc:'“什么东西，我不懂。只有管事的才知道。”售票员这么说。',
		option:{
			ticketman_1_1:{action:'谁是管事的'}
		}
	},
	ticketman_1_1:{
		desc:'“他们住在1号站，路已经封死了。”',
		action:'结束谈话',
		update:'if(QUEST_DATA.ticketman.option.ticketman_2 != undefined){'
		+'delete QUEST_DATA.ticketman.option.ticketman_2.hide;}',
		repeat:true
	},
	ticketman_2:{
		desc:'给他点好处，也许他会透露更多。是否送给对方20份净水？',
		action:'是',
		require:{cleanWater:20},
		after:'售票员偷偷塞给你一张金属片，悄声说：“别让其他人看见。”',
		update:'getItem({ticket:1});'
		+'delete QUEST_DATA.ticketman.option.ticketman_2;'
	},
	worker:{
		desc:'你找到其中一名挖掘者进行交谈。',
		option:{
			worker_1:{action:'你们在挖什么'},
			worker_2:{action:'路为什么封了', hide:true},
			worker_3:{action:'还有其他人吗'},
			worker_4:{action:'关于求救信号', require:{log_vault7:1}}
		}
	},
	worker_1:{
		desc:'“通向1号站的隧道，这边的食物已经快用完了，不把路挖开我们没法活下去。”',
		action:'结束谈话',
		update:'delete QUEST_DATA.worker.option.worker_2.hide;'
	},
	worker_2:{
		desc:'“头等座的人们害怕蜥蜴妖入侵，把唯一的公共入口堵死了。他们可以靠电动门抵御外敌，我们只能听天由命。”',
		action:'结束谈话'
	},
	worker_3:{
		desc:'“这里容易被蜥蜴妖抓走，大多数人住在3号站。那边的情况更糟。”',
		action:'结束谈话'
	},
	worker_4:{
		desc:'“救人？我们连自己都顾不上。”',
		action:'结束谈话',
		update:'QUEST_DATA.worker.option.worker_4.hide = true;'
	},
	stationTown_1:{
		desc:'隧道发生了坍塌，光靠挖掘应该要很长时间。',
		option:{
			stationTown_1_1:{action:'制作炸药', need:{tech:125}}
		}
	},
	stationTown_1_1:{
		desc:'使用100份火药、50份瓦斯和4个气罐来制作炸药，炸开隧道。',
		action:'制作',
		require:{gunpowder:100, gas:50, gasCan:4},
		after:'剧烈的爆炸之后，隧道打通了。',
		update:'MAP_DATA.stationTown_2.place.stationTown_1.quest = [];'
		+'MAP_DATA.stationTown_1.quest = ["stationTown_1_done"];'
	},
	stationTown_3_done:{
		done:true,
		dontload:true,
		after:'这里比上一个站台更破旧。废弃的地铁被拆散，搭成许多简陋的铁皮帐篷，到处是沉闷的霉味，人们躲在阴冷的角落里奄奄一息。'
	},
	stationTown_3:{
		desc:'你走近其中一人，他虚弱地抬起头，用无神的双眼看着你。',
		option:{
			stationTown_3_1:{action:'询问情况'},
			stationTown_3_2:{action:'提供帮助'}
		}
	},
	stationTown_3_1:{
		desc:'“外面的人已经告诉你了吧，没什么好说的，我们已经走投无路了。”',
		option:{
			stationTown_3_1_1:{action:'为什么不参与挖掘'},
			stationTown_3_1_2:{action:'为什么不离开这里'}
		}
	},
	stationTown_3_1_1:{
		desc:'“没那么多吃的，只能优先考虑勉强还有力气的人。不过，到了1号站也没用，他们有武器，挖隧道的那些人打不过的。”',
		action:'结束谈话',
		repeat:true
	},
	stationTown_3_1_2:{
		desc:'“我们这个样子，已经不可能走出沙漠了，更何况蜥蜴妖还在外边等着。它们的手段远超你的想象，与其被抓走，我宁愿死在这里。”',
		action:'结束谈话',
		repeat:true
	},
	stationTown_3_2:{
		desc:'你决定为他们做些什么：',
		option:{
			stationTown_3_2_1:{action:'消灭蜥蜴妖'},
			stationTown_3_2_2:{action:'建造防护墙', need:{tech:150}}
		}
	},
	stationTown_3_2_1:{
		desc:'杀死足够的蜥蜴妖，消除它们对此地的威胁。带回25份蜥蜴皮作为证明。',
		action:'交付',
		require:{lizardLeather_s:25},
		after:'月台镇的人们对你充满了感激，但他们没有什么东西可以回报你。',
		update:'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_3.hide = true;'
		+'delete QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_4.hide;'
		+'QUEST_DATA.stationTown_3.option.stationTown_3_2.hide = true;'
		+'MAP_DATA.desert.place.lizard.show = true;'
	},
	stationTown_3_2_2:{
		desc:'在月台镇2号站建造防御工事，保护镇民免受蜥蜴妖袭击。需要材料：500份金属，200份石块和200份合金。',
		action:'建造',
		require:{metal:500, stone:200, alloy:200},
		after:'你解除了月台镇面临的威胁，大家相信1号站的人们态度会因此有所改观。',
		update:'delete QUEST_DATA.stationTown_1_mayor_2.option.stationTown_1_mayor_2_2.hide;'
		+'QUEST_DATA.stationTown_3.option.stationTown_3_2.hide = true;'
	},
	stationTown_3_cure:{
		desc:'你是否愿意提供80份绷带和20份治疗针，帮助治愈这些伤者？',
		action:'是',
		require:{bandage:80, cure:20},
		after:'伤者们无比感激你的帮助，但他们没有什么东西可以回报你。<br>'
		+'不过一名伤者向你小声透露，与蜥蜴妖的战斗要适可而止，矛盾的根本原因并不在它们。<br>'
		+'“可悲的是，大家都不爱听这种话，尤其是头等座的大人们……”他叹息道。',
		afterTime:20000,
		update:'delete QUEST_DATA.lizard_quest.option.lizard_quest_2.hide;'
		+'delete MAP_DATA.stationTown_3.place.man_2.show;'
	},
	stationTown_1_done:{
		done:true,
		after:'身后的平民越过你争相冲入1号站，与此处的守卫发生武装冲突。',
		update:'if(MAP_DATA.stationTown_1.place.people_2.show == undefined){'
		+'MAP_DATA.stationTown_1.place.fight.show = true;'
		+'delete MAP_DATA.stationTown_1.place.mayor.show;'
		+'delete MAP_DATA.stationTown_1.place.people.show;'
		+'delete MAP_DATA.stationTown_1.place.trader.show;'
		+'delete MAP_DATA.stationTown_2.place.worker.show;'
		+'delete MAP_DATA.stationTown_2.place.ticketman.show;'
		+'delete MAP_DATA.stationTown_3.place.man_1.show;'
		+'MAP_DATA.stationTown_1.quest=[];toLoading(0.1, "stationTown_1", true);}'
	},
	stationTown_1_door:{
		desc:'这是扇非常厚实的大门，你无法打开它。',
		action:'使用车票',
		require:{ticket:1},
		after:'你将车票插入门上的一道缝隙，大门缓缓滑向一边。',
		update:'MAP_DATA.stationTown_1.quest = [];'
		+'toLoading(0.1, "stationTown_1");'
	},
	stationTown_1_mayor:{
		desc:'镇长扶了下眼镜，打量着你：“陌生人，这个不幸的地方究竟有什么特别之处，会把你吸引到这儿来？”',
		option:{
			stationTown_1_mayor_1:{action:'关于求救信号', require:{log_vault7:1}},
			stationTown_1_mayor_2:{action:'关于封锁隧道'},
			stationTown_1_mayor_3:{action:'关于蜥蜴妖'},
			stationTown_1_mayor_4:{action:'关于蜥蜴妖巢穴', hide:true}
		}
	},
	stationTown_1_mayor_1:{
		done:true,
		after:'他阅读了7号避难所的日志，回想道：“我们的电台的确收到过信号那是很久以前的事了，想不到事情竟然如此严重。不过正如你所见，我们没有余裕去帮助他们。”<br>'
		+'你继续问镇长，是否见过从避难所逃出的幸存者。<br>'
		+'他摇了摇头，没能再提供更多信息。',
		afterTime:20000,
		update:'BAG_DATA.log_vault7 = 0;updateItem("log_vault7", $("#bag"));'
		+'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_1.hide = true;'
	},
	stationTown_1_mayor_2:{
		desc:'“我们别无选择，必要的时候只能放弃一部分人。”',
		option:{
			stationTown_1_fight_1:{action:'为平民感到不公，向1号站的人们发起攻击'},
			stationTown_1_mayor_2_1:{action:'为月台镇提供帮助'},
			stationTown_1_mayor_2_2:{action:'告知防护墙的事', hide:true}
		}
	},
	stationTown_1_mayor_2_1:{
		desc:'如果你愿意向月台镇提供100份水、200份土豆和200份蔬菜，镇长就答应不再封锁隧道，让所有人和平共处。',
		action:'提供物资',
		require:{water:100, patato:200, greens:200},
		after:'看上去小镇的内部矛盾暂时得到了解决。',
		update:'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_2.hide = true;'
		+'MAP_DATA.stationTown_2.place.stationTown_1.quest=[];'
		+'delete MAP_DATA.stationTown_2.place.worker.show;'
		+'delete MAP_DATA.stationTown_2.place.ticketman.show;'
		+'delete MAP_DATA.stationTown_3.place.man_1.show;'
		+'MAP_DATA.stationTown_1.place.people_2.show = true;'
	},
	stationTown_1_mayor_2_2:{
		done:true,
		after:'“这真是太好了。既然如此，我们可以考虑解除封锁。不过蜥蜴妖的威胁依然存在，我们不能永远困在这沙漠的地下。”',
		update:'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_2.hide = true;'
		+'MAP_DATA.stationTown_2.place.stationTown_1.quest=[];'
		+'delete MAP_DATA.stationTown_2.place.worker.show;'
		+'delete MAP_DATA.stationTown_2.place.ticketman.show;'
		+'delete MAP_DATA.stationTown_3.place.man_1.show;'
		+'MAP_DATA.stationTown_1.place.people_2.show = true;'
	},
	stationTown_1_mayor_3:{
		desc:'镇长希望你帮忙杀死足够的蜥蜴妖，消除它们对此地的威胁。带回25份蜥蜴皮作为证明。',
		action:'交付',
		require:{lizardLeather_s:25},
		after:'镇长给你100个瓶盖以示感谢，不过他似乎还有其他担忧。',
		update:'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_3.hide = true;'
		+'delete QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_4.hide;'
		+'getItem({cap:100});'
		+'MAP_DATA.desert.place.lizard.show = true;'
	},
	stationTown_1_mayor_4:{
		desc:'镇长希望你到蜥蜴妖巢穴除掉它们的头领，带回一张完整的皮作为证明。',
		action:'交付',
		require:{lizardLeather_quest:1},
		after:'镇长给你400个瓶盖以示感谢，还送给你一套上好的武器。',
		update:'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_4.hide = true;'
		+'QUEST_DATA.stationTown_1_mayor.option.stationTown_1_mayor_2.hide = true;'
		+'QUEST_DATA.stationTown_1_mayor.desc = "镇长非常欣赏地看着你：“感谢你为月台镇做出的巨大贡献，我的朋友。”";'
		+'getItem({cap:400, gloves:200});'
		+'MAP_DATA.stationTown_1.place.the_man.quest = ["the_man_1"];'
	},
	stationTown_1_people:{
		desc:'他们对你保持着距离，不愿意与外来者交流。',
		need:{charm:6},
		next:'stationTown_1_people_1'
	},
	stationTown_1_people_1:{
		desc:'这些人的生活质量难以置信的高，丝毫看不出他们是住在沙漠的地下。<br>'
		+'一个正在吃煎肉排的家伙见你在看他，搭话道：“嗨，伙计，有水吗？我都要渴死了。”',
		action:'给他10份水',
		require:{water:10},
		after:'“谢了，还你一份小礼物。”他在一张纸上写了点什么递了过来，“这可是独家秘方！”',
		update:'getItem({schnitzel_design:1});'
		+'MAP_DATA.stationTown_1.place.people.quest = ["stationTown_1_people_2"];'
	},
	stationTown_1_people_2:{
		desc:'人们希望你猎杀更多的蜥蜴妖，每带回5份蜥蜴皮，就能换取40瓶盖。',
		action:'交易',
		require:{lizardLeather_s:5},
		update:'getItem{cap:40};',
		repeat:true
	},
	stationTown_1_trader:{
		desc:'商人有意避开了你。',
		need:{charm:8},
		next:'stationTown_1_trader_1'
	},
	stationTown_1_trader_1:{
		desc:'你凭借一些技巧和商人搭上了话，他说自己是来这里收购蜥蜴皮的。<br>'
		+'“没错，这里一直都卖。”他把你带到角落，压低了声音，“隧道另一边的生意我也在做，那里更便宜，但货源少。”<br>'
		+'“实话告诉你吧，这个镇被蜥蜴妖袭击，就是因为他们猎杀了太多蜥蜴妖。只有靠这样，这个沙漠里的镇子才能从商队买到足够的东西活下去。”<br>'
		+'他又补充了一句：“但你千万不能当他们的面说这个。”',
		action:'结束谈话',
		after:'说完这些，他匆匆离去了。',
		update:'delete MAP_DATA.stationTown_1.place.trader.show;'
		+'delete QUEST_DATA.lizard_quest.option.lizard_quest_2.hide;'
	},
	stationTown_1_fight:{
		desc:'面对混乱的局面，你决定：',
		option:{
			stationTown_1_fight_1:{action:'攻击武装人员'},
			stationTown_1_fight_2:{action:'攻击平民'},
			stationTown_1_fight_3:{action:'说服',random:true,ranType:'charm',chance:0.25,maxtry:2,tryed:0,after:'说服失败，他们不肯停止战斗。'}
		}
	},
	stationTown_1_fight_1:{
		done:true,
		after:'你与月台镇1号站进入敌对状态，需要连续击败5个敌人。',
		update:'MAP_DATA.stationTown_1.place.people_2.show = true;'
		+'MAP_DATA.stationTown_1.place.people_2.desc = "由于你的决定，饥饿的镇民成功占据了1号站。";'
		+'if(MAP_DATA.stationTown_1.place.mayor.show){'
		+'QUEST_DATA.stationTown_1_mayor.desc = "“唉，你已经把这里弄得一团糟了，还想怎么样？”镇长叹息道。";'
		+'QUEST_DATA.stationTown_1_mayor_2.option.stationTown_1_fight_1.hide = true;}'
		+'else{MAP_DATA.stationTown_1.place.the_man.quest = ["the_man_1"];}'
		+'delete MAP_DATA.stationTown_1.place.fight.show;'
		+'delete MAP_DATA.stationTown_1.place.people.show;'
		+'delete MAP_DATA.stationTown_1.place.trader.show;'
		+'for(var enemy=0;enemy<5;enemy++){MAP_DATA.stationTown_1.enemy.exist.push("stationTown");}'
		+'if(!LOAD_FLAG){'
		+'BATTLE_OBJ.setEnemy("stationTown");'
		+'BATTLE_OBJ.setEnemyIn("stationTown_1");'
		+'toLoading(0.5, "battle");}'
	},
	stationTown_1_fight_2:{
		done:true,
		after:'在你的协助下，冲入1号站的平民很快被全部击倒，死伤惨重。剩下的平民被关押了起来，双方的关系并未得到缓解。',
		update:'MAP_DATA.stationTown_1.place.mayor.show = true;'
		+'MAP_DATA.stationTown_1.place.people.show = true;'
		+'MAP_DATA.stationTown_1.place.trader.show = true;'
		+'delete MAP_DATA.stationTown_1.place.fight.show;'
	},
	stationTown_1_fight_3:{
		done:true,
		after:'经过你的劝说，双方停止了战斗，但食物的问题依然没得到解决。',
		update:'MAP_DATA.stationTown_1.place.mayor.show = true;'
		+'MAP_DATA.stationTown_1.place.people.show = true;'
		+'MAP_DATA.stationTown_1.place.trader.show = true;'
		+'MAP_DATA.stationTown_1.place.people_2.show = true;'
		+'delete MAP_DATA.stationTown_1.place.fight.show;'
	},
	stationTown_none:{
		desc:'你的做法引起了月台镇居民的反感，对方拒绝与你交谈。',
		next:'stationTown_none',
		need:{life:9999}
	},
	lizard_quest:{
		desc:'',
		option:{
			lizard_quest_1:{action:'战斗'},
			lizard_quest_2:{action:'交流', hide:true}
		}
	},
	lizard_quest_1:{
		done:true,
		dontload:true,
		update:'BATTLE_OBJ.setEnemy("lizard_quest");'
		+'BATTLE_OBJ.setCallback(function(){'
		+'	  delete MAP_DATA.lizard.place.lizard_quest.show;'
		+'});'
		+'toLoading(0.5, "battle");'
	},
	lizard_quest_2:{
		desc:'你试着与其交流，发现这些蜥蜴妖竟然会说人话。头领告诉你月台镇居民为获取蜥蜴皮而大量屠杀它们一族的事，让你陷入了沉思。',
		action:'放弃战斗',
		after:'你决定不再为月台镇做事，而蜥蜴妖一族也找到了新的栖息地，开始全体迁移。',
		update:'delete MAP_DATA.desert.place.lizard.show;'
		+'MAP_DATA.stationTown_1.place.mayor.quest = ["stationTown_none"];'
		+'MAP_DATA.stationTown_1.place.people.quest = ["stationTown_none"];'
		+'MAP_DATA.stationTown_1.place.people_2.quest = ["stationTown_none"];'
		+'MAP_DATA.stationTown_2.place.ticketman.quest = ["stationTown_none"];'
		+'MAP_DATA.stationTown_2.place.worker.quest = ["stationTown_none"];'
		+'MAP_DATA.stationTown_3.place.man_1.quest = ["stationTown_none"];'
		+'delete MAP_DATA.stationTown_1.place.trader.show;'
		+'MAP_DATA.stationTown_1.place.the_man.quest = ["the_man_1"];'
		+'toLoading(0.5, "desert", "back");'
	},
	the_man_none:{
		desc:'面具人拒绝与你交谈，你再向前一步时，发现他竟然消失了。而当你离开时，他又再度出现。',
		next:'the_man_none',
		need:{life:9999}
	},
	the_man_1:{
		desc:'“有意思，你终于又走到了这一步。这次花了多长时间？”面具人忽然说出匪夷所思的话来。<br>'
		+'“可惜，再多副躯壳也改变不了你灵魂深处的无知。你看上去不服气，那么，让我看看你有多大能耐。”<br>'
		+'他拿出一张磁卡，上面写着[C2实验场]。',
		action:'接过磁卡',
		after:'“无论多少次都是一样的。”面具人说完消失了。',
		update:'getItem({key_c2:1});'
		+'delete MAP_DATA.stationTown_1.place.the_man.show;'
		//+'MAP_DATA.outside.place.exp_c2.show = true;'
	},
	unfinished:{
		desc:'未开放的内容',
		next:'unfinished',
		need:{life:9999}
	}
};

var EXPLORE_DATA = {};
var EXPLORE_TYPE = {
	explore_f:{
		firstname:['东','南','西','北','中','外','金','银','青','黄','兰','双','苍'],
		lastname:['山','水','溪','松','原','石','河','湖','岭','丘'],
		randomname:'randomUnicode();',
		names:[],
		typename:['森林','树林','丛林'],
		resource:{
			tree:{
				rate:100,
				name:'树',
				get:{wood:[2, 10]},
				refresh:[2000, 4000],
				max:[25, 100],
				value:[10, 50],
				energy:5,
				require:{axe:1}
			},
			wood:{
				rate:30,
				name:'枯枝堆',
				get:{wood:[1, 5]},
				refresh:[3500, 6000],
				max:[25, 100],
				value:[10, 40],
				energy:4
			},
			water:{
				rate:50,
				name:'溪流',
				get:{water:[4, 6]},
				refresh:[700, 3000],
				max:[30, 70],
				value:[15, 20],
				energy:4
			},
			hay:{
				rate:30,
				name:'草丛',
				get:{hay:[4, 6]},
				refresh:[700, 3000],
				max:[30, 70],
				value:[15, 20],
				energy:4
			},
			thorn:{
				rate:20,
				name:'毒刺丛',
				get:{thorn:[2, 4]},
				refresh:[3000, 6000],
				max:[10, 30],
				value:[5, 10],
				energy:5
			},
			herb:{
				rate:20,
				name:'草药丛',
				get:{herb:[1, 3]},
				refresh:[3000, 6000],
				max:[10, 30],
				value:[5, 10],
				energy:5
			}
		},
		trash:{wood:25, shit:15, herb:60, thorn:60, stone:70, flower:50},
		enemy:{
			mouse_1:{rate:40, amount:[10, 30]},
			mouse_2:{rate:30, amount:[10, 30]},
			spider_1:{rate:30, amount:[10, 30]},
			snake_0:{rate:30, amount:[10, 30]},
			wolf_1:{rate:30, amount:[10, 30]},
			wolf_2:{rate:30, amount:[10, 30]},
			tiger:{rate:40, boss:true, bossRate:30},
			snake_2:{rate:40, boss:true, bossRate:30},
			spider_2:{rate:40, boss:true, bossRate:30},
			snake_3:{rate:20, only:true},
			spider_3:{rate:10, only:true}
		}
	},
	explore_m:{
		firstname:['飞','无','裂','叉','灵','外','内','旧','青','黄','兰','双','苍','新'],
		lastname:['刀','刃','叶','草','边','原','石','岭','丘','沟'],
		randomname:'randomUnicode();',
		names:[],
		typename:['荒野','平原','之地','荒漠'],
		resource:{
			tree:{
				rate:20,
				name:'树',
				get:{wood:[2, 10]},
				refresh:[2000, 4000],
				max:[25, 100],
				value:[10, 50],
				energy:5,
				require:{axe:1}
			},
			wood:{
				rate:15,
				name:'枯枝堆',
				get:{wood:[1, 5]},
				refresh:[3500, 6000],
				max:[25, 100],
				value:[10, 40],
				energy:4
			},
			water:{
				rate:30,
				name:'湖泊',
				get:{water:[4, 6]},
				refresh:[700, 3000],
				max:[30, 70],
				value:[15, 20],
				energy:4
			},
			hay:{
				rate:70,
				name:'草丛',
				get:{hay:[4, 6]},
				refresh:[700, 3000],
				max:[30, 70],
				value:[15, 20],
				energy:4
			},
			hippophae:{
				rate:60,
				name:'沙荆丛',
				get:{hippophae:[2, 4]},
				refresh:[3000, 6000],
				max:[10, 30],
				value:[5, 10],
				energy:5
			}
		},
		trash:{flower:45, herb:20, thorn:20, stone:100},
		enemy:{
			mouse_1:{rate:20, amount:[10, 30]},
			mouse_2:{rate:20, amount:[10, 30]},
			bull_1:{rate:20, amount:[3, 10]},
			scorpion_1:{rate:20, amount:[10, 30]},
			roach_1:{rate:20, amount:[10, 30]},
			roach_2:{rate:20, amount:[10, 30]},
			roach_3:{rate:20, amount:[10, 30]},
			rouge_1:{rate:20, amount:[3, 10]},
			rouge_2:{rate:20, amount:[2, 6]},
			rouge_3:{rate:20, amount:[2, 6]},
			radboy_1:{rate:15, amount:[2, 20]},
			radboy_2:{rate:15, amount:[2, 20]},
			ranger_1:{rate:20, boss:true, bossRate:30},
			ranger_2:{rate:20, boss:true, bossRate:30},
			bull_2:{rate:20, only:true},
			ranger_3:{rate:10, only:true}
		}
	},
	explore_c:{
		firstname:['黑','无','幽','冷','雷','碎','混','灰','双','苍','新'],
		lastname:['暗','风','草','月','血','石','泉'],
		randomname:'randomUnicode();',
		names:[],
		typename:['地洞', '洞穴', '山洞', '地穴'],
		resource:{
			ore:{
				rate:80,
				name:'矿石',
				get:{ore:[3, 7]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5,
				require:{pickaxe:1}
			},
			rareEarth:{
				rate:35,
				name:'稀土矿物',
				get:{rareEarth:[2, 5]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5,
				require:{pickaxe_2:4}
			},
			crystal:{
				rate:35,
				name:'水晶矿',
				get:{crystal:[2, 5]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5,
				require:{pickaxe_2:4}
			},
			silicon:{
				rate:60,
				name:'硅矿',
				get:{silicon:[2, 5]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5,
				require:{pickaxe:1}
			},
			water:{
				rate:50,
				name:'泉眼',
				get:{water:[4, 6]},
				refresh:[1000, 2500],
				max:[10, 30],
				value:[1, 20],
				energy:5
			}
		},
		trash:{metal:40, bone:70, teeth:50, stone:100, body:10},
		enemy:{
			mouse_1:{rate:15, amount:[10, 30]},
			mouse_2:{rate:15, amount:[10, 30]},
			spider_1:{rate:15, amount:[10, 30]},
			roach_1:{rate:15, amount:[10, 30]},
			roach_2:{rate:15, amount:[10, 30]},
			roach_3:{rate:15, amount:[10, 30]},
			snake_0:{rate:15, amount:[10, 30]},
			scorpion_1:{rate:15, amount:[10, 30]},
			lizard_1:{rate:15, amount:[2, 20]},
			lizard_2:{rate:20, boss:true, bossRate:30},
			lizard_3:{rate:20, boss:true, bossRate:30},
			snake_2:{rate:20, boss:true, bossRate:30},
			spider_2:{rate:20, boss:true, bossRate:30},
			lizard_4:{rate:20, only:true},
			snake_3:{rate:20, only:true},
			spider_3:{rate:10, only:true}
		}
	},
	explore_v:{
		firstname:['1','2','3','4','5','6','7','8','9','10','20','30','40'],
		lastname:['1','2','3','4','5','6','7','8','9'],
		randomname:'Math.floor(Math.random()*10);',
		names:[],
		typename:['号避难所', '号实验场'],
		resource:{
			nucWaste:{
				rate:50,
				name:'处理池',
				get:{nucWaste:[2, 5]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5
			},
			elecWaste:{
				rate:50,
				name:'回收场',
				get:{elecWaste:[2, 5]},
				refresh:[3500, 6000],
				max:[30, 60],
				value:[1, 20],
				energy:5
			},
			cleanWater:{
				rate:50,
				name:'净水器',
				get:{cleanWater:[4, 6]},
				refresh:[1000, 2500],
				max:[10, 30],
				value:[1, 20],
				energy:5
			},
			dirtyWater:{
				rate:50,
				name:'损坏的<br>净水器',
				get:{dirtyWater:[4, 6]},
				refresh:[1000, 2500],
				max:[10, 30],
				value:[1, 20],
				energy:5
			},
			gas:{
				rate:80,
				name:'瓦斯制造机',
				get:{gas:[4, 6]},
				refresh:[1000, 2500],
				max:[10, 30],
				value:[1, 20],
				energy:10
			}
		},
		trash:{metal:60, part:70, gasCan:50, cap:25, elecWaste:20, silicon:40, glass:40, rareEarth:30, battery:40, nucBattery:40, uranium:15, plutonium:15, cola:15, qCola:10, beer_1:10, beer_2:10},
		enemy:{
			mouse_1:{rate:15, amount:[10, 30]},
			mouse_2:{rate:15, amount:[10, 30]},
			roach_1:{rate:15, amount:[10, 30]},
			roach_2:{rate:15, amount:[10, 30]},
			roach_3:{rate:15, amount:[10, 30]},
			ghoul_1:{rate:15, amount:[2, 20]},
			ghoul_2:{rate:15, amount:[2, 20]},
			madman_1:{rate:15, amount:[2, 20]},
			madman_2:{rate:15, amount:[2, 20]},
			madman_3:{rate:15, amount:[2, 20]},
			radboy_1:{rate:15, amount:[2, 20]},
			radboy_2:{rate:15, amount:[2, 20]},
			mutant_1:{rate:15, amount:[2, 20]},
			ghoul_3:{rate:20, boss:true, bossRate:30},
			mutant_2:{rate:20, boss:true, bossRate:30},
			mutant_3:{rate:20, only:true},
			robot_3:{rate:20, only:true},
			robot_4:{rate:10, only:true}
		}
	}
};

function randomClone(a){
	var b;
	switch(typeof a){
		case "object":
		if(a instanceof Array){
			b = Math.floor(Math.random()*(a[1]-a[0])+a[0]);
		}
		else{
			if(a.toArray){
				b = [];
				for(var i in a){
					if(i == "toArray"){
						continue;
					}
					b.push(Math.floor(Math.random()*(a[i][1]-a[i][0])+a[i][0]))
				}
			}
			else{
				b = {};
				for(var i in a){
					b[i] = randomClone(a[i]);
				}
			}
		}
		break;
		case "number":
		b = a + 0;
		break;
		case "string":
		b = a + "";
		break;
		case "undefined":
		break;
		default:
		b = a;
	}
	return b;
}

function randomGenerate(destcost){
	var discover = EXPLORE_RATE * (2 - Math.log(getSum(EXPLORE_DATA)+2));
	if(Math.random()*100 >= discover){
		showMsg("很遗憾，这次探索没有任何收获。")
		toLoading(0.1, "outside", true);
		return;
	}
	//选取地图类型
	var a = Math.floor(Math.random()*getSum(EXPLORE_TYPE));
    var b = Object.keys(EXPLORE_TYPE);
    var type = b[a];
    var resData = {};
    var trashData = {};
    var enemyData = {
		get:{toArray:true, min:[1, 2], max:[3, 4]},
		refresh:[2000, 8000],
		exist:{toArray:true},
		normal:{}
    };
    var placeData = {};
    //随机生成资源
    var maxRes = 0;
    for(var i in EXPLORE_TYPE[type].resource){
    	if(maxRes > 3){
    		break;
    	}
    	if(Math.random()*100 < EXPLORE_TYPE[type].resource[i].rate){
    		delete EXPLORE_TYPE[type].resource[i].rate;
    		resData[i] = randomClone(EXPLORE_TYPE[type].resource[i]);
    		resData[i].lastGrow = clone(sysTime);
    		maxRes += 1;
    	}
    }
    //随机生成垃圾
    for(var i in EXPLORE_TYPE[type].trash){
    	if(Math.random()*100 < EXPLORE_TYPE[type].trash[i]){
    		var trash = {amount:[10, 100], get:{toArray:true, min:[1, 5], max:[6, 11], rate:[5, 100]}};
    		trashData[i] = randomClone(trash);
    	}
    }
    //随机生成敌人
    enemyData = randomClone(enemyData);
    var maxEnemy = 0;
    var maxBoss = 0;
    for(var i in EXPLORE_TYPE[type].enemy){
    	if(Math.random()*100 < EXPLORE_TYPE[type].enemy[i].rate){
    		if(EXPLORE_TYPE[type].enemy[i].boss && enemyData.boss==undefined){
    			if(enemyData.boss == undefined){
    				enemyData.boss = {};
    			}
    			enemyData.boss[i] = {};
    			enemyData.boss[i].rate = Math.floor(Math.random()*EXPLORE_TYPE[type].enemy[i].bossRate + 2);
    		}
    		else if(EXPLORE_TYPE[type].enemy[i].only){
    			if(maxBoss >= 2){
    				break;
    			}
    			placeData[i] = {
    				name:CREEP_DATA[i].name,
    				enemy:true,
    				show:true
    			};
    		}
    		else{
    			if(maxEnemy >= 3){
		    		continue;
		    	}
    			enemyData.normal[i] = randomClone(EXPLORE_TYPE[type].enemy[i].amount);
    			maxEnemy += 1;
    		}
    	}
    }
    //嵌套地点

    //随机生成名称
    var placeName = "探索地点";
    while($.inArray(placeName, EXPLORE_TYPE[type].names)!=-1 || placeName=="探索地点"){
    	if(Math.random()*100 < 70){
    		if(Math.random()*100 < 75){
		    	var names = EXPLORE_TYPE[type].firstname;
		    	placeName = names[Math.floor(Math.random()*names.length)];
		    	names = EXPLORE_TYPE[type].lastname;
		    	placeName += names[Math.floor(Math.random()*names.length)];
		    }
		    else{
		    	var names = EXPLORE_TYPE[type].lastname;
		    	placeName = names[Math.floor(Math.random()*names.length)];
		    	names = EXPLORE_TYPE[type].firstname;
		    	placeName += names[Math.floor(Math.random()*names.length)];
		    }
    	}
    	else{
	    	var names = EXPLORE_TYPE[type].firstname;
	    	placeName = names[Math.floor(Math.random()*names.length)] + eval(EXPLORE_TYPE[type].randomname);
	    }
    }
    var names = EXPLORE_TYPE[type].typename;
    placeName += names[Math.floor(Math.random()*names.length)];
    
    
    //插入现有地图
    var n = 0;
    var id = type + n.toString();
    while(EXPLORE_DATA[id] != undefined){
    	n += 1;
    	id = type + n.toString();
    }
    EXPLORE_DATA[id] = clone(sysTime);
    MAP_DATA[id] = {
    	name:placeName,
    	back:false,
    	resource:clone(resData),
    	trash:clone(trashData),
    	enemy:clone(enemyData),
    	place:clone(placeData)
    }
    MAP_DATA.outside.place[id] = {
    	name:placeName,
    	desc:"",
    	dest:id,
    	cost:(destcost/120).toFixed(1),
    	show:true
    }
    showMsg("你发现了新地点：<span class='rare'>[" + placeName + "]</span>");
    toLoading(0.1, id, true);
}

function explore(){
	EXPLORE_LASTTIME = clone(sysTime);
	var time = Math.floor(Math.random() * (EXPLORE_TIME-120) + 120);
	costTimeFunc(time, time/60, "explore", function(){randomGenerate(time);});
}

function destroyPlace(){
	var destroyMsg = [
		"通向#NAME#的路被大量的碎石堵住了，你再也无法到达那里。",
		"一次沙尘暴过后，#NAME#所在的地方只剩下巨大的沙丘。",
		"#NAME#变成了一片焦土，路过的商队说这里曾经被从天而降的光束击中。",
		"#NAME#所在的地方变成了一个巨大的弹坑。",
		"通向#NAME#的峡谷发生了坍塌。",
		"通向#NAME#的路上出现了一道无法跨越的裂谷。",
		"#NAME#消失了，仿佛从未存在过。",
		"#NAME#忽然被地震所摧毁。"
	];
	for(var i in EXPLORE_DATA){
		var days = (sysTime - EXPLORE_DATA[i])/1000/60/60/24;
		var chance = -1;
		if(days >= 10){
			chance = 1 - 1/(days-8.8);
		}
		if(chance>0 && Math.random() < chance){
			var name = "<span class='rare'>[" + MAP_DATA[i].name + "]</span>";
			showMsg(destroyMsg[Math.floor(Math.random()*destroyMsg.length)].replace("#NAME#", name));
			delete EXPLORE_DATA[i];
			delete MAP_DATA[i];
			delete MAP_DATA.outside.place[i];
			if($("#map").attr("place")==i){
				DEATH_FOR = "意外";
				death();
				return;
			}
		}
	}
}
