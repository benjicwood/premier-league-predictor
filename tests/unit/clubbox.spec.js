import { mount, createLocalView } from '@vue/test-utils'
import Vuex from 'vuex'

import ClubBox from '@/components/League.vue'

const localVue = createLocalView()

localVue.use(Vuex)

describe('ClubBox.vue', () => {
  let store


  beforeEach(() => {
    store = new Vuex.Store()
  })


  it('exists', () => {
    const wrapper = mount(ClubBox)
    expect(wrapper.exists()).toBe(true)
  })
})
