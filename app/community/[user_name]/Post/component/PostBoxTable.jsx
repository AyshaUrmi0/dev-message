
import Image from 'next/image';
import profilePic from '@/public/assets/profile-pic.png'
import { format } from 'date-fns';
import PostBoxFooter from './PostBoxFooter';
import { BlogTableImagePart } from '@/app/components/HomeCenter/components/BlogBox/BlogBoxTable/BlogTableImagePart';
// import { BlogTableImagePart } from './BlogTableImagePart';
// import BlogBoxFooter from '@/app/components/HomeCenter/components/BlogBox/BlogBoxFooter/BlogBoxFooter';
// import { BlogTableImagePart } from '@/app/components/HomeCenter/components/BlogBox/BlogBoxTable/BlogTableImagePart';
// import BlogBoxFooter from '../BlogBoxFooter/BlogBoxFooter';

export default function PostBoxTable({ cardData }) {
    return (
        <>
            <>
                {cardData?.map(cardRes =>
                    <div key={cardRes?._id} className="bg-white rounded-lg shadow-md p-4 mt-4 w-full">
                        {/* User Info */}
                        <div className="flex items-center space-x-3">
                            <Image
                                src={cardRes?.image || profilePic}
                                alt='Profile Photo'
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{cardRes?.name}</p>
                                <p className="text-[12px] text-gray-500">
                                    Posted at: {format(new Date(cardRes?.postedAt), "dd-MMM''yy 'at' hh:mma")}
                                </p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="mt-3 text-gray-700">
                            {/* Display Rich Text Content */}
                            <div className="text-gray-700 mt-2 text-sm" dangerouslySetInnerHTML={{ __html: cardRes?.content }} />
                        </div>

                        {/* Post Images */}
                        <div className="">
                            <BlogTableImagePart images={cardRes?.contentImage || []} />
                        </div>

                        {/* Reaction Buttons */}
                        <div className="flex justify-between mt-4 text-gray-500 text-sm">
                            <PostBoxFooter card={cardRes} />
                        </div>
                    </div>
                )}
            </>
        </>
    )
}