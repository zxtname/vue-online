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
//根据CourseId获取course的详细信息
export const GetCourseDetailById=(courseId)=>
{
	return request({
		url: 'home/coursedetail.json',
		method: 'get',
		params:{courseId:courseId}
	});
}
//根据Id获取视频的URL
export const GetVideoById=(Id)=>
{
	if(Id==1){
		return request({
			url: 'video/video1.json',
			method: 'get',
			params:{videoId:Id}
		});
	}
	else{
		return request({
			url: 'video/video2.json',
			method: 'get',
			params:{videoId:Id}
		});
	}
	
}
