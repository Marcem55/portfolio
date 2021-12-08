import React, { useEffect, useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss';
import { languages, frontEnd, backEnd, dataBase, controlVersion } from '../../data';

export default function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])
    const list = [
        {
            id: 'languages',
            title: 'Lenguajes'
        },
        {
            id: 'front-end',
            title: 'Front-end'
        },
        {
            id: 'back-end',
            title: 'Back-end'
        },
        {
            id: 'data-base',
            title: 'Base de datos'
        },
        {
            id: 'control-version',
            title: 'Control de versiones'
        }
    ]

    useEffect(() => {
        switch(selected){
            case 'languages':
                setData(languages)
                break
            case 'front-end':
                setData(frontEnd)
                break
            case 'back-end':
                setData(backEnd)
                break
            case 'data-base':
                setData(dataBase)
                break
            case 'control-version':
                setData(controlVersion)
                break
            default:
                setData(languages)
        }
    }, [selected])

    return (
        <div className='portfolio' id='tech'>
            <h1>Tecnologías</h1>
            <ul>
                {list.map(item => {
                    return <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                })}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div key={d.id} className="item">
                        <img src={d.img} alt={d.title}/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
