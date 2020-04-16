import request from '@/api/base.js'

//静态方法获取轮播图
export const GetCarouselInfo = () => {
	return request({
		url: 'home/carousel.json',
		method: 'get'
	});
}
//获取推荐首页推荐数据
export const GetRecommendInfo = () => {
	return request({
		url: 'home/recommend.json',
		method: 'get'
	});
}
//获取医学专区的数据
export const GetMedicalInfo = () => {
	return request({
		url: 'home/medical.json',
		method: 'get'
	});
}
//获取非医学专区的数据
export const GetNotMedicalInfo = () => {
	return request({
		url: 'home/notMedical.json',
		method: 'get'
	});
}
