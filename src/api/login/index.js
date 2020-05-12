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
export const Register = (data) => {	
	// console.log(query)
	return request({
		url: 'Student/Register',
		method: 'post',
		data
	});
}
