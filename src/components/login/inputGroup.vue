<template>
	<div class="text-group">
		<!-- 组件结构 -->

		<!-- 组件容器 -->
		<div class="input-group" >
			<!-- 输入框 -->
			<input :type="type" :value="value" :placeholder="placeholder" :name="name" @input="$emit('input',$event.target.value)" />
			
			<!-- 输入框后的按钮 -->
			<button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
			
		</div>
		
		<!-- 错误提醒 -->
		<div v-if="error" class="invalid-feedback">{{error}}</div>
	</div>
</template>

<script>
	export default {
		name: 'inputGroup',
		props: {
			type: {
				type: String,
				default: "text"
			},
			value: String,
			placeholder: String,
			name: String,
			btnTitle: String,
			disabled: Boolean,
			error: String
		}
	}
</script>

<style scoped>
	.input-group {
		border: none;
		border-radius: 8px;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: rgba(28, 31, 33, .06);
	}

	.input-group input {
		font-family: "Microsoft YaHei";
		font-size: 14px;
		height: 100%;
		width: 60%;
		border: none;
		outline: medium;
		background-color: rgba(28, 31, 33, .0);
		
	}

	.input-group button {
		font-family: "Microsoft YaHei";
		border: none;
		outline: none;
		background-color: rgba(28, 31, 33, .0);
		color: #0F4C81;
		cursor: pointer;
	}
	
	.input-group button:hover{
		color: #6A8DC3;
	}

	.input-group button[disabled] {
		color: #aaa;
	}

	.is-invalid {
		border: 1px solid red;
	}

	.invalid-feedback {
		color: red;
		padding-top: 2px;
		padding-left: 5px;
		font-size: 12px;
		float: left;
	}

	.input-group input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	.input-group input[type="number"] {
		-moz-appearance: textfield;
	}
	
	
</style>
