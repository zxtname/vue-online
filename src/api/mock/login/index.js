import request from '@/api/base.js'
//登陆
export const Login = (data) => {	
	return request({
		url: 'home/Login.json',
		method: 'get'
	});
}
export const Register = (data) => {	
	return request({
		url: 'home/Login.json',
		method: 'get'
	});
}
export const GetVerifyCode = (phoneNumber) => {	
	return request({
		url: 'home/Login.json',
		method: 'get',
		// params:{phoneNumber:phoneNumber}
	});
}
//使用验证码登陆
export const LoginByVerifyCode = (data) => {	
	return request({
		url: 'home/Login.json',
		method: 'get',
		// params:{phoneNumber:phoneNumber}
	});
}
// 登陆使用的验证码
export const GetLoginVerifyCode = (phoneNumber) => {	
	return request({
		url: 'home/Login.json',
		method: 'get',
		// params:{phoneNumber:phoneNumber}
	});
}

