/**
 * 
 * @authors stkgank@163.com
 * @date    2019-4-18 22:06:41
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）

import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'
import myDES2 from './components/SeccondDevelop/DES2.js'

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'xian.dai'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='src/assets/images/logo.png' width="50" id="logo" />
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>二楼</span></span>}>
                            <Menu.Item key="1"><Link to="/RTRSeccondDevelop">RTR水平电镀3</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/DESDevelop1">DES显影1</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/DESDevelop2">DES显影2</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/DES2">DES2</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/DES3">DES3</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/GoldDevelop2">沉金2</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/GoldDevelop3">沉金3</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/GoldDevelop4">沉金4</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/VCPDevelop1">VCP镀铜1</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>三楼</span></span>}>
                            <Menu.Item key="10"><Link to="/RTRThridDevelop1A">RTR水平电镀1A</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/RTRThridDevelop1B">RTR水平电镀1B</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/RTRThridDevelop2A">RTR水平电镀2A</Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/RTRThridDevelop2B">RTR水平电镀2B</Link></Menu.Item>
                            <Menu.Item key="14"><Link to="/RTRDES1">RTR显影1</Link></Menu.Item>
                            <Menu.Item key="15"><Link to="/RTRDES2">RTR显影2</Link></Menu.Item>
                            <Menu.Item key="16"><Link to="/RTRETC1">RTR蚀刻1</Link></Menu.Item>
                            <Menu.Item key="17"><Link to="/RTRETC2">RTR蚀刻2</Link></Menu.Item>
                            <Menu.Item key="18"><Link to="/RTRETC3">RTR蚀刻3</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute path="myCard" component={myCard} />
            <Route path="DES2" component={myDES2} />
            <Route path="DES3" component={myTable} />
            <Route path="DESDevelop1" component={myTable} />
            <Route path="DESDevelop2" component={myTable} />
            <Route path="GoldDevelop2" component={myTable} />
            <Route path="GoldDevelop3" component={myTable} />
            <Route path="GoldDevelop4" component={myTable} />
            <Route path="RTRSeccondDevelop" component={myTable} />
            <Route path="VCPDevelop1" component={myTable} />
            <Route path="RTRDES1" component={myTable} />
            <Route path="RTRDES2" component={myTable} />
            <Route path="RTRETC1" component={myTable} />
            <Route path="RTRETC2" component={myTable} />
            <Route path="RTRETC3" component={myTable} />
            <Route path="RTRThridDevelop1A" component={myTable} />
            <Route path="RTRThridDevelop1B" component={myTable} />
            <Route path="RTRThridDevelop2A" component={myTable} />
            <Route path="RTRThridDevelop2B" component={myTable} />
         
        </Route>
    </Router>
), document.getElementById('app'));


