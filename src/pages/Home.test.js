import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home loads...',()=>{
    it('displays three NavLinks', ()=>{
        const headerWrapper = shallow(<Home/>)

        const navLinkWrapper = headerWrapper.find("NavLink")

        expect(navLinkWrapper.length).toEqual(3)
    })
//     it('provides a link to the local ASPCA',()=>{
//         const headerWrapper = shallow(<Home/>)
//         const aTagWrapper = headerWrapper.find('[id="aspca"]')
//         console.log(aTagWrapper.debug())
//         expect(aTagWrapper.length).toEqual(1)
//     })
})