'use client'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { Edit } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function EditSection({ id, card }) {
   

    const onSubmit = async (data) => {
        console.log(data)

       
    }
    return (
        <>
            {(card?.email === session?.user?.email) &&
                < button className="btn bg-white hover:bg-gray-300 w-full border-none shadow-none text-black flex justify-start font-light" onClick={() => document.getElementById('my_modal_4').showModal()
                }> <span><Edit /></span> <span>Edit</span> </button >}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-white text-black">
                    <form onSubmit={handleSubmit(onSubmit)} className="text-white md:p-6 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="content" className={'text-black text-lg font-bold'}>Update Your Content: </Label>

                            <Textarea
                                id="content"
                                className="w-full h-40 text-black"
                                {...register('content', { required: 'Content is required' })}
                            />
                            {errors.content && (
                                <p className="text-red-500 text-sm">{errors.content.message}</p>
                            )}
                        </div>
                       
                    </form>
                </div>
            </dialog>
        </>
    )
}
