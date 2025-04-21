"use client";

import ChatBox from "@/messages/components/layout/ChatBox";
import MyChats from "@/messages/components/layout/MyChats";
import SideDrawer from "@/messages/components/layout/SideDrawer";
import App from "../../app/App";
import { ChatState } from "@/messages/Context/ChatProvider";
import { useEffect, useState } from "react";

const ChatPage = () => {

  const [fetchAgain, setFetchAgain] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    // console.log("userInfo>>>", userInfo);
  }, []);

  if (!user) return <div><div className="text-center mt-10 py-28 text-2xl">Loading user...</div></div>;

  return (
    <App>
      <div className="w-full">
        {user && <SideDrawer />}
        <div className="flex justify-between h-[91.5vh] p-3 w-full">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </div>
      </div>
    </App>
  );
};

export default ChatPage;
