import axios from "axios";
import Image from "next/image";

function ShowInvitedMember({ data, refetch }) {
  const invited = data[0];
  const handleDelete = async (invite) => {
    await axios.delete(`/api/communities/${invite?.group_user_name}`, {
      headers: { member: invite?.name },
    });
    refetch();
  };
  return (
    <div>
      <div className="mt-4 px-4 py-2 shadow-sm rounded-md">
        {invited?.Invited_members?.map((invite, index) => (
          <div
            className="flex py-3 border-b border-gray-300 items-center justify-between"
            key={index}
          >
            <div className="flex items-center">
              <Image
                src={
                  invite?.user_photo
                    ? invite?.user_photo
                    : "https://placehold.co/400x400"
                }
                alt="user_name"
                height={40}
                width={40}
                className="h-[40px] w-[40px] rounded-full"
              ></Image>
              <div className="flex ml-8 flex-col">
                <p className="font-semibold text-gray-200">{invite?.name}</p>
                <p className="text-sm text-gray-200">{invite?.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-center bg-orange-300 cursor-pointer hover:bg-orange-500 duration-500 text-white py-1 px-3 rounded-md text-sm mr-6">
                {invite?.accessibility}
              </p>
              <button
                onClick={() => handleDelete(invite)}
                className="text-center cursor-pointer hover:bg-red-700 duration-500 bg-red-500 text-white font-semibold text-sm py-1 px-3 rounded-md mr-4"
              >
                Cencel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowInvitedMember;
