import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link'


interface IFormInput {
  Email: string;
  password: string;
}

const signup = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };


  return (<>
    <div className="border-2 border-black mt-5 max-w-xl mx-auto bg-background">
      <h1 className="mx-auto my-5 text-2xl font-semibold w-auto text-center">
        新規登録</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col max-w-[70%] mx-auto">
          <label className="text-left" htmlFor='Email'>メールアドレス</label>
          <input
            className=" indent-2 border-2 border-black h-10 mb-2"
            id='Email'
            type='text'
            {...register('Email', { required: true, maxLength: 20 })}
          />
          {errors.Email && 'Email is required'}
        </div>
        <div className="flex flex-col max-w-[70%] mx-auto">
          <label className="text-left" htmlFor='password'>パスワード</label>
          <input
            className=" indent-2 border-2 border-black h-10"
            type='password'
            id='password'
            {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.lastName && 'password is required'}
        </div>
        <input className="font-bold text-lg w-auto border-2 border-black px-5 py-1 rounded-md mt-5 mb-4" type='submit' />
      </form>
      <Link href="/signin"><a><p className="text-center mb-5 underline">ログインページはこちら</p></a></Link>
    </div>
  </>)
}

export default signup
