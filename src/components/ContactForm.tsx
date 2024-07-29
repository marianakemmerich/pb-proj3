import React, { useState } from 'react'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      contactFormSchema.parse(values);
      console.log('Form submitted successfully:', values);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-black mb-4">Your Name</label>
        <input
            placeholder='Abc'
            value={values.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-lightGray rounded-md"
        />
        {errors.name && <p className="mt-2 text-sm text-red-800">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-black mb-4">Email Address</label>
        <input
            placeholder='Abc@def.com'
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md border-lightGray"
        />
        {errors.email && <p className="mt-2 text-sm text-red-800">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-black mb-4">Subject</label>
        <input
            placeholder='This is optional'
            value={values.subject}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md border-lightGray'
        />
        {errors.subject && <p className="mt-2 text-sm text-red-800">{errors.subject}</p>}
      </div>

      <div>
        <label className='block text-sm font-semibold text-black mb-4'>Message</label>
        <textarea
            placeholder="Hi! I'd like to ask about"
            value={values.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm border-lightGray"
        />
        {errors.message && <p className='mt-2 text-sm text-red-800'>{errors.message}</p>}
      </div>

      <div>
        <button
          type='submit'
          className='w-1/3 mt-8 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-golden'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm;