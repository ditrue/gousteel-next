"use client"
import React, { useState } from "react"
import { Button, Drawer, Form, Input, Space, Table } from "antd"
import type { FormProps, TableProps } from "antd"
import { useCustomShopAdminList } from "@/features/customShop/api/use-get-custom-shop-list"

interface Params {
  page?: number
  pageSize?: number
  keywords?: string
}
const App: React.FC = () => {
  const columns: TableProps["columns"] = [
    {
      title: "商铺名称",
      dataIndex: "title",
      key: "title",
      render: (_, record) => <a>{record.shop.name}</a>,
    },
    {
      title: "定制标题",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <a
          style={{
            display: "block",
            maxWidth: "300px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {record.title}
        </a>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={showDrawer} size="small">
            编辑
          </Button>
          <Button danger size="small">
            删除
          </Button>
        </Space>
      ),
    },
  ]
  const [form] = Form.useForm()
  const [pageInfo, setPageInfo] = useState<Params>({
    page: 1,
    pageSize: 10,
    keywords: "",
  })
  const { data } = useCustomShopAdminList({
    page: pageInfo.page || 1,
    pageSize: pageInfo.pageSize || 10,
    keywords: pageInfo.keywords || "",
  })
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    console.log(data)

    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  const handleTableChange: TableProps["onChange"] = ({ current, pageSize }) => {
    setPageInfo({
      page: current,
      pageSize: pageSize,
      keywords: pageInfo.keywords || "",
    })
  }

  const onSearchFinish: FormProps["onFinish"] = (values) => {
    console.log("Success:", values)
    setPageInfo({
      page: 1,
      pageSize: pageInfo.pageSize,
      keywords: form.getFieldValue("keywords") || "",
    })
  }
  return (
    <>
      <div className="mb-4">
        <Form
          name="basic"
          form={form}
          layout="inline"
          initialValues={{ remember: true }}
          onFinish={onSearchFinish}
          autoComplete="off"
        >
          <Form.Item label="关键词" name="keywords">
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        rowKey={"id"}
        columns={columns}
        pagination={{
          current: data?.page,
          pageSize: data?.pageSize,
          total: data?.total,
        }}
        onChange={handleTableChange}
        dataSource={data?.list}
      />
      <Drawer
        title="定制信息"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

export default App
