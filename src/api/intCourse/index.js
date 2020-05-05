import request from '@/api/base.js'

//获取首页的全部信息
export const GetCourseInfo = (query) => {
	const data = {
		"pageNum": query.pageNum,
		"pageSize": 12,
		"field": query.field,
		"order": "desc",
		"query": {}
	}
	// console.log(query)
	return request({
		url: 'Course/GetCourseInfo',
		method: 'post',
		data
	});
}
//根据CourseId获取course的详细信息
export const GetCourseDetailById=(courseId)=>
{
	return request({
		url: 'Course/GetCourseDetailById',
		method: 'get',
		params:{courseId:courseId}
	});
}
