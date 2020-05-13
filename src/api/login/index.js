import request from '@/api/base.js'
//登陆
export const Login = (data) => {	
	// console.log(query)
	return request({
		url: 'Student/Login',
		method: 'post',
		data
	});
}
//使用验证码登陆
export const LoginByVerifyCode = (data) => {	
	// console.log(query)
	return request({
		url: 'Student/LoginByVerifyCode',
		method: 'post',
		data
	});
}

export const Register = (data) => {	
	// console.log(query)
	return request({
		url: 'Student/Register',
		method: 'post',
		data
	});
}
//注册使用的验证码
export const GetVerifyCode = (phoneNumber) => {	
	return request({
		url: 'Student/GetVerifyCode',
		method: 'get',
		params:{phoneNumber:phoneNumber}
	});
}
// 登陆使用的验证码
export const GetLoginVerifyCode = (phoneNumber) => {	
	return request({
		url: 'Student/LoginVerifyCode',
		method: 'get',
		params:{phoneNumber:phoneNumber}
	});
}
