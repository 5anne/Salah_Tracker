import Link from 'next/link';
import React from 'react';

const getList = async () => {
    const res = await fetch('http://localhost:3000/profile/api');
    const data = await res.json();
    return data;
}

const Profile = async () => {
    const salahData = await getList();
    // console.log(salahData.listOFSalah);
    return (
        <div className='border-2 border-amber-700 p-10 m-24'>
            <h6 className='text-center font-bold text-amber-600 text-3xl mb-8 font-serif'>Checklist</h6>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            salahData.listOFSalah?.map(data =>
                                <tr key={data.id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>{data.name}</td>
                                    <td>{data.time}</td>
                                    <td>{data.status}</td>
                                    <td><button className='btn'>Edit</button></td>
                                    <td><button className='btn'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='flex justify-center mt-4'>
                    <Link href='/addSalah'><button className='btn bg-amber-600 font-bold'>Add Salah</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;