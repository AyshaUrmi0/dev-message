"use client";
import axios from "axios";
import GroupInput from "./GroupInput";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PostBoxTable from "./PostBoxTable";

export default function PostInputCard() {
  const [cardData, setCardData] = useState([]);
  const pathname = usePathname();
  const user_name = pathname.split("/")[2];

  useEffect(() => {
    const PostData = async () => {
      const { data: postedData } = await axios.get(
        `/api/community/post/${user_name}`
      );
      setCardData(postedData);
    };
    PostData();
  },[]);

  return (
    <div className="">
      <div className="">
        <div className="flex flex-col items-center">
          <GroupInput />
          <PostBoxTable cardData={cardData}></PostBoxTable>
        </div>
      </div>
    </div>
  );
}
