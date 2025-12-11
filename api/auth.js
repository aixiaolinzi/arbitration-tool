import { createHmac } from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-for-dev-only';

export default async function handler(req, res) {
  // 暂时禁用飞书授权回调，直接返回简单响应
  res.status(200).json({ message: '授权功能暂时禁用' });
}
