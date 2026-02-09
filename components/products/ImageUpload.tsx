"use client";

import { getImagePath } from "@/src/utils";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload({ image } : { image: string | undefined }) {
    const [imageUrl, setImageURL] = useState('');

    return (
        <CldUploadWidget
            uploadPreset="product_upload"   // your preset name
            options={{
                maxFiles: 1,
            }}
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close()
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    setImageURL(result.info?.secure_url)
                }
            }}
        >
            {({ open }) => (
                <>
                    <div className="space-y-2">
                        <label className="text-slate-800 font-semibold">Product Image:</label>

                        <div className="relative cursor-pointer hover:opacity-70 transition border border-gray-200 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100 p-10">
                            <TbPhotoPlus
                                size={50}
                                className="cursor-pointer"
                                onClick={() => open()}   // open widget
                            />

                            <p className="text-lg font-semibold">Upload Image</p>

                            { imageUrl && (
                                <div 
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image 
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        src={ imageUrl }
                                        alt='Product Image'
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    { image && !imageUrl && (
                        <div className="space-y-2">
                            <label className="text-slate-800 font-semibold">Current Image:</label>

                            <div className="relative w-64 h-64">
                                <Image 
                                    fill
                                    src={ getImagePath(image) }
                                    alt="Product Image"
                                />
                            </div>
                        </div>
                    )}

                    <input 
                        type="hidden" 
                        name="image"
                        defaultValue={imageUrl ? imageUrl : image} 
                    />
                </>
            )}
        </CldUploadWidget>
    )
}