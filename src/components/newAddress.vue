<template>
	<div class="newAddress" v-show="newAddShow" @click.self="hideMine()">
		<div class="newInfo">
			<div class="newHeader">
				<span>添加新地址</span>
				<img @click="hideMine()" src="../assets/public/X.png" alt="" />
			</div>
			<div class="newBody">
				<form action="">
					<div>
						<label for="dlivername">收货人姓名</label>
						<input
							:class="{error:nameErr,correct:nameCorr}"
							type="text"
							maxlength="12"
							id="dlivername"
							autofocus=""
							@blur="nameBlur()"
							v-model="usersContact.nameV"
						/>
					</div>
					<p ><span v-show="nameErr">请填写收货人姓名</span></p>
					<div>
						<label for="mobileNum">手机号</label>
						<input v-model="usersContact.numV" @blur="numBlur()" :class="{error:numErr,correct:numCorr}" type="text" maxlength="11" id="mobileNum" />
					</div>
					<p ><span v-show="numErr">请填入收货人手机号</span></p>
					<div class="dilverAdd">
						<label for="">收货地址</label>
						<div class="selectWrap">
							<area-select
								:placeholders="placeholders"
								:level="2"
								v-model="usersContact.selected"
								:data="pcaa"
								type="text"
							></area-select>
						</div>
					</div>

					<div>
						<label for="">详细地址</label>
						<textarea @blur="detailBlur()" v-model="usersContact.detailV" :class="{error:detailErr,correct:detailCorr}" name="detailAddress" maxlength="64" rows="3"></textarea>
					</div>
					<p ><span v-show="detailErr">请填写详细地址</span></p>
				</form>
			</div>
			<div class="newFooter"><button @click="checkAll()">保存</button></div>
		</div>
	</div>
</template>

<script>
import { AreaCascader } from 'vue-area-linkage';
import { pca, pcaa } from 'area-data';
export default {
	data() {
		return {			
			 //数组对应的就是选中的那个省市区。根据type来确定是省市区汉字的数组还是编码组成的数组。
			//selected[0]省。selected[1]市。selected[2]区。
			pca: pca,
			pcaa: pcaa,
			placeholders: ['省', '市', '区'],
			nameErr:false,
			nameCorr:false,
			numErr:false,
			numCorr:false,
			detailErr:false,
			detailCorr:false,			
			usersContact:{
				nameV:'',
				numV:'',
				detailV:'',
				selected:[],
			}
		};
	},
	prop:['show'],
	computed:{
		newAddShow(){
			return this.$store.state.newAdd
		}
	},
	methods:{
		nameBlur(){
			if(this.usersContact.nameV){
				this.nameCorr=true
				this.nameErr=false
				return true
			}else{
				this.nameErr=true
				this.nameCorr=false
				return false
			}
		},
		numBlur(){
			var reg=/^1(3|4|5|6|7|8|9)\d{9}$/;
			if(reg.test(this.usersContact.numV)){
				this.numCorr=true;
				this.numErr=false;
				return true
			}else{
				this.numCorr=false;
				this.numErr=true;
				return false
			}
		},
		detailBlur(){
			if(this.usersContact.detailV){
				this.detailCorr=true;
				this.detailErr=false;
				return true
			}else{
				this.detailCorr=false;
				this.detailErr=true;
				return false;
			}
		},
		checkAll(){
			this.detailBlur();
			this.numBlur();
			this.nameBlur();
			if(this.detailBlur()&&this.numBlur()&&this.nameBlur()){
				if(this.usersContact.selected=='')return;
				this.$store.commit('newAddCon')
				this.usersContact.selected=this.usersContact.selected.join('');
				this.$store.state.userAddress.push(this.usersContact);
				console.log(this.$store.state.userAddress)
				this.usersContact={
					nameV:'',
					numV:'',
					detailV:'',
					selected:[]
				};
				this.detailCorr=false;
				this.nameCorr=false;
				this.numCorr=false;
			}
			
		},
		hideMine(){
			this.$store.commit('newAddCon')
		}
	}
};
</script>

<style lang="less">
div.newAddress {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	margin: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.3);
	div.newInfo {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: 0 !important;
		background: #fff;
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		width: 50%;
		div.newHeader {
			padding: 20px 20px 10px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			img {
				width: 16px;
				height: 16px;
				cursor: pointer;
			}
			span {
				line-height: 24px;
				font-size: 18px;
				color: #303133;
			}
		}
		div.newBody {
			padding: 32px 90px 40px 90px;
			form {
				> div {
					display: flex;
					align-items: center;
					&:last-of-type {
						align-items: flex-start;
					}
					div.selectWrap {
						display: inline-block;
						width: 100%;
						div.area-select-wrap {
							display: flex;
							div.area-select {
								width: 33%;
								box-sizing: border-box;
								border-width: 2px;
								margin: 0 8px;
								height: 38px;
								border-radius: 0;
								&:first-of-type {
									margin-left: 0;
								}
								&:last-of-type {
									margin-right: 0;
								}
							}
						}
					}
				}
				p {
					color: #f56c6c;
					font-size: 12px;
					line-height: 1;
					height: 24px;
					box-sizing: border-box;
					padding: 4px 0 8px 91.28px;
				}
				div.dilverAdd {
					margin-bottom: 24px;
				}
			}
			label {
				font-size: 13px;
				line-height: 32px;
				width: 96px;
				padding-right: 12px;
				box-sizing: content-box;
				&:before {
					content: '*';
					color: #f56c6c;
					margin-right: 4px;
					display: inline-block;
				}
			}
			input,
			textarea {
				&:hover {
					border-color: #c0c4cc;
				}
				&:focus {
					border-color: #111;
				}
			}
			input {
				background-color: #fff;
				background-image: none;
				border: 2px solid #dcdfe6;
				box-sizing: border-box;
				color: #606266;
				display: inline-block;
				font-size: inherit;
				height: 40px;
				line-height: 40px;
				outline: none;
				padding: 0 15px;
				width: 100%;
			}
			input.error,textarea.error {
				border-color: #f56c6c;
			}
			input.correct,textarea.correct {
				border-color: #67c23a;
			}
			textarea {
				display: inline-block;
				resize: vertical;
				padding: 5px 15px;
				outline: none;
				line-height: 1.5;
				box-sizing: border-box;
				width: 100%;
				font-size: inherit;
				color: #606266;
				background-color: #fff;
				background-image: none;
				border: 2px solid #dcdfe6;
			}
		}
		div.newFooter {
			padding: 10px 20px 40px;
			box-sizing: border-box;
			button {
				width: 236px;
				font-size: 18px;
				display: block;
				margin: 0 auto;
				color: #fff;
				background-color: #111;
				outline: none;
				white-space: nowrap;
				cursor: pointer;
				line-height: 1;
				border: 1px solid #111;
				text-align: center;
				box-sizing: border-box;
				padding: 12px 20px;
			}
		}
	}
}
</style>
