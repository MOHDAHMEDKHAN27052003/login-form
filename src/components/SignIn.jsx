import { useForm } from "react-hook-form";

function SignIn(props) {
    const { toggle, setToggle, addUser } = props;
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = (data) => {
        addUser(data);
        reset();
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen text-white">
                <form action="" onSubmit={handleSubmit(onSubmit)} className="bg-blue-500 p-8 rounded-2xl">
                    <h1 className='text-5xl font-semibold'>Sign In</h1>
                    <div className='py-12'>
                        <div className='pb-6'>
                            <label htmlFor="email">
                                Email : <input type="email" name="email" id="email" required className='bg-gray-500 rounded w-full outline-0 px-4 py-2 mt-2 transition-all text-white' {...register("email")}/>
                            </label>
                        </div>
                        <div className='pb-6'>
                            <label htmlFor="password">
                                Password : <input type="password" name="password" id="password" required className='bg-gray-500 rounded w-full outline-0 px-4 py-2 mt-2 transition-all text-white' {...register("password")}/>
                            </label>
                        </div>
                        <div className='text-right'>
                            <button className='bg-gray-500 px-6 py-2 rounded-lg cursor-pointer hover:scale-[95%] transition-all text-white'>Sign In</button>
                        </div>
                    </div>
                    <div className='text-center underline flex items-center justify-center'>
                        <small>Don't have an account?</small>
                        <button type="button" onClick={()=>setToggle(!toggle)} className='cursor-pointer hover:text-gray-500'>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignIn;