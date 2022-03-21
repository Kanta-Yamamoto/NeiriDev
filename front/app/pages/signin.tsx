import { useForm, SubmitHandler } from 'react-hook-form';


interface IFormInput {
  Email: string;
  password: string;
}

const signin = () => {

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
    <div className="border-2 border-black mt-5 max-w-xl mx-auto">
      <h1 className="mx-auto my-5 text-2xl font-semibold w-auto text-center">
        ログインする</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor='Email'>メールアドレス</label>
          <input
            id='Email'
            type='text'
            {...register('Email', { required: true, maxLength: 20 })}
          />
          {errors.Email && 'Email is required'}
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input
            type='password'
            id='password'
            {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.lastName && 'password is required'}
        </div>
        <input type='submit' />
      </form>

    </div>
  </>)
}

export default signin
