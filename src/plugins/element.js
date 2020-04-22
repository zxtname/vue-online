import Vue from 'vue'
import {
	Carousel,
	CarouselItem,
	Backtop,
	Button,
	Form,
	FormItem,
	Input,
	Message,
	Container,
	Header,
	Aside,
	Main,
	Menu,
	Submenu,
	MenuItemGroup,
	MenuItem,
	Breadcrumb,
	BreadcrumbItem,
	Card,
	Row,
	Col,
	Table,
	TableColumn,
	Switch,
	Tooltip,
	Pagination,
	Dialog,
	MessageBox,
	Upload,
	Tabs,
	TabPane,
	Divider,
} from 'element-ui'

Vue.use(Backtop)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 将弹框组件全局挂在到VUe原形实例
Vue.prototype.$message = Message
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Upload)
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Divider);
