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

