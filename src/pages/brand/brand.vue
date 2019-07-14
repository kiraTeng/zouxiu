<template>
	<div class="wrap">
		<!--头部索引-->
		<ul class="nav_header">
				<li>走秀首页</li>
				<li class="right_icon">></li>
				<li>品牌馆</li>
		</ul>
		<!--字母索引-->
		  <div class="key_list">
			<div class="title1">按字母查找</div>
			<div class="keys"><a @click="changeHash('#A',0)">A</a></div>
			<div class="keys"><a @click="changeHash('#B',1)">B</a></div>
			<div class="keys"><a @click="changeHash('#C',2)">C</a></div>
			<div class="keys"><a @click="changeHash('#D',3)">D</a></div>
			<div class="keys"><a @click="changeHash('#E',4)">E</a></div>
			<div class="keys"><a @click="changeHash('#F',5)">F</a></div>
			<div class="keys"><a @click="changeHash('#G',6)">G</a></div>
			<div class="keys"><a @click="changeHash('#H',7)">H</a></div>
			<div class="keys"><a @click="changeHash('#I',8)">I</a></div>
			<div class="keys"><a @click="changeHash('#J',9)">J</a></div>
			<div class="keys"><a @click="changeHash('#K',10)">K</a></div>
			<div class="keys"><a @click="changeHash('#L',11)">L</a></div>
			<div class="keys"><a @click="changeHash('#M',12)">M</a></div>
			<div class="keys"><a @click="changeHash('#N',13)">N</a></div>
			<div class="keys"><a @click="changeHash('#O',14)">O</a></div>
			<div class="keys"><a @click="changeHash('#P',15)">P</a></div>
			<div class="keys"><a @click="changeHash('#Q',16)">Q</a></div>
			<div class="keys"><a @click="changeHash('#R',17)">R</a></div>
			<div class="keys"><a @click="changeHash('#S',18)">S</a></div>
			<div class="keys"><a @click="changeHash('#T',19)">T</a></div>
			<div class="keys"><a @click="changeHash('#U',20)">U</a></div>
			<div class="keys"><a @click="changeHash('#V',21)">V</a></div>
			<div class="keys"><a @click="changeHash('#W',22)">W</a></div>
			<div class="keys"><a @click="changeHash('#X',23)">X</a></div>
			<div class="keys"><a @click="changeHash('#Y',24)">Y</a></div>
			<div class="keys"><a @click="changeHash('#Z',25)">Z</a></div>
			<div class="keys"><a @click="changeHash('#a',26)">a</a></div>
			<div class="keys"><a @click="changeHash('#b',27)">b</a></div>
			<div class="keys"><a @click="changeHash('#c',28)">c</a></div>
			<div class="keys"><a @click="changeHash('#d',29)">d</a></div>
			<div class="keys"><a @click="changeHash('#e',30)">e</a></div>
			<div class="keys"><a @click="changeHash('#g',31)">g</a></div>
			<div class="keys"><a @click="changeHash('#h',32)">h</a></div>
			<div class="keys"><a @click="changeHash('#k',33)">k</a></div>
			<div class="keys"><a @click="changeHash('#I',34)">I</a></div>
			<div class="keys"><a @click="changeHash('#m',35)">m</a></div>
			<div class="keys"><a @click="changeHash('#p',36)">p</a></div>
			<div class="keys"><a @click="changeHash('#q',37)">q</a></div>
			<div class="keys"><a @click="changeHash('#r',38)">r</a></div>
			<div class="keys"><a @click="changeHash('#s',39)">s</a></div>
			<div class="keys"><a @click="changeHash('#t',40)">t</a></div>
		</div>
		<!--品牌信息-->
<!--字母A-->
		<div class="brand_list_wrap">
			<div class="key" id="A">A</div>
			<div class="brand_list">
				<div  v-for="(item,index) in a" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>
<!--字母B-->
		<div class="brand_list_wrap">
			<div id="B" :class="{actived:isShow==1,key:true}">B</div>
			<div class="brand_list">
				<div  v-for="(item,index) in b" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div id="C" :class="{actived:isShow==2,key:true}">C</div>
			<div class="brand_list">
				<div  v-for="(item,index) in c" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="D" :class="{actived:isShow==3,key:true}">D</div>
			<div class="brand_list">
				<div  v-for="(item,index) in d" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="E" :class="{actived:isShow==4,key:true}">E</div>
			<div class="brand_list">
				<div  v-for="(item,index) in e" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="F" :class="{actived:isShow==5,key:true}">F</div>
			<div class="brand_list">
				<div  v-for="(item,index) in f" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="G" :class="{actived:isShow==6,key:true}">G</div>
			<div class="brand_list">
				<div  v-for="(item,index) in g" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="H" :class="{actived:isShow==7,key:true}">H</div>
			<div class="brand_list">
				<div  v-for="(item,index) in h" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="I" :class="{actived:isShow==8,key:true}">I</div>
			<div class="brand_list">
				<div  v-for="(item,index) in i" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="J" :class="{actived:isShow==9,key:true}">J</div>
			<div class="brand_list">
				<div  v-for="(item,index) in j" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="K" :class="{actived:isShow==10,key:true}">K</div>
			<div class="brand_list">
				<div v-for="(item,index) in k" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="L" :class="{actived:isShow==11,key:true}">L</div>
			<div class="brand_list">
				<div  v-for="(item,index) in l" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="M" :class="{actived:isShow==12,key:true}">M</div>
			<div class="brand_list">
				<div  v-for="(item,index) in m" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="N" :class="{actived:isShow==13,key:true}">N</div>
			<div class="brand_list">
				<div  v-for="(item,index) in n" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div id="O" :class="{actived:isShow==14,key:true}">O</div>
			<div class="brand_list">
				<div  v-for="(item,index) in o" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="P" :class="{actived:isShow==15,key:true}">P</div>
			<div class="brand_list">
				<div  v-for="(item,index) in p" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="Q" :class="{actived:isShow==16,key:true}">Q</div>
			<div class="brand_list">
				<div v-for="(item,index) in q" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}"> 
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="R" :class="{actived:isShow==17,key:true}">R</div>
			<div class="brand_list">
				<div v-for="(item,index) in r" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div id="S" :class="{actived:isShow==18,key:true}">S</div>
			<div class="brand_list">
				<div  v-for="(item,index) in s" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="T" :class="{actived:isShow==19,key:true}">T</div>
			<div class="brand_list">
				<div  v-for="(item,index) in t" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div  id="U" :class="{actived:isShow==20,key:true}">U</div>
			<div class="brand_list">
				<div  v-for="(item,index) in u" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="V" :class="{actived:isShow==21,key:true}">V</div>
			<div class="brand_list">
				<div  v-for="(item,index) in v" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div id="W" :class="{actived:isShow==22,key:true}">W</div>
			<div class="brand_list">
				<div  v-for="(item,index) in w" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="X" :class="{actived:isShow==23,key:true}">X</div>
			<div class="brand_list">
				<div  v-for="(item,index) in x" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div id="Y" :class="{actived:isShow==24,key:true}">Y</div>
			<div class="brand_list">
				<div v-for="(item,index) in y" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="Z" :class="{actived:isShow==25,key:true}">Z</div>
			<div class="brand_list">
				<div  v-for="(item,index) in z" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	
	

		<div class="brand_list_wrap">
			<div  id="a" :class="{actived:isShow==26,key:true}">a</div>
			<div class="brand_list">
				<div  v-for="(item,index) in aa" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="b" :class="{actived:isShow==27,key:true}">b</div>
			<div class="brand_list">
				<div  v-for="(item,index) in bb" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>		

		<div class="brand_list_wrap">
			<div id="c" :class="{actived:isShow==28,key:true}">c</div>
			<div class="brand_list">
				<div  v-for="(item,index) in cc" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="d" :class="{actived:isShow==29,key:true}">d</div>
			<div class="brand_list">
				<div  v-for="(item,index) in dd" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div id="e" :class="{actived:isShow==30,key:true}">e</div>
			<div class="brand_list">
				<div  v-for="(item,index) in ee" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="g" :class="{actived:isShow==31,key:true}">g</div>
			<div class="brand_list">
				<div  v-for="(item,index) in gg" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="h" :class="{actived:isShow==32,key:true}">h</div>
			<div class="brand_list">
				<div  v-for="(item,index) in hh" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="k" :class="{actived:isShow==33,key:true}">k</div>
			<div class="brand_list">
				<div v-for="(item,index) in kk" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>
	
		<div class="brand_list_wrap">
			<div  id="l" :class="{actived:isShow==34,key:true}">l</div>
			<div class="brand_list">
				<div  v-for="(item,index) in ll" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="m" :class="{actived:isShow==35,key:true}">m</div>
			<div class="brand_list">
				<div v-for="(item,index) in mm" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="p" :class="{actived:isShow==36,key:true}">p</div>
			<div class="brand_list">
				<div  v-for="(item,index) in pp" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div id="q" :class="{actived:isShow==37,key:true}">q</div>
			<div class="brand_list">
				<div  v-for="(item,index) in qq" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="r" :class="{actived:isShow==38,key:true}">r</div>
			<div class="brand_list">
				<div  v-for="(item,index) in rr" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div  id="s" :class="{actived:isShow==39,key:true}">s</div>
			<div class="brand_list">
				<div v-for="(item,index) in ss" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div  id="t" :class="{actived:isShow==40,key:true}">t</div>
			<div class="brand_list">
				<div  v-for="(item,index) in tt" @mouseover="mouseEnter(index)" :class="{show:index==isColor,brand:true}">
					{{item.brandEname}}
				</div>
			</div>
		</div>	
		
	<!--根节点-->	
	</div>
</div>
</template>

<script>
	import {AnchorLink} from 'iview'
	export default {
		components:{
			 AnchorLink
		},
		beforeCreate(){
			window.scroll(0,0)
			
		},
		data() {
			return {
				isColor:-1,
				isShow:false,
				arr:[],
				a:[],
				b:[],
				c:[],
				d:[],
				e:[],
				f:[],
				g:[],
				h:[],
				i:[],
				j:[],
				k:[],
				l:[],
				m:[],
				n:[],
				o:[],
				p:[],
				q:[],
				r:[],
				s:[],
				t:[],
				u:[],
				v:[],
				w:[],
				x:[],
				y:[],
				z:[],
				aa:[],
				bb:[],
				cc:[],
				dd:[],
				ee:[],
				gg:[],
				hh:[],
				kk:[],
				ll:[],
				mm:[],
				pp:[],
				qq:[],
				rr:[],
				ss:[],
				tt:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/Data/detail/brand.json')
				.then(res=>{
					this.arr=res.data.data
					console.log(this.arr.A)
					this.a=res.data.data.A
					this.b=res.data.data.B
					this.c=res.data.data.C
					this.d=res.data.data.D
					this.e=res.data.data.E
					this.f=res.data.data.F
					this.g=res.data.data.G
					this.h=res.data.data.H
					this.i=res.data.data.I
					this.j=res.data.data.J
					this.k=res.data.data.K
					this.l=res.data.data.L
					this.m=res.data.data.M
					this.n=res.data.data.N
					this.o=res.data.data.O
					this.p=res.data.data.P
					this.q=res.data.data.Q
					this.r=res.data.data.R
					this.s=res.data.data.S
					this.t=res.data.data.T
					this.u=res.data.data.U
					this.v=res.data.data.V
					this.w=res.data.data.W
					this.x=res.data.data.X
					this.y=res.data.data.Y
					this.z=res.data.data.Z
					this.aa=res.data.data.a
					this.bb=res.data.data.b
					this.cc=res.data.data.c
					this.dd=res.data.data.d
					this.ee=res.data.data.e
					this.gg=res.data.data.g
					this.hh=res.data.data.h
					this.kk=res.data.data.k
					this.ll=res.data.data.l
					this.mm=res.data.data.m
					this.pp=res.data.data.p
					this.qq=res.data.data.q
					this.rr=res.data.data.r
					this.ss=res.data.data.s
					this.tt=res.data.data.t
					console.log(this.a)
				}).catch(err=>{
					console.log(err)
				})
			},
			changeHash(idName,index){
				document.querySelector(idName).scrollIntoView(true)
				this.isShow=index
			},
			mouseEnter(index){
				console.log(index)
				this.isColor = index
				
			}
		}
	}
</script>

<style lang="less">
	/*悬浮显示样式*/
	 .show{
	 	color: #C39A58 !important;
	 }
	/*头部导航*/
	.wrap{
		width: 1200px;
		margin: 0 auto;
	}
	.nav_header{
		display: flex;
		align-items: center;
   			font-size: 14px;
   			margin-top: 15px;
   			margin-bottom: 15px;
		li{
			list-style: none;
			color: #333333;
   				margin-right: 10px;
		}
		.right_icon{
   				color: #CECBD7;
   			}
	}
	
	/*字母查找索引*/
	.key_list{
		background-color: #f7f7f7;
		position: relative;
		padding-top: 20px;
		padding-left: 120px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 1200px;
		height: 90px;
		.title1{
			position: absolute;
			top: 20px;
			left: 0;
			padding-left: 30px;
			margin-right: 30px;
			font-size: 12px;
			color: #333333;
		}
		.keys{
			padding-bottom: 20px;
			margin-right: 20px;
			font-size: 14px;
			cursor: pointer;
			height: 10px;
			width: 10px ;
			a{
				color: #111;
				height: 10px;
				width: 10px;
				display: block;
				/*border: dashed 1px red !important;*/
			}
		}
	}
	/*具体品牌信息*/
	.actived{
		background-color: #C39A58 !important;
	}
	.brand_list_wrap{
		position: relative;
		width: 1000px;
		margin-left: auto;
		margin-right: auto;
		padding: 50px 30px 30px 100px;
		box-sizing: border-box;
		min-height: 100px;
		border-bottom: solid 1px #d3d3d3;
		.key{
			position: absolute;
			top: 40px;
			left: 0;
			width: 42px;
			height: 42px;
			line-height: 42px;
			color: #fff;
			background: #d3d3d3;
			border-radius: 50%;
			font-size: 20px;
			text-align: center;
			cursor: pointer;
		}
		.brand_list{
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			width: 1200px;
			margin-left: auto;
			margin-right: auto;
			.brand{
				width: 300px;
				position: relative;
				padding-bottom: 20px;
				margin-right: 20px;
				cursor: pointer;
				font-size: 14px;
				color: #333333;
			}
		}
	}
</style>
