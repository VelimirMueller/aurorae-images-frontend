import { beforeEach, describe, expect, it } from 'vitest'
import AccessibleIcon from '@/components/AccessibleIcon.vue'
import { shallowMount } from '@vue/test-utils'

describe('AccessibleIcon.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(AccessibleIcon, {
      props: {
        icon: 'book'
      }
    })
  })

  it('Icon has an aria-hidden=true attribute.', () => {
    expect(wrapper.attributes()['aria-hidden'] === 'true').toBe(true)
  })

  it('Setting icon size works correctly.', async () => {
    wrapper.setProps({
      icon: 'book',
      size:[32, 32]
    })
    await wrapper.vm.$nextTick()
    
    expect(wrapper.attributes().width === wrapper.vm.size[0] + 'px').toBe(true)
    expect(wrapper.attributes().height === wrapper.vm.size[1] + 'px').toBe(true)
  })
})
