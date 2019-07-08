<template>
	<div class="wrap">
		<form action="">
		<div class="auth-body">
			<p class="re-title">
				在zouxiu注册
			</p>
			<div class="tip">
				请填写以下信息在ZOUXIU注册。 我们将保存您提供的资料以方便您网上购物。

			</div>
			<div class="form-group">
				<div class="label">
					手机号码
				</div>
				<input type="text" class="form-control" @focus="showMe" v-model="phone" />
				<i class="inco" v-show="isShow" @click="showMe"></i>
			</div>
			<div class="form-group form-code">
				<div class="label">
					短信验证码
				</div>
				<input type="text" class="form-control" @focus="showis" maxlength="6" v-model="msg" />
				<i class="inco inco-clear" v-show="showIs" @click="showis"></i>
				<button class="btn" :class="{gray:wait_time>0}" @click="getCode()"> {{getMobileCode()}}</button>
			</div>
			<div class="form-group form-code">
				<div class="label">
					图形验证码
				</div>
				<input type="text" class="form-control" @focus="showyzm" @blur="checkyzm" maxlength="4" v-model="yzm" />
				<i class="inco inco-clear" v-show="showIt" @click="showyzm"></i>
				<div @click='refreshCode'>
					<Sidentify :identifyCode="identifyCode"></Sidentify>
				</div>
			</div>
			<div class="form-group">
				<div class="label">
					密码由6-12位英文字母、数字或符号组成
				</div>
				<input type="text" class="form-control" @focus="showPwd" @blur="checkpwd" v-model="pwd" />
				<i class="inco" v-show="showpwd" @click="showPwd"></i>
			</div>
			<div class="msg" v-show='checkbtn'>
				{{infor}}
			</div>
			<div class="checkbox">
				<label for="" @click="check">
						<input id="" type="checkbox" name="checkbox"/>
						<span :class=" {'checkbox':true,'checked':this.checked==true} "></span>
						<span class="txt">我同意</span>
				<span>《走秀网用户协议》</span> 
						
					</label>

			</div>
			<button class="btn-login" :class="{'btn-black':checkpwd()}" type="button"  @click="myuser()">注册</button>
		</div>
		</form>
	</div>
</template>

<script>
	import Sidentify from '../../components/identify'
	export default {
		components: {
			Sidentify
		},
		data() {
			return {
				isShow: false,
				showIs: false,
				showIt: false,
				showpwd: false,
				phone: '',
				msg: '',
				yzm: '',
				pwd: '',
				checked: false,
				wait_time: false,
				infor: '',
				identifyCodes: "1234567890",
				identifyCode: "",
				checkbtn:false

			};
		},
		methods: {
			getCode() {
				console.log(11)
				if(this.wait_time > 0) {
					return false;
				}
				if(!this.phone) {
					this.checkbtn=true;
					/*this.infor = '手机号码不能为空';*/
					this.infor = 'sfff'
					return false;
				}
				if(!/^1[3|4|5|7|8]\d{9}/.test(this.phone)) {
					this.checkbtn=true;
					
					console.log(2222)
					this.infor = '手机号码格式不正确';
					

					return false;

				}else{
					this.infor=''
					return true;
				}
				this.wait_time = 59;
				var that = this;
				var wait_interval = setInterval(function() {
					if(that.wait_time > 0) {
						that.wait_time--;
					} else {
						clearInterval(wait_interval)
					}
				}, 1000)
			},
			getMobileCode() {
				if(this.wait_time > 0) {
					return this.wait_time + 's后获取';
				}
				if(this.wait_time === 0) {
					return '重新获取';
				}
				if(this.wait_time === false) {
					return '获取验证码'
				}
			},
			showMe() {
				
				this.isShow = !this.isShow;
				this.phone = '';

			},
			showis() {
				this.showIs = !this.showIs;

				this.msg = '';

			},
			showyzm() {
				this.showIt = !this.showIt;

				this.yzm = '';
				
				

			},
			checkpwd(){
				if(!this.pwd){
					
					
					this.infor = '密码不能为空';
					return false;
					
				}
				else if(!/^[a-zA-Z0-9]{6,12}$/.test(this.pwd)){
					
					
					this.infor = '密码格式不正确';
					return false;
					
				}else{
					this.checkbtn=false;
					
					this.infor='';
					return true;
					
					
				}
			},
			showPwd() {
				this.showpwd = !this.showpwd;

				this.pwd = '';

			},
			check() {
				this.checked = !this.checked

			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for(let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			},
			checkyzm(){
				if(!this.yzm){
					this.infor = '验证码不能为空！';
					return false;
					
				}
				if(this.yzm != this.identifyCode){
					this.infor = '验证码不正确！';
					return false;
				}else if(this.yzm == this.identifyCode){
					
					this.infor = '';
					return true;
					
				}
			},
			myuser(){
				if(this.getCode()|this.checkpwd()|this.checkyzm()){
					this.$store.state.phones = this.phone
				console.log(this.phone)
				
				this.$router.push('./home')
				}
				 
			}

		
	},
	mounted() {
		this.identifyCode = "";
		this.makeCode(this.identifyCodes, 4);
	},
	}
</script>

<style lang="less">
	.auth-body {
		width: 300px;
		margin: 85px auto 50px;
		/*border: 1px solid red;*/
		.re-title {
			padding-top: 40px;
			font-size: 16px;
			font-weight: 700;
			color: #111;
		}
		.tip {
			padding-top: 40px;
			color: #111;
			font-size: 14px;
			line-height: 24px;
		}
		.form-group {
			position: relative;
			padding-top: 25px;
			border-bottom: 1px solid #afafaf;
			.label {
				padding-bottom: 5px;
				color: #999;
				font-size: 12px;
			}
			.form-control {
				display: block;
				width: 100%;
				height: 32px;
				line-height: 32px;
				font-size: 14px;
				color: #111;
				border: none;
				outline: none;
			}
			.inco {
				display: inline-block;
				height: 16px;
				width: 16px;
				background: url(../../assets/regitser/delete.jpg) no-repeat;
				background-size: 16px 16px;
				position: absolute;
				right: 10px;
				bottom: 10px;
			}
		}
		.form-code {
			position: relative;
			.inco-clear {
				position: absolute;
				right: 120px;
				bottom: 10px;
			}
			.btn {
				position: absolute;
				right: 0;
				bottom: 0;
				padding: 12px 20px;
				;
				border: none;
				outline: none;
				background: transparent;
				transition: 0.1s;
			}
			.btn.gray {
				background: #c8c8c8;
			}
			.btn:hover {
				background: #dcdfe6;
			}
		}
		.checkbox {
			margin-top: 24px;
			display: flex;
		}
		input[type='checkbox'] {
			width: 0;
			height: 0;
		}
		span.checkbox {
			display: inline-block;
			width: 15px;
			height: 15px;
			border: 1px solid #dcdfe6;
			box-sizing: border-box;
			border-radius: 2px;
			background-color: #fff;
			position: relative;
			transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
			&:after {
				height: 8px;
				width: 3px;
				position: absolute;
				top: 1px;
				left: 5px;
				border: 1px solid #fff;
				border-top: none;
				border-left: none;
				content: '';
				transform: rotate(45deg) scaleY(1);
			}
		}
		.checked {
			background-color: #111 !important;
			border-color: #111 !important;
		}
		.txt {
			color: #e0e0e0;
		}
		.btn-login {
			padding: 0;
			margin: 0;
			border: none;
			display: block;
			width: 100%;
			margin-top: 45px;
			height: 50px;
			line-height: 50px;
			font-size: 16px;
			cursor: pointer;
			color: #FFFFFF;
			outline: none;
		}
		.btn-login.btn-black{
			    background: #111;
                color: #fff;
		}
		.msg {
			color: red;
			margin-top: 10px;
			font-size: 12px;
		}
	}
	.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>