<template>
	<div class="login-box">
		<ul class="tablist">
			<li class="tabb" @click="clickMe" :class="{activee:haha}">短信登录</li>
			<li class="tabb" @click="clickIt" :class="{activee:hehe}">密码登录</li>
		</ul>
		<ul class="content-list">
			<li class="content_l">
				<div class="form-group">
					<input type="text" placeholder="请输入手机号码" class="form-control"  v-if="haha" v-model="phone"/>
					<input type="text" placeholder="请输入登录账号(手机/邮箱/用户名)" class="form-control" v-else="!haha" v-model="mylogin"  @blur="myphone" />
				</div>
				
				<div class="form-group code-wrap" >
					<input type="text" placeholder="请输入短信验证码" class="form-control" v-if="haha"  v-model="msg"/>
					<input type="password" placeholder="请输入密码" class="form-control"  v-else="!haha" v-model="pwd" @blur="mypwd"/>
					<button class="btn" v-if="haha">发送验证码</button>
				</div>
				<div class="myfo">{{infor}}</div>
				<div class="form-wrap">
					<button v-if="haha">找回密码？ |&nbsp; &nbsp;</button>
					<button >注册账号</button>
				</div>
				<button class="button-login" @click="login">登录</button>
				<div class="login-title">
					使用其他网站账号登录
				</div>
				<img src="../../assets/regitser/wx.png" class="fen fenx"/>
				<img src="../../assets/regitser/QQ.png" class="fenx"/>
			
			</li>
			
			
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {
             haha:true,
             hehe:false,
             infor:'',
             pwd:'',
             msg:'',
             mylogin:"",
             phone:''
			};
		},
		methods:{
			clickMe(){
				this.hehe=false;
				this.haha=true
			},
			clickIt(){
				this.hehe=true;
				this.haha=false
			},
			myphone(){
				if(!this.mylogin) {
					
					this.infor = '手机号码不能为空';
					return false;
				}
				if(!/^1[3|4|5|7|8]\d{9}/.test(this.mylogin)) {
					
					this.infor = '手机号码格式不正确';
					return false;

				}
				if(this.mylogin!=this.$store.state.phones) {
					this.infor = '手机号未注册';
					return false;
				}
				else{
					this.infor = '';
					return true
				}
			},
			mypwd(){
				if(!this.pwd){
					this.infor = '密码不能为空！';
					return false;
				} 
				if(!/^[a-zA-Z0-9]{6,12}$/.test(this.pwd)){
					return false;
				}
				
				if(this.pwd!=this.$store.state.pwd){
					this.infor='密码不匹配'
					return false
				}
				
				
				else{
					return true;
					this.infor = '';
					
				}
			},
			login(){
				if(this.myphone()|this.mypwd()){
//					this.$store.state.login=this.mylogin
					this.$router.push('./home')
					
					console.log(this.phone)
                    this.$store.state.zhuce='';
                 this.$store.state.denglu='';
					this.$store.state.showIt=true;
                    this.$store.state.isClick=false;
				}
				
			}
		}
	}
</script>

<style lang="less">
	.login-box {
		width: 300px;
		margin: 125px auto 50px;
		.tablist {
			width: 300px;
			height: 22px;
			display: flex;
			align-items: center;
			text-align: center;
			font-weight: 700;
			cursor: pointer;
			font-size: 22px;
			.tabb:first-child {
				border-right: 2px solid #afafaf;
			}
			.tabb {
				flex: 1;
				text-align: center;
				color: #C0C4CC;
			}
			.tabb.activee{
			color: #000000;
		}
		}
		.content-list {
			.content_l {
				padding-top: 40px;
				.form-group {
					position: relative;
					padding-top: 25px;
					border-bottom: 1px solid #afafaf;
					.form-control {
						display: block;
						width: 100%;
						height: 42px;
						line-height: 42px;
						font-size: 14px;
						color: #111;
						border: none;
						outline: none;
					}
				}
			}
			.code-wrap {
				padding-top: 50px !important;
				position: relative;
				.btn {
					position: absolute;
					line-height: 42px;
					right: 0;
					bottom: 0;
					border: none;
					outline: none;
					background: transparent;
					color: #606266;
				}
			}
			.form-wrap {
				text-align: right;
				margin-top: 36px;
				button {
					border: none;
					outline: none;
					background: transparent;
				}
			}
			.button-login {
				padding: 0;
				margin: 0;
				border: none;
				display: block;
				width: 100%;
				margin-top: 45px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				font-size: 16px;
				outline: none;
				background-color: #e4393c;
				cursor: pointer;
			}
			.login-title {
				padding-top: 30px;
				font-size: 12px;
				color: #161619;
			}
		}
		.fen{
			margin-right: 33px;
		}
		.fenx{
			padding-top: 20px;
			width: 34px;
			height: 34px;
			
		}
		
	}
	.myfo{
		color: red;
		padding-top: 10px;
	}
</style>