import { useEffect, useState } from "react"

export const Step = ({ title, text }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {

    }, [open])
    return (
        <div className="w-[70rem] max-lg:w-[50rem]">
            <div className="group bg-secondary text-primary p-8 flex justify-between hover:brightness-90 cursor-pointer" onClick={() => setOpen((open) => !open)}>
                <h1 className="text-5xl max-[1200px]:text-3xl group-hover:underline">{title}</h1>
                <div className='font-bold h-full w-10'>{open ? <h1>⋀</h1> : <h1>⋁</h1>}</div>
            </div>
            {open ? (
                <div className="bg-secondary p-8 text-primary font-ft-secondary text-3xl leading-[3rem] max-lg:text-xl">
                    <h1>{text}</h1>
                </div>

            ) : <></>}
        </div>
    )
}