# 数字藏品后端系统

## 项目概述

本项目是一个基于ThinkPHP框架开发的数字藏品交易平台后端系统，提供完整的数字藏品管理、交易、用户管理等功能。

## 主要特性

- 完整的数字藏品生命周期管理
- 支持多种支付方式（支付宝、微信支付等）
- 用户管理系统
- 订单管理系统
- 资产管理系统
- 权限控制系统
- API接口支持
- 多语言支持

## 系统要求

- PHP >= 7.1.3
- MySQL >= 5.6
- Redis 支持
- Composer

## 开发环境部署

1. 克隆代码到本地：
```bash
git clone [repository_url]
cd backend-digital-collections
```

2. 安装依赖：
```bash
composer install
```

3. 环境配置：
```bash
cp .env.sample .env
```
然后编辑 .env 文件，配置数据库等相关信息

4. 初始化数据库：
```bash
php think migrate:run
```

5. 启动服务：
```bash
php think run
```

## 目录结构

```
├── application/        # 应用目录
│   ├── admin/         # 后台管理模块
│   ├── api/          # API接口模块
│   ├── common/       # 公共模块
│   └── index/        # 前台模块
├── extend/           # 扩展类库目录
├── public/           # Web 入口目录
├── thinkphp/         # 框架系统目录
├── vendor/           # Composer 依赖目录
└── .env              # 环境变量配置
```

## 主要功能模块

1. 用户管理
   - 用户注册/登录
   - 实名认证
   - 账户管理

2. 数字藏品管理
   - 藏品创建
   - 藏品上架
   - 藏品交易
   - 藏品转赠

3. 订单系统
   - 订单创建
   - 支付管理
   - 订单状态追踪

4. 系统配置
   - 基础配置
   - 支付配置
   - 转赠配置

## API 文档

API文档请访问：`/public/api.html`

## 开源协议

<!-- 本项目采用 MIT 开源协议，详见 [LICENSE](LICENSE) 文件。 -->

## 技术支持

如有问题，请提交 Issue 或联系技术支持。