<template>
	<div class="cards">
		<ul class="course-list">
			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">疾病诊治</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>

			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">实用技能</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>

			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">用药经验</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>

			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">指南解读</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>
			
			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">辅助检查</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>
			
			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">医学人文</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>
			
			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">健康科普</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>
			
			<li class="course-item">
				<div class="img-box">
					<img src="https://img1.dxycdn.com/2019/1115/684/3379731298087606510-73.png?x-oss-process=image/format,webp" />
					<div class="tags">
						<span class="tag-item">医患沟通</span>
					</div>
				</div>
				<p class="course-name">
					神经科基本功：颅脑解剖与影像异常
				</p>
				<p class="course-teacher">
					主讲人：高洪权
				</p>
				<p class="price">
					<span>价格：￥299</span>
				</p>
			</li>
		</ul>

	</div>
</template>

<script>
</script>

<style scoped>
	.cards {
		margin-top: 70px;
	}
	
	.course-list {
		padding: 0px 54px 0px 54px;
		margin-bottom: 0px;
		display: flex;
		-webkit-box-align: start;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	
	.course-item {
		margin-bottom: 34px;
		display: block;
		position: relative;
		-webkit-box-flex: 0;
		flex: 0 0 20%;
		cursor: pointer;
	}
	
	.course-item:hover .course-name{
		color: #1A50EA;
	}
	
	.img-box {
		position: relative;
		margin: 0 5px 16px 5px;
		width: 300px;
		height: 200px;
	}
	
	.img-box>img {
		display: inline-block;
		width: 100%;
		height: 100%;
		background-color: #eee;
		border-radius: 8px;
	}
	
	.course-item:hover .img-box>img{
		box-shadow: 0px 15px 30px rgba(7,17,27,0.2);
	}
	
	.tags {
		position: absolute;
		bottom: 12px;
		left: 8px;
	}
	
	.tag-item {
		margin-right: 10px;
		padding: 6px 10px;
		border-radius: 6px;
		color: #fff;
		font-size: 1.125rem;
		background-color: rgba(28, 31, 33, .5);
	}
	
	.course-name {
		margin: 0px;
		height: 46px;
		word-break: break-all;
		font-size: 1.25rem;
		font-weight: bold;
		line-height: 24px;
		color: #1c1f21;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.course-item>p {
		padding: 0 5px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.course-teacher {
		margin: 2px 0px 2px;
		font-size: 1rem;
		color: #9199a1;
		line-height: 24px;
	}
	
	.course-teacher>span {
		padding: 25px;
	}
	
	.price {
		margin: 0px;
	}
	
	.price span {
		color: #4d555d;
		font-size: 1.125rem;
		line-height: 24px;
		letter-spacing: .5px;
	}
	
	p {
		text-align: left;
	}
	
	li {
		list-style: none;
		display: list-item;
		text-align: -webkit-match-parent;
	}
	
	ul {
		list-style-type: disc;
		-webkit-margin-before: 1em;
		-webkit-margin-after: 1em;
		-webkit-margin-start: 0px;
		-webkit-margin-end: 0px;
		-webkit-padding-start: 40px;
	}
</style>
