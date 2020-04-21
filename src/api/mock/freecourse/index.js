import request from '@/api/base.js'

//获取分类信息
export const GetClassfy = () => {	
	return request({
		url: 'medcourses/GetClassfy.json',
		method: 'get'
	});
}
//获取课程信息
export const GetCourseInfo = (query) => {
	return request({
		url: 'home/medical.json',
		method: 'get'
	});
}

