import request from '@/api/base.js'
const token=sessionStorage.getItem("auth");
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
export const GetUserInfo = () => {	
	if(token==null){
		console.log("请重新登陆，token无效")
	}
	return request({
		url: 'Student/GetUserInfo',
		headers: {
			Authorization: "Bearer " + token
		},
		method: 'get',
	});
}
export const EditInfo = (data) => {		
	return request({
		url: 'Student/EditInfo',
		headers: {
			Authorization: "Bearer " + token
		},
		method: 'post',
		data
	});
}
export const GetUserCourse = () => {	
	if(token==null){
		console.log("请重新登陆，token无效")
	}
	return request({
		url: 'Student/GetUserCourse',
		headers: {
			Authorization: "Bearer " + token
		},
		method: 'get',
	});
}

