export default function handler(req, res) {
  // 暂时禁用飞书登录，直接返回简单响应
  res.status(200).json({ message: '登录功能暂时禁用' });
}
