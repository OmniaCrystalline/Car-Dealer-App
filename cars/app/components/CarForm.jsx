'use client'
import React, { use, useState } from 'react'
import Form from 'next/form'
import Link from 'next/link'


const CarForm = ({ makers }) => {
    const [year, setyear] = useState('')
    const [makeid, setmakeid] = useState('')
    const m = use(makers)
    const y = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    const handle = (e) => {
        if (e.target.name === 'makeId') setmakeid(e.target.value)
        if (e.target.name === 'year') setyear(e.target.value)
    }

    const notSelected = year === '' || makeid === ''
    return (<div className='grid md:flex gap-3'>
        <Form onChange={handle} className='grid md:flex gap-3 w-full' >
            <select name='makeId' required className='w-full px-4 py-1'>
                <option value=''>select maker</option>
                {m.Results.map((d) => <option value={d.MakeId} key={d.MakeId}>{d.MakeName}</option>)}
            </select>
            <select name='year' required className='w-full px-4 py-1'>                <option value=''>select year</option>
                {y.map((e, i) => <option value={e} key={i}>{e}</option>)}</select>
        </Form>
        {notSelected ? <button className='border px-4 py-1 rounded hover:after:bg-red-100' disabled>next</button> : <Link className='border px-4 py-1 rounded hover:bg-neutral-100' href={`result/${makeid}/${year}`}>next</Link>}
    </div>
    )
}

export default CarForm