import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When NotFound loads...',()=>{
    it('displays three NavLinks', ()=>{
        const headerWrapper = shallow(<NotFound/>)

        const navLinkWrapper = headerWrapper.find("NavLink")

        expect(navLinkWrapper.length).toEqual(3)
    })
})