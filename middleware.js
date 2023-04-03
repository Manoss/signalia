export { default } from "next-auth/middleware"

//Pages need authentification
export const config = { matcher: ["/admin"] }