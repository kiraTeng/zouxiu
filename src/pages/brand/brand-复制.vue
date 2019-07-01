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
			<div class="title">按字母查找</div>
			<div class="key"><a @click="changeHash('#A')">A</a></div>
			<div class="key"><a @click="changeHash('#B')">B</a></div>
			<div class="key"><a @click="changeHash('#C')">C</a></div>
			<div class="key"><a @click="changeHash('#D')">D</a></div>
			<div class="key"><a @click="changeHash('#E')">E</a></div>
			<div class="key"><a @click="changeHash('#F')">F</a></div>
			<div class="key"><a @click="changeHash('#G')">G</a></div>
			<div class="key"><a @click="changeHash('#H')">H</a></div>
			<div class="key"><a @click="changeHash('#I')">I</a></div>
			<div class="key"><a @click="changeHash('#J')">J</a></div>
			<div class="key"><a @click="changeHash('#K')">K</a></div>
			<div class="key"><a @click="changeHash('#L')">L</a></div>
			<div class="key"><a @click="changeHash('#M')">M</a></div>
			<div class="key"><a @click="changeHash('#N')">N</a></div>
			<div class="key"><a @click="changeHash('#O')">O</a></div>
			<div class="key"><a @click="changeHash('#P')">P</a></div>
			<div class="key"><a @click="changeHash('#Q')">Q</a></div>
			<div class="key"><a @click="changeHash('#R')">R</a></div>
			<div class="key"><a @click="changeHash('#S')">S</a></div>
			<div class="key"><a @click="changeHash('#T')">T</a></div>
			<div class="key"><a @click="changeHash('#U')">U</a></div>
			<div class="key"><a @click="changeHash('#V')">V</a></div>
			<div class="key"><a @click="changeHash('#W')">W</a></div>
			<div class="key"><a @click="changeHash('#X')">X</a></div>
			<div class="key"><a @click="changeHash('#Y')">Y</a></div>
			<div class="key"><a @click="changeHash('#Z')">Z</a></div>
			<div class="key"><a @click="changeHash('#a')">a</a></div>
			<div class="key"><a @click="changeHash('#b')">b</a></div>
			<div class="key"><a @click="changeHash('#c')">c</a></div>
			<div class="key"><a @click="changeHash('#d')">d</a></div>
			<div class="key"><a @click="changeHash('#e')">e</a></div>
			<div class="key"><a @click="changeHash('#g')">g</a></div>
			<div class="key"><a @click="changeHash('#h')">h</a></div>
			<div class="key"><a @click="changeHash('#k')">k</a></div>
			<div class="key"><a @click="changeHash('#I')">I</a></div>
			<div class="key"><a @click="changeHash('#m')">m</a></div>
			<div class="key"><a @click="changeHash('#p')">p</a></div>
			<div class="key"><a @click="changeHash('#q')">q</a></div>
			<div class="key"><a @click="changeHash('#r')">r</a></div>
			<div class="key"><a @click="changeHash('#s')">s</a></div>
			<div class="key"><a @click="changeHash('#t')">t</a></div>
		</div>
		<!--品牌信息-->
<!--字母A-->
		<div class="brand_list_wrap">
			<div class="key" id="A">A</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in a">
					{{item.brandEname}}
				</div>
			</div>
		</div>
<!--字母B-->
		<div class="brand_list_wrap">
			<div id="B" :class="{actived:isShow,key:true}">B</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in b">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div id="C" :class="{actived:isShow,key:true}">C</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in c">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="D">D</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in d">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="E">E</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in e">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="F">F</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in f">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="G">G</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in g">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="H">H</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in h">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="I">I</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in i">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="J">J</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in j">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="K">K</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in k">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="L">L</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in l">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="M">M</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in m">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="N">N</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in n">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="O">O</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in o">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="P">P</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in p">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="Q">Q</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in q">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="R">R</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in r">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div class="key" id="S">S</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in s">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="T">T</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in t">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div class="key" id="U">U</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in u">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="V">V</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in v">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div class="key" id="W">W</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in w">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="X">X</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in x">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="Y">Y</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in y">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="Z">Z</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in z">
					{{item.brandEname}}
				</div>
			</div>
		</div>	
	

		<div class="brand_list_wrap">
			<div class="key" id="a">a</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in aa">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="b">b</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in bb">
					{{item.brandEname}}
				</div>
			</div>
		</div>		

		<div class="brand_list_wrap">
			<div class="key" id="c">c</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in cc">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="d">d</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in dd">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div class="key" id="e">e</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in ee">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="g">g</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in gg">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="h">h</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in hh">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="k">k</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in kk">
					{{item.brandEname}}
				</div>
			</div>
		</div>
	
		<div class="brand_list_wrap">
			<div class="key" id="l">l</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in ll">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="m">m</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in mm">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="p">p</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in pp">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="q">q</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in qq">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="r">r</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in rr">
					{{item.brandEname}}
				</div>
			</div>
		</div>

		<div class="brand_list_wrap">
			<div class="key" id="s">s</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in ss">
					{{item.brandEname}}
				</div>
			</div>
		</div>	

		<div class="brand_list_wrap">
			<div class="key" id="t">t</div>
			<div class="brand_list">
				<div class="brand" v-for="(item,index) in tt">
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
		data() {
			return {
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
			changeHash(idName){
				console.log(this.isShow)
				document.querySelector(idName).scrollIntoView(true)
				this.isShow=true
				
			}
		}
	}
</script>

<style lang="less">
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
		.title{
			position: absolute;
			top: 20px;
			left: 0;
			padding-left: 30px;
			margin-right: 30px;
			font-size: 12px;
			color: #333333;
		}
		.key{
			padding-bottom: 20px;
			margin-right: 20px;
			font-size: 14px;
			cursor: pointer;
			a{
				color: #111;
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
