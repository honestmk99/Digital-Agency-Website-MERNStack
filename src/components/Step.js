import { useState } from "react"

export const Step = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="group bg-secondary w-9/12 text-primary p-8 flex justify-between hover:brightness-90 cursor-pointer ">
            <h1 className="text-5xl max-[1200px]:text-3xl group-hover:underline">Step 1</h1>
            <div className='font-bold h-full w-10'><h1>⋁</h1></div>
        </div>
    )
}