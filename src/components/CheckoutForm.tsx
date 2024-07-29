import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const checkoutSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  companyName: z.string().optional(),
  zipCode: z.string().nonempty({ message: "ZIP Code is required" }),
  country: z.string().nonempty({ message: "Country/Region is required" }),
  streetAddress: z.string().nonempty({ message: "Street address is required" }),
  townCity: z.string().nonempty({ message: "Town/City is required" }),
  province: z.string().nonempty({ message: "Province is required" }),
  addOnAddress: z.string().nonempty({ message: "Add-on-address is required" }),
  email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email address is required" }),
  additionalInfo: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema)
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };

  return (
    <div className='w-2/3'>
        <h2 className='text-3xl font-bold mt-2 mb-12'>Billing Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex mb-6'>
          <div>
            <label className='text-base font-semibold'>First name</label><br />
            <input
              className='w-4/5 h-[45px] border border-lightGray rounded mt-2'
              type='text'
              {...register('firstName')}
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </div>
          <div>
            <label className='text-base font-semibold'>Last name</label><br />
            <input
              className='w-4/5 h-[45px] border border-lightGray rounded mt-2'
              type='text'
              {...register('lastName')}
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Company name (Optional)</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('companyName')}
          />
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>ZIP Code</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('zipCode')}
          />
          {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Country/Region</label><br />
          <input 
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('country')}
          />
          {errors.country && <span className="text-red-500">{errors.country.message}</span>}
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Street address</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('streetAddress')}
          />
          {errors.streetAddress && <span className="text-red-500">{errors.streetAddress.message}</span>}
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Town/City</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('townCity')}
          />
          {errors.townCity && <span className="text-red-500">{errors.townCity.message}</span>}
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Province</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('province')}
          />
          {errors.province && <span className="text-red-500">{errors.province.message}</span>}
        </div>
        <div className='mb-6'>
          <label className='text-base font-semibold'>Add-on-address</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('addOnAddress')}
          />
          {errors.addOnAddress && <span className="text-red-500">{errors.addOnAddress.message}</span>}
        </div>
        <div className='mb-10'>
          <label className='text-base font-semibold'>Email address</label><br />
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded mt-2'
            type='text'
            {...register('email')}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className='mb-8'>
          <input
            className='w-3/5 h-[45px] border border-lightGray rounded'
            placeholder='Additional information'
            type='text'
            {...register('additionalInfo')}
          />
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;