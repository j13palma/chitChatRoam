import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: ["/chitchat/chat", "/chitchat/chat/:id*", "/chitchat/register"],
};
