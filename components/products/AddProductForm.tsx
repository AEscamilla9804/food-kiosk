"use client"

export default function AddProductForm({ children } : { children: React.ReactNode }) {
    const handleSubmit = async (formData: FormData) => {
        console.log('Desde handleSubmit')
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 shadow-md max-w-3xl mx-auto'>
            <form 
                className='space-y-5'
                action={handleSubmit}
            >
                { children }
                
                <input 
                    type="submit" 
                    value="Register Product" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"    
                />
            </form>
        </div>
    )
}