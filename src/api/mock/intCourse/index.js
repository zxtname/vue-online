import request from '@/api/base.js'

//静态页面
//获取推荐页面的信息
export const GetCourseInfo = (query) => {
	return request({
		url: 'home/notMedical.json',
		method: 'get',
		data:query
	});
}
