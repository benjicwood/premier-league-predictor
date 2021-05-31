import { mount } from '@vue/test-utils'
import Fixtures from '@/components/Fixtures'

describe('Fixtures', () => {
    it('exists', () => {
        const wrapper = mount(Fixtures)
        expect(wrapper.exists()).toBe(true)
    })
})