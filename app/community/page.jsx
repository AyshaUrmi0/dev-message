"use client"; // Next.js client component

import Image from "next/image";
import CreateCommunityButton from "./component/CreateCommunityButton";
import Link from "next/link";
import { AllCommunity } from "./component/AllCommunity";
import Loading from "../loading";

const membersImages = ["", "", "", ""]; // Dummy members images array

export default function GroupList() {
  const { groups, isLoading, isError } = AllCommunity(); // Fetch community groups

  if (isLoading) return <Loading />; // Show loading spinner
  if (isError) return <p className="text-red-500">Error loading groups.</p>; // Error fallback
  if (!groups || groups.length === 0) return <p className="text-white/80">No groups found.</p>; // No group fallback

  return (
    <div className="max-w-6xl min-h-screen shadow-lg rounded-lg mx-auto p-4">
      
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-semibold">Group</h2>
        <div className="flex space-x-2">
          <select className="border text-white/80 border-gray-300 rounded px-3 py-2 text-sm">
            {/* Dropdown options */}
            <option className="text-black">Alphabetical</option>
            <option className="text-black">Alphabetical</option>
            <option className="text-black">Alphabetical</option>
          </select>
          <CreateCommunityButton />
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-300 mb-4 flex space-x-4 text-sm">
        <span className="text-white/80 border-b-2 border-blue-600 pb-2">
          Friends&rsquo;s groups
        </span>
        <span className="text-white/80 font-semibold">Suggested for you</span>
        <span className="text-white/80 font-semibold">Popular near you</span>
        <span className="text-white/80 font-semibold">More suggestions</span>
      </div>

      {/* Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((group, index) => ( // Mapping through groups
          <div
            key={index} // Important: key should be unique
            className="bg-white/5 border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Group Image */}
            <div className="relative">
              <Image
                src={
                  group?.group_picture
                    ? group.group_picture
                    : "https://i.ibb.co.com/C5P66CyX/code-red.png" // Default image if none
                }
                alt="Group Picture"
                width={400}
                height={150}
                className="opacity-50 w-full h-32 object-cover"
              />
            </div>

            {/* Group Info */}
            <div className="text-center pt-5 pb-4 px-4">
              <Link
                href={`/community/${group?.user_name}`} // Dynamic user link
                className="font-semibold text-white text-lg"
              >
                {group?.group_name}
              </Link>
              <p className="text-blue-200 text-sm">{group?.audience}</p>

              {/* Members and Posts Info */}
              <div className="flex *:text-white/85 justify-center space-x-4 text-gray-600 text-sm mt-2">
                <span>12k Members</span>
                <span>16 Posts per day</span>
              </div>

              {/* Member Avatars */}
              <div className="flex justify-center -space-x-2 mt-3">
                {membersImages.slice(0, 4).map((img, idx) => (
                  <Image
                    key={idx} // Unique key inside loop
                    src={img || "https://placehold.co/32"} // Placeholder if empty
                    alt="Member"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                ))}

                {/* Extra members count */}
                <span className="h-[32px] w-[32px] flex items-center justify-center bg-gray-300 text-xs rounded-full">
                  +{group?.extraMembers || 12}
                </span>
              </div>

              {/* Join Button */}
              <button
                className={`mt-4 px-4 py-1 rounded ${
                  group?.buttonColor || "bg-blue-100 text-blue-700"
                } text-sm font-semibold`}
              >
                {group?.buttonText || "Join Group"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
