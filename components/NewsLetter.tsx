import React from 'react'
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { CircleLoader } from 'react-spinners';






const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [submissionStatus, setSubmissionStatus] = useState(null);


    const [loading, setLoading] = useState(false);

        useEffect(() => {
            setSubmissionStatus(null);  
            setEmailValid(true);
        } , [email])


    const validateInputs = () => {
        // Check if email is valid
        const isValid = /\S+@\S+\.\S+/.test(email);
        setEmailValid(isValid);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        setLoading(true);

        const templateParams = { 
            email,
        };

        try {
            await emailjs.send(
                'service_4vvzs8s',
                'template_sj37i4q',
                templateParams,
                '2KVJi6pnykS-hRjpk'
            );

            console.log('Email sent successfully');
            setSubmissionStatus('success');
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
                <div className="mx-auto max-w-screen-md ">
                    <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-600 sm:text-2xl dark:text-white">Subscribe our newsletter to get update.</h2>
                    <form method='POST'>
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input
                                    className={`w-full rounded-md border ${
                                        emailValid ? 'border-[#e0e0e0]' : 'border-red-500'
                                    } block p-3 pl-10 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                   
                            </div>
                          
                            <div>
                                <button
                                    type="submit"
                                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={(e) => handleSubmit(e)}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <CircleLoader
                                            color={'#ffffff'}
                                            loading={loading}
                                            size={20}
                                        />
                                    ) : (
                                        'Subscribe'
                                    )}
                                </button>
                              
                            </div>
                         
                        </div>
                        <div>
                        <div className='mt-4'>
                                {!emailValid && (
                                    <p className="text-red-500 text-sm mt-1">Invalid email address</p>
                                )}
                                </div>

                                    {submissionStatus === 'success' && (
                                        <div className="text-white font-normal mt-5">
                                            Thank you for your subscription!
                                        </div>
                                    )}
                                    {submissionStatus === 'error' && (
                                        <div className="text-red-600 font-normal mt-5">
                                            Oops! Something went wrong. Please try again later.
                                        </div>
                                    )}
                                 
                                </div>
                              
                    </form>
                  
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
