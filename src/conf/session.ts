export const sessionOptions = {
  password: 'z>2dzj~@2-k5-zCw+c5x=G]eDq^_%V^V',
  cookieName: 'admin_web_session',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
