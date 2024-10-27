"use client"
import React from 'react';

const Salah = () => {
    const handleSubmit = async (e) => {
        // e.preventDefault();

        const name = e.target.name.value;
        console.log(name);

        // const formData = new FormData(event.target);
        // const data = Object.fromEntries(formData.entries());
        // console.log(formData);

        // try {
        //     const response = await fetch('http://localhost:3000/profile/api', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const result = await response.json();
        //     console.log(result);
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={() => handleSubmit()} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name of Salah" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Time</span>
                            </label>
                            <input type="text" name='time' placeholder="Morning" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input type="text" name='status' placeholder="Prayed" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-600">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Salah;