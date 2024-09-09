import { useState, useEffect } from 'react';

/** Main. */
const App = () => {
    /** Use state. */
    const [grad_1, setGrad_1] = useState(0);
    const [grad_2, setGrad_2] = useState(0);
    const [grad_3, setGrad_3] = useState(0);
    const [grad_4, setGrad_4] = useState(0);

    const [cred_1, setCred_1] = useState(0);
    const [cred_2, setCred_2] = useState(0);
    const [cred_3, setCred_3] = useState(0);
    const [cred_4, setCred_4] = useState(0);

    const [points, setPoints] = useState(0);
    const [credits, setCredits] = useState(0);
    const [average, setAverage] = useState();

    /** Use effect. */
    useEffect(() => {
        /** Set local variable. */
        let gp, cd, gpa;

        /** Calculate grade points. */
        if (grad_1 && grad_2 && grad_3 && grad_4) {
            gp =
                Number(grad_1) * Number(cred_1) + Number(grad_2) * Number(cred_2) + Number(grad_3) * Number(cred_3) + Number(grad_4) * Number(cred_4);
            setPoints(gp);
        }

        /** Calculate total credits. */
        if (cred_1 && cred_2 && cred_3 && cred_4) {
            cd = Number(cred_1) + Number(cred_2) + Number(cred_3) + Number(cred_4);
            setCredits(cd);
        }

        /** Calculate gpa. */
        if (gp && cd) {
            gpa = gp / cd;
            setAverage(gpa);
        }
    }, [grad_1, grad_2, grad_3, grad_4, cred_1, cred_2, cred_3, cred_4, points, credits, average]);

    /** Return something. */
    return (
        <>
            <header className='bg-rose-600 text-slate-50'>
                <div className='container mx-auto p-2'>College GPA Calculator</div>
            </header>
            <main className='min-h-screen'>
                <section className='container mx-auto p-4 p border border-rose-200 mt-4 rounded'>
                    <h1 class='p-2'>Semester</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 bg-rose-100 p-2 pb-4'>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='subject-1'>
                                Subject
                            </label>
                            <input className='border border-gray-200 rounded p-1 ml-2' type='text' id='subject-1' />
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='grade-1'>
                                Grade
                            </label>
                            <select
                                onChange={(e) => setGrad_1(e.target.value)}
                                className='border border-gray-200 bg-slate-50 p-[.45rem] rounded text-sm'>
                                <option value='Select Department'>Select Grade</option>
                                <option value='4'>A+</option>
                                <option value='3.95'>A</option>
                                <option value='3.75'>A-</option>
                                <option value='3.25'>B+</option>
                                <option value='3'>B</option>
                                <option value='2.75'>B-</option>
                                <option value='2.25'>C+</option>
                                <option value='2'>C</option>
                                <option value='1.75'>C-</option>
                                <option value='1.5'>D+</option>
                                <option value='1'>D</option>
                                <option value='0'>F</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='credit-1'>
                                Credits
                            </label>
                            <input
                                className='border border-gray-200 rounded p-1 ml-2'
                                type='number'
                                id='credit-1'
                                onChange={(e) => setCred_1(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 bg-rose-50  p-2 pb-4'>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='subject-2'>
                                Subject
                            </label>
                            <input className='border border-gray-200 rounded p-1 ml-2' type='text' id='subject-2' />
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='grade-2'>
                                Grade
                            </label>
                            <select
                                onChange={(e) => setGrad_2(e.target.value)}
                                className='border border-gray-200 bg-slate-50 p-[.45rem] rounded text-sm'>
                                <option value='Select Department'>Select Grade</option>
                                <option value='4'>A+</option>
                                <option value='3.95'>A</option>
                                <option value='3.75'>A-</option>
                                <option value='3.25'>B+</option>
                                <option value='3'>B</option>
                                <option value='2.75'>B-</option>
                                <option value='2.25'>C+</option>
                                <option value='2'>C</option>
                                <option value='1.75'>C-</option>
                                <option value='1.5'>D+</option>
                                <option value='1'>D</option>
                                <option value='0'>F</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='credit-2'>
                                Credits
                            </label>
                            <input
                                className='border border-gray-200 rounded p-1 ml-2'
                                type='number'
                                id='credit-2'
                                onChange={(e) => setCred_2(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 bg-rose-100  p-2 pb-4'>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='subject-3'>
                                Subject
                            </label>
                            <input className='border border-gray-200 rounded p-1 ml-2' type='text' id='subject-3' />
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='grade-3'>
                                Grade
                            </label>
                            <select
                                onChange={(e) => setGrad_3(e.target.value)}
                                className='border border-gray-200 bg-slate-50 p-[.45rem] rounded text-sm'>
                                <option value='Select Department'>Select Grade</option>
                                <option value='4'>A+</option>
                                <option value='3.95'>A</option>
                                <option value='3.75'>A-</option>
                                <option value='3.25'>B+</option>
                                <option value='3'>B</option>
                                <option value='2.75'>B-</option>
                                <option value='2.25'>C+</option>
                                <option value='2'>C</option>
                                <option value='1.75'>C-</option>
                                <option value='1.5'>D+</option>
                                <option value='1'>D</option>
                                <option value='0'>F</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='credit-3'>
                                Credits
                            </label>
                            <input
                                className='border border-gray-200 rounded p-1 ml-2'
                                type='number'
                                id='credit-3'
                                onChange={(e) => setCred_3(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 bg-rose-50 p-2 pb-4'>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='subject-4'>
                                Subject
                            </label>
                            <input className='border border-gray-200 rounded p-1 ml-2' type='text' id='subject-4' />
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='grade-4'>
                                Grade
                            </label>
                            <select
                                onChange={(e) => setGrad_4(e.target.value)}
                                className='border border-gray-200 bg-slate-50 p-[.45rem] rounded text-sm'>
                                <option value='Select Department'>Select Grade</option>
                                <option value='4'>A+</option>
                                <option value='3.95'>A</option>
                                <option value='3.75'>A-</option>
                                <option value='3.25'>B+</option>
                                <option value='3'>B</option>
                                <option value='2.75'>B-</option>
                                <option value='2.25'>C+</option>
                                <option value='2'>C</option>
                                <option value='1.75'>C-</option>
                                <option value='1.5'>D+</option>
                                <option value='1'>D</option>
                                <option value='0'>F</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <label className='text-xs p-2' htmlFor='credit-4'>
                                Credits
                            </label>
                            <input
                                className='border border-gray-200 rounded p-1 ml-2'
                                type='number'
                                id='credit-4'
                                onChange={(e) => setCred_4(e.target.value)}
                            />
                        </div>
                    </div>
                </section>
                {average && (
                    <section className='container mx-auto mt-4'>
                        <div className='p-4 flex flex-wrap flex-col justify-center items-center'>
                            <p className='uppercase p-2'>Your semester GPA is </p>
                            <p className='font-bold p-4 text-xl rounded-full bg-green-500 text-slate-50 border-5 border-green-200'>
                                {average.toFixed(2)}
                            </p>
                        </div>
                    </section>
                )}
            </main>
            <footer className='bg-rose-500 text-slate-50'>
                <div className='container mx-auto p-2'>All rights not reserved.</div>
            </footer>
        </>
    );
};

export default App;
