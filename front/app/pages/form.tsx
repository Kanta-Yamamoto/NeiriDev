import { useForm } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderEnum;
}

const form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data: IFormInput) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          type='text'
          {...register('firstName', { required: true, maxLength: 20 })}
        />
        {errors.firstName && 'FirstName is required'}
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.lastName && 'LastName is required'}
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          {...register('age', { required: true, min: 18, max: 99 })}
        />
        {errors.age && 'Age is required'}
      </div>
      <div>
        <label htmlFor='gender'>Gender Selection</label>
        <select
          id='gender'
          {...register('gender', { required: true })}
        >
          <option value='female'>female</option>
          <option value='male'>male</option>
          <option value='other'>other</option>
        </select>
      </div>
      <input type='submit' />
    </form>
  );
};

export default form;
