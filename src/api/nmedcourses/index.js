import request from '@/api/base.js'

//获取分类信息
export const GetClassfy = () => {	
	return request({
		url: 'Course/GetClassfyList',
		method: 'Get',
		 params: {ismedical:0}
	});
}
//获取课程信息
export const GetCourseInfo = (query) => {
	const data = {
		"pageNum": query.pageNum,
		"pageSize": 9,
		"field": 'id',
		"order": "desc",
		"query": {
			SES_classfyName:query.classfyName,
			SL_courseName:query.courseName
		}
	}
	// console.log(query)
	return request({
		url: 'Course/GetCourseInfo',
		method: 'post',
		data
	});
}

