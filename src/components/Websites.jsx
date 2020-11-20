import React from 'react';
import Boxes from './Boxes';

import taxfactor from '../images/taxfactor.png'
import u4c from '../images/u4c.png'
import osga from '../images/osga.png'
import cube from '../images/cube.png'
import meadanhomes from '../images/meadanhomes.png'
import intelligentss from '../images/intelligentss.png'
import elco from '../images/elco.jpg'
import goldenfalafel from '../images/goldenfalafel.png'
import microfocus from '../images/microfocus.png'

class Websites extends React.Component{
    render(){
        return(
            <div className='Websites'>
                <h3>Websites</h3>
                <div className='flex_row'>
                    <Boxes className='boxes' image={taxfactor} source='https://thetaxfactor.com.au/' />
                    <Boxes className='black boxes' image={u4c} source='http://u4cmartialarts.com.au/' />
                    <Boxes className='boxes' image={osga} source='https://osga.com.au' />
                    <Boxes className='black boxes' image={cube} source='http://cube4security.com.au/' />
                    <Boxes className='boxes' image={meadanhomes} source='https://www.meadanhomes.com.au/' />
                    <Boxes className='boxes' image={intelligentss} source='http://intelligentss.com.au/' />
                    <Boxes className='boxes' image={elco} source='https://elcoconstructions.com.au/' />
                    <Boxes className='boxes' image={goldenfalafel} source='http://goldenfalafel.com.au/' />
                    <Boxes className='black boxes' image={microfocus} source='https://microfocusgroup.com.au/' />
                </div>
            </div>
        )
    }
}

export default Websites