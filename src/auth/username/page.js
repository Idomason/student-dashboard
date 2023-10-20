import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../../../public/assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../../../../helper/validate';

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className='w-full mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='pageBg flex items-center justify-center h-screen'>
        <div className='glass'>
          <div>
            <div className='title flex flex-col items-center'>
              <h4 className='text-3xl font-bold'>Hello Again!</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500 font-extralight'>
                Login to Access Dashboard
              </span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <Image className='profileImg' src={avatar} alt='user image' />
              </div>
              <div className=' flex flex-col items-center gap-6'>
                <input
                  {...formik.getFieldProps('username')}
                  className='textbox'
                  type='text'
                  placeholder='Username'
                />
                <button className='btn' type='submit'>
                  Let's Go
                </button>
              </div>
              <div className='text-center py-4'>
                <span className='text-gray-500'>
                  Not a Member?{' '}
                  <Link className='text-red-500' href='/auth/register'>
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
