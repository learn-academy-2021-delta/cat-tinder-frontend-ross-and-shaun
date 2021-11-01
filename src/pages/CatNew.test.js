import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew renders", () => {
  it("displays a form", () => {
    const catNew = shallow(<CatNew />)
    const newHeading = catNew.find("h3")
    expect(newHeading.text()).toEqual("Add a new ThunderCat")
  })
})