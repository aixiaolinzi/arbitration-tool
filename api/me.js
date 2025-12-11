import { createHmac } from 'crypto';

export default function handler(req, res) {
  // 暂时禁用用户信息接口，直接返回简单响应
  res.status(200).json({ 
    user: { 
      id: 'temp-user-id',
      name: '临时用户'
    } 
  });
}
