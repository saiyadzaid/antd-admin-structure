import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Layout,
	Menu,
	Typography,
	Alert,
	Button,
	message,
	Dropdown,
	Badge,
} from 'antd';
import {
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
	BarChartOutlined,
	FlagOutlined,
	DollarCircleOutlined,
	LogoutOutlined,
	MailOutlined,
	CaretDownOutlined,
	TeamOutlined,
} from '@ant-design/icons';
// import Logo from '../../assets/img/logo-white.png';
//import AdminRoutes from '../../Routes/AdminRoutes';
import styles from './admin-layout.module.scss';
import useWidth from '../helpers/useWidth';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminLayout = (props) => {
	const history = useHistory();
	const width = useWidth();
	const [disabled, setDisabled] = useState(false);
	const [userModal, setUserModal] = useState(false);

	const menu = (
		<Menu>
			<Menu.Item
				icon={<UserOutlined />}
				onClick={() => history.push('/account')}
			>
				My Account
			</Menu.Item>
			<Menu.Item
				icon={<LogoutOutlined />}
				//onClick={() => handleLogout(history)}
			>
				Logout
			</Menu.Item>
		</Menu>
	);

	return (
		<Fragment>
			<header className={styles.adminHeader}>
				<div style={{ marginLeft: width > 1200 ? '220px' : '95px' }}>
					<Badge dot={true}>
						<MailOutlined style={{ fontSize: '1.1rem' }} />
					</Badge>
				</div>

				<div
					style={{
						marginLeft: 'auto',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						maxHeight: 'max-content',
					}}
				>
					<Dropdown overlay={menu}>
						<div className={styles.adminUsername}>
							User Name
							<CaretDownOutlined
								style={{
									marginLeft: '0.5rem',
									marginRight: '0',
								}}
							/>
						</div>
					</Dropdown>
				</div>
			</header>
			<Layout className={styles.adminLayout}>
				<Sider collapsed={width < 1200} className={styles.adminSider}>
					{/* 
            <img
					style={{ width: '80%', padding: '16px', marginLeft: '10%' }}
					alt="Logo"
					src={Logo}
				/>
            */}
					<Typography.Title
						level={4}
						style={{
							textAlign: 'center',
							color: 'white',
							margin: '2rem 0',
						}}
					>
						Project Name
					</Typography.Title>
					<Menu theme="dark" mode="vertical">
						<Menu.Item key="1">
							<Link to="/dashboard" />
							<BarChartOutlined />
							<span>Dashboard</span>
						</Menu.Item>
						<SubMenu
							key="2"
							title={
								<span>
									<Link to="/dashboard/categories" />
									<FlagOutlined />
									<span>Categories</span>
								</span>
							}
						>
							<Menu.Item key="3">
								<Link to="/dashboard/categories" />
								<span>All Categories</span>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to="/dashboard/category/add" />
								<span>New Category</span>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="14">
							<Link to="/account" />
							<SettingOutlined />
							<span>Account</span>
						</Menu.Item>
						<Menu.Item key="15" onClick={() => history.push('/')}>
							<HomeOutlined />
							<span>Back to main page</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Content className={styles.adminContent}>
						{/* <AdminRoutes /> */}
                        Content Loaded here...
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Designed &amp; developed by{' '}
						<a
							//href="https://zss.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							zss
						</a>
					</Footer>
				</Layout>
			</Layout>
		</Fragment>
	);
};

export default AdminLayout;
