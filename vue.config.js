const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}


module.exports = {

	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
			.set('_c', resolve('src/components'))
			.set('assets', resolve('src/assets'))
			// .set('api', resolve('src/api/mock'))// 定义api位置，目前使用的是静态mock
			.set('api', resolve('src/api'))
	},
	lintOnSave: false
}
