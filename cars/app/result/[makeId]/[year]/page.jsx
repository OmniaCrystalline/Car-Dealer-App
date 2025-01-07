import Link from 'next/link'
import React, { Suspense } from 'react'

export async function generateStaticParams() {
    const data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').then((res) => res.json())
    return data.Results.map((e) => ({
        makeId: e.makeId,
    }))
}

const Result = async ({ params }) => {
    const { year, makeId } = await params
    const data = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    const jdata = await data.json()

    return (<div className='p-10 '>
        <Suspense fallback={<div>Loading...</div>}>
            <Link href='/' className='block mb-2'> ⇦ home page</Link>
            <h1 className='text-xl bg-neutral-500 py-1 px-5 mb-2 text-center text-white'>{jdata.SearchCriteria}</h1>
            <ul className='grid gap-2 md:grid-cols-3'>{jdata.Results.map((e) => <li className=' bg-neutral-100 p-2 text-center' id=''> {e.Model_Name}</li>)}</ul>
        </Suspense></div>)
}

export default Result