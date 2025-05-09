import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function SignUp(props) {
    const { toggle, setToggle, addUser, users } = props;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const emailExists = users.some((user) => user.email === data.email);
    
        if (emailExists) {
            toast.error("Email already exists");
            return;
        }

        data.id = nanoid();
        addUser(data);
        console.log(data);
        toast.success("Sign Up successful!");
        reset();
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen text-white">
                <form action="" onSubmit={handleSubmit(onSubmit)} className="bg-blue-500 m-4 p-8 rounded-2xl ">
                    <h1 className='text-5xl font-semibold'>Sign Up</h1>
                    <div className='py-12'>
                        <div className='pb-6'>
                            <label htmlFor="name">
                                Name : <input type="text" name='name' required className='bg-gray-500 rounded w-full outline-0 px-4 py-2 mt-2 transition-all text-white'  {...register("name")}/>
                            </label>
                        </div>
                        <div className='pb-6'>
                            <label htmlFor="email">
                                Email : <input type="email" name="email" id="email" required className='bg-gray-500 rounded w-full outline-0 px-4 py-2 mt-2 transition-all text-white'  {...register("email")}/>
                            </label>
                        </div>
                        <div className='pb-6'>
                            <label htmlFor="password">
                                Password : <input type="password" name="password" id="password" required  className='bg-gray-500 rounded w-full outline-0 px-4 py-2 mt-2 transition-all text-white' {...register("password")}/>
                            </label>
                        </div>
                        <div className='text-right'>
                            <button className='bg-gray-500 px-6 py-2 rounded cursor-pointer hover:scale-[95%] transition-all text-white'>Sign Up</button>
                        </div>
                    </div>
                    <div className='text-center underline flex items-center justify-center gap-4'>
                        <small>Already have an account?</small>
                        <button type="button" onClick={()=>setToggle(!toggle)} className='cursor-pointer hover:text-gray-500'>Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;